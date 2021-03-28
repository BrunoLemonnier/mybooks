import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/icons/Menu";

const useStyles = makeStyles({});

const userName = "Bruno Lemonnier"

export default function Header(props) {
  const classes = useStyles();

  const { title } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          <Button color="transparent" href="#" className={classes.title}>
            <Typography>{title}</Typography>
          </Button>
        </div>
        <Hidden smDown implementation="css">
          <Navbar />
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleMobileMenuToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  handleMobileMenuToggle: PropTypes.func,
};

export function Navbar() {
    return <Avatar alt={userName} src={"use fallback icon with alt attribut value"}>BL</Avatar>
}
