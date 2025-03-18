import userModel from "../models/userModel.js";

// add products to user cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;
    // console.log(userId);
    const userData = await userModel.findById(userId);
    let cartData = userData.cartData;

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Update user cart
// const updateCart = async (req, res) => {
//   try {
//     const { userId, itemId, size, quantity } = req.body;
//     const userData = await userModel.findById(userId);
//     let cartData = await userData.cartData;

//     if(quantity==0){
//       await cartData.itemId.

//     }
//     cartData[itemId][size] = quantity;

//     await userModel.findByIdAndUpdate(userId, { cartData });
//     res.json({ success: true, message: "Cart updated" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };
// Update user cart
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;

    // Fetch user data
    const userData = await userModel.findById(userId);
    let cartData = userData.cartData; // Access the cartData

    if (quantity === 0) {
      // Check if the item exists in cartData and remove it
      if (cartData[itemId]) {
        delete cartData[itemId][size]; // Remove the size entry

        // If no sizes remain for the item, remove the entire itemId
        if (Object.keys(cartData[itemId]).length === 0) {
          delete cartData[itemId];
        }
      }
    } else {
      // Update the quantity for the specific item and size
      if (!cartData[itemId]) {
        cartData[itemId] = {}; // Initialize if it doesn't exist
      }
      cartData[itemId][size] = quantity;
    }

    // Update the user's cartData in the database
    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Cart updated" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// get user cart
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;
    console.log(userId);
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;
    console.log(cartData);
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addToCart, updateCart, getUserCart };
