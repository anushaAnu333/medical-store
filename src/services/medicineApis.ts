// Medicine/Drug APIs for Medical Store Application

/**
 * 1. OpenFDA API
 * Free, open-source API from the U.S. Food and Drug Administration
 * Provides access to drug labels, adverse events, recalls, and more
 * Documentation: https://open.fda.gov/apis/
 */

// Example: Search for drug information
export async function searchOpenFDA(drugName: string) {
  try {
    const response = await fetch(
      `https://api.fda.gov/drug/label.json?search=openfda.brand_name:"${drugName}"&limit=10`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("OpenFDA API error:", error);
    return [];
  }
}

/**
 * 2. NLM RxNorm API
 * Free API from the National Library of Medicine
 * Provides normalized names for clinical drugs
 * Documentation: https://lhncbc.nlm.nih.gov/RxNav/APIs/RxNormAPIs.html
 */

export async function getRxNormData(rxcui: string) {
  try {
    const response = await fetch(
      `https://rxnav.nlm.nih.gov/REST/rxcui/${rxcui}/properties.json`
    );
    const data = await response.json();
    return data.properties;
  } catch (error) {
    console.error("RxNorm API error:", error);
    return null;
  }
}

/**
 * 3. DailyMed API
 * Provides FDA package insert information
 * Documentation: https://dailymed.nlm.nih.gov/dailymed/app-support-web-services.cfm
 */

export async function searchDailyMed(drugName: string) {
  try {
    const response = await fetch(
      `https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=${drugName}`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("DailyMed API error:", error);
    return [];
  }
}

/**
 * 4. DrugBank API (Requires API Key)
 * Comprehensive drug database with detailed information
 * Pricing: Free tier available, paid plans for more features
 * Documentation: https://docs.drugbank.com/
 */

export async function searchDrugBank(drugName: string, apiKey: string) {
  try {
    const response = await fetch(
      `https://api.drugbank.com/v1/drugs?q=${drugName}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("DrugBank API error:", error);
    return [];
  }
}

/**
 * 5. WHO Essential Medicines API
 * World Health Organization's essential medicines list
 * Free to use
 */

export async function getWHOEssentialMedicines() {
  // Note: WHO doesn't have a direct API, but you can use their data
  // This is a mock example - you'd need to implement actual data source
  try {
    // Implementation would depend on how you access WHO data
    return [];
  } catch (error) {
    console.error("WHO data error:", error);
    return [];
  }
}

/**
 * 6. PubChem API
 * Chemical and drug compound information
 * Free API from NIH
 * Documentation: https://pubchemdocs.ncbi.nlm.nih.gov/pug-rest
 */

export async function searchPubChem(compound: string) {
  try {
    const response = await fetch(
      `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${compound}/property/MolecularFormula,MolecularWeight/JSON`
    );
    const data = await response.json();
    return data.PropertyTable.Properties;
  } catch (error) {
    console.error("PubChem API error:", error);
    return [];
  }
}

/**
 * 7. GoodRx API (Requires Partnership)
 * Provides drug pricing information
 * Requires business partnership
 * Documentation: https://www.goodrx.com/developer
 */

// Example structure for medicine data
export interface MedicineData {
  id: string;
  name: string;
  genericName?: string;
  brandName?: string;
  manufacturer?: string;
  dosage?: string;
  form?: string;
  strength?: string;
  indications?: string[];
  contraindications?: string[];
  sideEffects?: string[];
  warnings?: string[];
  price?: number;
  imageUrl?: string;
}

// Utility function to combine data from multiple sources
export async function getMedicineInfo(
  drugName: string
): Promise<MedicineData | null> {
  try {
    // Fetch from multiple sources
    const [fdaData, dailyMedData] = await Promise.all([
      searchOpenFDA(drugName),
      searchDailyMed(drugName),
    ]);

    // Combine and format the data
    if (fdaData.length > 0) {
      const drug = fdaData[0];
      return {
        id: drug.id || "",
        name: drug.openfda?.brand_name?.[0] || drugName,
        genericName: drug.openfda?.generic_name?.[0],
        brandName: drug.openfda?.brand_name?.[0],
        manufacturer: drug.openfda?.manufacturer_name?.[0],
        dosage: drug.dosage_and_administration?.[0],
        indications: drug.indications_and_usage,
        contraindications: drug.contraindications,
        warnings: drug.warnings,
        sideEffects: drug.adverse_reactions,
      };
    }

    return null;
  } catch (error) {
    console.error("Error fetching medicine info:", error);
    return null;
  }
}
