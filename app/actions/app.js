import { ipcRenderer } from 'electron';

export const CLOSE_WINDOW = 'CLOSE_WINDOW';
export const MINIMIZE_WINDOW = 'MINIMIZE_WINDOW';
export const MAXIMIZE_WINDOW = 'MAXIMIZE_WINDOW';
export const OPEN_LINK = 'OPEN_LINK';

export function closeWindow() {
  ipcRenderer.send('window:close');
  return (dispatch) => {
    dispatch({
      type: CLOSE_WINDOW
    });
  };
}

export function minimizeWindow() {
  ipcRenderer.send('window:minimize');
  return (dispatch) => {
    dispatch({
      type: MINIMIZE_WINDOW
    });
  };
}

export function maximizeWindow() {
  ipcRenderer.send('window:maximize');
  return (dispatch) => {
    dispatch({
      type: MAXIMIZE_WINDOW
    });
  };
}

export function openLink(link) {
  ipcRenderer.send('open-link', link);
  return (dispatch) => {
    dispatch({
      type: OPEN_LINK
    });
  };
}
