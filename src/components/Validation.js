const Validation = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Pateint Name is required";
  }
  if (!values.address) {
    errors.address = "Address is required";
  }
  if (!values.hospital) {
    errors.hospital = "Hospital is required";
  }
};
