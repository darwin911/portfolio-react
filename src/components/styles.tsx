export const styles = {
  Section: {
    padding: "4rem 0",
  },
  AppBar: {
    color: "white",
    boxShadow:
      "0px 2px 2px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 2px 0px rgba(0,0,0,0.12)",
    transition: "all 300ms cubic-bezier(0.02, 0.96, 0.21, 1.11)",
  },
  Card: {
    padding: "0.5rem",
    maxWidth: 400,
    borderRadius: 10,
    boxShadow: "0px 10px .5rem -0.5rem rgba(0, 0, 0, 0.6)",
    marginBottom: "4rem",
    "&:hover": {
      maxWidth: 200,
    },
  },
  CardImg: {
    height: "280px",
    backgroundPosition: "top",
  },
  Divider: { marginTop: "1rem", marginBottom: "1rem" },
};
