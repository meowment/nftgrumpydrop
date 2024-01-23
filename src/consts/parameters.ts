/** Change these values to configure the application for your own use. **/

// Your smart contract address (available on the thirdweb dashboard)
// For existing collections: import your existing contracts on the dashboard: https://thirdweb.com/dashboard
export const contractConst = "0x5238432D762a343c3B80870bd4E7DeD58e44E2ba";

// The name of the chain your contract is deployed to.
// Refer to README.md on how to specify the chain name.
export const mycustomChain = {
    // === Required information for connecting to the network === \\
    chainId: 3944093, // Chain ID of the network
    // Array of RPC URLs to use
    rpc: ["https://evm.dymension.meowment.xyz"],

    // === Information for adding the network to your wallet (how it will appear for first time users) === \\
    // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
    nativeCurrency: {
      decimals: 18,
      name: "meowment",
      symbol: "MWN",
    },
    shortName: "mwn", // Display value shown in the wallet UI
    slug: "mwn", // Display value shown in the wallet UI
    testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
    chain: "meowment", // Name of the network
    name: "meowment", // Name of the network
  }

// It is IMPORTANT to provide your own API key to use the thirdweb SDK and infrastructure.
// Please ensure that you define the correct domain for your API key from the API settings page.
// You can get one for free at https://thirdweb.com/create-api-key
// Learn more here: https://blog.thirdweb.com/changelog/api-keys-to-access-thirdweb-infra
export const clientIdConst = import.meta.env.VITE_TEMPLATE_CLIENT_ID || "c6a37e98c099642581e4e4074d51d562";

// Configure the primary color for buttons and other UI elements
export const primaryColorConst = "blue";

// Choose between "light" and "dark" mode
export const themeConst = "dark";

// Gasless relayer configuration options
export const relayerUrlConst = ""; // OpenZeppelin relayer URL
export const biconomyApiKeyConst = ""; // Biconomy API key
export const biconomyApiIdConst = ""; // Biconomy API ID
