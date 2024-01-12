export const handleSort = (a, b, sortBook) => {
  if (sortBook === "name_asc") {
    return a.name.localeCompare(b.name); // Use localeCompare for string comparison
  } else if (sortBook === "name_desc") {
    return b.name.localeCompare(a.name); // Reverse order for descending
  } else if (sortBook === "year_asc") {
    return a.publication_year - b.publication_year;
  } else if (sortBook === "year_desc") {
    return b.publication_year - a.publication_year;
  }
};
