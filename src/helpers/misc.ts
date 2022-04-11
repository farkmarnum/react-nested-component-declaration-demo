export const formatBytes = (a: number, b = 2, k = 1024): string => {
  const d = Math.floor(Math.log(a) / Math.log(k));

  if (a === 0) return '0 Bytes';

  return `${parseFloat((a / k ** d).toFixed(Math.max(0, b)))} ${
    ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'][d]
  }`;
};
