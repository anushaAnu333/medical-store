# Medicine APIs Documentation

This document provides information about various APIs available for retrieving medicine and pharmaceutical data.

## Available APIs

### 1. OpenFDA API

**URL**: https://open.fda.gov/apis/  
**Cost**: Free  
**Authentication**: No API key required (but rate limited)

**Features**:

- Drug labels and packaging information
- Adverse event reports
- Drug recalls
- Manufacturing defects

**Example Endpoints**:

```
GET https://api.fda.gov/drug/label.json?search=openfda.brand_name:"aspirin"
GET https://api.fda.gov/drug/event.json?search=patient.drug.medicinalproduct:"aspirin"
```

### 2. NLM RxNorm API

**URL**: https://lhncbc.nlm.nih.gov/RxNav/APIs/RxNormAPIs.html  
**Cost**: Free  
**Authentication**: No API key required

**Features**:

- Normalized drug names
- Drug interactions
- Drug classes
- NDC (National Drug Code) mapping

**Example Endpoints**:

```
GET https://rxnav.nlm.nih.gov/REST/rxcui.json?name=aspirin
GET https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=36567
```

### 3. DailyMed API

**URL**: https://dailymed.nlm.nih.gov/dailymed/app-support-web-services.cfm  
**Cost**: Free  
**Authentication**: No API key required

**Features**:

- FDA-approved drug labels
- Structured product labeling (SPL) documents
- Package inserts
- Medication guides

**Example Endpoints**:

```
GET https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=aspirin
```

### 4. DrugBank API

**URL**: https://docs.drugbank.com/  
**Cost**: Free tier available, paid plans for advanced features  
**Authentication**: API key required

**Features**:

- Comprehensive drug information
- Chemical structures
- Drug-drug interactions
- Pharmacology data
- Clinical trial information

**Example Usage**:

```javascript
const headers = {
  Authorization: "Bearer YOUR_API_KEY",
  "Content-Type": "application/json",
};

fetch("https://api.drugbank.com/v1/drugs?q=aspirin", { headers });
```

### 5. PubChem API

**URL**: https://pubchemdocs.ncbi.nlm.nih.gov/pug-rest  
**Cost**: Free  
**Authentication**: No API key required

**Features**:

- Chemical compound information
- Molecular structures
- Bioassay data
- Chemical properties

**Example Endpoints**:

```
GET https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/aspirin/JSON
GET https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/aspirin/property/MolecularFormula,MolecularWeight/JSON
```

### 6. WHO Essential Medicines

**Note**: WHO doesn't provide a direct API, but their data can be accessed through:

- PDF downloads from their website
- Third-party APIs that aggregate WHO data
- Web scraping (check terms of service)

### 7. GoodRx API

**URL**: https://www.goodrx.com/developer  
**Cost**: Requires business partnership  
**Authentication**: API credentials required

**Features**:

- Drug pricing information
- Pharmacy locations
- Discount coupons
- Price comparisons

## Implementation Tips

### Rate Limiting

Most free APIs have rate limits:

- OpenFDA: 1000 requests per day without key, 120,000 with key
- RxNorm: No official limit but be respectful
- DailyMed: No official limit

### Caching Strategy

Implement caching to reduce API calls:

```javascript
const cache = new Map();
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

async function getCachedData(key, fetchFunction) {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  const data = await fetchFunction();
  cache.set(key, { data, timestamp: Date.now() });
  return data;
}
```

### Error Handling

Always implement proper error handling:

```javascript
async function fetchMedicineData(medicineName) {
  try {
    const response = await fetch(`API_URL/${medicineName}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    // Implement fallback logic
    return null;
  }
}
```

### Data Normalization

Different APIs return data in different formats. Create a normalized structure:

```typescript
interface NormalizedDrug {
  id: string;
  name: string;
  genericName: string;
  brandNames: string[];
  manufacturer: string;
  description: string;
  warnings: string[];
  interactions: string[];
  dosageForms: string[];
  activeIngredients: string[];
}
```

## Regional APIs

### India

- **CDSCO**: Central Drugs Standard Control Organization
- **Jan Aushadhi**: Generic medicine database

### Europe

- **EMA (European Medicines Agency)**: https://www.ema.europa.eu/
- Provides medicine information for EU countries

### UK

- **MHRA**: Medicines and Healthcare products Regulatory Agency
- **BNF (British National Formulary)**: Requires subscription

### Canada

- **Health Canada Drug Product Database**: https://www.canada.ca/en/health-canada/services/drugs-health-products/drug-products/drug-product-database.html

## Best Practices

1. **Always check the API's terms of service**
2. **Implement proper attribution when required**
3. **Use HTTPS for all API calls**
4. **Store API keys securely (use environment variables)**
5. **Implement retry logic for failed requests**
6. **Monitor your API usage to avoid hitting limits**
7. **Consider using multiple APIs for comprehensive data**

## Example Integration

See `src/services/medicineApis.ts` for implementation examples and `src/components/MedicineSearch.tsx` for a working search component.
