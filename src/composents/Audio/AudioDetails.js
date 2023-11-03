const audioDetailsStyles = {
  container: {
    backgroundColor: '#2D3748',
    borderRadius: '8px 8px 0 0',
    padding: '30px',
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    width: '150px',
    height: '150px',
    borderRadius: '8px',
    backgroundColor: '#E5E7EB',
  },
  infoContainer: {
    flex: '1',
    width: '66.66%',
    display: 'grid',
    justifyContent: 'start',
    marginLeft: '20px',
  },
  title: {
    color: '#E2E8F0',
    fontSize: '1.25rem',
    fontWeight: '600',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  author: {
    color: '#48BB78',
    fontSize: '0.875rem',
    textTransform: 'capitalize',
  },
};

const AudioDetails = ({ title, author, thumbnail }) => {
  return (
    <div style={audioDetailsStyles.container}>
      <div style={audioDetailsStyles.flexContainer}>
        <img
          src={thumbnail}
          alt=""
          width="150"
          height="150"
          style={audioDetailsStyles.thumbnail}
        />
        <div style={audioDetailsStyles.infoContainer}>
          <p style={audioDetailsStyles.title}>{title}</p>
          <p style={audioDetailsStyles.author}>{author}</p>
        </div>
      </div>
    </div>
  );
};
export default AudioDetails;