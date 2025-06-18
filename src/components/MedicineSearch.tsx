"use client";

import React, { useState } from "react";
import { Search, Loader, AlertCircle } from "lucide-react";
import {
  searchOpenFDA,
  getMedicineInfo,
  MedicineData,
} from "@/services/medicineApis";

const MedicineSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [medicineData, setMedicineData] = useState<MedicineData | null>(null);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsLoading(true);
    setError(null);
    setMedicineData(null);

    try {
      // Get detailed medicine information
      const detailedInfo = await getMedicineInfo(searchTerm);
      if (detailedInfo) {
        setMedicineData(detailedInfo);
      }

      // Also get raw FDA results for additional options
      const fdaResults = await searchOpenFDA(searchTerm);
      setSearchResults(fdaResults);
    } catch (err) {
      setError("Failed to fetch medicine information. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Medicine Information Search</h2>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for medicine (e.g., Aspirin, Amoxicillin)"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition disabled:opacity-50 flex items-center gap-2">
            {isLoading ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                Searching...
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
                Search
              </>
            )}
          </button>
        </div>
      </form>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          {error}
        </div>
      )}

      {/* Medicine Details */}
      {medicineData && (
        <div className="bg-white border rounded-lg shadow-sm p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">{medicineData.name}</h3>

          <div className="grid md:grid-cols-2 gap-4">
            {medicineData.genericName && (
              <div>
                <span className="font-medium text-gray-600">Generic Name:</span>
                <p className="mt-1">{medicineData.genericName}</p>
              </div>
            )}

            {medicineData.manufacturer && (
              <div>
                <span className="font-medium text-gray-600">Manufacturer:</span>
                <p className="mt-1">{medicineData.manufacturer}</p>
              </div>
            )}
          </div>

          {medicineData.indications && medicineData.indications.length > 0 && (
            <div className="mt-4">
              <h4 className="font-medium text-gray-600 mb-2">Indications:</h4>
              <p className="text-sm text-gray-700 whitespace-pre-line">
                {medicineData.indications[0]}
              </p>
            </div>
          )}

          {medicineData.warnings && medicineData.warnings.length > 0 && (
            <div className="mt-4">
              <h4 className="font-medium text-gray-600 mb-2">Warnings:</h4>
              <p className="text-sm text-gray-700 whitespace-pre-line">
                {medicineData.warnings[0]}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Additional Results */}
      {searchResults.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Additional Results from FDA Database:
          </h3>
          <div className="space-y-3">
            {searchResults.slice(0, 5).map((result, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium">
                  {result.openfda?.brand_name?.[0] || "Unknown Brand"}
                </h4>
                <p className="text-sm text-gray-600">
                  Generic: {result.openfda?.generic_name?.[0] || "N/A"}
                </p>
                <p className="text-sm text-gray-600">
                  Manufacturer:{" "}
                  {result.openfda?.manufacturer_name?.[0] || "N/A"}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* API Information */}
      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-3">Available Medicine APIs</h3>
        <ul className="space-y-2 text-sm">
          <li>
            • <strong>OpenFDA:</strong> Free API with drug labels, adverse
            events, recalls
          </li>
          <li>
            • <strong>RxNorm:</strong> Normalized drug names from National
            Library of Medicine
          </li>
          <li>
            • <strong>DailyMed:</strong> FDA package insert information
          </li>
          <li>
            • <strong>DrugBank:</strong> Comprehensive drug database (requires
            API key)
          </li>
          <li>
            • <strong>PubChem:</strong> Chemical compound information
          </li>
          <li>
            • <strong>WHO Essential Medicines:</strong> World Health
            Organization data
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MedicineSearch;
