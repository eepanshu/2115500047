import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactSelect, { createFilter } from "react-select";
import ProductList from "../components/ProductList";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [companyOptions, setCompanyOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [filters, setFilters] = useState({
    company: "",
    category: "",
    top: null,
    minPrice: null,
    maxPrice: null,
  });

  useEffect(() => {
    const fetchOptions = async () => {
      const companyResponse = await axios.get(
        "http://localhost:3001/test/companies"
      );
      const categoryResponse = await axios.get(
        "http://localhost:3001/test/categories"
      );

      setCompanyOptions(
        companyResponse.data.map((company) => ({
          value: company,
          label: company,
        }))
      );
      setCategoryOptions(
        categoryResponse.data.map((category) => ({
          value: category,
          label: category,
        }))
      );
    };

    fetchOptions();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const { company, category, top, minPrice, maxPrice } = filters;
      if (company && category) {
        const response = await axios.get(
          `http://localhost:3001/test/companies/${company}/categories/${category}/products`,
          {
            params: { top, minPrice, maxPrice },
          }
        );
        setProducts(response.data);
      }
    };
    fetchProducts();
  }, [filters]);

  const handleFilterChange = (selectedOption, { name }) => {
    setFilters({
      ...filters,
      [name]: selectedOption ? selectedOption.value : "",
    });
  };

  const handleInputChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-6 flex flex-1 flex-col">
      <div className="w-full mb-4 flex flex-col md:flex-row gap-4">
        <ReactSelect
          name="company"
          options={companyOptions}
          onChange={handleFilterChange}
          placeholder="Select Company"
          isClearable
        />
        <ReactSelect
          name="category"
          options={categoryOptions}
          onChange={handleFilterChange}
          placeholder="Select Category"
          isClearable
        />
        <input
          type="number"
          name="top"
          value={filters.top}
          onChange={handleInputChange}
          placeholder="Top N Products"
          className="border border-gray-300 p-2 rounded-md"
        />
        <input
          type="number"
          name="minPrice"
          value={filters.minPrice}
          onChange={handleInputChange}
          placeholder="Min Price"
          className="border border-gray-300 p-2 rounded-md"
        />
        <input
          type="number"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleInputChange}
          placeholder="Max Price"
          className="border border-gray-300 p-2 rounded-md"
        />
      </div>
      {/* Render products here */}
    </div>
  );
};

export default AllProducts;
