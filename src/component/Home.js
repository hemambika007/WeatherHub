import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button, CircularProgress } from "@material-ui/core";
import Typed from "react-typed";
import Navbar from "./Navbar";
import img from "../images/sky.jpg";
import { fetchWeather, fetchLocation, fetchForecast } from "../actions";
import { connect, useDispatch } from "react-redux";
import img1 from "../images/night.jpg";
import img2 from "../images/wind.png";

const useStyles = makeStyles((theme) => ({
  homeBody: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    // backgroundImage: isday ? `url(${img})` : `url(${img1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  homeContent: {
    alignItems: "center",
    height: "100%",
  },
  homeText: {
    color: "#FFFFFF",
    fontWeight: 900,
    margin: theme.spacing(2),
    fontFamily: "Montserrat", // Replace "Roboto" with the desired font
    fontSize: "4rem",
    lineHeight: 1.2,
    textAlign: "center",
    "@media (min-width: 600px)": {
      fontSize: "5rem",
    },
  },
  loginButton: {
    marginTop: theme.spacing(4),
    width: "200px",
    borderRadius: theme.spacing(100),
    backgroundColor: theme.palette.primary.main,
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  navbar: {
    alignSelf: "center",
  },
  boxContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "0 100px", // Adjust the margin as needed
  },
  left: {
    width: "350px",
    height: "450px",
    borderRadius: "50px",
    backdropFilter: "blur(3px)", // Apply blur effect to the background
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.35)", // Add shadow
    marginTop: "40px",
    justifyContent: "center",
  },
  right: {
    width: "810px",
    height: "450px",
    borderRadius: "50px",
    marginLeft: "40px",
    backdropFilter: "blur(3px)", // Apply blur effect to the background
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.35)", // Add shadow
    marginTop: "40px",
  },
  top: {
    width: "1200px",
    height: "150px",
    borderRadius: "50px",
    justifySelf: "center",
    backdropFilter: "blur(10px)", // Apply blur effect to the background
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.35)", // Add shadow
    marginLeft: "130px",
    marginTop: "10px",
  },
  lefthead: {
    textAlign: "center",
    font: "Roboto",
    fontWeight: "800",
    fontSize: "30px",
    color: "#eeeeee",
    marginTop: "25px",
  },
  leftleft: {
    width: "200px",
    height: "150px",
    marginTop: "10px",
    float: "left",
    borderRadius: "30px",
    marginLeft: "70px",
  },
  leftlefthead: {
    fontSize: "90px", // Reduce the font size as desired
    font: "Roboto",
    fontWeight: "600",
    color: "#eeffff",
    marginTop: "20px", // Adjust the margin as needed
    textAlign: "center",
  },
  topbox: {
    width: "250px",
    height: "50px",
    borderRadius: "50px",
    justifySelf: "center",
    background: "linear-gradient(45deg, #72CBF7 30%, #30AFEE 90%)", // Apply gradient background
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.35)", // Add shadow
    marginLeft: "35px",
    marginTop: "17px",
    transition: "background-color 0.5s ease", // Add transition effect
    "&:hover": {
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.35)", // Add shadow
    },
    float: "left",
  },
  topboxtext: {
    textAlign: "center",
    font: "Roboto",
    fontWeight: "900",
    fontSize: "17px",
    color: "#eeeeee",
    marginTop: "12px",
    alignItems: "center",
  },
  loadingSpinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  righthead: {
    textAlign: "center",
    font: "Roboto",
    fontWeight: "800",
    fontSize: "30px",
    color: "#eeeeee",
    marginTop: "25px",
  },
  // rightbox: {
  //   width: "130px",
  //   height: "350px",
  //   borderRadius: "50px",
  //   justifySelf: "center",
  //   background: "linear-gradient(0deg, #2E2E2E 30%, #1B1B1B 90%)", // Apply gradient background
  //   boxShadow: "0 2px 6px rgba(0, 0, 0, 0.35)", // Add shadow
  //   marginLeft: "16px",
  //   marginTop: "17px",
  //   transition: "background-color 0.5s ease", // Add transition effect
  //   "&:hover": {
  //     boxShadow: "0 2px 6px rgba(0, 0, 0, 0.35)", // Add shadow
  //   },
  //   float: "left",
  // },
  righttextmax: {
    fontSize: "30px", // Reduce the font size as desired
    font: "Roboto",
    fontWeight: "100",
    color: "#FFE87D",
    marginTop: "0px", // Adjust the margin as needed
    textAlign: "center",
  },

  righttexthead: {
    fontSize: "20px", // Reduce the font size as desired
    font: "Roboto",
    fontWeight: "1000",
    color: "#FFF9F9",
    marginTop: "20px", // Adjust the margin as needed
    textAlign: "center",
  },
  line: {
    fontWeight: "700",
    color: "white",
    textAlign: "center",
  },
  image: {
    marginLeft: "30px",
    marginTop: "10px",
    marginBottom: "20px",
  },
  righttextwind: {
    font: "Roboto",
    fontWeight: "900",
    fontSize: "17px",
    color: "#eeeeee",
    marginTop: "20px",
    display: "inline-block",
    alignItems: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(1),
  },
  img: {
    width: "22px",
    height: "22px",
    marginTop: "5px",
    alignSelf: "center",
    marginRight: "5px",
  },
  wind: {
    display: "inline-block",
  },
  rightwind: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
  leftcondition: {
    fontSize: "20px", // Reduce the font size as desired
    font: "Roboto",
    fontWeight: "800",
    color: "#eeffff",
    marginTop: "50px", // Adjust the margin as needed
    textAlign: "center",
  },
  dots: {
    fontSize: "40px",
    color: "white",
    textAlign: "center",
  },
}));
function Home(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { weather, forecast, location } = props;
  const [lat, setlat] = useState(0);
  const [long, setlong] = useState(0);
  const [isday, setisday] = useState(true);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setlat(pos.coords.latitude);
      setlong(pos.coords.longitude);
      dispatch(fetchLocation(long, lat));
    });
  }, [dispatch]);

  useEffect(() => {
    if (!weather && !forecast && location) {
      dispatch(fetchForecast(lat, long));
      dispatch(fetchWeather(lat, long)).then(async() => {
        console.log("pehle idhar aya tha")
        const ans = await weather.current.is_day;
        if (ans) {
          setisday(true);
        } else {
          setisday(false);
        }
      });
    }
    console.log(forecast);
  }, [dispatch, weather, forecast, location]);
  let count = 0;
  const homeBody = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundImage: isday ? `url(${img})` : `url(${img1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const topbox = {
    width: "250px",
    height: "50px",
    borderRadius: "50px",
    justifySelf: "center",
    background: isday
      ? "linear-gradient(45deg, #72CBF7 30%, #30AFEE 90%)"
      : "linear-gradient(45deg, #2E2E2E 30%, #1B1B1B 90%)", // Apply gradient background
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.35)", // Add shadow
    marginLeft: "35px",
    marginTop: "17px",
    transition: "background-color 0.5s ease", // Add transition effect
    "&:hover": {
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.35)", // Add shadow
    },
    float: "left",
  };
  const rightbox = {
    width: "143px",
    height: "350px",
    borderRadius: "50px",
    justifySelf: "center",
    background: isday
      ? "linear-gradient(0deg, #72CBF7 30%, #30AFEE 90%)"
      : "linear-gradient(0deg, #2E2E2E 30%, #1B1B1B 90%)", // Apply gradient background
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.35)", // Add shadow
    marginLeft: "16px",
    marginTop: "17px",
    transition: "background-color 0.5s ease", // Add transition effect
    "&:hover": {
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.35)", // Add shadow
    },
    float: "left",
  };
  const righttextmin = {
    fontSize: "30px", // Reduce the font size as desired
    font: "Roboto",
    fontWeight: "100",
    color: isday ? "#eeeeee" : "#39C3FF",
    marginTop: "0px", // Adjust the margin as needed
    textAlign: "center",
  };
  return (
    <Box className={classes.homeBody} style={homeBody}>
      <Box className={classes.navbar}>
        <Navbar />
      </Box>
      {weather && forecast ? (
        <Box className={classes.homeContent}>
          <div>
            <Box className={classes.top}>
              <Box className={classes.topbox} style={topbox}>
                <Typography className={classes.topboxtext}>
                  {`Region : ${weather.location.name}`}
                </Typography>
              </Box>
              <Box className={classes.topbox} style={topbox}>
                <Typography className={classes.topboxtext}>
                  {`State : ${weather.location.region}`}
                </Typography>
              </Box>

              <Box className={classes.topbox} style={topbox}>
                <Typography className={classes.topboxtext}>
                  {`Country : ${weather.location.country}`}
                </Typography>
              </Box>
              <Box className={classes.topbox} style={topbox}>
                <Typography className={classes.topboxtext}>
                  {`${weather.location.localtime}`}
                </Typography>
              </Box>
              <Box className={classes.topbox} style={topbox}>
                <Typography className={classes.topboxtext}>
                  {`Humidity : ${weather.current.humidity} %`}
                </Typography>
              </Box>
              <Box className={classes.topbox} style={topbox}>
                <Typography className={classes.topboxtext}>
                  {`Pressure : ${weather.current.pressure_mb} mbar`}
                </Typography>
              </Box>
              <Box className={classes.topbox} style={topbox}>
                <Typography className={classes.topboxtext}>
                  {`Wind Speed : ${weather.current.wind_kph} kmph`}
                </Typography>
              </Box>
              <Box className={classes.topbox} style={topbox}>
                <Typography className={classes.topboxtext}>
                  {`AQI : ${Math.round(weather.current.air_quality.pm2_5)}`}
                </Typography>
              </Box>
            </Box>
          </div>
          <Box className={classes.boxContainer}>
            <Box className={classes.left}>
              <Typography className={classes.lefthead}>
                Current Weather
              </Typography>
              <Box className={classes.leftleft}>
                <Typography className={classes.leftlefthead}>
                  {weather.current.temp_c}°C
                </Typography>
                <Typography className={classes.dots}>
                  ..................
                </Typography>
                <Typography className={classes.leftcondition}>
                  {weather.current.condition.text} | Cloud :{" "}
                  {weather.current.cloud}%
                </Typography>
              </Box>
            </Box>
            <Box className={classes.right}>
              <Typography className={classes.righthead}>
                Weather Forecast
              </Typography>
              {forecast.forecast.forecastday.map((day, index) => (
                <Box style={rightbox}>
                  <Typography className={classes.righttexthead}>
                    {index === 0
                      ? "Today"
                      : index === 1
                      ? "Tomorrow"
                      : day.date.substring(8, 11) +
                        "/" +
                        day.date.substring(5, 7)}
                  </Typography>
                  <Typography className={classes.line}>___________</Typography>
                  <img src={day.day.condition.icon} className={classes.image} />
                  <Typography className={classes.righttextmax}>
                    {day.day.maxtemp_c}°C
                  </Typography>
                  <Typography style={righttextmin}>
                    {day.day.mintemp_c}°C
                  </Typography>
                  <Box className={classes.rightwind}>
                    <img src={img2} className={classes.img} />

                    <Typography className={classes.righttextwind}>
                      {parseFloat(day.day.maxwind_kph)} kph
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      ) : (
        <div className={classes.loadingSpinner}>
          <CircularProgress />
        </div>
      )}
    </Box>
  );
}
const mapStateToProps = (state) => {
  return {
    weather: state.weather.payload,
    location: state.location.payload,
    forecast: state.forecast.payload,
  };
};

export default connect(mapStateToProps, {
  fetchWeather,
  fetchLocation,
  fetchForecast,
})(Home);
