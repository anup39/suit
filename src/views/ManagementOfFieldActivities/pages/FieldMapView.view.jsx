import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React from 'react';
import { useTranslation } from 'react-i18next';

import MapWrapper from '../../../components/shared/Openlayer/Openlayer';
import classes from './styles/styles.map.module.scss';

const top100Films = [
  { title: 'document 1', year: 1994 },
  { title: 'document 2', year: 1972 },
  { title: 'document 3', year: 1974 },
  { title: 'document 4', year: 2008 },
  { title: 'document 5', year: 1957 },
  { title: 'document 6', year: 1993 },
  { title: 'document 7', year: 1994 },
  { title: 'document 8', year: 1994 },
  { title: 'document 9', year: 1972 },
  { title: 'document 10', year: 1974 },
  { title: 'document 11', year: 2008 },
  { title: 'document 12', year: 1957 },
  { title: 'document 13', year: 1993 },
  { title: 'document 14', year: 1994 },
];

const filter = createFilterOptions();
const { t } = useTranslation();

const FieldMapView = () => {
  const [value, setValue] = React.useState(null);
  return (
    <div className={classes.mapview_container}>
      <div className={classes.mapview_header_container}>
        <h3 className={classes.mapview_header}>
          {t('managementOfFieldActivities')}
        </h3>
      </div>
      <div className={classes.mapview_box}>
        <div className={classes.box_header}>
          <button className={classes.box_button} type="button">
            <FormatListBulletedIcon sx={{ padding: '0 5px' }} />
            {t('listView')}
          </button>
        </div>
        <div className={classes.map_data_container}>
          <div className={classes.map_conntainer}>
            <MapWrapper />
          </div>
          <div className={classes.document_container}>
            <h2 className={classes.doc_container_header}>
              {t('assignProject')}
            </h2>
            <h2 className={classes.doc_container_header_name}>
              {t('docuemntName')}
            </h2>
            <div className={classes.document_search_container}>
              <Autocomplete
                clearOnBlur
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);

                  const { inputValue } = params;
                  // Suggest the creation of a new value
                  const isExisting = options.some(
                    (option) => inputValue === option.title
                  );
                  if (inputValue !== '' && !isExisting) {
                    filtered.push({
                      inputValue,
                      title: `Not found "${inputValue}"`,
                    });
                  }

                  return filtered;
                }}
                freeSolo
                getOptionLabel={(option) => {
                  // Value selected with enter, right from the input
                  if (typeof option === 'string') {
                    return option;
                  }
                  // Add "xxx" option created dynamically
                  if (option.inputValue) {
                    return option.inputValue;
                  }
                  // Regular option
                  return option.title;
                }}
                handleHomeEndKeys
                id="free-solo-with-text-demo"
                onChange={(event, newValue) => {
                  if (typeof newValue === 'string') {
                    setValue({
                      title: newValue,
                    });
                  } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    setValue({
                      title: newValue.inputValue,
                    });
                  } else {
                    setValue(newValue);
                  }
                }}
                options={top100Films}
                renderInput={(params) => (
                  <TextField {...params} label="Search Doc" />
                )}
                renderOption={(props, option) => (
                  <li {...props}>{option.title}</li>
                )}
                selectOnFocus
                sx={{ width: '100%', border: 'none', outline: 'none' }}
                value={value}
              />
            </div>
            <div className={classes.document_preview}>
              {t('documentPreview')}
            </div>
            <div className={classes.document_details}>
              <h4 className={classes.document_detail_header}>
                {t('documentDetails')}
              </h4>
              <div className={classes.document_details_box}>
                details goes here
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldMapView;
