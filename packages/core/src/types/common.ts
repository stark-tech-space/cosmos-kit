import { ChainName } from './chain';

export enum State {
  Init = 'Init',
  Pending = 'Pending',
  Done = 'Done',
  Error = 'Error',
}

export interface Mutable<T> {
  state: State;
  data?: T;
  message?: string;
}

export type Dispatch<T> = (value: T) => void;

export interface Actions {
  [k: string]: Dispatch<any> | undefined;
}

export type Data = Record<string, any>;

export interface StateActions<T> extends Actions {
  state?: Dispatch<State>;
  data?: Dispatch<T | undefined>;
  message?: Dispatch<string | undefined>;
}

export interface WalletClientActions {
  qrUrl?: StateActions<string>;
  appUrl?: StateActions<string>;
}

export interface Callbacks {
  beforeConnect?: () => void;
  beforeDisconnect?: () => void;
  afterConnect?: () => void;
  afterDisconnect?: () => void;
}

export type OS = 'android' | 'ios' | 'windows' | 'macos';
export type BrowserName = 'chrome' | 'firefox' | 'safari' | string;
export type DeviceType = 'desktop' | 'mobile';

export interface DappEnv {
  device?: DeviceType;
  os?: OS;
  browser?: BrowserName;
}

export type LogLevel = 'TRACE' | 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';

export type ModalTheme = 'light' | 'dark';

export type NameServiceName = string;

export interface NameService {
  resolveName: (address: string) => Promise<any>;
}

export interface NameServiceRegistry {
  name: NameServiceName;
  contract: string;
  chainName: ChainName;
  getQueryMsg: (address: string) => any;
  slip173: string;
}
