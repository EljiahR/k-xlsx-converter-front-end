const Loading = ({ isLoading }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return null;
};
export default Loading;
