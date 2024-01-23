import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";
import { Toaster } from "./components/ui/Toaster";
import { getGasless } from "./utils/getGasless";
import {
  biconomyApiIdConst,
  biconomyApiKeyConst,
  chainConst,
  relayerUrlConst,
  clientIdConst,
} from "./consts/parameters";

const container = document.getElementById("root");
const root = createRoot(container!);
const urlParams = new URL(window.location.toString()).searchParams;

const relayerUrl = urlParams.get("relayUrl") || relayerUrlConst || "";
const biconomyApiKey =
  urlParams.get("biconomyApiKey") || biconomyApiKeyConst || "";
const biconomyApiId =
  urlParams.get("biconomyApiId") || biconomyApiIdConst || "";
const sdkOptions = getGasless(relayerUrl, biconomyApiKey, biconomyApiId);

const mycustomChain = {
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
};

const clientId = urlParams.get("clientId") || clientIdConst || "";

root.render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain={{
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
      }}
    >

      <Toaster />
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
);
