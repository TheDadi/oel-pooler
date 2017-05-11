const DEFAULT_PAGE_TITLE = 'Oel Pooler';

export function updatePageTitle(title) {
  if (document) {
    if (title) {
      document.title = `${title} | ${DEFAULT_PAGE_TITLE}`;
    } else {
      document.title = DEFAULT_PAGE_TITLE;
    }
  }
}

export default { updatePageTitle };