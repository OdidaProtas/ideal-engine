import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import Divider from "@mui/material/Divider"
import DirectionsIcon from '@mui/icons-material/Directions';
import MapIcon from '@mui/icons-material/Map';
import AngularIcon from "@mui/icons-material/Web";
import ReactIcon from "@mui/icons-material/Code";
import AppSettingsAltTwoToneIcon from '@mui/icons-material/AppSettingsAltTwoTone';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StraightenIcon from '@mui/icons-material/Straighten';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import ApiIcon from '@mui/icons-material/Api';
import { useHistory } from "react-router";
import BillingIcon from "@mui/icons-material/Payment"
import PinIcon from "@mui/icons-material/PinDrop"

const NavOptions = [{ name: "APPS", Icon: AppSettingsAltTwoToneIcon, options: [{ name: "fictional-octo", icon: <ApiIcon /> }] }, { name: "Integrations", Icon: ReactIcon, options: [{ name: "React", icon: <IntegrationInstructionsIcon /> }, { name: "Angular", icon: <IntegrationInstructionsIcon /> }, { name: "Vue", icon: <IntegrationInstructionsIcon /> }, { name: "Svelte", icon: <IntegrationInstructionsIcon /> }, { name: "D3.js", icon: <IntegrationInstructionsIcon /> }, { name: "turfs.js", icon: <IntegrationInstructionsIcon /> }] }];

export default function Nav() {
  return (
    <List
      dense
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <NavItem options={[
        { name: "Counties", icon: <MapIcon /> },
        { name: "Constituencies", icon: <MapIcon /> },
        { name: "Subcounties", icon: <MapIcon /> },
        { name: "Wards", icon: <MapIcon /> },
        { name: "Features", icon: <LocationSearchingIcon /> },
        { name: "Areas", icon: <MapIcon /> },
        { name: "Distances", icon: <StraightenIcon /> },
        { name: "Tracking", icon: <DirectionsIcon /> }
      ]}
        Icon={ApiIcon}
        name={"API"} />
      {NavOptions.map((o: any, i: number) => (
        <NavItem Icon={o.Icon} options={o.options} name={o.name} key={i} />
      ))}
      <Divider />
      <NavItem options={[
      ]}
        Icon={BillingIcon}
        name={"Billing"} />
      <Divider />
      <NavItem options={[
        { name: "Add" },
        { name: "Explore" }
      ]}
        Icon={PinIcon}
        name={"Features"} />
    </List>
  );
}

const NavItem = ({ name, Icon, options }: any) => {
  const [open, setOpen] = React.useState(false);

  const { push } = useHistory();

  const handleClick = () => {
    if (options.length) {
      setOpen(!open);
      return;
    }
    push(`/dashboard/${name}`)
  };
  return (
    <>
      <ListItemButton selected={window.location.href.includes(name)} onClick={handleClick}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={name} />
        {Boolean(options.length) && (<>{open ? <ExpandLess /> : <ExpandMore />}</>)}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {name === "APPS" && (
            <ListItemButton
              selected={window.location.href.includes("new")}
              onClick={() => push(`/dashboard/APPS/new`)}
              sx={{ pl: 4 }}
            >
              <ListItemIcon>
                <AddCircleOutlineTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary={`Add New`} />
            </ListItemButton>
          )}

          {
            options?.map((e: any, idx: number) => (
              <ListItemButton
                selected={window.location.href.includes(e.name)}
                onClick={() => push(`/dashboard/${name}/${e.name}`)}
                key={idx}
                sx={{ pl: 4 }}
              >
                <ListItemIcon>
                  {e.icon}
                </ListItemIcon>
                <ListItemText primary={e.name} />
              </ListItemButton>
            ))
          }
        </List>
      </Collapse>
    </>
  );
};
