"use strict";

{

	const C3 = self.C3;
	C3.Plugins.StraniAnelli_HTMLElement.Type = class StraniAnelli_HTMLElementType extends C3.SDKTypeBase
	{
		constructor(objectClass)
		{
			super(objectClass);
		}

		Release()
		{
			super.Release();
		}

		OnCreate()
		{
			/*this.GetImageInfo().LoadAsset(this._runtime);*/
		}

		LoadTextures(renderer)
		{/*
			return this.GetImageInfo().LoadStaticTexture(renderer, {
				linearSampling: this._runtime.IsLinearSampling()
			});*/
		}

		ReleaseTextures()
		{
			/*this.GetImageInfo().ReleaseTexture();*/
		}
	};
}
