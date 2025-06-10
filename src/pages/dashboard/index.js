import React, { useEffect, useState } from "react";
import Table from "@/components/Table";
import { getDashboardData } from "@/components/utils/store";
import { STATE_NAME } from "../../components/utils/mockData";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { changeLoggedInUser } from "@/components/utils/loggedInUserSlice";
import { useHydration } from "@/components/hooks/useHydration";

const headers = [
  { label: "First Name", key: "firstName" },
  { label: "Last Name", key: "lastName" },
  { label: "Email", key: "email" },
  { label: "Phone", key: "phone" },
  { label: "Address", key: "address" },
  { label: "City", key: "city" },
  { label: "State", key: "state" },
  { label: "Country", key: "country" },
  { label: "Coupon Code", key: "couponCode" },
  { label: "Created At", key: "createdAt" },
];

const Dashboard = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedInUser);

  useEffect(() => {
    if (!isUserLoggedIn) {
      router.push("/dashboardlogin");
    }
  }, [isUserLoggedIn, router]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [pagination, setPagination] = useState({ page: 0, pageSize: 25 });
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const handleLogout = () => {
    dispatch(changeLoggedInUser(false));
    localStorage.removeItem("isLoggedInUser");
    router.push("/dashboardlogin");
  };

  const fetchDashboardData = async (page, pageSize, state, city, from, to) => {
    setLoading(true);
    try {
      const [response, error] = await getDashboardData({
        page: page + 1,
        limit: pageSize,
        state,
        city,
        from,
        to,
      });

      if (error) {
        console.error("Error fetching data:", error);
        return;
      }

      let filteredData = response.data;

      if (city) {
        filteredData = filteredData.filter((item) =>
          item?.city?.toLowerCase()?.includes(city.toLowerCase())
        );
      }

      if (from && to) {
        filteredData = filteredData.filter((item) => {
          const itemDate = new Date(item?.createdAt);
          const fromDate = new Date(from);
          const toDate = new Date(to);
          return itemDate >= fromDate && itemDate <= toDate;
        });
      }

      // setData(filteredData);
      setData(
        filteredData.map((item) => ({
          ...item,
          createdAt: new Date(item.createdAt).toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
          }),
        }))
      );
      setTotalCount(response.pagination.total); // ✅ Correct line
    } catch (error) {
      console.error("Error in fetchDashboardData:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setPagination((prev) => ({ ...prev, page: newPage }));
  };

  const handlePageSizeChange = (newPageSize) => {
    setPagination((prev) => ({ ...prev, pageSize: newPageSize, page: 0 }));
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleCityInputChange = (e) => {
    setCityInput(e.target.value);
  };

  const handleDateFromChange = (e) => {
    setDateFrom(e.target.value);
  };

  const handleDateToChange = (e) => {
    setDateTo(e.target.value);
  };

  const handleFilterClick = () => {
    setSelectedCity(cityInput);
    setPagination((prev) => ({ ...prev, page: 0 }));
  };

  const handleDownloadExcel = async () => {
    try {
      const [response, error] = await getDashboardData({
        page: 1,
        limit: 100000, // 🔥 A large number to ensure all data is fetched
        state: selectedState,
        city: selectedCity,
        from: dateFrom,
        to: dateTo,
      });

      if (error) {
        console.error("Error fetching data for Excel:", error);
        return;
      }

      let fullData = response.data;
      fullData = fullData.map((item) => ({
        ...item,
        createdAt: new Date(item.createdAt).toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
        }),
      }));

      // Apply city filter again (if any)
      if (selectedCity) {
        fullData = fullData.filter((item) =>
          item?.city?.toLowerCase()?.includes(selectedCity.toLowerCase())
        );
      }

      // Apply date filter again (if any)
      if (dateFrom && dateTo) {
        fullData = fullData.filter((item) => {
          const itemDate = new Date(item?.createdAt);
          const fromDate = new Date(dateFrom);
          const toDate = new Date(dateTo);
          return itemDate >= fromDate && itemDate <= toDate;
        });
      }

      // Export to Excel
      const worksheet = XLSX.utils.json_to_sheet(fullData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "AllData");
  const handleDownloadExcel = async () => {
    try {
      const [response, error] = await getDashboardData({
        page: 1,
        limit: 100000, // 🔥 A large number to ensure all data is fetched
        state: selectedState,
        city: selectedCity,
        from: dateFrom,
        to: dateTo,
      });

      if (error) {
        console.error("Error fetching data for Excel:", error);
        return;
      }

      let fullData = response.data;
      fullData = fullData.map((item) => ({
        ...item,
        createdAt: new Date(item.createdAt).toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
        }),
      }));

      // Apply city filter again (if any)
      if (selectedCity) {
        fullData = fullData.filter((item) =>
          item?.city?.toLowerCase()?.includes(selectedCity.toLowerCase())
        );
      }

      // Apply date filter again (if any)
      if (dateFrom && dateTo) {
        fullData = fullData.filter((item) => {
          const itemDate = new Date(item?.createdAt);
          const fromDate = new Date(dateFrom);
          const toDate = new Date(dateTo);
          return itemDate >= fromDate && itemDate <= toDate;
        });
      }

      // Export to Excel
      const worksheet = XLSX.utils.json_to_sheet(fullData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "AllData");

      const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });
      const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

      const blob = new Blob([excelBuffer], {
        type: "application/octet-stream",
      });
      const blob = new Blob([excelBuffer], {
        type: "application/octet-stream",
      });

      saveAs(blob, "All_Dashboard_Data.xlsx");
    } catch (err) {
      console.error("Error downloading full data:", err);
    }
      saveAs(blob, "All_Dashboard_Data.xlsx");
    } catch (err) {
      console.error("Error downloading full data:", err);
    }
  };

  useEffect(() => {
    fetchDashboardData(
      pagination.page,
      pagination.pageSize,
      selectedState,
      selectedCity,
      dateFrom,
      dateTo
    );
  }, [
    pagination.page,
    pagination.pageSize,
    selectedState,
    selectedCity,
    dateFrom,
    dateTo,
  ]);

  const hydrated = useHydration();
  if (!hydrated) return null; // or a loading spinner

  if (!isUserLoggedIn) return null;

  return (
    <div className="bg-black text-white p-4">
      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label htmlFor="state-select" className="block mb-1 font-semibold">
            Filter by State
          </label>
          <select
            id="state-select"
            value={selectedState}
            onChange={handleStateChange}
            className="w-48 px-3 py-2 border bg-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All States</option>
            {STATE_NAME.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="city-search" className="block mb-1 font-semibold">
            Search by City
          </label>
          <input
            id="city-search"
            type="text"
            placeholder="Enter city name"
            value={cityInput}
            onChange={handleCityInputChange}
            className="w-48 px-3 py-2 border text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-4">
          <div>
            <label htmlFor="date-from" className="block mb-1 font-semibold">
              From
            </label>
            <input
              id="date-from"
              type="date"
              value={dateFrom}
              onChange={handleDateFromChange}
              className="px-3 py-2 border text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="date-to" className="block mb-1 font-semibold">
              To
            </label>
            <input
              id="date-to"
              type="date"
              value={dateTo}
              onChange={handleDateToChange}
              className="px-3 py-2 border text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <Button
            onClick={handleFilterClick}
            className="px-4 py-2 mt-7 cursor-pointer bg-blue-600 text-white rounded-md"
            className="px-4 py-2 mt-7 cursor-pointer bg-blue-600 text-white rounded-md"
          >
            Filter
          </Button>
        </div>

        <div className=" right-5">
          <Button
            onClick={handleDownloadExcel}
            className="px-4 py-2 mt-7 cursor-pointer  bg-green-600 text-white rounded-md"
            className="px-4 py-2 mt-7 cursor-pointer  bg-green-600 text-white rounded-md"
          >
            Download Excel
          </Button>
        </div>
        <div className="ml-auto">
          <Button
            onClick={handleLogout}
            className="px-4 py-2 mt-7 cursor-pointer bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Logout
          </Button>
        </div>
      </div>

      <Table
        headers={headers}
        data={data}
        loading={loading}
        pagination={{
          page: pagination.page,
          pageSize: pagination.pageSize,
          totalCount,
          onPageChange: handlePageChange,
          onPageSizeChange: handlePageSizeChange,
        }}
      />
    </div>
  );
};

export default Dashboard;
