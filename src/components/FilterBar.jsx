import React from 'react';
import { Box, FormControl, FormLabel, MenuItem, Select } from '@mui/material';

const FilterBar = () => {
  const planTypes = ['Base', 'Premium', 'Elite'];
  const coverages = ['₹ 5 Lac', '₹ 10 Lac', '₹ 15 Lac'];
  const insurers = ['IFFCO Tokio', 'Bharti AXA', 'Max Bupa'];
  const features = ['Hospital Cash', 'Critical Illness Cover', 'Accidental Death Benefit'];
  const tenures = ['1 Year', '3 Years', '5 Years'];
  const sortByOptions = ['Relevance', 'Price (Low to High)', 'Price (High to Low)'];

  return (
    <Box sx={{ mb:5, border: "solid #eeeeee", borderWidth: "1px 0", p: 2 }}>
      <span>Quick Filters</span>
      <FormControl sx={{ marginRight: 1 }}>
        <FormLabel>Plan type</FormLabel>
        <Select label="Plan type" value="" defaultValue="">
          {planTypes.map((planType) => (
            <MenuItem key={planType} value={planType}>
              {planType}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ marginRight: 1 }}>
        <FormLabel>Coverage</FormLabel>
        <Select label="Coverage" value="" defaultValue="">
          {coverages.map((coverage) => (
            <MenuItem key={coverage} value={coverage}>
              {coverage}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ marginRight: 1 }}>
        <FormLabel>Insurers</FormLabel>
        <Select label="Insurers" value="" defaultValue="">
          {insurers.map((insurer) => (
            <MenuItem key={insurer} value={insurer}>
              {insurer}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ marginRight: 1 }}>
        <FormLabel>Features</FormLabel>
        <Select label="Features" value="" defaultValue="">
          {features.map((feature) => (
            <MenuItem key={feature} value={feature}>
              {feature}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ marginRight: 1 }}>
        <FormLabel>Tenure</FormLabel>
        <Select label="Tenure" value="" defaultValue="">
          {tenures.map((tenure) => (
            <MenuItem key={tenure} value={tenure}>
              {tenure}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Sort By</FormLabel>
        <Select label="Sort By" value="" defaultValue="">
          {sortByOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterBar;
