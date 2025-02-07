import React, { useState, useEffect } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const GoogleAddress = ({ onChange }) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (value) {
      onChange(value);
    }
  }, [value, onChange]);

  return (
    <div>
      <GooglePlacesAutocomplete
        apiKey='AIzaSyBIQqTFihtmTKsQfHK8h9CKjW2NcqFFMPc'
        autocompletionRequest={{
          componentRestrictions: {
            country: ['aus'],
          },
        }}
        selectProps={{
          value,
          onChange: setValue,
        }}
      />
    </div>
  );
};

export default GoogleAddress;
