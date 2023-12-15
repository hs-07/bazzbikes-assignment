import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const index = () => {
  return (
    <div className="border rounded-lg border-gray-900 w-fit m-2">
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Battery ID"
        inputProps={{ "aria-label": "search battery ID" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default index;
