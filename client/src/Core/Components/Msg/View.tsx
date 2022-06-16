const View = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#707991",
      }}
    >
      <span
        style={{
          color: "white",
          borderRadius: "20px",
        }}
      >
        Select a chat to start messaging
      </span>
    </div>
  );
};

export default View;
