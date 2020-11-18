import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Speaker from '../Speaker/Speaker';

import { REQUEST_STATUS } from '../../reducers/request';
import withRequest from '../HOCS/witRequest';
import withSpecialMessage from '../HOCS/withSpecialMessage';
import { compose } from 'recompose';

const Speakers = ({
  records: speakers,
  status,
  error,
  put,
  bgColor,
  specialMessage,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onFavoriteToggleHandler = async (speakerRec) => {
    put({
      ...speakerRec,
      isFavorite: !speakerRec.isFavorite,
    });
  };

  const success = status === REQUEST_STATUS.SUCCESS;
  const isLoading = status === REQUEST_STATUS.LOADING;
  const hasErrored = status === REQUEST_STATUS.ERROR;

  return (
    <div className={bgColor}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {specialMessage && specialMessage.length > 0 && (
        <div
          className="bg-orange-100 border-l-8 border-orange-500 text-orange-700 p-4 text-2x1"
          role="alert"
        >
          <p className="font-bold"> Special Message</p>
          <p>{specialMessage}</p>
        </div>
      )}
      {isLoading && <div>Loading...</div>}
      {hasErrored && (
        <div>
          Loading error... Is the json-Server running? (try "npm run
          json-server") at terminal prompt
          <br />
          <b>ERROR: {error.message}</b>
        </div>
      )}
      {success && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
          {speakers
            .filter((rec) => {
              const targetString = `${rec.firstName}${rec.lastName}`.toLowerCase();
              return searchQuery.length === 0
                ? true
                : targetString.includes(searchQuery.toLowerCase());
            })
            .map((speaker) => (
              <Speaker
                key={speaker.id}
                {...speaker}
                onFavoriteToggle={() => onFavoriteToggleHandler(speaker)}
              />
            ))}
        </div>
      )}
    </div>
  );
};

// export default withRequest('http://localhost:4000', 'speakers')(Speakers);

export default compose(
  withRequest('http://localhost:4000', 'speakers'),
  withSpecialMessage(),
)(Speakers);
