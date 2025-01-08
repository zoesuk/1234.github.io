const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored
	];
};
self.C3_JsPropNameTable = [
	{平台: 0},
	{镜头跟随: 0},
	{玩家: 0},
	{实体: 0},
	{平铺图: 0},
	{番茄: 0},
	{键盘: 0},
	{精灵: 0}
];

self.InstanceType = {
	玩家: class extends self.ISpriteInstance {},
	平铺图: class extends self.ITiledBackgroundInstance {},
	番茄: class extends self.ISpriteInstance {},
	键盘: class extends self.IInstance {},
	精灵: class extends self.ISpriteInstance {}
}