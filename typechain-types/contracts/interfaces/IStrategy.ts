/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export type MetadataStruct = {
  protocol: PromiseOrValue<BigNumberish>;
  pointer: PromiseOrValue<string>;
};

export type MetadataStructOutput = [BigNumber, string] & {
  protocol: BigNumber;
  pointer: string;
};

export declare namespace IStrategy {
  export type PayoutSummaryStruct = {
    recipientAddress: PromiseOrValue<string>;
    amount: PromiseOrValue<BigNumberish>;
  };

  export type PayoutSummaryStructOutput = [string, BigNumber] & {
    recipientAddress: string;
    amount: BigNumber;
  };

  export type MilestoneStruct = {
    amountPercentage: PromiseOrValue<BigNumberish>;
    metadata: MetadataStruct;
    milestoneStatus: PromiseOrValue<BigNumberish>;
  };

  export type MilestoneStructOutput = [
    BigNumber,
    MetadataStructOutput,
    number,
  ] & {
    amountPercentage: BigNumber;
    metadata: MetadataStructOutput;
    milestoneStatus: number;
  };
}

export interface IStrategyInterface extends utils.Interface {
  functions: {
    "allocate(bytes,address)": FunctionFragment;
    "distribute(address[],bytes,address)": FunctionFragment;
    "getAllo()": FunctionFragment;
    "getPayouts(address[],bytes[])": FunctionFragment;
    "getPoolAmount()": FunctionFragment;
    "getPoolId()": FunctionFragment;
    "getRecipientStatus(address)": FunctionFragment;
    "getStrategyId()": FunctionFragment;
    "increaseMaxBid(uint256)": FunctionFragment;
    "increasePoolAmount(uint256)": FunctionFragment;
    "initialize(uint256,bytes)": FunctionFragment;
    "isPoolActive()": FunctionFragment;
    "isValidAllocator(address)": FunctionFragment;
    "registerRecipient(bytes,address)": FunctionFragment;
    "rejectMilestone(uint256)": FunctionFragment;
    "setMilestones((uint256,(uint256,string),uint8)[])": FunctionFragment;
    "submitUpcomingMilestone((uint256,string))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "allocate"
      | "distribute"
      | "getAllo"
      | "getPayouts"
      | "getPoolAmount"
      | "getPoolId"
      | "getRecipientStatus"
      | "getStrategyId"
      | "increaseMaxBid"
      | "increasePoolAmount"
      | "initialize"
      | "isPoolActive"
      | "isValidAllocator"
      | "registerRecipient"
      | "rejectMilestone"
      | "setMilestones"
      | "submitUpcomingMilestone",
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "allocate",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "distribute",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
    ],
  ): string;
  encodeFunctionData(functionFragment: "getAllo", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPayouts",
    values: [PromiseOrValue<string>[], PromiseOrValue<BytesLike>[]],
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolAmount",
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: "getPoolId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRecipientStatus",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "getStrategyId",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "increaseMaxBid",
    values: [PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: "increasePoolAmount",
    values: [PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>],
  ): string;
  encodeFunctionData(
    functionFragment: "isPoolActive",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "isValidAllocator",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "registerRecipient",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "rejectMilestone",
    values: [PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: "setMilestones",
    values: [IStrategy.MilestoneStruct[]],
  ): string;
  encodeFunctionData(
    functionFragment: "submitUpcomingMilestone",
    values: [MetadataStruct],
  ): string;

  decodeFunctionResult(functionFragment: "allocate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAllo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPayouts", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPoolAmount",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "getPoolId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRecipientStatus",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStrategyId",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseMaxBid",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "increasePoolAmount",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isPoolActive",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidAllocator",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerRecipient",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "rejectMilestone",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMilestones",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitUpcomingMilestone",
    data: BytesLike,
  ): Result;

  events: {
    "Allocated(address,uint256,address,address)": EventFragment;
    "Distributed(address,address,uint256,address)": EventFragment;
    "Initialized(uint256,bytes)": EventFragment;
    "PoolActive(bool)": EventFragment;
    "Registered(address,bytes,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Allocated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Distributed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolActive"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Registered"): EventFragment;
}

export interface AllocatedEventObject {
  recipientId: string;
  amount: BigNumber;
  token: string;
  sender: string;
}
export type AllocatedEvent = TypedEvent<
  [string, BigNumber, string, string],
  AllocatedEventObject
>;

export type AllocatedEventFilter = TypedEventFilter<AllocatedEvent>;

export interface DistributedEventObject {
  recipientId: string;
  recipientAddress: string;
  amount: BigNumber;
  sender: string;
}
export type DistributedEvent = TypedEvent<
  [string, string, BigNumber, string],
  DistributedEventObject
>;

export type DistributedEventFilter = TypedEventFilter<DistributedEvent>;

export interface InitializedEventObject {
  poolId: BigNumber;
  data: string;
}
export type InitializedEvent = TypedEvent<
  [BigNumber, string],
  InitializedEventObject
>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface PoolActiveEventObject {
  active: boolean;
}
export type PoolActiveEvent = TypedEvent<[boolean], PoolActiveEventObject>;

export type PoolActiveEventFilter = TypedEventFilter<PoolActiveEvent>;

export interface RegisteredEventObject {
  recipientId: string;
  data: string;
  sender: string;
}
export type RegisteredEvent = TypedEvent<
  [string, string, string],
  RegisteredEventObject
>;

export type RegisteredEventFilter = TypedEventFilter<RegisteredEvent>;

export interface IStrategy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IStrategyInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    allocate(
      _data: PromiseOrValue<BytesLike>,
      _sender: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    distribute(
      _recipientIds: PromiseOrValue<string>[],
      _data: PromiseOrValue<BytesLike>,
      _sender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getAllo(overrides?: CallOverrides): Promise<[string]>;

    getPayouts(
      _recipientIds: PromiseOrValue<string>[],
      _data: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides,
    ): Promise<[IStrategy.PayoutSummaryStructOutput[]]>;

    getPoolAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPoolId(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRecipientStatus(
      _recipientId: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[number]>;

    getStrategyId(overrides?: CallOverrides): Promise<[string]>;

    increaseMaxBid(
      _maxBid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    increasePoolAmount(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    initialize(
      _poolId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    isPoolActive(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    isValidAllocator(
      _allocator: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    registerRecipient(
      _data: PromiseOrValue<BytesLike>,
      _sender: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    rejectMilestone(
      _milestoneId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setMilestones(
      _milestones: IStrategy.MilestoneStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    submitUpcomingMilestone(
      _metadata: MetadataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  allocate(
    _data: PromiseOrValue<BytesLike>,
    _sender: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  distribute(
    _recipientIds: PromiseOrValue<string>[],
    _data: PromiseOrValue<BytesLike>,
    _sender: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getAllo(overrides?: CallOverrides): Promise<string>;

  getPayouts(
    _recipientIds: PromiseOrValue<string>[],
    _data: PromiseOrValue<BytesLike>[],
    overrides?: CallOverrides,
  ): Promise<IStrategy.PayoutSummaryStructOutput[]>;

  getPoolAmount(overrides?: CallOverrides): Promise<BigNumber>;

  getPoolId(overrides?: CallOverrides): Promise<BigNumber>;

  getRecipientStatus(
    _recipientId: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<number>;

  getStrategyId(overrides?: CallOverrides): Promise<string>;

  increaseMaxBid(
    _maxBid: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  increasePoolAmount(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  initialize(
    _poolId: PromiseOrValue<BigNumberish>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  isPoolActive(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  isValidAllocator(
    _allocator: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  registerRecipient(
    _data: PromiseOrValue<BytesLike>,
    _sender: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  rejectMilestone(
    _milestoneId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setMilestones(
    _milestones: IStrategy.MilestoneStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  submitUpcomingMilestone(
    _metadata: MetadataStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    allocate(
      _data: PromiseOrValue<BytesLike>,
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    distribute(
      _recipientIds: PromiseOrValue<string>[],
      _data: PromiseOrValue<BytesLike>,
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    getAllo(overrides?: CallOverrides): Promise<string>;

    getPayouts(
      _recipientIds: PromiseOrValue<string>[],
      _data: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides,
    ): Promise<IStrategy.PayoutSummaryStructOutput[]>;

    getPoolAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getPoolId(overrides?: CallOverrides): Promise<BigNumber>;

    getRecipientStatus(
      _recipientId: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<number>;

    getStrategyId(overrides?: CallOverrides): Promise<string>;

    increaseMaxBid(
      _maxBid: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    increasePoolAmount(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    initialize(
      _poolId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<void>;

    isPoolActive(overrides?: CallOverrides): Promise<boolean>;

    isValidAllocator(
      _allocator: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    registerRecipient(
      _data: PromiseOrValue<BytesLike>,
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<string>;

    rejectMilestone(
      _milestoneId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    setMilestones(
      _milestones: IStrategy.MilestoneStruct[],
      overrides?: CallOverrides,
    ): Promise<void>;

    submitUpcomingMilestone(
      _metadata: MetadataStruct,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {
    "Allocated(address,uint256,address,address)"(
      recipientId?: PromiseOrValue<string> | null,
      amount?: null,
      token?: null,
      sender?: null,
    ): AllocatedEventFilter;
    Allocated(
      recipientId?: PromiseOrValue<string> | null,
      amount?: null,
      token?: null,
      sender?: null,
    ): AllocatedEventFilter;

    "Distributed(address,address,uint256,address)"(
      recipientId?: PromiseOrValue<string> | null,
      recipientAddress?: null,
      amount?: null,
      sender?: null,
    ): DistributedEventFilter;
    Distributed(
      recipientId?: PromiseOrValue<string> | null,
      recipientAddress?: null,
      amount?: null,
      sender?: null,
    ): DistributedEventFilter;

    "Initialized(uint256,bytes)"(
      poolId?: null,
      data?: null,
    ): InitializedEventFilter;
    Initialized(poolId?: null, data?: null): InitializedEventFilter;

    "PoolActive(bool)"(active?: null): PoolActiveEventFilter;
    PoolActive(active?: null): PoolActiveEventFilter;

    "Registered(address,bytes,address)"(
      recipientId?: PromiseOrValue<string> | null,
      data?: null,
      sender?: null,
    ): RegisteredEventFilter;
    Registered(
      recipientId?: PromiseOrValue<string> | null,
      data?: null,
      sender?: null,
    ): RegisteredEventFilter;
  };

  estimateGas: {
    allocate(
      _data: PromiseOrValue<BytesLike>,
      _sender: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    distribute(
      _recipientIds: PromiseOrValue<string>[],
      _data: PromiseOrValue<BytesLike>,
      _sender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getAllo(overrides?: CallOverrides): Promise<BigNumber>;

    getPayouts(
      _recipientIds: PromiseOrValue<string>[],
      _data: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getPoolAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getPoolId(overrides?: CallOverrides): Promise<BigNumber>;

    getRecipientStatus(
      _recipientId: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getStrategyId(overrides?: CallOverrides): Promise<BigNumber>;

    increaseMaxBid(
      _maxBid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    increasePoolAmount(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    initialize(
      _poolId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    isPoolActive(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    isValidAllocator(
      _allocator: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    registerRecipient(
      _data: PromiseOrValue<BytesLike>,
      _sender: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    rejectMilestone(
      _milestoneId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setMilestones(
      _milestones: IStrategy.MilestoneStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    submitUpcomingMilestone(
      _metadata: MetadataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allocate(
      _data: PromiseOrValue<BytesLike>,
      _sender: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    distribute(
      _recipientIds: PromiseOrValue<string>[],
      _data: PromiseOrValue<BytesLike>,
      _sender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getAllo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPayouts(
      _recipientIds: PromiseOrValue<string>[],
      _data: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getPoolAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPoolId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRecipientStatus(
      _recipientId: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getStrategyId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    increaseMaxBid(
      _maxBid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    increasePoolAmount(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    initialize(
      _poolId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    isPoolActive(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    isValidAllocator(
      _allocator: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    registerRecipient(
      _data: PromiseOrValue<BytesLike>,
      _sender: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    rejectMilestone(
      _milestoneId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setMilestones(
      _milestones: IStrategy.MilestoneStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    submitUpcomingMilestone(
      _metadata: MetadataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
