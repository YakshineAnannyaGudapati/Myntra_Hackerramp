
# Myntra GenZ Bestie Chat Group Feature

Myntra GenZ Bestie Chat Group is an innovative feature designed to enhance the social shopping experience. It allows users to share their favorite products with friends, engage in real-time conversations, and receive instant feedback directly within the Myntra platform.

## Key Features

1. **Social Shopping Integration**: Share products with friends using the "My Bestie" option.
2. **Real-Time Chat**: Powered by Socket.IO for instant messaging and notifications.
3. **User Groups**: Create and manage groups to discuss products and get opinions.
4. **Profile Management**: View and edit profile details, including the ability to upload pictures.
5. **Seamless Login**: Register and login to access the full suite of features with MongoDB storing user details.

## Problem Statement

Online shopping can often feel isolating without the ability to easily share and discuss potential purchases with friends. Existing messaging platforms require users to switch between apps, disrupting the shopping experience. There is a need for an integrated solution that fosters social interaction within the shopping platform itself.

## Proposed Solution

The GenZ Bestie Chat Group feature provides a seamless way for users to share products and chat with friends directly on Myntra. This integration enhances user engagement and makes the shopping process more interactive and enjoyable.

## Tech Stack

- **Frontend**: React for the user interface.
- **Backend**: Node.js with Express for server-side logic.
- **Database**: MongoDB for storing user data.
- **Real-Time Communication**: Socket.IO for real-time messaging.
- **Hosting**: AWS for scalable and reliable infrastructure.
  
## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB set up and running

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/YakshineAnannyaGudapati/Myntra_Hackerramp.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Myntra_Hackerramp
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   Create a `.env` file in the root directory and add the following:

   ```plaintext
   MONGO_URI=mongodb://localhost:27017/myntra_bestie_chat
   ```

5. Start the development server:

   ```bash
   npm start
   ```

## Usage

1. Register or log in to the platform.
2. Browse products and click the "Share" button to share with friends.
3. Engage in real-time chats and get feedback on your selections.
4. Manage your profile and groups from the user dashboard.


## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

