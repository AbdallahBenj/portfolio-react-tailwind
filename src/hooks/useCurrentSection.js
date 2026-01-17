import useScrollSections from "./useScrollSections.js";

const useCurrentSection = (sectionIds = []) => {
  const allSections = useScrollSections(sectionIds);
  const currentSection = Object.entries(allSections).find(
    ([, value]) => value,
  )?.[0];

  return currentSection;
};

export default useCurrentSection;
