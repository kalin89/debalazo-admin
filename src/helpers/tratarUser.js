export const tratarResponseUser = (resp) => {
    return resp.map((e, i) => {
        return {
            key: e._id,
            no: i + 1,
            firstName: e.firstName,
            lastName: e.lastName,
            phone: e.phone,
            email: e.email,
            isVerificated: e.isVerificated,
            isClient: e.isClient,
            isBusiness: e.isBusiness,
            isDriver: e.isDriver,
            idBusiness: e.business.length === 0 ? "" : e.business[0]._id
        };
    });
};