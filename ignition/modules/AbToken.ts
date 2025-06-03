import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const INITIAL_SUPPLY = 1_000_000n * 10n ** 18n;

const AbTokenModule = buildModule("AbTokenModule", (m) => {
  const abToken = m.contract("AbToken", [INITIAL_SUPPLY]);
  return { abToken };
});

export default AbTokenModule;
