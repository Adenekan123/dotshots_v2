import { useContext } from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  TextField,
  IconButton,
  Stack,
} from "@mui/material";

import { RefreshOutlined } from "@mui/icons-material";
import ColorPicker from "../color-picker/color-picker.component.jsx";
import "./styles.css";

import { FilterContext } from "../../contexts/filter.context.jsx";

const Filter = () => {
  const { filter, onFilterChange, resetFilter } = useContext(FilterContext);
  const { color, size, orientation, per_page } = filter;

  return (
    <Container
      maxWidth="100%"
      sx={{
        height: "100%",
        pt: { xs: 2, md: 2 },
        paddingLeft: "0px!important",
        paddingRight: "0px!important",
        position: "relative",
      }}>
      <Stack direction="row" justifyContent={"space-between"}>
        <Typography variant="h5" gutterBottom>
          Filter
        </Typography>
        {Object.keys(filter).some((ft) => filter[ft].length > 0) && (
          <IconButton onClick={() => resetFilter()}>
            <RefreshOutlined color="info" />
          </IconButton>
        )}
      </Stack>
      <Box>
        <FormControl
          sx={{
            width: "100%",
            backgroundColor: "background.tertiary",
            mt: 1,
          }}
          size="small"
          variant="filled">
          <InputLabel id="select-orientation">Orientation</InputLabel>
          <Select
            labelId="select-orientation"
            id="select-orientation"
            name="orientation"
            value={orientation}
            label="Size"
            onChange={onFilterChange}
            variant="filled">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="orientaion">Orientaion</MenuItem>
            <MenuItem value="landscape">Landscape</MenuItem>
            <MenuItem value="portrait">Portrait</MenuItem>
            <MenuItem value="square">Square</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{
            width: "100%",
            backgroundColor: "background.tertiary",
            mt: 1,
          }}
          size="small"
          variant="filled">
          <InputLabel id="select-size">Size</InputLabel>
          <Select
            labelId="select-size"
            id="select-size"
            value={size}
            name="size"
            label="Size"
            onChange={onFilterChange}
            variant="filled">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="large">Large</MenuItem>
            <MenuItem value="small">Small</MenuItem>
          </Select>
        </FormControl>
        <Card sx={{ backgroundColor: "background.tertiary", mt: 1 }}>
          <CardContent sx={{ paddingBottom: "10px!important", p: 1 }}>
            <Typography
              sx={{ fontSize: "14px" }}
              fontWeight="bold"
              marginBottom="10px">
              Color
            </Typography>
            <ColorPicker color={color} handleColorChange={onFilterChange} />
          </CardContent>
        </Card>
        <TextField
          id="filled-basic"
          label="Items Per Page"
          type="number"
          name="per_page"
          variant="filled"
          value={per_page}
          sx={{ backgroundColor: "background.tertiary", width: "100%", mt: 1 }}
          onChange={onFilterChange}
        />
      </Box>
    </Container>
  );
};

export default Filter;
