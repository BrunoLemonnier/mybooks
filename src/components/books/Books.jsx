import React from "react";
import { nanoid } from "nanoid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import EnhancedTable from "../shared/EnhancedTable";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";

const booksSectionHeader = "Mes livres";

function createRowData(
  name,
  usedBy,
  location,
  softwareVersion,
  dataCollectionNb
) {
  const dataCollection = `${dataCollectionNb} données téléchargées`;
  return {
    id: nanoid(),
    name,
    usedBy,
    location,
    softwareVersion,
    dataCollection,
  };
}

const rows = [
  createRowData("HoloLens 1", "Bruno Lemonnier", "Hangar 1", 3.7, 12),
  createRowData("HoloLens 2", "Disponible", "Hangar 1", 25.0, 12),
  createRowData("HoloLens 3", "Disponible", "Hangar 1", 16.0, 12),
  createRowData("HoloLens 4", "Disponible", "Hangar 1", 3.7, 6),
  createRowData("HoloLens 5", "Disponible", "Bureau 1", 25.0, 5),
  createRowData("HoloLens 6", "Jean-Michel Ennesser", "Bureau 1", 16.0, 12),
  createRowData("Tablette 1", "Bertrand Toutain", "Bureau 1", undefined, 12),
  createRowData("Tablette 2", "Disponible", "Bureau 1", undefined, 4),
  createRowData("Tablette 3", "Disponible", "Bureau 1", undefined, 1),
  createRowData("Tablette 4", "Disponible", "Hangar 1", undefined, 0),
  createRowData("Tablette 5", "Disponible", "Hangar 1", undefined, 0),
  createRowData("Tablette 6", "Disponible", "Hangar 1", undefined, 0),
];

const heads = [
  {
    id: "deviceMainAction",
    numeric: false,
    disablePadding: true,
    label: "",
  },
  { id: "deviceName", numeric: false, disablePadding: true, label: "Nom" },
  { id: "usedby", numeric: false, disablePadding: false, label: "Utilisé par" },
  {
    id: "location",
    numeric: false,
    disablePadding: false,
    label: "Localisation",
  },
  {
    id: "softwareVersion",
    numeric: false,
    disablePadding: false,
    label: "Version Logiciel",
  },
  {
    id: "dataCollection",
    numeric: false,
    disablePadding: false,
    label: "collections de données",
  },
];

function Books() {
  return (
    <section>
      <Typography variant="h1">{booksSectionHeader}</Typography>
      <Paper>
        <EnhancedTable
          heads={heads}
          rows={rows}
          RowsComponent={(labelId, data) => (
            <>
              <TableCell padding="none">
                <Button>{data.id}</Button>
              </TableCell>
              <TableCell component="th" id={labelId} scope="row">
                {data.name}
              </TableCell>
              <TableCell>{data.usedBy}</TableCell>
              <TableCell>{data.location}</TableCell>
              <TableCell>{data.softwareVersion}</TableCell>
              <TableCell>{data.dataCollection}</TableCell>
            </>
          )}
        />
      </Paper>
    </section>
  );
}

export default Books;
