

 const getUnit = (unit: string) => {
    const units: Record<string, string> = {
      kg: "কেজি",
      litre: "লিটার",
      piece: "পিস",
      dozen: "ডজন",
    };

    return units[unit] || unit;
  };

export default getUnit;