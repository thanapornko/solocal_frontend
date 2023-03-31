// const [charge, setCharge] = useState(undefined);
// const input = {
//   destinationId: params.destinationId,
//   guideId: guideId,
//   date: newDate,
//   email: authenticatedUser.email,
//   name: authenticatedUser.name,
//   price: price
// };
// const email = authenticatedUser.email;
// const name = authenticatedUser.name;
// const price = content.price;

// let OmiseCard;

// const handleLoadScript = () => {
//   OmiseCard = window.OmiseCard;
//   OmiseCard.configure({
//     publicKey: "pkey_test_5v8kaaliklc15jopn4b",
//     currency: "THB",
//     frameLabel: "SOLOCAL",
//     submitLabel: "PAY NOW",
//     buttonLabel: "Credit card"
//   });
// };

// const creditCardConfigure = () => {
//   OmiseCard.configure({
//     defaultPaymentMethod: "credit_card",
//     otherPaymentMethods: []
//   });
//   OmiseCard.configureButton("#confirm_payment");
//   OmiseCard.attach();
// };

// const omiseCardHandle = async () => {
//   OmiseCard.open({
//     amount: price,
//     onCreateTokenSuccess: async function (token) {
//       try {
//         await createCreditCardCharge(
//           email,
//           name,
//           price,
//           token
//         );
//       } catch (error) {
//         console.error(error);
//       }
//     },
//     onFormClosed: function () {}
//   });
// };

// const handleClick = async e => {
//   e.preventDefault();
//   setOpen(false);
//   try {
//     creditCardConfigure();
//     omiseCardHandle();
//     await bookingApi.createBooking(input);
//     toast.success("Booking successful");
//     navigate("/mybooking");
//     window.scrollTo(0, 0);
//   } catch (error) {
//     console.error(error);
//     toast.error("Error occurred while booking");
//   }
// };

// //
// const createCreditCardCharge = async (
//   email,
//   name,
//   price,
//   token
// ) => {
//   try {
//     const priceWithoutComma = price.replace(/,/g, "");
//     const amountInSatang = Math.floor(
//       parseInt(priceWithoutComma, 10)
//     );

//     const res = await axios({
//       method: "post",
//       url: "http://localhost:9999/bookings/:destinationId",
//       data: {
//         email: email,
//         name: name,
//         amount: amountInSatang,
//         token: token
//       },
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });

//     setCharge(res);
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// };
// console.log(charge, "charge");
