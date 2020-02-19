"use strict";

{
	const BEHAVIOR_CLASS = SDK.Behaviors.StraniAnelli_TilemapFloodFill;
	
	BEHAVIOR_CLASS.Type = class TilemapFloodFillType extends SDK.IBehaviorTypeBase
	{
		constructor(sdkPlugin, iBehaviorType)
		{
			super(sdkPlugin, iBehaviorType);
		}
	};
}