import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import { useHistory } from "react-router";
import GithubIcon from "@mui/icons-material/GitHub"

interface LoginInterface {
  signup?: boolean;
  reset?: boolean
}

export default function Login({ signup, reset }: LoginInterface) {
  const { push } = useHistory();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    push(`/dashboard`)
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ textAlign: "center" }} >
        <div  >
          <Typography>Gis.ke API</Typography>
          <Typography sx={{ my: 2 }} variant="h4" >
            {signup ? "Create Account" : "Login"}
          </Typography>
        </div>
        <form onSubmit={handleSubmit}>
          <Stack sx={{ minWidth: 400 }} spacing={1} >
            <TextField
              required
              label="Email Address"
              placeholder="Enter email address"
              type="text"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon />
                  </InputAdornment>
                ),
              }}
            />
            {!Boolean(reset) && (
              <TextField
                required
                label="Password"
                placeholder="Create a Password"
                type="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}



            {Boolean(signup) && (
              <TextField
                required
                label="Confirm Password"
                placeholder="Confirm Password"
                type="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
            <Button color="secondary" disableElevation fullWidth variant="contained" type="submit" sx={{ marginTop: "10px" }}>
              {signup ? "Signup" : reset ? "Send Reset Link" : "Login"}
            </Button>
          </Stack>

          <Box sx={{ textAlign: "center", my: 2 }} >
            OR
          </Box>
          <Button color="secondary" type="button" disableElevation startIcon={<GithubIcon />} fullWidth variant="contained" sx={{ marginTop: "10px" }}>
            {signup ? "Signup" : "Login"} With Github
          </Button>
        </form>
        <Box sx={{ width: "100%", my: 2, display: "flex", justifyContent: "space-between" }} >
          <Box>
            <Link onClick={() => push(`${signup ? "/Auth" : "/Auth/Signup"}`)}  >{signup ? "Sign in instead" : "Create Account"}</Link>
          </Box>
          <Box>
            <Link onClick={() => push("/Auth/Reset_Pass")} >{reset ? "Sign in" : "Forgot Password"}</Link>
          </Box>
        </Box>
      </Box>


    </div>
  );
}
