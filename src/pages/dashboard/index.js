import React, { useEffect, useState } from "react";
import Table from "@/components/Table";
import { getDashboardData } from "@/components/utils/store";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
import {STATE_NAME} from '../../components/utils/mockData'

const headers = [
  {
    label: "First Name",
    key: "firstName",
  },
  {
    label: "Last Name",
    key: "lastName",
  },
  {
    label: "Email",
    key: "email",
  },
  {
    label: "Phone",
    key: "phone",
  },
  {
    label: "Address",
    key: "address",
  },
  {
    label: "City",
    key: "city",
  },
  {
    label: "State",
    key: "state",
  },
  {
    label: "Coupon Code",
    key: "couponCode",
  },
  {
    label: "Created At",
    key: "createdAt",
  },
];

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [pagination, setPagination] = useState({
    page: 0,
    pageSize: 10,
  });
  const [selectedState, setSelectedState] = useState("");

  const fetchDashboardData = async (page, pageSize, state) => {
    setLoading(true);
    try {
      const [response, error] = await getDashboardData({ page, pageSize, state });
      if (error) {
        console.error("Error fetching data:", error);
        return;
      }
      setData(response.data);
      setTotalCount(response.totalCount || response.data.length);
    } catch (error) {
      console.error("Error in fetchDashboardData:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setPagination(prev => ({ ...prev, page: newPage }));
  };

  const handlePageSizeChange = (newPageSize) => {
    setPagination(prev => ({ ...prev, pageSize: newPageSize, page: 0 }));
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setPagination(prev => ({ ...prev, page: 0 }));
  };

  useEffect(() => {
    fetchDashboardData(pagination.page, pagination.pageSize, selectedState);
  }, [pagination.page, pagination.pageSize, selectedState]);


  return (
    <div>
      <Box sx={{ mb: 2 }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="state-filter-label">Filter by State</InputLabel>
          <Select
            labelId="state-filter-label"
            value={selectedState}
            label="Filter by State"
            onChange={handleStateChange}
          >
            <MenuItem value="">All States</MenuItem>
            {STATE_NAME.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Table 
        headers={headers} 
        data={data} 
        loading={loading}
        pagination={{
          page: pagination.page,
          pageSize: pagination.pageSize,
          totalCount,
          onPageChange: handlePageChange,
          onPageSizeChange: handlePageSizeChange
        }}
      />
    </div>
  );
};

export default Dashboard;
