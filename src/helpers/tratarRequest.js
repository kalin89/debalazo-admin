export const tratarResponseRequest = (resp) => {
  return resp.map((e, i) => {
    return {
      key: e._id,
      no: i + 1,
      firstName: e.firstName,
      lastName: e.lastName,
      phoneNumber: e.phoneNumber,
      email: e.email,
      comments: e.comments,
      requestStatus: e.requestStatus._id,
    };
  });
};

export const addNewDataToRequest = (e, lastCount) => {

  return {
      key: e._id,
      no: lastCount + 1,
      firstName: e.firstName,
      lastName: e.lastName,
      phoneNumber: e.phoneNumber,
      email: e.email,
      comments: e.comments,
      requestStatus: e.requestStatus._id,
  }
}
