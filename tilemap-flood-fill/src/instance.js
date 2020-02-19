"use strict";

{
	const BEHAVIOR_CLASS = SDK.Behaviors.StraniAnelli_TilemapFloodFill;
	
	BEHAVIOR_CLASS.Instance = class TilemapFloodFillInstance extends SDK.IBehaviorInstanceBase
	{
		constructor(sdkBehType, behInst)
		{
			super(sdkBehType, behInst);
		}
		
		Release()
		{
		}
		
		OnCreate()
		{
		}
		
		OnPropertyChanged(id, value)
		{
		}
		
		LoadC2Property(name, valueString)
		{
			return false;		// not handled
		}
	};
}