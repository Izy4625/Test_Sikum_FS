import { MapContainer } from 'react-leaflet'
import { TileLayer } from 'react-leaflet'
import { useMap } from 'react-leaflet'
import {Marker} from 'react-leaflet'
import { Popup } from 'react-leaflet'
import styles from "./MapStatsCompo.module.css"
import "leaflet/dist/leaflet.css"
import './styles.css'
import {useState} from "react"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
interface region{
    name: string,
    casualties: number,
    incidents: number,
    lat: number,
    long: number
    ave: number
}


const MapStatsCompo = () => {
    const [cordinates, setCordinates] = useState<number[]>([])
  const [query, setQuery] = useState('')
  const regions : region[]= [
{    name: "France",
    casualties: 100,
    incidents: 50,
    lat: 46.2276,
    long: 2.2137,
    ave: 2},
    {    name: "UK",
        casualties: 200,
        incidents: 50,
        lat: 52.3555,
        long: 1.1743,
        ave: 4},

  ]
  const cord: number[]= [46.2276,2.2137]
  
    const handleChange = (event: SelectChangeEvent) => {
        setQuery(event.target.value as string);
        setCordinates((cordinates)=>[...cordinates,cord])
      };
  return (
   

<div>
    <Box sx={{m: 1, minWidth: 160} }>
    <FormControl size="medium">
        <InputLabel id="demo-simple-select-label">Query</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={query}
          label="Query"
          onChange={handleChange}
        >
          <MenuItem value={0}>Get Regions With MOst Average Casualties per incidents</MenuItem>
          <MenuItem value={1}>Top 5 Terror Oganazations in Region</MenuItem>
          <MenuItem value={2}>Top Groups That caused the most casualties in a Region</MenuItem>
        </Select>
      </FormControl>
    </Box>
     <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer  
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </div>
  )
}

export default MapStatsCompo