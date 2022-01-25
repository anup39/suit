/* 
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer'; */
// import { destinationTypes } from '@webex/widget-space';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Select from 'react-select';

// import { init as initWebex } from 'webex';
import FooterNegentis from '../../components/shared/Footer-negentis/footer.component';
import {
  getAccessToken,
  getRooms,
  webexAuthSuccess,
} from '../../redux/webex-redux/webex.actions';
import {
  getWebexAccessToken,
  getWebexRooms,
} from '../../redux/webex-redux/webex.selector';
import SpaceWidgetComponent from './components/space-widget/space.component';
import classes from './styles/webex.styles.module.scss';

const WebexView = () => {
  // const [drawer, setDrawer] = useState(false);
  // const [roomName, setRoomName] = useState();
  const [codeval, setCodeval] = useState(undefined);
  // const [nameError, setError] = useState(undefined);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [destinationId, setdestinationId] = useState('');

  const webexParamToken = searchParams.get('code');
  // const webexToken = useSelector(getWebexToken);
  const webexAccessToken = useSelector(getWebexAccessToken);
  const rooms = useSelector(getWebexRooms);
  const [selectedOption, setSelectedOption] = useState(null);

  // eslint-disable-next-line no-multi-assign
  /* const webex = (window.webex = initWebex({
    credentials: {
      access_token: webexAccessToken,
    },
  })); */
  /* const openDrawer = () => {
    setDrawer(true);
  };
  const closeDrawer = () => {
    setDrawer(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!roomName) {
      setError('Room name is required');
    }
    if (roomName) {
      webex.rooms
        .create({
          title: roomName,
        })
        .then(() => {
          toast.success('Room created successfully', {
            position: 'top-center',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((error) => {
          toast.error(error.message, {
            position: 'top-center',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
  };

  const onChange = (e) => {
    setRoomName(e.target.value);
  };
  */
  const onhandleChange = (e) => {
    setSelectedOption(e);
    setdestinationId(e.value);
    console.log(`Destination :: ${e.value}`);
  };
  const el = document.createElement('script');
  el.onload = () => {};
  el.src = 'https://code.s4d.io/widget-space/production/bundle.js';
  document.getElementsByTagName('head')[0].append(el);

  useEffect(() => {
    dispatch(webexAuthSuccess(webexParamToken));
    if (webexParamToken) {
      if (webexParamToken !== codeval) {
        setCodeval(webexParamToken);
        console.log(webexParamToken);
        dispatch(getRooms());
        dispatch(getAccessToken(webexParamToken));
      }
      console.log(rooms);
    }
    if (!webexParamToken) {
      window.location.href =
        'https://webexapis.com/v1/authorize?client_id=Ce03f73ac5eb97bcdc2ea9dd2a417273c4683ebe66d966844c44f1842d5a58fba&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fpannel%2Fwebex&scope=meeting%3Aparticipants_read%20spark%3Apeople_read%20meeting%3Aadmin_participants_read%20spark%3Acalls_read%20spark%3Ateams_write%20spark-admin%3Apeople_write%20spark-admin%3Aroles_read%20spark-compliance%3Awebhooks_write%20spark%3Apeople_write%20spark%3Aorganizations_read%20spark%3Arooms_write%20spark%3Aall%20spark-compliance%3Arooms_read%20spark-compliance%3Awebhooks_read%20spark%3Akms%20spark%3Arooms_read%20spark-compliance%3Ateams_read%20meeting%3Aparticipants_write%20spark%3Ateams_read%20spark-compliance%3Arooms_write%20spark-admin%3Apeople_read&state=newstate';
    }
  }, []);

  return (
    <>
      <div className={classes.webex_container}>
        <div className={classes.webex_header_container}>
          <h2 className={classes.webex_header}>Webex</h2>
        </div>
        <div className={classes.webex_body}>
          {/* <div className={classes.body_header}>
            <Button
              onClick={openDrawer}
              sx={{ boxShadow: 'none', '&:hover': { boxShadow: 'none' } }}
              type="button"
              variant="contained"
            >
              <AddIcon /> Add room
            </Button>
          </div> */}
          <div className={classes.body_header}>
            {rooms && rooms !== null && rooms.length > 0 ? (
              <Select
                defaultValue={selectedOption}
                onChange={onhandleChange}
                options={rooms}
                value={selectedOption}
              />
            ) : null}
          </div>
          <div className={classes.webex_space}>
            {destinationId !== '' &&
            selectedOption !== null &&
            webexAccessToken &&
            webexAccessToken !== null &&
            webexAccessToken.access_token ? (
              <div>
                <SpaceWidgetComponent
                  accessToken={webexAccessToken.access_token}
                  destinationId={destinationId}
                  destinationType="spaceId"
                />
              </div>
            ) : null}
          </div>
          {/* <Drawer
            anchor="right"
            onClose={closeDrawer}
            open={drawer}
            sx={{ width: 412 }}
          >
            <div className={classes.form_container}>
              <h2 className={classes.add_room}>Add room</h2>
              <form className={classes.room_form} onSubmit={onSubmit}>
                <div className={classes.input_container}>
                  <label className={classes.input_label}>Room name</label>
                  <input
                    className={classes.form_input}
                    onChange={onChange}
                    type="text"
                    value={roomName}
                  />
                  <span className={classes.input_error}>{nameError}</span>
                </div>
                <div className={classes.buttons_group}>
                  <Button
                    onClick={closeDrawer}
                    sx={{
                      color: '#8094AE',
                      marginRight: 5,
                      '&:hover': { backgroundColor: 'none' },
                    }}
                    type="button"
                  >
                    Cancel
                  </Button>
                  <Button
                    sx={{
                      backgroundColor: '#E78201',
                      boxShadow: 'none',
                      '&:hover': {
                        backgroundColor: '#E78201',
                        boxShadow: 'none',
                      },
                    }}
                    type="submit"
                    variant="contained"
                  >
                    {' '}
                    Add{' '}
                  </Button>
                </div>
              </form>
            </div>
            </Drawer> */}
        </div>
      </div>
      <FooterNegentis />
    </>
  );
};

export default WebexView;
