import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React from 'react';

import DatagridRow from './company-user.row';
import classes from './company-user.styles.module.scss';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const StyledAutocompleteWrapper = withStyles({
  border: 'none',
})(TextField);

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
];

const CompanyUserAdd = ({ isOpen, handleClose }) => {
  const closeDrawer = () => {
    handleClose(false);
  };

  return (
    <Drawer anchor="right" onClose={closeDrawer} open={isOpen}>
      <Box role="presentation" sx={{ width: 495, padding: 5 }}>
        <div className={classes.add_container}>
          <h2 className={classes.userlist_header_1}>Add Users</h2>
          <div className={classes.userlist_container}>
            <h3 className={classes.userlist_header}>Search</h3>
            <div className={classes.userlist_box}>
              <Autocomplete
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                id="checkboxes-tags-demo"
                multiple
                options={top100Films}
                renderInput={(params) => (
                  <StyledAutocompleteWrapper
                    {...params}
                    label="Users"
                    placeholder="search..."
                    sx={{ border: 'none' }}
                  />
                )}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      checked={selected}
                      checkedIcon={checkedIcon}
                      icon={icon}
                      style={{ marginRight: 8 }}
                    />
                    {option.title}
                  </li>
                )}
                style={{ width: '100%' }}
              />
            </div>
          </div>
          <div className={classes.add_list_container}>
            <table className={classes.add_list_tables}>
              <thead className={classes.table_head}>
                <tr className={classes.table_head_row}>
                  <th className={classes.table_row_head}>
                    <input
                      className={classes.table_row_input}
                      type="checkbox"
                    />
                  </th>
                  <th className={classes.table_row_head}>Users</th>
                  <th className={classes.table_row_head}>Roles</th>
                </tr>
              </thead>
              <tbody className={classes.table_body}>
                <DatagridRow />
                <DatagridRow />
                <DatagridRow />
                <DatagridRow />
              </tbody>
            </table>
          </div>
          <div className={classes.action_buttons_container}>
            <span className={classes.cancel_button}>
              <Button
                color="error"
                onClick={closeDrawer}
                sx={{ color: '#8094AE' }}
                variant="text"
              >
                Cancel
              </Button>
            </span>
            <Button
              sx={{
                backgroundColor: '#EE9949',
                '&:hover': { backgroundColor: '#EE9949' },
              }}
              variant="contained"
            >
              Update
            </Button>
          </div>
        </div>
      </Box>
    </Drawer>
  );
};

CompanyUserAdd.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default CompanyUserAdd;
