"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[314], {
    66030: function(t, e, i) {
        i.d(e, {
            r: function() {
                return CharacterHelper
            }
        });
        var s = i(60604)
          , o = i(83928);
        let CharacterHelper = class CharacterHelper {
            buildNftPieceUrl(t, e, i) {
                var s, o;
                if (null === (s = t.url) || void 0 === s ? void 0 : s.override)
                    return this.buildOverridePieceUrl(t, t=>e[t]);
                let r = e[t.id] || (null === (o = i[t.id]) || void 0 === o ? void 0 : o.default);
                if (r && "undefined" !== r)
                    return "/".concat(t.id, "/").concat(r, ".png")
            }
            buildOverridePieceUrl(t, e) {
                return t.url.override.reduce((i,s)=>{
                    if (void 0 === i)
                        return;
                    let o = s.attribute && e(s.attribute);
                    if (s.attribute && !o) {
                        var r;
                        let e = null === (r = t.attributes) || void 0 === r ? void 0 : r.find(t=>t.id === s.attribute && t.default);
                        if (!(null == e ? void 0 : e.default))
                            return;
                        return "".concat(i).concat(e.default)
                    }
                    return "".concat(i).concat(s.text || o)
                }
                , "")
            }
            getDisplayable(t) {
                var e, i, s;
                return null === (s = this.characterData) || void 0 === s ? void 0 : null === (i = s.avatar) || void 0 === i ? void 0 : null === (e = i.display) || void 0 === e ? void 0 : e[t]
            }
            makeXY(t) {
                if (t)
                    return {
                        x: t,
                        y: t
                    }
            }
            getReactPiecesURLs() {
                return this.getPiecesURLs().filter(t=>t)
            }
            getPiecesURLs() {
                var t;
                if (!(null === (t = this.avatarData) || void 0 === t ? void 0 : t.pieces))
                    return console.log("missing avatar! should have default here."),
                    [];
                let e = this.avatarData.pieces.reduce((t,e)=>({
                    ...t,
                    [e.id]: e
                }), {});
                return this.avatarData.pieces.filter(t=>!t.background).map(t=>{
                    var i, o, r, l, a, n, h, d;
                    let u;
                    if (u = "".concat(s.pZ, "/game/avatars/").concat(this.avatarData.id),
                    null === (r = this.characterData) || void 0 === r ? void 0 : null === (o = r.avatar) || void 0 === o ? void 0 : null === (i = o.display) || void 0 === i ? void 0 : i.nft) {
                        let i = this.buildNftPieceUrl(t, this.characterData.avatar.display, e);
                        if (!i)
                            return;
                        u += i
                    } else {
                        let i = null !== (a = this.getDisplayable(t.id)) && void 0 !== a ? a : t
                          , s = e[i.type] || t;
                        if (null === (l = s.url) || void 0 === l ? void 0 : l.override) {
                            let e = this.buildOverridePieceUrl(t, t=>{
                                var e;
                                return null === (e = this.characterData.avatar.display[t]) || void 0 === e ? void 0 : e[t]
                            }
                            );
                            if (!e)
                                return;
                            u += e
                        } else {
                            s.id !== t.id && (i = null !== (d = this.getDisplayable(s.id)) && void 0 !== d ? d : s);
                            let e = i.type || s.id;
                            if (!e)
                                return;
                            if (u += "/".concat(e) + ((null === (n = s.url) || void 0 === n ? void 0 : n.prefix) || ""),
                            s.attributes) {
                                if (!s.attributes.every(t=>t.value || i[t.id] || t.default))
                                    return;
                                u += s.attributes.reduce((t,e)=>"".concat(t, "/").concat(e.value || i[e.id] || e.default), "")
                            }
                            u += ((null === (h = s.url) || void 0 === h ? void 0 : h.suffix) || "") + ".png"
                        }
                    }
                    return u
                }
                )
            }
            getPiecesSpriteData() {
                var t, e, i, o, r, l, a;
                let n = this.getPiecesURLs()
                  , h = {
                    ...null !== (o = this.avatarData.physics) && void 0 !== o ? o : {}
                }
                  , d = this.avatarData.sprite.size ? {
                    ...this.avatarData.sprite.size
                } : void 0;
                if ((null === (t = this.avatarData.physics) || void 0 === t ? void 0 : t.offset) && h.size) {
                    let t = null !== (r = this.avatarData.sprite.scale) && void 0 !== r ? r : 1;
                    d || (d = {
                        width: h.size.width / t,
                        height: h.size.height / t
                    }),
                    d.width * t > 32 && (d.width = Math.round(32 / t)),
                    d.height * t > 48 && (d.height = Math.round(48 / t)),
                    h.offset = {
                        x: h.offset.x + (d.width - h.size.width / t) / 2,
                        y: h.offset.y + (d.height - h.size.height / t) / 2
                    }
                }
                let u = this.makeXY(null === (i = this.characterData.avatar) || void 0 === i ? void 0 : null === (e = i.sprite) || void 0 === e ? void 0 : e.scale) || {
                    x: s.A$,
                    y: s.A$
                }
                  , c = n.filter(t=>t);
                return 0 === c.length ? [{
                    id: this.characterData.id,
                    key: "empty",
                    element: "",
                    type: "character",
                    size: this.avatarData.sprite.size,
                    container: d,
                    scale: u,
                    flip: null === (a = this.characterData.avatar) || void 0 === a ? void 0 : null === (l = a.sprite) || void 0 === l ? void 0 : l.flip,
                    origin: this.characterData.origin,
                    position: this.characterData.position || {
                        x: s.B_,
                        y: s.B_
                    },
                    physics: h,
                    animations: this.avatarData.animations,
                    hidden: !1,
                    avatar: this.avatarData
                }] : c.map(t=>{
                    var e, i;
                    let o = CharacterHelper.getPieceKey(t);
                    return {
                        id: this.characterData.id,
                        key: o,
                        element: o,
                        type: "character",
                        image: t,
                        size: this.avatarData.sprite.size,
                        container: d,
                        scale: u,
                        flip: null === (i = this.characterData.avatar) || void 0 === i ? void 0 : null === (e = i.sprite) || void 0 === e ? void 0 : e.flip,
                        origin: this.characterData.origin,
                        position: this.characterData.position || {
                            x: s.B_,
                            y: s.B_
                        },
                        physics: h,
                        animations: this.avatarData.animations,
                        hidden: !1,
                        avatar: this.avatarData
                    }
                }
                )
            }
            static getPieceKey(t) {
                return (0,
                o.ZB)(t)
            }
            constructor(t, e) {
                this.characterData = t,
                this.avatarData = e
            }
        }
    },
    76570: function(t, e, i) {
        function isMobile(t) {
            return t < 600
        }
        function getInnerSize() {
            return {
                width: window.innerWidth,
                height: window.innerHeight
            }
        }
        function calcScale() {
            var t;
            if (isMobile(window.innerWidth))
                return window.innerWidth / 300;
            let e = null !== (t = window.devicePixelRatio) && void 0 !== t ? t : 1
              , i = Math.min(window.innerWidth * e / 600, window.innerHeight * e / 360);
            return i < 1 ? 1 / e : Math.floor(i) / e
        }
        i.d(e, {
            Zm: function() {
                return calcScale
            },
            tq: function() {
                return isMobile
            },
            yU: function() {
                return getInnerSize
            }
        })
    },
    4314: function(t, e, i) {
        i.r(e),
        i.d(e, {
            default: function() {
                return RoomScene
            }
        });
        var s = i(82260)
          , o = i.n(s)
          , r = i(34853)
          , l = i(51322)
          , a = i(34377)
          , n = i(76873)
          , h = i(60604)
          , d = i(51465)
          , u = i(64939);
        let BaseNode = class BaseNode {
            get properties() {
                return this.propCache || (this.propCache = this.getProperties()),
                this.propCache
            }
            get type() {
                return this.properties.type
            }
            get hitTestSprite() {
                return this.sprite
            }
            get key() {
                return this.properties.key
            }
            get element() {
                return this.properties.element
            }
            get uniqueId() {
                return this.properties.id
            }
            get scale() {
                return this.properties.scale || {
                    x: 1,
                    y: 1
                }
            }
            get flip() {
                return !!this.properties.flip
            }
            _depth() {
                var t, e, i;
                let {physics: s} = this.properties
                  , o = null == s ? void 0 : s.depth;
                if (o) {
                    if (o instanceof Number)
                        return o;
                    if (void 0 !== o.add)
                        return this.position.y + o.add;
                    if ("y" === o.equal)
                        return this.position.y
                } else if ((null == s ? void 0 : s.circular) && (null === (e = this.collision) || void 0 === e ? void 0 : null === (t = e.size) || void 0 === t ? void 0 : t.height))
                    return ((null === (i = this.position) || void 0 === i ? void 0 : i.y) || h.B_) + this.offsetY + this.collision.size.height / 2;
                return this.bottom
            }
            get depth() {
                return this._depth()
            }
            get position() {
                return this.isCursor ? this.tempPosition : this.properties.position
            }
            get owner() {
                return this.properties.owner
            }
            get x() {
                var t, e, i;
                return (null === (t = this.collision) || void 0 === t ? void 0 : t.origin) && this.position ? this.position.x || 0 : (null !== (i = null === (e = this.position) || void 0 === e ? void 0 : e.x) && void 0 !== i ? i : h.B_) + .5 * this.width
            }
            get y() {
                var t, e, i;
                return (null === (t = this.collision) || void 0 === t ? void 0 : t.origin) && this.position ? this.position.y || 0 : (null !== (i = null === (e = this.position) || void 0 === e ? void 0 : e.y) && void 0 !== i ? i : h.B_) + .5 * this.height
            }
            get bottom() {
                var t, e, i, s, o, r, l, a, n;
                return (null === (e = this.collision) || void 0 === e ? void 0 : null === (t = e.origin) || void 0 === t ? void 0 : t.y) === 1 ? (null === (i = this.position) || void 0 === i ? void 0 : i.y) || 0 : (null === (o = this.collision) || void 0 === o ? void 0 : null === (s = o.size) || void 0 === s ? void 0 : s.height) ? (null !== (n = null === (a = this.position) || void 0 === a ? void 0 : a.y) && void 0 !== n ? n : h.B_) + this.offsetY + this.collision.size.height : ((null === (r = this.position) || void 0 === r ? void 0 : r.y) || h.B_) + ((null === (l = this.sprite) || void 0 === l ? void 0 : l.height) || 10)
            }
            get width() {
                var t, e, i, s;
                return (null === (i = this.properties.sprite) || void 0 === i ? void 0 : null === (e = i[0]) || void 0 === e ? void 0 : null === (t = e.size) || void 0 === t ? void 0 : t.width) || (null === (s = this.sprite) || void 0 === s ? void 0 : s.width) || 0
            }
            get height() {
                var t, e, i, s;
                return (null === (i = this.properties.sprite) || void 0 === i ? void 0 : null === (e = i[0]) || void 0 === e ? void 0 : null === (t = e.size) || void 0 === t ? void 0 : t.height) || (null === (s = this.sprite) || void 0 === s ? void 0 : s.height) || 0
            }
            get collision() {
                return this.properties.physics
            }
            get temp() {
                return this.isCursor
            }
            get offsetX() {
                var t, e;
                return ((null === (e = this.collision) || void 0 === e ? void 0 : null === (t = e.offset) || void 0 === t ? void 0 : t.x) || 0) * this.scale.x
            }
            get offsetY() {
                var t, e;
                return ((null === (e = this.collision) || void 0 === e ? void 0 : null === (t = e.offset) || void 0 === t ? void 0 : t.y) || 0) * this.scale.y
            }
            get animations() {
                return this.properties.animations
            }
            get animMode() {
                return this.properties.animMode
            }
            get collides() {
                var t;
                return !this.isCursor && (null === (t = this.collision) || void 0 === t ? void 0 : t.enabled) || !1
            }
            get hidden() {
                return this.properties.hidden || !1
            }
            get allowClick() {
                var t;
                return !this.isCursor && !(null === (t = this.scene) || void 0 === t ? void 0 : t.clickCaptured())
            }
            get hasClickAction() {
                return !!(this.properties.onClick || this.animMode === u.m3.click)
            }
            get hasOnCollide() {
                return !!(this.properties.onCollide || this.animMode & u.m3.approach)
            }
            hasHoverText() {
                return !this.isCursor && !!this.properties.hoverText
            }
            resetProps() {
                this.propCache = void 0
            }
            static isAnimated(t) {
                return t.animations && Object.keys(t.animations).length > 0
            }
            static getFrameDimension(t) {
                var e, i, s, o, r, l, a, n;
                let h = Object.values(t.animations).find(t=>t && void 0 !== t.frameHeight && void 0 !== t.frameWidth);
                return {
                    frameWidth: (null == h ? void 0 : h.frameWidth) || (null === (e = t.size) || void 0 === e ? void 0 : e.width) || (null === (o = t.sprite) || void 0 === o ? void 0 : null === (s = o[0]) || void 0 === s ? void 0 : null === (i = s.size) || void 0 === i ? void 0 : i.width) || 32,
                    frameHeight: (null == h ? void 0 : h.frameHeight) || (null === (r = t.size) || void 0 === r ? void 0 : r.height) || (null === (n = t.sprite) || void 0 === n ? void 0 : null === (a = n[0]) || void 0 === a ? void 0 : null === (l = a.size) || void 0 === l ? void 0 : l.height) || 48
                }
            }
            setupCollision(t) {
                var e;
                let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                this.body && this.scene.removeCollider(this.body),
                this.body = t,
                i && this.scene.addCollider(t);
                let {collision: s, scale: o, sprite: r} = this;
                if ((null == s ? void 0 : s.origin) && (null == r || r.setOrigin(null == s ? void 0 : s.origin.x, null == s ? void 0 : s.origin.y),
                null == r || r.refreshBody()),
                (null == s ? void 0 : null === (e = s.size) || void 0 === e ? void 0 : e.width) && s.offset && t) {
                    let e = this.flip ? this.width - s.offset.x * o.x - s.size.width : s.offset.x * o.x;
                    s.circular ? t.setCircle(Math.max(s.size.width, s.size.height) / 2, e, s.offset.y * o.y) : (t.setSize(s.size.width, s.size.height),
                    t.setOffset(e, s.offset.y * o.y))
                }
            }
            tweenTo(t) {
                var e, i;
                let s = null !== (i = this.body) && void 0 !== i ? i : this.sprite;
                if (s && (null === (e = this.scene) || void 0 === e ? void 0 : e.tweens)) {
                    this.setHover(!1),
                    console.log("tweening to ".concat(t.position.x, ", ").concat(t.position.y, " ").concat(!!this.body));
                    let e = this.scene.tweens.add({
                        targets: [s],
                        ease: t.easing,
                        duration: t.duration || 1500,
                        repeat: 0,
                        x: t.position.x,
                        y: t.position.y,
                        yoyo: !1,
                        onComplete: ()=>{
                            e.remove()
                        }
                        ,
                        onStop: ()=>{
                            e.remove()
                        }
                    })
                }
                t.animation && this.play(t.animation)
            }
            play() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default"
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                if (this.animations && t in this.animations) {
                    var i, s;
                    let o = {
                        key: "".concat(this.key, "-").concat(t),
                        delay: e
                    };
                    null === (s = this.sprite) || void 0 === s || null === (i = s.anims) || void 0 === i || i.play(o, !0)
                }
            }
            stop() {
                var t, e;
                (null === (e = this.sprite) || void 0 === e ? void 0 : null === (t = e.anims) || void 0 === t ? void 0 : t.isPlaying) && this.sprite.anims.stop()
            }
            generateFrames(t, e, i) {
                var s, o;
                let r = null !== (s = i.start) && void 0 !== s ? s : 0
                  , l = null !== (o = i.end) && void 0 !== o ? o : -1
                  , a = []
                  , n = i.frames
                  , h = this.scene.textures.get(t);
                if (!h)
                    return console.warn("Texture ".concat(t, " not found")),
                    a;
                let d = e && h.has(e) ? "".concat(e, "_") : void 0;
                if (!n) {
                    -1 === l && (l = h.frameTotal - 2),
                    -1 === r && (r = 0);
                    let t = l - r + 1;
                    if (t <= 0)
                        return a;
                    n = Array.from(Array(t)).map((t,e)=>r + e)
                }
                for (let e = 0; e < n.length; e++) {
                    let i = n[e];
                    d && (i = d + i),
                    h.has(i) ? a.push({
                        key: t,
                        frame: i
                    }) : -1 === n[e] ? (h.add(i, 0, 0, 0, 0, 0),
                    a.push({
                        key: t,
                        frame: i
                    })) : console.warn("Texture ".concat(t, " no frame ").concat(i))
                }
                return a
            }
            createAnimation(t, e, i, s, o) {
                if (!s)
                    return;
                let r = !1
                  , l = {};
                s.frames ? (l.frames = s.frames,
                "end"in s && -1 === s.end && (r = !0)) : (l.start = void 0 !== s.start ? s.start : 0,
                l.end = void 0 !== s.end ? s.end : 0);
                let a = this.generateFrames(e, o, l);
                if (null == a ? void 0 : a.length)
                    return null == t ? void 0 : t.anims.create({
                        key: "".concat(e, "-").concat(i),
                        frames: a,
                        frameRate: s.frameRate || 6,
                        repeat: void 0 !== s.repeat ? s.repeat : 0,
                        hideOnComplete: r
                    })
            }
            setupAnimation() {
                let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                this.animations && (Object.entries(this.animations).forEach(t=>{
                    let[e,i] = t;
                    this.createAnimation(this.sprite, this.key, e, i, this.element)
                }
                ),
                t && this.play("default", 1e3 * Math.random()))
            }
            contextWith(t) {
                return {
                    ...t
                }
            }
            clicked(t, e) {
                var i;
                this.animMode === u.m3.click && this.play(),
                this.emmitPointerEvents(a.fb.GAME_OBJECT_CLICKED, this.properties.element, t, e, this.contextWith({
                    action: null === (i = this.properties.actions) || void 0 === i ? void 0 : i.click
                }))
            }
            collided() {
                var t;
                if (this.isCursor)
                    return !0;
                this.animMode && this.animMode & u.m3.approach && this.play();
                let e = {
                    key: this.properties.element,
                    onCollide: null === (t = this.properties) || void 0 === t ? void 0 : t.onCollide,
                    ...this.contextWith({})
                };
                return a.ZP.emitEventNow(a.fb.PLAYER_COLLIDED_WITH_OBJECT, e),
                !0
            }
            uncollided() {
                var t;
                if (this.isCursor)
                    return !0;
                this.animMode === u.m3.approachloop && this.stop();
                let e = {
                    key: this.properties.element,
                    onCollide: null === (t = this.properties) || void 0 === t ? void 0 : t.onCollide,
                    ...this.contextWith({})
                };
                return a.ZP.emitEventNow(a.fb.PLAYER_UNCOLLIDED_WITH_OBJECT, e),
                !0
            }
            showHoverText(t, e) {
                var i, s, o, r;
                let l = null === (s = this.scene) || void 0 === s ? void 0 : null === (i = s.input) || void 0 === i ? void 0 : i.activePointer;
                t ? this.emmitPointerEvents(a.fb.GAME_OBJECT_MOUSEOVER, this.properties.element, l, null === (o = this.scene.selfPlayer) || void 0 === o ? void 0 : o.position, this.contextWith({
                    text: this.properties.hoverText,
                    item: e
                })) : this.emmitPointerEvents(a.fb.GAME_OBJECT_MOUSEOUT, this.properties.element, l, null === (r = this.scene.selfPlayer) || void 0 === r ? void 0 : r.position)
            }
            setupInteraction() {
                var t;
                let e = null === (t = this.hitTestSprite) || void 0 === t ? void 0 : t.setInteractive();
                e && e.setData("pixelnode", this)
            }
            loadAsset(t) {
                if (BaseNode.isAnimated(t) && !t.texframe) {
                    let {frameWidth: e, frameHeight: i} = BaseNode.getFrameDimension(t);
                    this.scene.preloadAsset(t.key, {
                        image: t.image,
                        frameWidth: e,
                        frameHeight: i,
                        hash: t.hash
                    })
                } else
                    this.scene.preloadAsset(t.key, {
                        image: t.image,
                        hash: t.hash
                    })
            }
            setHover(t) {
                t && !this.isCursor ? this.outline(!0) : this.outline(!1)
            }
            magnetTo(t, e) {}
            updateHoverAnimation() {
                var t, e;
                if ((null === (t = this.outlineContainer) || void 0 === t ? void 0 : t.visible) && this.sprite) {
                    let t = this.sprite.depth - 1;
                    this.outlineContainer.setDepth(t).setPosition(this.sprite.x, this.sprite.y),
                    null === (e = this.outlineContainer) || void 0 === e || e.each(t=>{
                        var e;
                        let i = t.getData("cloned");
                        (null === (e = i.frame) || void 0 === e ? void 0 : e.name) !== void 0 && t.setFrame(i.frame.name)
                    }
                    )
                }
            }
            addOutlineSprites(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , i = [];
                if (null == t ? void 0 : t.texture) {
                    var s, o, r, l;
                    let a = e ? t.x : 0
                      , n = e ? t.y : 0
                      , h = null === (s = this.scene) || void 0 === s ? void 0 : s.add.sprite(a - 2, n - 2, t.texture.key);
                    return i.push(h),
                    h = null === (o = this.scene) || void 0 === o ? void 0 : o.add.sprite(a + 2, n - 2, t.texture.key),
                    i.push(h),
                    h = null === (r = this.scene) || void 0 === r ? void 0 : r.add.sprite(a - 2, n + 2, t.texture.key),
                    i.push(h),
                    h = null === (l = this.scene) || void 0 === l ? void 0 : l.add.sprite(a + 2, n + 2, t.texture.key),
                    i.push(h),
                    i.forEach(e=>{
                        e.setData("cloned", t).setTintFill(16769327).setScale(t.scale).setAlpha(.5).setVisible(!0).setFlipX(t.flipX).setOrigin(t.originX, t.originY)
                    }
                    ),
                    this.outlineContainer ? this.outlineContainer.add(i) : this.outlineContainer = this.scene.add.container(this.x, this.y, i),
                    !0
                }
                return !1
            }
            outline(t) {
                if (!t) {
                    this.offOutline();
                    return
                }
                !this.outlineContainer && this.sprite && this.addOutlineSprites(this.sprite),
                this.outlineContainer && this.sprite && this.onOutline()
            }
            offOutline() {
                if (this.outlineContainer) {
                    let t = new Set;
                    this.outlineContainer.each(e=>{
                        let i = e.getData("cloned");
                        t.add(i)
                    }
                    ),
                    t.forEach(t=>{
                        t.off("animationupdate", this.updateHoverAnimation, this),
                        t.off("animationrepeat", this.updateHoverAnimation, this)
                    }
                    ),
                    this.outlineContainer.setVisible(!1)
                }
            }
            onOutline() {
                if (this.outlineContainer) {
                    this.outlineContainer.setVisible(!0),
                    this.updateHoverAnimation();
                    let t = new Set;
                    this.outlineContainer.each(e=>{
                        let i = e.getData("cloned");
                        t.add(i)
                    }
                    ),
                    t.forEach(t=>{
                        t.on("animationupdate", this.updateHoverAnimation, this),
                        t.on("animationrepeat", this.updateHoverAnimation, this)
                    }
                    )
                }
            }
            resetOutline() {
                var t, e;
                this.offOutline(),
                null === (t = this.outlineContainer) || void 0 === t || t.each(t=>{
                    null == t || t.destroy()
                }
                ),
                null === (e = this.outlineContainer) || void 0 === e || e.destroy(),
                this.outlineContainer = void 0
            }
            applyChanges() {}
            getSnapPosition(t, e) {
                var i, s, o, r, l;
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!this.sprite)
                    return t;
                let n = this.sprite.getBounds()
                  , {height: d} = n
                  , u = t.x
                  , c = t.y;
                h.D9 !== e && (u -= e / 2,
                c -= e / 2);
                let p = Math.floor(u / e) * e
                  , v = Math.ceil(c / e) * e;
                if (a) {
                    let t = n.height > e ? Math.round(Math.floor(n.height / e) / 2) : 0;
                    if (v = v - d + t * e,
                    null === (i = this.getProperties().physics) || void 0 === i ? void 0 : i.origin) {
                        let t = this.getProperties().physics.origin;
                        t.x < .5 ? p -= n.width * t.x : p += n.width * t.x,
                        t.y < .5 ? v -= n.height * t.y : v += n.height * t.y
                    }
                } else
                    (null === (o = this.properties.buildArea) || void 0 === o ? void 0 : null === (s = o.offset) || void 0 === s ? void 0 : s.x) && (p -= this.properties.buildArea.offset.x % e),
                    (null === (l = this.properties.buildArea) || void 0 === l ? void 0 : null === (r = l.offset) || void 0 === r ? void 0 : r.y) && (v -= this.properties.buildArea.offset.y % e);
                return {
                    x: p,
                    y: v
                }
            }
            updateTemporaryPosition(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.D9
                  , i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                this.tempPosition = e > 0 ? this.getSnapPosition(t, e, i) : t
            }
            pickUp() {
                this.isCursor = !0,
                this.setHover(!1)
            }
            returnCursor() {
                this.isCursor = !1
            }
            get disabled() {
                return this._disabled
            }
            disable() {
                if (!this._disabled) {
                    var t, e, i, s, o, r;
                    this._disabled = !0,
                    this.savedData = {
                        alpha: null !== (o = null === (t = this.sprite) || void 0 === t ? void 0 : t.alpha) && void 0 !== o ? o : 0,
                        interactive: null !== (r = null === (i = this.sprite) || void 0 === i ? void 0 : null === (e = i.input) || void 0 === e ? void 0 : e.enabled) && void 0 !== r && r
                    },
                    this.savedData.alpha && this.sprite.setAlpha(.5),
                    null === (s = this.sprite) || void 0 === s || s.disableInteractive()
                }
            }
            enable() {
                if (this._disabled && (this._disabled = !1,
                this.savedData)) {
                    var t, e;
                    this.savedData.alpha && (null === (t = this.sprite) || void 0 === t || t.setAlpha(this.savedData.alpha)),
                    this.savedData.interactive && (null === (e = this.sprite) || void 0 === e || e.setInteractive()),
                    delete this.savedData
                }
            }
            preload() {
                this.load()
            }
            create() {
                this.add(),
                this.scene.onNodeCreated(this)
            }
            update() {
                this.applyChanges()
            }
            destroy() {
                var t, e;
                this.scene && this.body && this.scene.removeCollider(this.body),
                this.resetOutline(),
                null === (t = this.body) || void 0 === t || t.destroy(),
                null === (e = this.sprite) || void 0 === e || e.destroy(!0)
            }
            calcTriggerArea(t) {
                var e, i, s, o, r, l;
                let a = (null === (e = this.body) || void 0 === e ? void 0 : e.x) || this.x
                  , n = (null === (i = this.body) || void 0 === i ? void 0 : i.y) || this.y
                  , h = (null === (s = this.body) || void 0 === s ? void 0 : s.width) || (null == t ? void 0 : null === (o = t.size) || void 0 === o ? void 0 : o.width) || this.width
                  , d = (null === (r = this.body) || void 0 === r ? void 0 : r.height) || (null == t ? void 0 : null === (l = t.size) || void 0 === l ? void 0 : l.height) || this.height
                  , u = null == t ? void 0 : t.triggerRadius;
                return u ? {
                    x: a,
                    y: n,
                    radius: u
                } : {
                    x: a,
                    y: n,
                    width: h,
                    height: d
                }
            }
            getBuildArea() {
                var t, e, i, s, o, r, l, a;
                let {buildArea: n} = this.getProperties()
                  , h = null === (t = this.collision) || void 0 === t ? void 0 : t.offset
                  , d = null === (e = this.collision) || void 0 === e ? void 0 : e.size
                  , u = null == n ? void 0 : n.tilelike;
                return (null == n ? void 0 : n.offset) && (null == n ? void 0 : n.size) ? {
                    left: this.x - this.width / 2 + (null !== (i = n.offset.x) && void 0 !== i ? i : 0),
                    top: this.y - this.height / 2 + (null !== (s = n.offset.y) && void 0 !== s ? s : 0),
                    width: n.size.width,
                    height: n.size.height,
                    tilelike: u
                } : {
                    left: this.x - this.width / 2 + (null !== (o = null == h ? void 0 : h.x) && void 0 !== o ? o : 0),
                    top: this.y - this.height / 2 + (null !== (r = null == h ? void 0 : h.y) && void 0 !== r ? r : 0),
                    width: null !== (l = null == d ? void 0 : d.width) && void 0 !== l ? l : this.width,
                    height: null !== (a = null == d ? void 0 : d.height) && void 0 !== a ? a : this.height,
                    tilelike: u
                }
            }
            canTargetSurface(t) {
                var e;
                return null === (e = this.properties.targetSurfaceTypes) || void 0 === e ? void 0 : e.includes(t)
            }
            getTriggerArea() {
                let t = this.getProperties().onCollide;
                return (null == t ? void 0 : t.radius) ? {
                    x: this.x,
                    y: this.y,
                    radius: t.radius
                } : this.calcTriggerArea(this.collision)
            }
            constructor(t, e=!1) {
                this.scene = t,
                this.isCursor = e,
                this.tempPosition = {
                    x: 0,
                    y: 0
                },
                this.hoverTint = 10066176,
                this.emmitPointerEvents = (t,e,i,s,o)=>{
                    let r = {
                        key: e,
                        mouse: {
                            x: i.x,
                            y: i.y
                        },
                        world: {
                            x: i.worldX,
                            y: i.worldY
                        },
                        object: {
                            x: this.x,
                            y: this.y,
                            width: this.width,
                            height: this.height
                        },
                        selfPlayer: s,
                        leftClick: i.leftButtonReleased(),
                        rightClick: i.rightButtonReleased(),
                        ...o
                    };
                    a.ZP.emitEventNow(t, r)
                }
            }
        }
        ;
        let HitTestObject = class HitTestObject extends o().GameObjects.Container {
            CircleContains(t, e, i) {
                return o().Geom.Circle.ContainsPoint(t, {
                    x: e,
                    y: i
                })
            }
            setInteractive(t, e, i) {
                return super.setInteractive(t, e, i),
                this
            }
            constructor(t, e, i, s, o, r) {
                super(t, e, i),
                this.depth = r,
                this.setSize(s, o),
                this.visible = !0
            }
        }
        ;
        var c = i(82485);
        let GenericNode = class GenericNode extends BaseNode {
            load() {
                this.loadAsset(this.properties)
            }
            get hitTestSprite() {
                var t;
                return null !== (t = this.hittest) && void 0 !== t ? t : this.sprite
            }
            clickableWithItem(t) {
                return (0,
                c.ZZ)(t, this.properties.element, this.properties.entityType, void 0, this.properties.id)
            }
            getTextureAndFrame() {
                let t = this.properties
                  , e = t.element
                  , i = t.texframe
                  , s = this.key;
                if (!i)
                    return [s];
                let o = this.scene.textures.get(s);
                if (!o)
                    return [s];
                if (!o.has(e)) {
                    var r, l, a, n, h, d, u, c, p, v, m, y, f, g;
                    let s = o.add(e, 0, null !== (r = null == i ? void 0 : i[0]) && void 0 !== r ? r : 0, null !== (l = null == i ? void 0 : i[1]) && void 0 !== l ? l : 0, null !== (a = null == i ? void 0 : i[2]) && void 0 !== a ? a : 0, null !== (n = null == i ? void 0 : i[3]) && void 0 !== n ? n : 0);
                    if (s) {
                        let r, l;
                        let a = t.fc || 1;
                        r = (null === (h = t.size) || void 0 === h ? void 0 : h.width) ? t.size.width * a : (i[2] || 0) + (i[4] || 0) + (i[6] || 0),
                        l = (null === (d = t.size) || void 0 === d ? void 0 : d.height) ? t.size.height : (i[3] || 0) + (i[5] || 0) + (i[7] || 0),
                        s.setTrim(r, l, null !== (p = i[4]) && void 0 !== p ? p : 0, null !== (v = i[5]) && void 0 !== v ? v : 0, null !== (m = i[2]) && void 0 !== m ? m : 0, null !== (y = i[3]) && void 0 !== y ? y : 0);
                        let n = null !== (f = null === (u = t.size) || void 0 === u ? void 0 : u.width) && void 0 !== f ? f : r / a
                          , b = null !== (g = null === (c = t.size) || void 0 === c ? void 0 : c.height) && void 0 !== g ? g : l
                          , w = Math.floor(r / n)
                          , x = Math.floor(l / b);
                        for (let t = 0; t < a; t++) {
                            let i = t % w
                              , r = (t - i) / w
                              , l = i * n + s.cutX
                              , a = 0
                              , h = n;
                            i > 0 ? l -= s.x : (h -= s.x,
                            a = s.x),
                            i + 1 === w && (h = s.cutX + s.cutWidth - l);
                            let d = r * b + s.cutY
                              , u = 0
                              , c = b;
                            r > 0 ? d -= s.y : (c -= s.y,
                            u = s.y),
                            r + 1 === x && (c = s.cutY + s.cutHeight - d);
                            let p = o.add("".concat(e, "_").concat(t), s.sourceIndex, l, d, h, c);
                            null == p || p.setTrim(n, b, a, u, h, c)
                        }
                    }
                }
                return [s, "".concat(e, "_0")]
            }
            add() {
                let t = 0 !== this.height
                  , e = this.getTextureAndFrame();
                if (this.sprite = this.collides ? this.scene.physics.add.sprite(this.x, this.y, e[0], e[1]) : this.scene.add.sprite(this.x, this.y, e[0], e[1]),
                !t && (this.properties.size = {
                    width: this.sprite.width,
                    height: this.sprite.height
                },
                this.sprite.setPosition(this.x, this.y),
                this.collides && this.sprite.body.reset(this.x, this.y)),
                this.sprite.setDepth(this.depth),
                this.sprite.setScale(this.scale.x, this.scale.y),
                this.sprite.setFlipX(this.flip),
                this.collides)
                    try {
                        this.setupCollision(this.sprite.body)
                    } catch (t) {
                        console.error(t)
                    }
                this.hasClickAction && (this.hittest = new HitTestObject(this.scene,this.x,this.y,this.sprite.width,this.sprite.height,this.depth + 2e3),
                this.scene.add.existing(this.hittest));
                let i = void 0 === this.animMode || this.animMode === u.m3.loop;
                this.setupAnimation(i),
                this.setupInteraction(),
                this.hidden && (this.sprite.setVisible(this.isCursor),
                this.scene.invisibleObjects.push(this))
            }
            returnCursor() {
                var t, e, i;
                super.returnCursor(),
                null === (t = this.sprite) || void 0 === t || t.setPosition(this.x, this.y),
                null === (e = this.hittest) || void 0 === e || e.setPosition(this.x, this.y),
                null === (i = this.sprite) || void 0 === i || i.setDepth(this.depth)
            }
            applyChanges() {
                var t, e;
                super.applyChanges(),
                null === (t = this.sprite) || void 0 === t || t.setPosition(this.x, this.y),
                null === (e = this.hittest) || void 0 === e || e.setPosition(this.x, this.y)
            }
            destroy() {
                var t;
                super.destroy(),
                null === (t = this.hittest) || void 0 === t || t.destroy()
            }
            constructor(t, e=!1) {
                super(t, e),
                this.scene = t,
                this.isCursor = e
            }
        }
        ;
        var p = i(39983)
          , v = i(83928)
          , m = i(79676);
        let ShadowNode = class ShadowNode {
            getRotatedSize(t, e, i) {
                let s = Math.abs(Math.cos(i))
                  , o = Math.abs(Math.sin(i));
                return {
                    w: t * s + e * o,
                    h: t * o + e * s
                }
            }
            getSkewOffset(t, e, i) {
                return Math.tan(i) * e
            }
            create(t, e) {
                try {
                    var i;
                    let s = t.x
                      , o = t.y;
                    this.source = t,
                    this.key = t.texture.key;
                    let r = null === (i = t.frame) || void 0 === i ? void 0 : i.name
                      , l = t.height;
                    if (t.body && (l = t.height - t.body.height),
                    this.shadow = new m.f0(this.scene,s,o,this.key,r),
                    this.scene.add.existing(this.shadow),
                    this.shadow.setScale(t.scaleX, t.scaleY),
                    this.shadow.setTint(0),
                    this.shadow.setAlpha(.3),
                    t.visible || this.shadow.setVisible(!1),
                    l < .30000000000000004 * this.source.height) {
                        this.scaleY = 1,
                        this.skewX = 0;
                        let t = this.getSkewOffset(this.shadow.width, l, .36);
                        this.offsetX = 2 * t,
                        this.offsetY = -this.offsetX / Math.tan(.36)
                    } else {
                        let e = this.getSkewOffset(this.shadow.width, this.shadow.height, .36);
                        this.scaleY = .7,
                        t.flipX ? (this.shadow.scaleX = -1 * this.shadow.scaleX,
                        this.skewX = .36,
                        this.shadow.setSkewX(.36)) : (this.skewX = -.36,
                        this.shadow.setSkewX(-.36)),
                        this.offsetX = e / 2,
                        this.offsetY = (.30000000000000004 * this.shadow.height - this.shadow.frame.y) * .5
                    }
                    let a = t.anims && t.texture.frameTotal > 1;
                    a && (this.source.on("animationupdate", this.updateFrame, this),
                    this.source.on("animationcomplete", this.updateFrame, this)),
                    this.update(e)
                } catch (t) {
                    console.log(t)
                }
            }
            updateFrame() {
                var t, e, i;
                let s = null === (t = this.source) || void 0 === t ? void 0 : t.frame
                  , o = !!((null === (e = this.source) || void 0 === e ? void 0 : e.visible) && (null == s ? void 0 : s.name) !== void 0);
                this.shadow && (null == s ? void 0 : s.name) !== void 0 && (o !== this.shadow.visible && this.shadow.setVisible(o),
                s.name !== (null === (i = this.shadow.frame) || void 0 === i ? void 0 : i.name) && (this.shadow.setFrame(s.name),
                this.shadow.resetVerts(),
                this.skewX && this.shadow.setSkewX(this.skewX)))
            }
            update(t) {
                this.shadow && this.source && (t ? (this.shadow.setPosition(t.x + this.source.x + this.offsetX, t.y + this.source.y + this.offsetY),
                this.shadow.setDepth(t.depth - 1e3),
                this.shadow.setVisible(this.source.visible && t.visible)) : (this.shadow.setPosition(this.source.x + this.offsetX, this.source.y + this.offsetY),
                this.shadow.setDepth(this.source.depth - 1e3),
                this.shadow.setVisible(this.source.visible)),
                this.updateFrame(),
                this.source.flipX ? this.shadow.setScale(-this.source.scaleX, this.source.scaleY * this.scaleY) : this.shadow.setScale(this.source.scaleX, this.source.scaleY * this.scaleY))
            }
            destroy() {
                var t, e, i;
                null === (t = this.shadow) || void 0 === t || t.destroy(),
                null === (e = this.source) || void 0 === e || e.off("animationupdate", this.updateFrame, this),
                null === (i = this.source) || void 0 === i || i.off("animationcomplete", this.updateFrame, this),
                delete this.shadow,
                delete this.source
            }
            constructor(t) {
                this.scene = t,
                this.offsetX = 10,
                this.offsetY = -10,
                this.scaleY = .7,
                this.skewX = .36,
                this.key = ""
            }
        }
        ;
        let ObjectNode = class ObjectNode extends GenericNode {
            getKey() {
                return this.properties.key
            }
            add() {
                let t = !!this.scene.renderer.gl;
                super.add();
                try {
                    var e, i, s, o, r, l, a, n;
                    null === (e = this.body) || void 0 === e || e.setImmovable(),
                    null === (i = this.sprite) || void 0 === i || i.setDepth(this.depth);
                    let h = this.properties.labels;
                    if (t && (null == h ? void 0 : h.includes("bendy")) && "1" === (0,
                    v.Ul)("enhanced_enabled")) {
                        let t = this.scene.renderer.pipelines.get("Bend");
                        null === (r = this.sprite) || void 0 === r || r.setPipeline(t)
                    }
                    if (this.properties.soundId && !this.isCursor && this.position) {
                        let t = {
                            x: this.x,
                            y: this.y
                        };
                        (null === (a = this.collision) || void 0 === a ? void 0 : null === (l = a.size) || void 0 === l ? void 0 : l.height) && (t.y = this.position.y + this.offsetY + .5 * this.collision.size.height,
                        t.x = this.position.x + this.offsetX + .5 * this.collision.size.width),
                        null === (n = p.default.instance) || void 0 === n || n.addPositional(this.uniqueId, this.properties.soundId, t)
                    }
                    t && (null === (o = this.properties.sprite) || void 0 === o ? void 0 : null === (s = o[0]) || void 0 === s ? void 0 : s.shadow) && this.sprite && !this.isCursor && (this.shadow = new ShadowNode(this.scene),
                    this.shadow.create(this.sprite))
                } catch (t) {
                    console.log(t)
                }
            }
            applyChanges() {
                super.applyChanges(),
                this.sprite && this.shadow && this.shadow.update()
            }
            returnCursor() {
                super.returnCursor(),
                this.sprite && this.shadow && this.shadow.update()
            }
            editCategory() {
                return this.properties.isWall ? "walls" : "objects"
            }
            contextWith(t) {
                return super.contextWith({
                    ...t,
                    useType: "object",
                    targetId: this.getProperties().id
                })
            }
            destroy() {
                var t, e;
                super.destroy(),
                null === (t = this.shadow) || void 0 === t || t.destroy(),
                delete this.shadow,
                null === (e = p.default.instance) || void 0 === e || e.removePositional(this.uniqueId)
            }
            getTriggerId() {
                return this.uniqueId
            }
            constructor(t, e, i=!1) {
                super(t, i),
                this.scene = t,
                this.getProperties = e,
                this.isCursor = i
            }
        }
        ;
        var y = i(71343);
        let EntityNode = class EntityNode extends GenericNode {
            editCategory() {
                return "entities"
            }
            get uniqueId() {
                return this.mid
            }
            static checkTimers() {
                let t = Date.now();
                t - EntityNode.rateLimit > 500 && (EntityNode.rateLimit = t,
                a.ZP.emitEventNow(y.m.timerCheck))
            }
            get hasClickAction() {
                return "storage" === this.entityType
            }
            update() {
                super.update()
            }
            add() {
                var t;
                super.add(),
                null === (t = this.body) || void 0 === t || t.setImmovable()
            }
            contextWith(t) {
                return super.contextWith({
                    ...t,
                    useType: "entity",
                    entityType: this.properties.entityType,
                    targetId: this.mid
                })
            }
            convertToPlayerEntity(t, e) {
                this.mid = t,
                this.getProperties = e
            }
            setPosition(t) {
                var e;
                this.properties.position = {
                    x: t.x,
                    y: t.y
                },
                null === (e = this.sprite) || void 0 === e || e.setDepth(this.depth)
            }
            getTriggerId() {
                return this.mid
            }
            constructor(t, e, i=!1) {
                super(t, i),
                this.scene = t,
                this.getProperties = e,
                this.isCursor = i,
                this.currentFrame = 0;
                let s = e();
                this.mid = s.id,
                this.entityType = s.entityType
            }
        }
        ;
        EntityNode.rateLimit = 0;
        var f = i(19445)
          , g = i(70247);
        let SoilNode = class SoilNode extends EntityNode {
            get type() {
                return "soil"
            }
            get collides() {
                return !1
            }
            add() {
                super.add();
                let t = g.Z.getGameEntity(this.properties.key);
                this.soilDef = null == t ? void 0 : t.soil
            }
            clickableWithItem(t) {
                return "normal" === this.state && (0,
                c.ZP)(t, this.properties.key, this.entityType)
            }
            setupAnimation() {}
            update() {
                var t;
                this.soilDef && (this.currentFrame = this.soilDef.states[this.state].spriteFrame),
                null === (t = this.sprite) || void 0 === t || t.setFrame(this.currentFrame),
                super.update()
            }
            contextWith(t) {
                return super.contextWith({
                    ...t,
                    animation: this.getAnimation()
                })
            }
            play() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default"
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                if ("crop-seeding-anims" === t) {
                    var i;
                    let {position: t} = this.properties;
                    if (!t)
                        return;
                    let {x: e, y: s} = t;
                    null === (i = this.scene) || void 0 === i || i.playOneTimeAnimation({
                        spriteName: "crop-seeding",
                        animationName: "crop-seeding-anims",
                        x: e,
                        y: s
                    })
                } else
                    super.play(t, e)
            }
            getAnimation() {
                var t, e;
                let i = (0,
                f.B6)(l.h.getState());
                if (!i || !(null === (t = this.scene) || void 0 === t ? void 0 : t.playOneTimeAnimation))
                    return;
                let {position: s} = this.properties;
                if (!s)
                    return;
                let {x: o, y: r} = s
                  , a = (0,
                c.ZP)(i, "ent_soil", "soil");
                if (!a || !(0,
                c.yC)(i, l.h.getState().game.player))
                    return;
                let n = null === (e = i.onUse) || void 0 === e ? void 0 : e.types;
                if (!n || !n.length)
                    return;
                let h = "";
                if (n.includes("plant") && (h = "crop-seeding"),
                h)
                    return {
                        spriteName: h,
                        animationName: "".concat(h, "-anims"),
                        x: o,
                        y: r
                    }
            }
            constructor(t, e, i=!1) {
                super(t, e, i),
                this.scene = t,
                this.getProperties = e,
                this.isCursor = i,
                this.state = "normal"
            }
        }
        ;
        let CropNode = class CropNode extends EntityNode {
            get collides() {
                return !1
            }
            get formatTime() {
                if (this.needsWater)
                    return r.ZP.t("watercrop", {
                        ns: "ui",
                        defaultValue: "Needs Water"
                    });
                if (this.growTime && ["seed", "healthy1", "healthy2"].includes(this.state)) {
                    var t;
                    let e = (Date.now() - (null !== (t = this.startTime) && void 0 !== t ? t : Date.now())) / 1e3
                      , i = 60 * this.growTime - e;
                    return "TIMER:".concat(i, ":").concat(this.startTime, ":").concat(this.growTime)
                }
                return ["ripe"].includes(this.state) ? r.ZP.t("harvestready", {
                    ns: "ui",
                    defaultValue: "Ready to Shear"
                }) : r.ZP.t("deadcrop", {
                    ns: "ui",
                    defaultValue: "Dead - Use Shears"
                })
            }
            updateState(t, e) {
                this.growTime = (0,
                c.SB)(e, t.crop),
                this.startTime = Date.now(),
                this.state = t.crop.state,
                this.needsWater = (0,
                c.q7)(e, t.crop),
                this.timer && clearTimeout(this.timer),
                this.timer = 0;
                let i = (0,
                c.N8)(e, t.crop);
                !this.needsWater && i > 0 && (this.timer = setTimeout(EntityNode.checkTimers, 6e4 * i + 1e3))
            }
            clickableWithItem(t) {
                return (0,
                c.ZP)(t, this.properties.element, this.entityType, this.state)
            }
            get hasClickAction() {
                return !0
            }
            setHover(t) {
                var e, i;
                if (!this.hoverSprite) {
                    let t = null === (i = this.sprite) || void 0 === i ? void 0 : i.getBounds();
                    if (!t)
                        return;
                    let e = "cropHover".concat(t.width, "_").concat(t.height);
                    if (!this.scene.textures.exists(e)) {
                        let i = this.scene.add.graphics();
                        i.fillStyle(52224, .2),
                        i.fillRoundedRect(0, 0, t.width, t.height, 6),
                        i.generateTexture(e, t.width, t.height)
                    }
                    this.hoverSprite = this.scene.add.image(t.centerX, t.centerY, e),
                    this.hoverSprite.setDepth(this.sprite.depth - 1)
                }
                null === (e = this.hoverSprite) || void 0 === e || e.setVisible(t)
            }
            setupAnimation() {}
            update() {
                var t;
                this.cropDef && (this.currentFrame = this.cropDef.states[this.state].spriteFrame),
                null === (t = this.sprite) || void 0 === t || t.setFrame(this.currentFrame),
                super.update()
            }
            destroy() {
                var t;
                super.destroy(),
                this.timer && clearTimeout(this.timer),
                null === (t = this.hoverSprite) || void 0 === t || t.destroy()
            }
            contextWith(t) {
                return super.contextWith({
                    ...t,
                    animation: this.getAnimation(),
                    text: this.formatTime,
                    style: "solid",
                    type: "crop",
                    cropState: this.state
                })
            }
            hasHoverText() {
                return !this.isCursor && !!this.formatTime
            }
            showHoverText(t, e) {
                t && e || super.showHoverText(t, e)
            }
            getAnimation() {
                var t, e, i;
                let s = (0,
                f.B6)(l.h.getState());
                if (!s || !(null === (t = this.scene) || void 0 === t ? void 0 : t.playOneTimeAnimation))
                    return;
                let o = (0,
                c.ZP)(s, this.properties.element, null === (e = this.properties) || void 0 === e ? void 0 : e.entityType, this.state);
                if (!o)
                    return;
                let r = this.properties.position;
                if (!r)
                    return;
                let {x: a, y: n} = r;
                if (!(0,
                c.yC)(s, l.h.getState().game.player))
                    return;
                let h = null === (i = s.onUse) || void 0 === i ? void 0 : i.types;
                if (!h || !h.length)
                    return;
                let d = "";
                if (h.includes("plant") ? d = "crop-seeding" : h.includes("water") ? d = "crop-watering" : h.includes("fertilize") ? d = "crop-fertilizing" : h.includes("harvest") && (d = "itm_goldenRake" === s.id ? "crop-goldenrake-harvesting" : "crop-shear-harvesting"),
                d)
                    return {
                        spriteName: d,
                        animationName: "".concat(d, "-anims"),
                        x: a,
                        y: n
                    }
            }
            constructor(t, e, i=!1) {
                super(t, e, i),
                this.scene = t,
                this.getProperties = e,
                this.isCursor = i,
                this.state = "seed";
                let s = g.Z.getGameEntity(this.properties.element);
                this.cropDef = null == s ? void 0 : s.crop
            }
        }
        ;
        let ItemNode = class ItemNode extends GenericNode {
            editCategory() {
                return "items"
            }
            getTriggerId() {
                return this.id
            }
            constructor(t, e, i=!1) {
                super(t, i),
                this.scene = t,
                this.getProperties = e,
                this.isCursor = i;
                let s = e();
                this.id = s.id,
                i && (this.tempPosition = {
                    x: 0,
                    y: 0
                })
            }
        }
        ;
        var b = i(66030);
        let LayeredNode = class LayeredNode extends BaseNode {
            get layersProperties() {
                return this.getLayersProperties()
            }
            getProperties() {
                return this.getLayersProperties()[0]
            }
            load() {
                this.layersProperties.forEach(t=>{
                    this.loaded.push(t.key),
                    this.loadAsset(t)
                }
                )
            }
            play() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default"
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                this.layers.forEach(s=>{
                    var o;
                    let[r,l] = s
                      , a = "".concat(r, "-").concat(t);
                    (null === (o = l.anims) || void 0 === o ? void 0 : o.exists(a)) ? (l.anims.currentAnim && -1 !== l.anims.currentAnim.repeat ? (l.anims.chain(void 0),
                    l.anims.chain({
                        key: a,
                        delay: e,
                        timeScale: i
                    })) : (l.anims.play({
                        key: a,
                        delay: e,
                        timeScale: i
                    }, !0),
                    l.anims.timeScale = i),
                    l.setVisible(!0)) : l.setVisible(!1)
                }
                )
            }
            setHover(t) {
                let e = t ? this.hoverTint : 16777215;
                for (let[,t] of this.layers)
                    null == t || t.setTint(e)
            }
            setupAnimation() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.layersProperties.forEach(e=>{
                    e.animations && (Object.entries(e.animations).forEach(t=>{
                        let[i,s] = t;
                        this.createAnimation(this.layersSprites[e.key], "".concat(e.key), i, s)
                    }
                    ),
                    t && this.play("default", 1e3 * Math.random()))
                }
                )
            }
            get hitTestSprite() {
                return this.container
            }
            add() {
                var t, e;
                this.tallest = 16,
                this.widest = 10,
                this.container && (console.log("LayeredNode was not destroyed before recreation"),
                this.destroy());
                let i = this.scale;
                if (this.loaded.forEach(t=>{
                    let e = this.scene.add.sprite(0, 0, t).setDepth(this.depth)
                      , s = e.height * i.y
                      , o = e.width * i.x;
                    e.setScale(i.x, i.y),
                    e.setFlipX(this.flip),
                    s > this.tallest && (this.tallest = s),
                    o > this.widest && (this.widest = o),
                    this.layersSprites[t] = e
                }
                ),
                this.spriteWidth = this.widest,
                this.layers = Object.entries(this.layersSprites),
                this.sprite = null === (t = this.layers[0]) || void 0 === t ? void 0 : t[1],
                this.container = this.scene.add.container(this.x, this.y, Object.values(this.layersSprites)),
                this.properties.container && (this.widest = this.properties.container.width * i.x,
                this.tallest = this.properties.container.height * i.y),
                this.container.setSize(this.widest, this.tallest),
                this.collides)
                    try {
                        this.scene.physics.world.enable(this.container),
                        this.setupCollision(null === (e = this.container) || void 0 === e ? void 0 : e.body)
                    } catch (t) {
                        console.error("Impossible to set colision for ".concat(this.key), this.properties, t)
                    }
                this.setupAnimation(),
                this.setupInteraction()
            }
            destroy() {
                var t, e, i;
                null === (t = this.container) || void 0 === t || t.each(t=>{
                    null == t || t.destroy()
                }
                ),
                null === (e = this.container) || void 0 === e || e.destroy(),
                this.container = void 0,
                null === (i = this.body) || void 0 === i || i.destroy(),
                this.body = void 0,
                this.layers.forEach(t=>{
                    let[,e] = t;
                    null == e || e.destroy()
                }
                ),
                this.layersSprites = {},
                this.layers = [],
                this.loaded = []
            }
            constructor(t, e=!1) {
                super(t, e),
                this.scene = t,
                this.isCursor = e,
                this.layersSprites = {},
                this.layers = [],
                this.tallest = 0,
                this.widest = 0,
                this.spriteWidth = 0,
                this.loaded = []
            }
        }
        ;
        let ParticleFX = class ParticleFX {
            static preload(t) {
                t.load.spritesheet("fx-spritesheet", (0,
                v.Uk)("/game/ui/sprites/fx-spritesheet.png"), {
                    frameWidth: 8,
                    frameHeight: 8
                }),
                p.default.loadAudio("snd_footstep1"),
                p.default.loadAudio("snd_footstep2"),
                t.load.spritesheet("fx-heart", (0,
                v.Uk)("/game/ui/sprites/fx-heart.png"), {
                    frameWidth: 32,
                    frameHeight: 32
                })
            }
            static init(t) {
                ParticleFX.heartEmitter = t.add.particles(0, 0, "fx-heart", {
                    frame: [0],
                    gravityY: 4,
                    scale: {
                        start: .2,
                        end: 1.2
                    },
                    alpha: {
                        start: 1,
                        end: 0
                    },
                    lifespan: {
                        min: 800,
                        max: 2200
                    },
                    quantity: 6,
                    delay: {
                        min: 0,
                        max: 500
                    },
                    angle: {
                        min: 250,
                        max: 290
                    },
                    speed: {
                        min: 20,
                        max: 40
                    }
                }),
                ParticleFX.heartEmitter.setDepth(1e4),
                ParticleFX.footprintEmitter = t.add.particles(0, 0, "fx-spritesheet", {
                    frame: [1],
                    angle: 0,
                    speed: 0,
                    gravityY: 0,
                    scale: {
                        start: 1,
                        end: .5
                    },
                    alpha: {
                        start: .2,
                        end: 0
                    },
                    lifespan: ParticleFX.footprintLifespan,
                    maxAliveParticles: 400
                }),
                ParticleFX.footprintEmitter.setDepth(0),
                ParticleFX.hotprintEmitter = t.add.particles(0, 0, "fx-spritesheet", {
                    frame: [0],
                    angle: -90,
                    speed: -10,
                    gravityY: 1,
                    scale: {
                        start: 1,
                        end: .5
                    },
                    alpha: {
                        start: 1,
                        end: 0
                    },
                    tint: 16752896,
                    lifespan: .9 * ParticleFX.footprintLifespan,
                    maxAliveParticles: 200
                }),
                ParticleFX.hotprintEmitter.setDepth(0),
                ParticleFX.clickEmitter = t.add.particles(0, 0, "fx-spritesheet", {
                    frame: [8, 9, 10, 11, 12, 13, 14, 15],
                    angle: {
                        min: 180,
                        max: 360
                    },
                    speed: {
                        min: 8,
                        max: 20
                    },
                    frequency: 500,
                    gravityY: 0,
                    quantity: ParticleFX.clickParticleCount,
                    scale: {
                        start: 1,
                        end: 1
                    },
                    alpha: {
                        start: .4,
                        end: 0
                    },
                    lifespan: {
                        min: 800,
                        max: 1200
                    }
                }),
                ParticleFX.clickEmitter.setDepth(1e4)
            }
            static destroy() {
                var t, e, i;
                null === (t = ParticleFX.footprintEmitter) || void 0 === t || t.destroy(),
                null === (e = ParticleFX.heartEmitter) || void 0 === e || e.destroy(),
                null === (i = ParticleFX.clickEmitter) || void 0 === i || i.destroy()
            }
            createFootsteps(t) {
                this.footprintCounter = 1,
                this.lastFootprintX = t.x,
                this.lastFootprintY = t.y
            }
            emitFootsteps(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16752896;
                if (!ParticleFX.enabled)
                    return;
                let s = Math.round(t.x)
                  , o = Math.round(t.y)
                  , r = (this.lastFootprintX - s) ** 2 + (this.lastFootprintY - o) ** 2;
                if (ParticleFX.debug && console.log("footprint dist:".concat(r, " at:").concat(s, ",").concat(o)),
                r > ParticleFX.footprintSpacing) {
                    if (this.footprintCounter += 1,
                    e && ParticleFX.hotprintEmitter)
                        ParticleFX.hotprintEmitter.setParticleTint(i),
                        ParticleFX.hotprintEmitter.emitParticle(1, s, o);
                    else {
                        var l;
                        null === (l = ParticleFX.footprintEmitter) || void 0 === l || l.emitParticle(1, s, o)
                    }
                    this.lastFootprintX = s,
                    this.lastFootprintY = o,
                    this.isPlayer && (1 & this.footprintCounter) == 1 && p.default.playAudio("snd_footstep".concat(((2 & this.footprintCounter) >> 1) + 1))
                }
            }
            static emitDust(t) {
                var e;
                if (!ParticleFX.enabled)
                    return;
                let i = Math.round(t.x)
                  , s = Math.round(t.y);
                ParticleFX.debug && console.log("clickFX at:".concat(i, ",").concat(s)),
                null === (e = ParticleFX.clickEmitter) || void 0 === e || e.explode(ParticleFX.clickParticleCount, i, s)
            }
            static emitHearts(t) {
                if (!ParticleFX.enabled)
                    return;
                let e = Math.round(t.x)
                  , i = Math.round(t.y);
                ParticleFX.debug && console.log("hearts at:".concat(e, ",").concat(i)),
                ParticleFX.heartEmitter && 1e3 > ParticleFX.heartEmitter.getAliveParticleCount() && ParticleFX.heartEmitter.explode(6, e, i)
            }
            constructor() {
                this.lastFootprintX = -1,
                this.lastFootprintY = -1,
                this.footprintCounter = 0,
                this.isPlayer = !1
            }
        }
        ;
        ParticleFX.enabled = !0,
        ParticleFX.debug = !1,
        ParticleFX.footprintSpacing = 100,
        ParticleFX.footprintLifespan = 2500,
        ParticleFX.heartLifespan = 3e3,
        ParticleFX.clickParticleCount = 8;
        let ChatBubble = class ChatBubble extends o().GameObjects.Container {
            createNameBubble() {
                let t = this.scene.add.text(0, 0, this.name, {
                    fontFamily: "'Press Start 2P', Sans-Serif",
                    fontSize: "8px",
                    color: "#".concat(this.textcolor.toString(16)),
                    align: "center",
                    resolution: this.scene.cameras.main.zoom * window.devicePixelRatio * 2
                });
                t.setMaxLines(1);
                let e = t.getBounds()
                  , i = Math.max(e.width + 6, 30)
                  , s = this.createBubble(i, e.height + 6, this.bgcolor, .8);
                this.objName && this.remove([this.objName, this.objNameBg], !0),
                this.objName = t,
                this.objNameBg = s,
                this.objName.setVisible(!1),
                this.objNameBg.setVisible(!1),
                t.setPosition(-e.width / 2, -e.height - ChatBubble.arrowHeight),
                s.setPosition(-i / 2, -e.height - ChatBubble.arrowHeight - 3),
                this.add(this.objNameBg),
                this.add(this.objName)
            }
            createBubble(t, e, i, s) {
                let o = this.scene.add.graphics({
                    x: 0,
                    y: 0
                })
                  , r = Math.min(t, e) / 4;
                o.fillStyle(i, s),
                o.fillRoundedRect(0, 0, t, e, r);
                let l = Math.floor(t / 2 - ChatBubble.arrowWidth)
                  , a = Math.floor(t / 2 + ChatBubble.arrowWidth)
                  , n = Math.floor(t / 2)
                  , h = Math.floor(e + ChatBubble.arrowHeight);
                return o.fillTriangle(l, e, a, e, n, h),
                o
            }
            createSpeechBubble(t) {
                var e;
                let i = this.scene.cameras.main.zoom * window.devicePixelRatio * 2
                  , s = this.scene.add.text(0, 0, this.text, {
                    fontFamily: "'Press Start 2P', Sans-Serif",
                    fontSize: "".concat(null !== (e = this.fontSize) && void 0 !== e ? e : 8, "px"),
                    color: "#".concat(ChatBubble.chatTextColor.toString(16)),
                    align: "center",
                    baselineY: 2,
                    padding: {
                        bottom: 3
                    },
                    resolution: i,
                    wordWrap: {
                        width: t - 8
                    }
                });
                s.setMaxLines(3);
                let o = s.getBounds()
                  , r = o.height
                  , l = this.createBubble(o.width + 8, r + 8, ChatBubble.chatBackground, .8);
                s.setResolution(10),
                s.setPosition(-o.width / 2, -r - ChatBubble.arrowHeight),
                l.setPosition(-o.width / 2 - 4, -r - ChatBubble.arrowHeight - 4),
                this.objText && this.remove([this.objText, this.objTextBg], !0),
                this.objTextBg = l,
                this.objText = s,
                this.add(this.objTextBg),
                this.add(this.objText)
            }
            updateName(t) {
                this.name = t,
                this.createNameBubble()
            }
            setEnableName(t) {
                this.enableName = t,
                this.toggleChat(!!this.text)
            }
            toggleChat(t) {
                var e, i, s, o;
                null === (e = this.objTextBg) || void 0 === e || e.setVisible(t),
                null === (i = this.objText) || void 0 === i || i.setVisible(t),
                null === (s = this.objNameBg) || void 0 === s || s.setVisible(!t && this.enableName),
                null === (o = this.objName) || void 0 === o || o.setVisible(!t && this.enableName)
            }
            showTyping() {
                this.text && "..." !== this.text || this.setBubbleText("...")
            }
            setBubbleText(t) {
                this.chatTimeout && (clearTimeout(this.chatTimeout),
                delete this.chatTimeout),
                this.text = t,
                this.createSpeechBubble(200),
                this.toggleChat(!0),
                this.chatTimeout = setTimeout(()=>{
                    this.text = "",
                    this.toggleChat(!1)
                }
                , 4e3)
            }
            setOffset(t, e) {
                this.offset.x = t,
                this.offset.y = e
            }
            updatePosition(t, e) {
                super.setPosition(t + this.offset.x, e + this.offset.y)
            }
            destroy() {
                super.destroy(),
                this.chatTimeout && clearTimeout(this.chatTimeout),
                this.removeAll(!0)
            }
            constructor(t, e, i, s, o, r) {
                super(t, e, i),
                this.name = s,
                this.depth = 1e4,
                this.visible = !0,
                this.offset = {
                    x: 0,
                    y: 0
                },
                this.bgcolor = null != o ? o : 3355596,
                this.enableName = !1,
                this.textcolor = null != r ? r : 16777215,
                this.setSize(200, 100),
                this.createNameBubble()
            }
        }
        ;
        ChatBubble.arrowHeight = 4,
        ChatBubble.arrowWidth = 6,
        ChatBubble.chatBackground = 16777215,
        ChatBubble.chatTextColor = 0;
        let ParticleNode = class ParticleNode {
            destroy() {
                if (this.follow) {
                    var t;
                    null === (t = this.emitter) || void 0 === t || t.destroy()
                }
            }
            setAnimations(t) {
                this.animations = t
            }
            startAnim(t) {
                if (t.frames ? this.emitter.setEmitterFrame(t.frames) : void 0 !== t.start && void 0 !== t.end && this.emitter.setEmitterFrame(Array.from(Array(t.end - t.start + 1), (e,i)=>t.start + i)),
                -1 === t.repeat) {
                    let e = t.frameRate > 0 ? 1e3 / t.frameRate : 100;
                    this.emitter.flow(e)
                } else
                    t.repeat > 0 ? this.emitter.emitParticle(t.repeat) : this.emitter.emitParticle(1)
            }
            play(t) {
                if (t && this.animations) {
                    let e = this.animations.find(e=>e.animation === t);
                    if (!e) {
                        this.stop();
                        return
                    }
                    this.delay ? setTimeout(()=>this.startAnim(e), this.delay) : this.startAnim(e)
                } else {
                    var e;
                    this.emitter.flow(null !== (e = this.rate) && void 0 !== e ? e : 100)
                }
            }
            stop() {
                this.emitter.stop()
            }
            setCircleZone(t) {
                let e = 0;
                this.emitter.setEmitterAngle(()=>90 - (360 * e + (Math.random() - .5) * 10)),
                this.emitter.emitZones = [],
                this.emitter.addEmitZone({
                    source: {
                        getRandomPoint: i=>{
                            e = Math.random();
                            let s = 2 * e * Math.PI;
                            i.x = Math.sin(s) * t,
                            i.y = Math.cos(s) * t
                        }
                    }
                })
            }
            setFixed(t, e, i) {
                this.emitter.setDepth(i),
                this.emitter.setPosition(t, e),
                this.follow = !1
            }
            setFollow(t, e, i) {
                this.offset = {
                    x: t,
                    y: e
                },
                this.depthOffset = i,
                this.follow = !0
            }
            setGravity(t, e) {
                this.well = this.emitter.createGravityWell({
                    x: this.emitter.x,
                    y: this.emitter.y,
                    power: t,
                    gravity: e,
                    epsilon: 16
                })
            }
            update(t) {
                this.follow && t && (this.emitter.startFollow(t, this.offset.x, this.offset.y),
                this.emitter.setDepth(t.depth + this.depthOffset),
                this.well && (this.well.x = t.x + this.offset.x,
                this.well.y = t.y + this.offset.y))
            }
            constructor(t, e, i) {
                void 0 === i.emitZone && delete i.emitZone,
                this.emitter = t.add.particles(0, 0, e, i),
                this.depthOffset = 100,
                this.follow = !0,
                this.offset = {
                    x: 0,
                    y: 0
                },
                this.rate = this.emitter.frequency,
                this.delay = i.delayStart
            }
        }
        ;
        let CharacterNode = class CharacterNode extends LayeredNode {
            get scale() {
                return this.properties.scale ? {
                    x: this.properties.scale.x * this._zoom,
                    y: this.properties.scale.y * this._zoom
                } : {
                    x: this._zoom,
                    y: this._zoom
                }
            }
            set zoom(t) {
                this._zoom = t
            }
            get x() {
                var t;
                return (null === (t = this.properties.position) || void 0 === t ? void 0 : t.x) || h.B_
            }
            get y() {
                var t;
                return ((null === (t = this.properties.position) || void 0 === t ? void 0 : t.y) || h.B_) - (this.feetY - h.XX)
            }
            get position() {
                if (this.isCursor)
                    return {
                        x: this.tempPosition.x,
                        y: this.tempPosition.y + (this.feetY - h.XX)
                    };
                if (this.container) {
                    let {x: t, y: e} = this.container;
                    return {
                        x: t,
                        y: e
                    }
                }
                return {
                    x: this.x,
                    y: this.y
                }
            }
            get bodyPosition() {
                if (this.body) {
                    let {x: t, y: e} = this.body.position;
                    return {
                        x: t,
                        y: e
                    }
                }
                return this.position
            }
            get isMoving() {
                return this.moving
            }
            get hasClickAction() {
                return !0
            }
            get username() {
                var t;
                return null === (t = this.playerData) || void 0 === t ? void 0 : t.label
            }
            setHover(t) {
                var e;
                super.setHover(t),
                null === (e = this.chatBubble) || void 0 === e || e.setEnableName(t)
            }
            clickableWithItem(t) {
                return !1
            }
            editCategory() {
                return "entities"
            }
            fadeIn() {
                this.fadeOnCreate = !0,
                this.petNode && this.petNode.fadeIn()
            }
            setVisible(t) {
                var e, i;
                this.visible = t,
                null === (e = this.container) || void 0 === e || e.setVisible(t),
                null === (i = this.petNode) || void 0 === i || i.setVisible(t)
            }
            updateSpritesToMatchMovementDirection() {
                var t, e, i;
                let s = this.facing;
                (null === (e = this.body) || void 0 === e ? void 0 : null === (t = e.velocity) || void 0 === t ? void 0 : t.x) !== 0 && (s = 0 > ((null === (i = this.body) || void 0 === i ? void 0 : i.velocity.x) || 0) ? -1 : 1,
                this.flip && (s *= -1)),
                this.updateFacing(s)
            }
            updateCollision() {
                let t = this.collision;
                if ((null == t ? void 0 : t.offset) && this.body) {
                    var e, i;
                    let s = this.scale;
                    if (this.facing > 0) {
                        let i = t.offset.x * s.x;
                        this.body.setOffset(i, t.offset.y * s.y),
                        null === (e = this.shadow) || void 0 === e || e.setX(4 + i + t.size.width / 2 - this.widest / 2)
                    } else {
                        let e = this.widest - t.offset.x * s.x - t.size.width;
                        this.body.setOffset(e, t.offset.y * s.y),
                        null === (i = this.shadow) || void 0 === i || i.setX(4 + e + t.size.width / 2 - this.widest / 2)
                    }
                }
            }
            updateFacing(t) {
                var e;
                if (this.facing !== t && !(null === (e = this.properties.avatar) || void 0 === e ? void 0 : e.permanentFlip)) {
                    if (this.facing = t,
                    this.facing < 0)
                        for (let[,t] of this.layers)
                            t.setFlipX(!0);
                    else
                        for (let[,t] of this.layers)
                            t.setFlipX(!1);
                    this.updateCollision()
                }
            }
            getLayersProperties() {
                return this.characterHelper = new b.r(this.playerData,this.playerData.avatar),
                this.characterHelper.getPiecesSpriteData()
            }
            load() {
                var t;
                super.load(),
                this.petData && !this.petNode && (this.petNode = new PetNode(this.scene,this,this.petData)),
                null === (t = this.petNode) || void 0 === t || t.load()
            }
            updateName(t) {
                if (t !== this.playerData.label) {
                    var e;
                    this.playerData.label = t,
                    null === (e = this.chatBubble) || void 0 === e || e.updateName(t)
                }
            }
            updateAlpha(t) {
                var e, i;
                this.container && t !== (null === (i = this.playerData.avatar) || void 0 === i ? void 0 : null === (e = i.sprite) || void 0 === e ? void 0 : e.alpha) && (this.playerData.avatar.sprite.alpha = t,
                this.container.setAlpha(t))
            }
            showChatMessage(t) {
                var e;
                if (!t || !this.container)
                    return;
                let i = (0,
                v.FL)(t);
                null === (e = this.chatBubble) || void 0 === e || e.setBubbleText(i)
            }
            showChatTyping() {
                var t;
                this.container && (null === (t = this.chatBubble) || void 0 === t || t.showTyping())
            }
            setDefaultColors() {
                var t;
                (null === (t = this.playerData) || void 0 === t ? void 0 : t.kind) && ("npc" === this.playerData.kind ? (this.textbg = 4004513,
                this.textcolor = 16777215) : "vip" === this.playerData.kind ? (this.textbg = 16370533,
                this.textcolor = 9655068) : "pet" === this.playerData.kind ? (this.textbg = 2171169,
                this.textcolor = 16777215) : (this.textbg = 15262975,
                this.textcolor = 2236484))
            }
            updatePetData(t) {
                if (t)
                    return this.petNode ? this.petNode.updatePlayerData({
                        ...t,
                        position: null
                    }) : this.petNode = new PetNode(this.scene,this,t),
                    this.petData = t,
                    this.petNode;
                this.petNode && (this.petNode.destroy(),
                delete this.petData,
                delete this.petNode)
            }
            updatePlayerData(t) {
                if (t.avatar && (this.playerData.avatar = t.avatar),
                t.label && (this.playerData.label = t.label),
                t.modifiers && (this.playerData.modifiers = t.modifiers),
                t.kind && (this.playerData.kind = t.kind),
                t.position)
                    this.playerData.position = t.position;
                else {
                    let t = this.container;
                    t && (this.playerData.position = {
                        x: t.x,
                        y: t.y + (this.feetY - h.XX)
                    })
                }
                this.petNode && this.petNode.updatePlayerData({}),
                this.resetProps(),
                this.setDefaultColors()
            }
            setFacing(t) {
                this.updateFacing(t ? -1 : 1)
            }
            handleModifiers() {
                var t;
                if (this.boost = 1,
                (null === (t = this.playerData.modifiers) || void 0 === t ? void 0 : t.length) > 0) {
                    let t;
                    this.particleNodes || (this.particleNodes = []),
                    this.playerData.modifiers.forEach(e=>{
                        var i, s, r, l, a;
                        let n = o().Display.Color.ValueToColor(null !== (i = e.colour) && void 0 !== i ? i : 0);
                        switch (e.kind) {
                        case "speed10":
                            this.boost = 1.1,
                            this.footstepColor = n.color;
                            break;
                        case "speed15":
                            this.boost = 1.15,
                            this.footstepColor = n.color;
                            break;
                        case "og":
                            (t = new ParticleNode(this.scene,"fx-spritesheet",{
                                frame: [19, 20],
                                alpha: {
                                    start: .3,
                                    end: 1
                                },
                                scale: {
                                    start: 2,
                                    end: .1
                                },
                                lifespan: {
                                    min: 800,
                                    max: 1500
                                },
                                angle: {
                                    min: 0,
                                    max: 360
                                },
                                rotate: {
                                    min: -70,
                                    max: 70
                                },
                                speed: {
                                    min: 5,
                                    max: 20
                                },
                                tint: n.color,
                                frequency: 50
                            })).setCircleZone(18),
                            t.setFollow(0, 0, 160),
                            t.play(),
                            t.update(this.container),
                            null === (s = this.particleNodes) || void 0 === s || s.push(t);
                            break;
                        case "mayor":
                            (t = new ParticleNode(this.scene,"fx-spritesheet",{
                                frame: [21, 22, 23],
                                alpha: {
                                    start: 1,
                                    end: .3
                                },
                                scale: {
                                    start: .5,
                                    end: 2
                                },
                                lifespan: {
                                    min: 800,
                                    max: 1500
                                },
                                angle: {
                                    min: -30,
                                    max: 30
                                },
                                rotate: {
                                    start: 0,
                                    end: 360
                                },
                                speed: {
                                    min: 15,
                                    max: 30
                                },
                                frequency: 30
                            })).setCircleZone(18),
                            t.setFollow(0, 0, 160),
                            t.play(),
                            t.update(this.container),
                            null === (r = this.particleNodes) || void 0 === r || r.push(t);
                            break;
                        case "staff":
                            (t = new ParticleNode(this.scene,"fx-spritesheet",{
                                frame: 25,
                                scale: {
                                    start: 1,
                                    end: 2
                                },
                                alpha: {
                                    start: 1,
                                    end: .3
                                },
                                lifespan: {
                                    min: 800,
                                    max: 1500
                                },
                                angle: {
                                    min: 230,
                                    max: 310
                                },
                                speed: {
                                    min: 25,
                                    max: 50
                                },
                                frequency: 500
                            })).setGravity(.05, 2),
                            t.setFollow(0, -this.feetY - 4, 160),
                            t.play(),
                            t.update(this.container),
                            null === (l = this.particleNodes) || void 0 === l || l.push(t);
                            break;
                        case "farmhand":
                            (t = new ParticleNode(this.scene,"fx-spritesheet",{
                                frame: [28, 29],
                                scale: {
                                    start: 1,
                                    end: 2
                                },
                                alpha: {
                                    start: 1,
                                    end: .3
                                },
                                lifespan: {
                                    min: 800,
                                    max: 1500
                                },
                                angle: {
                                    min: 230,
                                    max: 310
                                },
                                speed: {
                                    min: 25,
                                    max: 50
                                },
                                frequency: 500
                            })).setGravity(.05, 2),
                            t.setFollow(0, -this.feetY - 4, 160),
                            t.play(),
                            t.update(this.container),
                            null === (a = this.particleNodes) || void 0 === a || a.push(t)
                        }
                    }
                    )
                }
                100 !== h.Y && (this.boost = 50 / h.Y)
            }
            create() {
                var t, e, i, s, o, r, l, a, n, h, d, u, c, p, v;
                super.create();
                let m = this.scale;
                this.tallest || (this.tallest = this.height * m.y),
                (null === (e = this.collision) || void 0 === e ? void 0 : null === (t = e.size) || void 0 === t ? void 0 : t.height) ? this.feetY = this.offsetY - this.tallest / 2 + this.collision.size.height : this.feetY = this.tallest / 2;
                let y = this.x
                  , f = this.y;
                if (null === (i = this.container) || void 0 === i || i.setPosition(y, f),
                this.chatBubble = new ChatBubble(this.scene,y,f,this.playerData.label,this.textbg,this.textcolor),
                this.scene.add.existing(this.chatBubble),
                this.facing = this.flip ? -1 : 1,
                this.fx = new ParticleFX,
                this.fx.createFootsteps({
                    x: y,
                    y: f + this.feetY
                }),
                this.chatBubble.setOffset(0, -this.tallest / 2),
                (null === (o = this.collision) || void 0 === o ? void 0 : null === (s = o.size) || void 0 === s ? void 0 : s.height) && (null === (r = this.collision) || void 0 === r ? void 0 : r.offset) && (null === (a = this.collision) || void 0 === a ? void 0 : null === (l = a.size) || void 0 === l ? void 0 : l.width) < 90 && (this.shadow = this.scene.add.ellipse(4 + this.collision.offset.x * m.x + this.collision.size.width / 2 - this.widest / 2, this.feetY - 5, Math.max(this.collision.size.width, 16), 8, 854825, .25),
                this.shadow.setRotation(-.2),
                this.container.addAt(this.shadow, 0)),
                null === (h = this.collision) || void 0 === h ? void 0 : null === (n = h.size) || void 0 === n ? void 0 : n.height) {
                    let t = this.container.y + ((null === (d = this.collision.offset) || void 0 === d ? void 0 : d.y) || 0) + this.collision.size.height / 2;
                    null === (u = this.container) || void 0 === u || u.setDepth(t)
                }
                this.handleModifiers(),
                this.updateCollision(),
                this.petNode && this.petNode.create();
                let g = null !== (c = this.playerData.avatar.sprite.alpha) && void 0 !== c ? c : 1;
                this.visible && this.fadeOnCreate && this.container ? (this.container.alpha = 0,
                null === (p = this.scene.tweens) || void 0 === p || p.add({
                    targets: [this.container],
                    ease: "Linear",
                    duration: 1e3,
                    alpha: g,
                    yoyo: !1,
                    delay: 0
                })) : (null === (v = this.container) || void 0 === v || v.setAlpha(g),
                this.visible || this.setVisible(this.visible)),
                delete this.fadeOnCreate
            }
            update() {
                var t, e, i, s, o, r, l;
                if (this.container) {
                    if (super.update(),
                    this.updateZOrder(),
                    this.updateBubble(),
                    (null === (t = this.tween) || void 0 === t ? void 0 : t.isPlaying()) || (null === (i = this.body) || void 0 === i ? void 0 : null === (e = i.velocity) || void 0 === e ? void 0 : e.x) || (null === (o = this.body) || void 0 === o ? void 0 : null === (s = o.velocity) || void 0 === s ? void 0 : s.y)) {
                        if (null === (l = this.fx) || void 0 === l || l.emitFootsteps({
                            x: this.position.x,
                            y: this.position.y + this.feetY
                        }, this.boost >= 1.1, this.footstepColor),
                        this.moving = !0,
                        this.particleNodes)
                            for (let t of this.particleNodes)
                                t.update(this.container)
                    } else
                        this.moving = !1;
                    this.updateSpritesToMatchMovementDirection(),
                    this.updateSpriteAnimation(),
                    null === (r = this.petNode) || void 0 === r || r.update()
                }
            }
            updateBubble() {
                var t;
                null === (t = this.chatBubble) || void 0 === t || t.updatePosition(this.container.x, this.container.y)
            }
            updateZOrder() {
                if (this.container) {
                    let t = this.isCursor ? 1e4 : this.container.y + this.feetY;
                    t !== this.container.depth && this.container.setDepth(t)
                }
            }
            fadeAndDestroy() {
                if (this.container && this.chatBubble) {
                    var t;
                    this.tween && this.tween.stop(),
                    this.tween = null === (t = this.scene.tweens) || void 0 === t ? void 0 : t.add({
                        targets: [this.container, this.chatBubble],
                        ease: "Linear",
                        duration: 1e3,
                        alpha: 0,
                        yoyo: !1,
                        delay: 0,
                        onComplete: ()=>{
                            this.destroy()
                        }
                    }),
                    this.petNode && this.petNode.fadeAndDestroy()
                } else
                    this.destroy()
            }
            move(t, e) {
                var i, s, o;
                if (this.tween && this.tween.stop(),
                this.container) {
                    if (null === (i = this.body) || void 0 === i || i.setVelocity(t.x, t.y),
                    e) {
                        let i = {
                            ...e
                        };
                        if (0 === t.x && 0 === t.y) {
                            let o = Math.sqrt((0,
                            v.DJ)({
                                x: this.container.x,
                                y: this.container.y
                            }, e))
                              , r = 1e3 * o / (h.Y * this.boost);
                            r < 40 || r > 3e3 ? this.container.setPosition(e.x, e.y) : (i.x += t.x * (r / 1e3),
                            i.y += t.y * (r / 1e3),
                            this.tween = null === (s = this.scene.tweens) || void 0 === s ? void 0 : s.add({
                                targets: [this.container],
                                ease: "Linear",
                                duration: r,
                                x: i.x,
                                y: i.y,
                                yoyo: !1,
                                delay: 0
                            }))
                        } else
                            i.x += .5 * t.x,
                            i.y += .5 * t.y,
                            this.tween = null === (o = this.scene.tweens) || void 0 === o ? void 0 : o.add({
                                targets: [this.container],
                                ease: "Linear",
                                duration: 500,
                                x: i.x,
                                y: i.y,
                                yoyo: !1,
                                delay: 0
                            });
                        this.playerData.position = i
                    }
                    this.updateSpritesToMatchMovementDirection()
                }
            }
            updateSpriteAnimation() {
                if (this.isMoving) {
                    var t;
                    let e = null === (t = this.body) || void 0 === t ? void 0 : t.velocity.length();
                    this.play("walk", 0, e ? e * h.fX : void 0)
                } else
                    this.play("idle")
            }
            petPlay(t, e) {
                this.petNode && this.petNode.petPlay(t, e)
            }
            destroy() {
                var t, e, i, s;
                null === (t = this.chatBubble) || void 0 === t || t.destroy(),
                null === (e = this.shadow) || void 0 === e || e.destroy(),
                null === (i = this.particleNodes) || void 0 === i || i.forEach(t=>t.destroy()),
                null === (s = this.petNode) || void 0 === s || s.destroy(),
                delete this.shadow,
                delete this.chatBubble,
                delete this.particleNodes,
                super.destroy()
            }
            constructor(t, e, i, s=!1) {
                super(t, s),
                this.scene = t,
                this.playerData = e,
                this.petData = i,
                this.isCursor = s,
                this.textbg = 15262975,
                this.textcolor = 2236484,
                this.moving = !1,
                this.facing = 1,
                this.feetY = 0,
                this.boost = 1,
                this.footstepColor = 1,
                this._zoom = 1,
                this.visible = !0,
                this.hoverTint = 13421823,
                this.setDefaultColors(),
                this.petData && (this.petNode = new PetNode(this.scene,this,i))
            }
        }
        ;
        let w = 1.2 * h.Y;
        let PetNode = class PetNode extends CharacterNode {
            update() {
                this.container && (this.updateFollow(),
                super.update())
            }
            setFollow(t, e) {
                this.followNode = t,
                this.followRadius = e,
                this.vTemp = new Phaser.Math.Vector2
            }
            updateFollow() {
                if (!this.followNode || !this.body)
                    return;
                let t = this.followNode.position
                  , e = this.position
                  , i = (0,
                v.DJ)(t, e)
                  , s = this.followRadius || 48
                  , o = s / 2;
                if (i > s * s) {
                    let i = this.vTemp;
                    i.x = t.x - e.x,
                    i.y = t.y - e.y,
                    i.normalize().scale(2),
                    i.x += .99 * this.body.velocity.x,
                    i.y += .99 * this.body.velocity.y,
                    i.lengthSq() > this.max_speed * this.max_speed && i.normalize().scale(this.max_speed),
                    this.body.setVelocity(i.x, i.y)
                } else if (this.body.velocity.lengthSq() > 0) {
                    let t = this.vTemp;
                    t.x = this.body.velocity.x,
                    t.y = this.body.velocity.y,
                    t.scale(.95),
                    i > o * o ? t.lengthSq() < h.Y * h.Y * .1 ? this.body.setVelocity(0, 0) : this.body.setVelocity(t.x, t.y) : t.lengthSq() > h.Y * h.Y * .2 && this.body.setVelocity(t.x, t.y)
                }
            }
            clickableWithItem(t) {
                var e;
                if (!this.isSelf)
                    return !1;
                if ((0,
                c.ZP)(t, "pet") || (null === (e = this.handlers) || void 0 === e ? void 0 : e[t]))
                    return !0;
                if (this.handlersRegEx) {
                    for (let e of this.handlersRegEx)
                        if (e.test(t))
                            return !0
                }
                return !1
            }
            get hasClickAction() {
                return this.isSelf
            }
            hasHoverText() {
                return !0
            }
            showHoverText(t) {
                this.setHover(t)
            }
            setupCollision(t) {
                super.setupCollision(t, !1)
            }
            contextWith(t) {
                return super.contextWith({
                    ...t,
                    useType: "pet",
                    type: "pet",
                    targetId: this.pet_mid
                })
            }
            petPlay(t, e) {
                e && this.showChatMessage(e),
                t && this.play(t)
            }
            create() {
                var t, e, i;
                super.create(),
                this.chatBubble.fontSize = 10,
                (null === (t = this.body) || void 0 === t ? void 0 : t.velocity) && (this.body.velocity.x = -1 * h.Y),
                this.updateMood(null !== (i = null === (e = this.playerData.avatar) || void 0 === e ? void 0 : e.mood) && void 0 !== i ? i : 1)
            }
            updateMood(t) {
                this.playerData.avatar.mood = t
            }
            updatePlayerData(t) {
                if (super.updatePlayerData(t),
                t.avatar) {
                    var e;
                    this.updateMood(null !== (e = t.avatar.mood) && void 0 !== e ? e : 1)
                }
            }
            setSelfPetEntity(t) {
                var e, i, s, o, r, l;
                let a;
                this.isSelf = !0,
                this.pet_mid = t.mid,
                this.updateName(t.avatar.name);
                let n = t.happiness > 15 ? 1 : t.happiness / 15;
                if (this.updateMood(n),
                !t.controlEntity)
                    return;
                let h = g.Z.getGameEntity(t.controlEntity);
                if (!(null == h ? void 0 : h.generic))
                    return;
                let {generic: d} = h
                  , u = t.scriptInstance;
                a = u ? u.current : null !== (r = null === (o = d.states) || void 0 === o ? void 0 : o.findIndex(t=>t.name === d.defaultState)) && void 0 !== r ? r : 0;
                let c = null === (e = d.states) || void 0 === e ? void 0 : e[a];
                c && (this.handlers = {},
                delete this.handlersRegEx,
                null === (l = c.handlers) || void 0 === l || l.forEach(t=>{
                    if (t.name.startsWith("/") && t.name.endsWith("/")) {
                        this.handlersRegEx || (this.handlersRegEx = []);
                        try {
                            this.handlersRegEx.push(new RegExp(t.name.substring(1, t.name.length - 1)))
                        } catch (t) {
                            console.error(t)
                        }
                    } else
                        this.handlers[t.name] = !0
                }
                ));
                let p = null === (s = d.trackers) || void 0 === s ? void 0 : null === (i = s.find(t=>"tiredness" === t.name)) || void 0 === i ? void 0 : i.value;
                p && 1 * p > 50 ? this.max_speed = w / 2 : this.max_speed = w
            }
            constructor(t, e, i) {
                super(t, i, null, !1),
                this.scene = t,
                this.max_speed = w,
                this.isSelf = !1,
                this.setFollow(e, 50)
            }
        }
        ;
        let getNpcCharacterData = (t,e)=>{
            var i, s;
            return getCharacterData({
                avatarId: e.npc.avatar,
                pieces: e.npc.avatarPieces,
                position: {
                    x: null !== (i = null == t ? void 0 : t.position.x) && void 0 !== i ? i : 0,
                    y: null !== (s = null == t ? void 0 : t.position.y) && void 0 !== s ? s : 0
                },
                label: e.npc.name,
                flip: null == t ? void 0 : t.flip,
                kind: "npc"
            })
        }
        ;
        let NpcNode = class NpcNode extends CharacterNode {
            setHover(t) {
                var e;
                super.setHover(t),
                null === (e = this.chatBubble) || void 0 === e || e.setEnableName(!0)
            }
            clickableWithItem() {
                return !0
            }
            contextWith(t) {
                return super.contextWith({
                    ...t,
                    entityType: "npc",
                    useType: "entity",
                    targetId: this.mid,
                    npcId: this.entityId
                })
            }
            get hitTestSprite() {
                var t;
                return !this.hittest && this.container && (this.widest || console.log("dont have size for", this.entityId),
                this.hittest = new HitTestObject(this.scene,this.x,this.y,this.widest,this.tallest,this.depth + 2e3),
                this.scene.add.existing(this.hittest)),
                null !== (t = this.hittest) && void 0 !== t ? t : this.sprite
            }
            create() {
                var t, e;
                this.textbg = 4004513,
                this.textcolor = 16777215,
                super.create(),
                null === (t = this.body) || void 0 === t || t.setImmovable(),
                this.hoverTint = 16777045,
                this.play("idle", 500 * Math.random()),
                null === (e = this.chatBubble) || void 0 === e || e.setEnableName(!0)
            }
            update() {
                if (super.update(),
                this.isCursor) {
                    var t;
                    let e = this.tempPosition;
                    null === (t = this.container) || void 0 === t || t.setPosition(e.x, e.y)
                }
                this.updateHittest()
            }
            updateHittest() {
                this.hittest && this.container && this.hittest.setPosition(this.container.x, this.container.y)
            }
            pickUp() {
                super.pickUp()
            }
            returnCursor() {
                var t;
                super.returnCursor();
                let e = this.properties.position;
                e && (null === (t = this.container) || void 0 === t || t.setPosition(e.x, e.y)),
                this.updateHittest()
            }
            move(t, e) {
                super.move(t, {
                    x: e.x,
                    y: e.y - (this.feetY - h.XX)
                }),
                this.updatePlayerData({
                    position: e
                })
            }
            destroy() {
                var t;
                super.destroy(),
                null === (t = this.hittest) || void 0 === t || t.destroy()
            }
            getTriggerId() {
                return this.entityId
            }
            constructor(t, e, i, s=!1) {
                var o;
                super(t, getNpcCharacterData(e, i), null, s),
                this.scene = t,
                this.isCursor = s,
                this.entityId = null !== (o = null == e ? void 0 : e.entity) && void 0 !== o ? o : i.id,
                this.mid = null == e ? void 0 : e.mid,
                (null == e ? void 0 : e.flip) && (this.facing = -1)
            }
        }
        ;
        let PlayerNode = class PlayerNode extends CharacterNode {
            get speed() {
                return this._speed
            }
            set speed(t) {
                t < .05 ? this._speed = .05 : t > 3 ? this._speed = 3 : this._speed = 100 * t / h.Y
            }
            setupCollision(t) {
                super.setupCollision(t, !1)
            }
            contextWith(t) {
                return super.contextWith({
                    ...t,
                    useType: "self",
                    type: "self"
                })
            }
            create() {
                super.create(),
                this.container && (this.previousPosition.x = this.container.x,
                this.previousPosition.y = this.container.y,
                this.lastUpdate > 0 && this.body && this.body.width > 16 && this.scene.checkCollision(this.container) && this.body.setSize(16, this.body.height)),
                this.fx && (this.fx.isPlayer = !0),
                this.petNode && (this.petNode.isSelf = !0),
                this.pauseMoving = !1
            }
            get hasClickAction() {
                return !this.stopMoving
            }
            clickableWithItem(t) {
                return (0,
                c.ZP)(t, "self", "player")
            }
            updatePlayerData(t) {
                if (t.avatar) {
                    var e;
                    this.pauseMoving = !0,
                    null === (e = this.body) || void 0 === e || e.setVelocity(0)
                }
                super.updatePlayerData(t)
            }
            moveTo(t, e) {
                var i;
                a.ZP.emitEventNow(a.Yi.PLAYER_MOVING, {
                    animation: "walk",
                    velocity: {
                        x: 0,
                        y: 0
                    },
                    position: {
                        x: t,
                        y: e
                    }
                }),
                null === (i = this.container) || void 0 === i || i.setPosition(t, e)
            }
            trampoline() {
                if (!this.container)
                    return;
                this.stopMoving = !0,
                this.container.setDepth(1e4);
                let t = this.scene.tweens.add({
                    targets: this.container,
                    scale: {
                        from: 1,
                        to: 50
                    },
                    angle: {
                        from: 0,
                        to: 230
                    },
                    ease: o().Math.Easing.Cubic.In,
                    duration: 1500,
                    repeat: 0,
                    yoyo: !1,
                    onComplete: ()=>{
                        t.remove()
                    }
                })
            }
            perfectDismount(t) {
                if (!this.container)
                    return;
                this.stopMoving = !0;
                let e = this.container.x;
                "roadleft" === t ? (this.setFacing(!0),
                e += 100) : "roadright" === t && (this.setFacing(!1),
                e -= 100),
                this.container.setDepth(1e4);
                let i = this.scene.tweens.add({
                    targets: this.container,
                    scale: {
                        from: 50,
                        to: 1
                    },
                    angle: {
                        from: 230,
                        to: 0
                    },
                    x: {
                        from: e,
                        to: this.container.x
                    },
                    ease: o().Math.Easing.Cubic.In,
                    duration: 1500,
                    repeat: 0,
                    yoyo: !1,
                    onComplete: ()=>{
                        this.stopMoving = !1,
                        i.remove()
                    }
                })
            }
            setPet(t) {
                var e;
                null === (e = this.petNode) || void 0 === e || e.setSelfPetEntity(t)
            }
            cliff() {
                if (!this.container)
                    return;
                this.stopMoving = !0,
                this.container.depth = 1;
                let t = 1 === this.facing
                  , e = this.scene.tweens.add({
                    targets: this.container,
                    scale: {
                        from: 1,
                        to: .2
                    },
                    angle: {
                        from: 0,
                        to: 620
                    },
                    x: this.container.x + (t ? 50 : -50),
                    y: this.container.y + 30,
                    ease: o().Math.Easing.Linear,
                    duration: 1500,
                    repeat: 0,
                    yoyo: !1,
                    onComplete: ()=>{
                        e.remove()
                    }
                })
            }
            updateZOrder() {
                this.stopMoving || super.updateZOrder()
            }
            update() {
                var t, e;
                let i = null === (t = this.container) || void 0 === t ? void 0 : t.body;
                if (!i)
                    return;
                if (!this.stopMoving && !this.pauseMoving) {
                    let {x: t, y: s} = this.container
                      , o = (t !== this.previousPosition.x || s !== this.previousPosition.y) && (0,
                    v.DJ)({
                        x: t,
                        y: s
                    }, this.previousPosition) >= 50
                      , r = !this.hitwall && !(0 === i.velocity.x && 0 === i.velocity.y);
                    (!i.velocity.equals(this.previousVelocity) && Date.now() - this.lastUpdate > 200 || o && (!r || Date.now() - this.lastUpdate > 2e3)) && (a.ZP.emitEventNow(a.Yi.PLAYER_MOVING, {
                        animation: "walk",
                        facing: this.facing,
                        velocity: {
                            x: i.velocity.x,
                            y: i.velocity.y
                        },
                        position: {
                            x: t,
                            y: s + (this.feetY - h.XX)
                        }
                    }),
                    this.previousVelocity.x = i.velocity.x,
                    this.previousVelocity.y = i.velocity.y,
                    this.previousPosition.x = t,
                    this.previousPosition.y = s,
                    this.lastUpdate = Date.now()),
                    o && (null === (e = p.default.instance) || void 0 === e || e.updatePosition(i.position))
                }
                let s = this.scene.mapBounds;
                if (s) {
                    let t = i.position
                      , e = this.vTemp;
                    if (e.x = 0,
                    e.y = 0,
                    !this.stopMoving && !this.pauseMoving) {
                        let i = this._speed * this.boost
                          , o = this.scene.movementPosition;
                        o ? (e.x = o.x - t.x,
                        e.y = o.y - t.y,
                        e.x * e.x + e.y * e.y < 90 && (i = .1,
                        e.x * e.x < 4 && (e.x = 0,
                        e.y = 0))) : (this.scene.cursor && (this.scene.cursor.left.isDown || this.scene.cursor.leftA.isDown) || this.scene.joystickState.left ? e.x = -1 : (this.scene.cursor && (this.scene.cursor.right.isDown || this.scene.cursor.rightD.isDown) || this.scene.joystickState.right) && (e.x = 1),
                        this.scene.cursor && (this.scene.cursor.up.isDown || this.scene.cursor.upW.isDown) || this.scene.joystickState.up ? e.y = -1 : (this.scene.cursor && (this.scene.cursor.down.isDown || this.scene.cursor.downS.isDown) || this.scene.joystickState.down) && (e.y = 1)),
                        e.x < 0 && t.x <= s.left && (e.x = 0),
                        e.x > 0 && t.x >= s.right && (e.x = 0),
                        e.y < 0 && t.y <= s.top && (e.y = 0),
                        e.y > 0 && t.y >= s.bottom && (e.y = 0),
                        e.normalize().scale(h.Y * i)
                    }
                    i.setVelocity(e.x, e.y)
                }
                delete this.hitwall,
                super.update()
            }
            constructor(t, e, i) {
                super(t, e, i, !1),
                this.scene = t,
                this.previousVelocity = {
                    x: 0,
                    y: 0
                },
                this.previousPosition = {
                    x: 0,
                    y: 0
                },
                this.lastUpdate = 0,
                this._speed = 100 / h.Y,
                this.stopMoving = !1,
                this.pauseMoving = !1,
                this.previousPosition.x = this.x,
                this.previousPosition.y = this.y,
                this.vTemp = new (o()).Math.Vector2
            }
        }
        ;
        let OtherPlayerNode = class OtherPlayerNode extends CharacterNode {
            hasHoverText() {
                return this.visible && !this.isCursor && !!this.properties.hoverText
            }
            get hasClickAction() {
                return this.visible
            }
            showHoverText(t) {
                this.setHover(t)
            }
            setupCollision(t) {
                super.setupCollision(t, !1)
            }
            update() {
                if (super.update(),
                this.body && this.moving) {
                    var t, e;
                    let i = null === (t = this.tween) || void 0 === t ? void 0 : t.isPlaying();
                    (!i || 0 !== this.playerCore.velocity.x || 0 !== this.playerCore.velocity.y) && this.scene.checkCollision(this.body.gameObject) && i && (null === (e = this.tween) || void 0 === e || e.stop())
                }
            }
            move(t, e) {
                e && (this.playerCore.position = {
                    x: e.x,
                    y: e.y
                },
                this.playerCore.velocity = {
                    x: t.x,
                    y: t.y
                }),
                super.move(t, e)
            }
            contextWith(t) {
                return super.contextWith({
                    ...t,
                    useType: "otherPlayer",
                    type: "otherPlayer",
                    mid: this.playerCore.mid,
                    username: this.playerCore.username,
                    object: {
                        x: this.position.x,
                        y: this.position.y,
                        width: this.width,
                        height: this.height
                    }
                })
            }
            constructor(t, e, i, s) {
                super(t, i, s),
                this.scene = t,
                this.playerCore = e
            }
        }
        ;
        var x = i(16562)
          , P = i(83171)
          , C = i(61036);
        function formatTime(t) {
            if (!t)
                return;
            let e = x.l.getInstance().serverTimeDelta
              , i = e + t - Date.now()
              , s = Math.floor(i / 1e3);
            if (s > 0) {
                let t = Math.floor(s / 3600);
                s -= 3600 * t;
                let e = Math.floor(s / 60);
                return s -= 60 * e,
                "".concat(t.toString(10).padStart(2, "0"), ":").concat(e.toString(10).padStart(2, "0"), ":") + s.toString(10).padStart(2, "0")
            }
        }
        let ParticleLayer = class ParticleLayer extends ParticleNode {
            constructor(t, e, i) {
                var s, r, l, a, n, h, d, u, c, p, v, m, y;
                let f;
                super(t, i.key, ((null === (l = (r = e.effectData).emitZone) || void 0 === l ? void 0 : l.source) && ((f = {
                    ...r.emitZone
                }).source.radius ? f.source = new (o()).Geom.Circle(null !== (a = f.source.x) && void 0 !== a ? a : 0,null !== (n = f.source.y) && void 0 !== n ? n : 0,f.source.radius) : Object.hasOwn(f.source, "x2") ? f.source = new (o()).Geom.Line(null !== (h = f.source.x1) && void 0 !== h ? h : 0,null !== (d = f.source.y1) && void 0 !== d ? d : 0,null !== (u = f.source.x2) && void 0 !== u ? u : 0,null !== (c = f.source.y2) && void 0 !== c ? c : 0) : Object.hasOwn(f.source, "width") ? f.source = new (o()).Geom.Ellipse(null !== (p = f.source.x) && void 0 !== p ? p : 0,null !== (v = f.source.y) && void 0 !== v ? v : 0,null !== (m = f.source.width) && void 0 !== m ? m : 0,null !== (y = f.source.height) && void 0 !== y ? y : 0) : f = void 0),
                {
                    ...r,
                    emitZone: f
                })),
                e.animations && this.setAnimations(e.animations);
                let g = null !== (s = e.offset) && void 0 !== s ? s : {
                    x: 0,
                    y: 0
                };
                e.depth >= 0 ? this.setFixed(g.x, g.y, e.depth) : this.setFollow(g.x, g.y, 100)
            }
        }
        ;
        let ToggleSprite = class ToggleSprite {
            updateSprite(t) {
                let e = !1
                  , i = !1;
                if (this.sprite && this.effectData) {
                    var s, r, l, a, n, h, d, u;
                    if (this.sprite instanceof o().GameObjects.BitmapText) {
                        if (this.effectData.tracker) {
                            let i = "";
                            if ("entity:time" === this.effectData.tracker)
                                i = null !== (r = formatTime(t.utcRefresh)) && void 0 !== r ? r : "",
                                t.utcRefresh && (e = !0);
                            else if (this.effectData.tracker in t)
                                i = null !== (a = null === (l = t[this.effectData.tracker]) || void 0 === l ? void 0 : l.toString()) && void 0 !== a ? a : "";
                            else if (this.effectData.tracker.startsWith("timer:")) {
                                let s = this.effectData.tracker.substring(6)
                                  , o = t[s];
                                i = null !== (n = formatTime(o)) && void 0 !== n ? n : "",
                                o && (e = !0)
                            }
                            this.sprite.setText(i)
                        }
                        if ("string" == typeof this.effectData.color && this.effectData.color.startsWith("$")) {
                            let e = this.effectData.color.substring(1)
                              , i = t[e];
                            "string" == typeof i && (i = o().Display.Color.ValueToColor(i).color),
                            this.sprite.setTint(null != i ? i : 16777215)
                        }
                    }
                    if (this.sprite.setVisible && (this.effectData.visible || this.effectData.hover)) {
                        let s = !0;
                        this.effectData.visible && (s = s && !!t[this.effectData.visible]),
                        this.effectData.hover && (s && (i = !0),
                        s = s && !!t["[hover]"],
                        null === (h = (d = this.sprite).setDepth) || void 0 === h || h.call(d, 6e3)),
                        this.sprite.setVisible(s),
                        s || (e = !1)
                    }
                    if (this.effectData.animation && (null === (s = this.sprite.anims) || void 0 === s ? void 0 : s.animationManager)) {
                        let e = t[this.effectData.animation]
                          , i = this.sprite.getData("key")
                          , s = "".concat(i, "-").concat(e)
                          , o = this.sprite
                          , r = o.anims;
                        e && (null == r ? void 0 : null === (u = r.exists) || void 0 === u ? void 0 : u.call(r, s)) ? (r.play({
                            key: s
                        }, !0),
                        o.setVisible(!0)) : o.setVisible(!1)
                    } else if (this.effectData.frame && this.sprite instanceof o().GameObjects.Sprite) {
                        let e = t[this.effectData.frame]
                          , i = this.sprite;
                        -1 === e ? i.setVisible(!1) : (i.setVisible(!0),
                        i.setFrame(e))
                    }
                }
                return {
                    hasTimer: e,
                    hasHover: i
                }
            }
            constructor(t, e, i) {
                this.layer = t,
                this.sprite = e,
                this.particle = i,
                this.effectData = t.effectData
            }
        }
        ;
        let GenericEntityNode = class GenericEntityNode extends EntityNode {
            getLayerProps(t) {
                var e, i, s, o, r, l;
                let a = {};
                return null === (e = t.animations) || void 0 === e || e.forEach(t=>{
                    a[t.animation] = t
                }
                ),
                {
                    image: null === (i = t.sprite) || void 0 === i ? void 0 : i.image,
                    animations: (null === (s = t.animations) || void 0 === s ? void 0 : s.length) ? a : void 0,
                    size: null === (o = t.sprite) || void 0 === o ? void 0 : o.size,
                    key: (0,
                    v.ZB)(null !== (l = null === (r = t.sprite) || void 0 === r ? void 0 : r.image) && void 0 !== l ? l : "noimg"),
                    element: "".concat(this.gameEntity.id, "-").concat(t.depth)
                }
            }
            get hasClickAction() {
                return !!this.handlers.click && !this.isMagnet
            }
            get hasOnCollide() {
                return !this.isMagnet && !!(this.handlers.collide || this.handlers.uncollide)
            }
            getTriggerArea() {
                return this.circle
            }
            checkPrechecks(t) {
                return !t || 0 === t.length || !!this.isCursor || !(t.includes("build") && !(0,
                n.Vb)(l.h.getState()) || t.includes("owner") && !(0,
                n.Ei)(l.h.getState()) || t.includes("surplus") && !(0,
                n.LB)(l.h.getState()) || t.includes("vip") && !(0,
                P.ge)(l.h.getState()) || t.includes("private"))
            }
            stateFromInstance(t) {
                var e, i, s;
                if (t)
                    return t.state ? this.stateMap[t.state] : null === (s = this.gameEntity) || void 0 === s ? void 0 : null === (i = s.generic) || void 0 === i ? void 0 : null === (e = i.states) || void 0 === e ? void 0 : e[t.current]
            }
            setCurrentState(t) {
                var e, i, s, o, r, l, a, n, h, d, u, c, v, m;
                let y, {playerInstance: f, mapInstance: g} = t;
                if (!(null === (e = this.gameEntity) || void 0 === e ? void 0 : e.generic))
                    return;
                let {generic: b} = this.gameEntity
                  , w = !1
                  , P = !1
                  , C = b.mapStateOnly ? null != g ? g : f : null != f ? f : g
                  , T = null != g ? g : f
                  , S = null != f ? f : g
                  , E = this.stateFromInstance(this.currentState)
                  , N = this.stateFromInstance(C)
                  , M = null == E ? void 0 : E.soundId;
                if (N) {
                    if (M = N.soundId,
                    E) {
                        let t = null == E ? void 0 : E.name
                          , e = N.name
                          , i = "".concat(t, "_").concat(e);
                        y = null === (r = b.transitions) || void 0 === r ? void 0 : null === (o = r.find(t=>t.from_to === i)) || void 0 === o ? void 0 : o.anim,
                        this.currentState.state !== C.state && (P = !!((null == E ? void 0 : E.physics) || N.physics),
                        w = !!((null == E ? void 0 : E.proximity) || N.proximity))
                    } else
                        P = !!N.physics;
                    let t = N.animation;
                    y && this.play(y),
                    t && this.play(t),
                    this.handlers = {},
                    delete this.handlersRegEx;
                    let handlerCheck = t=>{
                        if (this.checkPrechecks(t.prechecks)) {
                            if (t.name.startsWith("/") && t.name.endsWith("/")) {
                                this.handlersRegEx || (this.handlersRegEx = []);
                                try {
                                    this.handlersRegEx.push(new RegExp(t.name.substring(1, t.name.length - 1)))
                                } catch (t) {
                                    console.error(t)
                                }
                            } else if (this.handlers[t.name] = !0,
                            "collide" === t.name) {
                                var e;
                                this.autoMagnet = null === (e = t.prechecks) || void 0 === e ? void 0 : e.includes("magneto")
                            }
                        }
                    }
                    ;
                    this.isCursor || (null === (l = b.handlers) || void 0 === l || l.forEach(handlerCheck),
                    null === (a = N.handlers) || void 0 === a || a.forEach(handlerCheck),
                    this.checkPrechecks(N.flags) || (this.handlers = {},
                    this.handlersRegEx = [])),
                    this.npcHover = null === (s = N.flags) || void 0 === s ? void 0 : s.includes("npc")
                }
                let D = {
                    ...C,
                    trackers: null == S ? void 0 : S.trackers,
                    statics: null == T ? void 0 : T.statics
                };
                if (this.currentState = JSON.parse(JSON.stringify(D)),
                P && this.sprites && (this.setupCollision(),
                null === (n = (h = this.scene).updateCollisions) || void 0 === n || n.call(h),
                this.sprites.setDepth(this.depth)),
                this.sprites) {
                    if (null === (d = p.default.instance) || void 0 === d || d.removePositional(this.mid),
                    M && !this.isCursor) {
                        let t = null === (u = this.stateFromInstance(this.currentState)) || void 0 === u ? void 0 : u.proximity
                          , {x: e, y: i} = this.position;
                        t ? (e += t.offset.x,
                        i += t.offset.y) : (null === (v = this.collision) || void 0 === v ? void 0 : null === (c = v.size) || void 0 === c ? void 0 : c.height) ? (i += this.offsetY + .5 * this.collision.size.height,
                        e += this.offsetX + .5 * this.collision.size.width) : (e += .5 * this.width,
                        i += .5 * this.height),
                        null === (m = p.default.instance) || void 0 === m || m.addPositional(this.mid, M, {
                            x: e,
                            y: i
                        })
                    }
                    this.updateDefaultSprite(),
                    this.updateHoverAnimation(),
                    this.setToggleLayers()
                }
                if (this.timerRefresh && clearTimeout(this.timerRefresh),
                this.positionHotspot(),
                this.positionProximity(),
                this.updateShadows(),
                w && this.scene.onNodeUpdated(this),
                this.handlers.timer && (null === (i = this.currentState) || void 0 === i ? void 0 : i.utcRefresh) && !(null == b ? void 0 : b.mapStateOnly)) {
                    let t = x.l.getInstance().serverTimeDelta
                      , e = t + this.currentState.utcRefresh - Date.now();
                    e > 0 ? this.timerRefresh = setTimeout(EntityNode.checkTimers, e + 1e3) : (console.log("timer already passed? trigger in 1/2 second"),
                    this.timerRefresh = setTimeout(EntityNode.checkTimers, 500))
                }
            }
            addTrackerToState(t) {
                t.numeric ? this.trackerState[t.name] = Number(t.value) : this.trackerState[t.name] = t.value
            }
            updateSpriteState(t) {
                let e = t.updateSprite(this.trackerState);
                e.hasTimer && (this.hasTimers = !0),
                e.hasHover && (this.hasHovers = !0)
            }
            setToggleLayers() {
                if (this.hasTimers = !1,
                this.hasHovers = !1,
                this.toggleLayers) {
                    var t, e, i, s, o;
                    null === (e = this.currentState) || void 0 === e || null === (t = e.trackers) || void 0 === t || t.forEach(this.addTrackerToState, this),
                    null === (s = this.currentState) || void 0 === s || null === (i = s.statics) || void 0 === i || i.forEach(this.addTrackerToState, this),
                    this.trackerState.utcRefresh = null === (o = this.currentState) || void 0 === o ? void 0 : o.utcRefresh,
                    this.trackerState["[hover]"] = this.hover ? 1 : 0,
                    this.toggleLayers.forEach(this.updateSpriteState, this)
                }
                this.updateHovers()
            }
            setInitialState() {
                if (this.currentState) {
                    let e = this.stateFromInstance(this.currentState);
                    if ((null == e ? void 0 : e.animation) && this.play(e.animation),
                    (null == e ? void 0 : e.soundId) && !this.isCursor) {
                        var t;
                        null === (t = p.default.instance) || void 0 === t || t.addPositional(this.mid, e.soundId, {
                            x: this.x,
                            y: this.y
                        })
                    }
                    this.setToggleLayers()
                }
            }
            resetAnimation() {
                if (this.currentState) {
                    let t = this.stateFromInstance(this.currentState);
                    (null == t ? void 0 : t.animation) && this.play(t.animation)
                }
            }
            setHover(t) {
                if (this.npcHover && this.sprites) {
                    var e;
                    null === (e = this.sprites) || void 0 === e || e.each(e=>{
                        (null == e ? void 0 : e.setTint) && e.setTint(t ? 16777045 : 16777215)
                    }
                    )
                } else
                    super.setHover(t)
            }
            clickableWithItem(t) {
                if (this.handlers[t] || (0,
                c.ML)(t, this.properties.element, this.properties.entityType))
                    return !0;
                if (this.handlersRegEx) {
                    for (let e of this.handlersRegEx)
                        if (e.test(t))
                            return !0
                }
                return !1
            }
            collided() {
                if (this.isCursor)
                    return !0;
                if (this.handlers.collide) {
                    if (!GenericEntityNode.collideLimiter.ready())
                        return !1;
                    if (this.autoMagnet)
                        this.isMagnet = !0,
                        this.outline(!1);
                    else {
                        var t;
                        a.ZP.emitEventNow(y.m.clickEntity, {
                            mid: this.mid,
                            entity: null === (t = this.gameEntity) || void 0 === t ? void 0 : t.id,
                            impact: "collide"
                        })
                    }
                }
                return !0
            }
            uncollided() {
                if (this.isCursor)
                    return !0;
                if (this.handlers.uncollide) {
                    var t;
                    if (!GenericEntityNode.collideLimiter.ready())
                        return !1;
                    a.ZP.emitEventNow(y.m.clickEntity, {
                        mid: this.mid,
                        entity: null === (t = this.gameEntity) || void 0 === t ? void 0 : t.id,
                        impact: "uncollide"
                    })
                }
                return !0
            }
            update() {
                var t, e;
                if (this.isCursor && this.sprites && this.sprites.setPosition(this.x, this.y),
                this.isMagnet) {
                    let e = null === (t = this.scene.selfPlayer) || void 0 === t ? void 0 : t.position;
                    e && this.magnetTo(e.x, e.y)
                }
                this.hasTimers && Date.now() - (null !== (e = this.lastTextRefresh) && void 0 !== e ? e : 0) > 500 && (this.lastTextRefresh = Date.now(),
                this.setToggleLayers())
            }
            get width() {
                return this.spriteW
            }
            get height() {
                return this.spriteH
            }
            get depth() {
                var t, e, i, s, o, r, l, a, n, h, d, u;
                if (this.isCursor)
                    return 1e4;
                let c = (null === (t = this.stateFromInstance(this.currentState)) || void 0 === t ? void 0 : t.physics) || this.properties.physics;
                if (c) {
                    if (c.depth) {
                        if ("number" == typeof c.depth)
                            return c.depth;
                        if ("y" === c.depth.equal)
                            return (null === (i = this.properties.position) || void 0 === i ? void 0 : i.y) || 0;
                        if ("number" == typeof c.depth.add)
                            return ((null === (s = this.properties.position) || void 0 === s ? void 0 : s.y) || 0) + c.depth.add
                    }
                    if (c.enabled)
                        return (null !== (n = null === (o = this.properties.position) || void 0 === o ? void 0 : o.y) && void 0 !== n ? n : 0) + (null !== (h = null === (r = c.offset) || void 0 === r ? void 0 : r.y) && void 0 !== h ? h : 0) + (c.circular ? (null !== (d = null === (l = c.size) || void 0 === l ? void 0 : l.height) && void 0 !== d ? d : 0) / 2 : null !== (u = null === (a = c.size) || void 0 === a ? void 0 : a.height) && void 0 !== u ? u : 0)
                }
                return ((null === (e = this.properties.position) || void 0 === e ? void 0 : e.y) || 0) + this.spriteH
            }
            pickUp() {
                var t;
                super.pickUp(),
                null === (t = this.sprites) || void 0 === t || t.setDepth(1e4)
            }
            returnCursor() {
                var t;
                this.isCursor = !1;
                let {x: e, y: i} = this;
                null === (t = this.sprites) || void 0 === t || t.setPosition(e, i),
                this.positionHotspot(),
                this.positionProximity(),
                this.updateShadows()
            }
            setPosition(t) {
                var e, i;
                super.setPosition(t);
                let {x: s, y: o} = this;
                null === (e = this.sprites) || void 0 === e || e.setPosition(s, o),
                null === (i = this.sprites) || void 0 === i || i.setDepth(this.depth),
                this.positionHotspot(),
                this.positionProximity(),
                this.updateHoverAnimation(),
                this.updateShadows(),
                this.updateHovers()
            }
            get collides() {
                var t;
                return !this.isCursor && !!(null === (t = this.collision) || void 0 === t ? void 0 : t.enabled)
            }
            get collision() {
                var t;
                let e = (null === (t = this.stateFromInstance(this.currentState)) || void 0 === t ? void 0 : t.physics) || this.properties.physics;
                return e
            }
            play() {
                var t, e;
                let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default"
                  , s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if ("magneto" === i) {
                    this.isMagnet = !0,
                    this.outline(!1);
                    return
                }
                i.startsWith("vibrate:"),
                null === (t = this.particles) || void 0 === t || t.forEach(t=>{
                    t.update(this.sprites),
                    t.play(i)
                }
                );
                let o = !1;
                this.firstSprite = void 0;
                let r = !1;
                i.startsWith("layer:") && (r = !0,
                i = i.substring(6));
                let l = !1;
                null === (e = this.sprites) || void 0 === e || e.each(t=>{
                    var e, a, n, h, d;
                    if (!(null === (e = t.anims) || void 0 === e ? void 0 : e.animationManager) || !0 === t.getData("dynamic"))
                        return;
                    let u = t.getData("outline")
                      , c = t.getData("key")
                      , p = "".concat(c, "-").concat(i);
                    !1 === t.getData("animated") ? (t.setVisible(!0),
                    this.firstSprite && (!u || o) || (this.firstSprite = t,
                    o = u)) : (null === (n = t.anims) || void 0 === n ? void 0 : null === (a = n.exists) || void 0 === a ? void 0 : a.call(n, p)) ? (t.anims.currentAnim && -1 !== t.anims.currentAnim.repeat && t.anims.isPlaying ? (t.anims.chain(void 0),
                    t.anims.chain({
                        key: p,
                        delay: s
                    })) : t.anims.play({
                        key: p,
                        delay: s
                    }, !0),
                    t.visible || (l = !0),
                    t.setVisible(!0),
                    this.firstSprite && (!u || o) || (this.firstSprite = t,
                    o = u)) : r || ((null === (h = t.anims) || void 0 === h ? void 0 : h.isPlaying) && (null === (d = t.anims.currentAnim) || void 0 === d ? void 0 : d.repeat) === 0 ? t.anims.currentAnim.hideOnComplete = !0 : (t.visible && (l = !0),
                    t.setVisible(!1)))
                }
                ),
                l && this.updateShadows()
            }
            addLayerAnimations(t, e, i) {
                if (t.setData("animated", !!e.animations && e.animations.length > 0),
                e.outline && t.setData("outline", e.outline),
                e.animations && e.animations.length > 0) {
                    var s;
                    t.setData("key", i.key),
                    null === (s = e.animations) || void 0 === s || s.forEach(e=>{
                        var s;
                        let o = {
                            ...e
                        };
                        (null === (s = e.animation) || void 0 === s ? void 0 : s.indexOf("_")) === -1 && void 0 === o.repeat && (o.repeat = -1),
                        this.createAnimation(t, i.key, e.animation, o)
                    }
                    )
                }
            }
            createLayerEffect(t, e, i, s) {
                var r, l, a, n, h, d, u, c, p, m, y, f, g, b, w, P, C, T, S, E, N, M, D, k;
                if ("wiggle" === i.effect) {
                    this.tweens || (this.tweens = []);
                    let e = i.effectData;
                    null == e || e.forEach(e=>{
                        let i = this.scene.add.sprite(e.x, e.y, s.key);
                        i.setFrame(e.frame),
                        i.setAlpha(e.alpha),
                        i.setData("animated", !1),
                        this.tweens.push(this.scene.tweens.add({
                            targets: i,
                            ease: o().Math.Easing.Elastic,
                            duration: 1e3 / e.speed,
                            loop: -1,
                            x: {
                                from: e.x - e.dx,
                                to: e.x + e.dx
                            },
                            y: {
                                from: e.y - e.dy,
                                to: e.y + e.dy
                            },
                            yoyo: !0
                        })),
                        t.push(i)
                    }
                    ),
                    36 > this.spriteW && (this.spriteW = 36),
                    36 > this.spriteH && (this.spriteH = 36)
                } else if ("rectangle" === i.effect) {
                    let s = i.effectData
                      , p = null !== (r = i.offset) && void 0 !== r ? r : {
                        x: 0,
                        y: 0
                    }
                      , v = null !== (l = s.color) && void 0 !== l ? l : "white";
                    "string" == typeof v && (v = o().Display.Color.ValueToColor(v).color);
                    let m = null !== (a = s.borderColor) && void 0 !== a ? a : "black";
                    "string" == typeof m && (m = o().Display.Color.ValueToColor(m).color);
                    let y = null !== (n = s.width) && void 0 !== n ? n : 32
                      , f = null !== (h = s.height) && void 0 !== h ? h : 32
                      , g = this.scene.add.graphics(p)
                      , b = null !== (d = s.radius) && void 0 !== d ? d : 4;
                    g.fillStyle(v, null !== (u = s.alpha) && void 0 !== u ? u : 1),
                    g.fillRoundedRect(0, 0, y, f, b),
                    (s.borderWidth || s.borderColor) && (g.lineStyle(null !== (c = s.borderWidth) && void 0 !== c ? c : 1, m, 1),
                    g.strokeRoundedRect(0, 0, y, f, b)),
                    g.setPosition(p.x, p.y),
                    (s.visible || s.hover) && (this.toggleLayers || (this.toggleLayers = []),
                    this.toggleLayers.push(new ToggleSprite(i,g)),
                    s.hover && (this.hasHovers = !0)),
                    s.hover ? e.push(g) : t.push(g)
                } else if ("text" === i.effect) {
                    let s;
                    let r = i.effectData
                      , l = null !== (p = i.offset) && void 0 !== p ? p : {
                        x: 0,
                        y: 0
                    }
                      , a = r.color;
                    "string" == typeof a && (a = o().Display.Color.ValueToColor(a).color),
                    !r.tracker || ("entity:time" === r.tracker ? s = formatTime(null === (m = this.currentState) || void 0 === m ? void 0 : m.utcRefresh) : (s = null === (g = this.currentState) || void 0 === g ? void 0 : null === (f = g.trackers) || void 0 === f ? void 0 : null === (y = f.find(t=>t.name === r.tracker)) || void 0 === y ? void 0 : y.value) || (s = null === (P = this.currentState) || void 0 === P ? void 0 : null === (w = P.statics) || void 0 === w ? void 0 : null === (b = w.find(t=>t.name === r.tracker)) || void 0 === b ? void 0 : b.value)),
                    r.text && (s = r.text),
                    "rightroad" === r.client ? s = (0,
                    v.r5)(x.l.getInstance().peekRightMap()) : "leftroad" === r.client ? s = (0,
                    v.r5)(x.l.getInstance().peekLeftMap()) : "gate" === r.client && (s = (0,
                    v.r5)(x.l.getInstance().mapId));
                    let n = this.scene.add.bitmapText(l.x, l.y, "press_start", "".concat(null != s ? s : "??"), r.fontSize || 12);
                    (r.tracker || r.visible || r.hover) && (this.toggleLayers || (this.toggleLayers = []),
                    this.toggleLayers.push(new ToggleSprite(i,n)),
                    r.hover && (this.hasHovers = !0)),
                    n.setOrigin((null !== (C = r.alignment) && void 0 !== C ? C : 1) * .5, .5),
                    n.setTint(null != a ? a : 16777215),
                    r.hover ? e.push(n) : t.push(n)
                } else if ("particle" === i.effect) {
                    let e = new ParticleLayer(this.scene,i,s);
                    e.follow || t.push(e.emitter),
                    this.particles || (this.particles = []),
                    this.particles.push(e),
                    (null === (T = i.effectData) || void 0 === T ? void 0 : T.visible) && (this.toggleLayers || (this.toggleLayers = []),
                    this.toggleLayers.push(new ToggleSprite(i,void 0,e)))
                } else if ("tintcycle" === i.effect) {
                    let e = {
                        x: null !== (M = null === (S = i.offset) || void 0 === S ? void 0 : S.x) && void 0 !== M ? M : 0,
                        y: null !== (D = null === (E = i.offset) || void 0 === E ? void 0 : E.y) && void 0 !== D ? D : 0
                    }
                      , o = this.scene.add.sprite(e.x, e.y, s.key);
                    o.setDepth(null !== (k = i.depth) && void 0 !== k ? k : 0),
                    (null === (N = i.sprite) || void 0 === N ? void 0 : N.flip) && o.setFlipX(!0),
                    t.push(o),
                    this.addLayerAnimations(o, i, s),
                    this.tintCycle(o, i.effectData)
                } else if ("dynamic" === i.effect) {
                    let o = i.effectData
                      , r = this.createDefaultLayer(t, e, i, s);
                    return r.setData("dynamic", !0),
                    ((null == o ? void 0 : o.visible) || (null == o ? void 0 : o.animation) || (null == o ? void 0 : o.frame) || (null == o ? void 0 : o.hover)) && (this.toggleLayers || (this.toggleLayers = []),
                    this.toggleLayers.push(new ToggleSprite(i,r)),
                    o.hover && (this.hasHovers = !0)),
                    r
                }
            }
            randomColor(t) {
                let e = Math.random()
                  , i = Math.min(1, .6 + .5 * Math.random())
                  , s = .4 + .4 * Math.random();
                return t.h = e,
                t.s = i,
                t.v = s,
                t.setFromHSV(e, i, s),
                t
            }
            tintCycle(t, e) {
                let i = o().Display.Color.IntegerToColor(0)
                  , tintAgain = ()=>{
                    var s, r, l, a, n, h;
                    let d;
                    let u = t.tintTopLeft
                      , c = o().Display.Color.IntegerToColor(u)
                      , p = t.alpha
                      , v = "random";
                    if (null == e ? void 0 : e.dynamicColor) {
                        let t = null !== (n = null === (r = this.currentState) || void 0 === r ? void 0 : null === (s = r.trackers) || void 0 === s ? void 0 : s.find(t=>t.name === e.dynamicColor)) && void 0 !== n ? n : null === (a = this.currentState) || void 0 === a ? void 0 : null === (l = a.statics) || void 0 === l ? void 0 : l.find(t=>t.name === e.dynamicColor);
                        t && (v = t.value)
                    }
                    if ("random" === v)
                        this.randomColor(i),
                        d = Math.min(1, .6 + .5 * Math.random());
                    else {
                        let t = o().Display.Color.ValueToColor(v);
                        i.setTo(t.red, t.green, t.blue, t.alpha, !0),
                        d = i.alpha / 255
                    }
                    let m = o().Display.Color.ColorToRGBA(u)
                      , y = (i.h - c.h) / 255;
                    y > .5 ? y = (i.h - 1 - c.h) / 255 : y < -.5 && (y = (i.h + 1 - c.h) / 255),
                    this.scene.tweens.addCounter({
                        from: 0,
                        to: 255,
                        duration: null !== (h = null == e ? void 0 : e.duration) && void 0 !== h ? h : 5e3,
                        onUpdate: function(e) {
                            let s = Math.floor(e.getValue())
                              , r = s / 255
                              , l = c.h + y * s;
                            l > 1 ? l -= 1 : l < 0 && (l += 1),
                            o().Display.Color.HSVToRGB(l, c.s + (i.s - c.s) * r, c.v + (i.v - c.v) * r, m),
                            t.setTint(o().Display.Color.GetColor(m.r, m.g, m.b)),
                            t.alpha = p + (d - p) * r
                        },
                        onComplete: ()=>{
                            var s;
                            t.setTint(i.color),
                            t.alpha = d,
                            setTimeout(tintAgain, null !== (s = null == e ? void 0 : e.delay) && void 0 !== s ? s : 1e3)
                        }
                    })
                }
                ;
                t.setTint(this.randomColor(i).color),
                tintAgain()
            }
            createDefaultLayer(t, e, i, s) {
                var o, r, l, a, n, h, d, u, c, p, v, m, y, f;
                let g = {
                    x: null !== (h = null === (o = i.offset) || void 0 === o ? void 0 : o.x) && void 0 !== h ? h : 0,
                    y: null !== (d = null === (r = i.offset) || void 0 === r ? void 0 : r.y) && void 0 !== d ? d : 0
                }
                  , b = this.scene.add.sprite(g.x, g.y, s.key);
                if (b.setDepth(null !== (u = i.depth) && void 0 !== u ? u : 0),
                (null === (l = i.sprite) || void 0 === l ? void 0 : l.flip) && b.setFlipX(!0),
                0 === g.x && 0 === g.y) {
                    let t = null !== (m = null !== (v = null == s ? void 0 : null === (c = s.size) || void 0 === c ? void 0 : c.width) && void 0 !== v ? v : null == b ? void 0 : b.width) && void 0 !== m ? m : 0
                      , e = null !== (f = null !== (y = null == s ? void 0 : null === (p = s.size) || void 0 === p ? void 0 : p.height) && void 0 !== y ? y : null == b ? void 0 : b.height) && void 0 !== f ? f : 0;
                    t > this.spriteW && (this.spriteW = t),
                    e > this.spriteH && (this.spriteH = e)
                }
                if ((null === (a = i.effectData) || void 0 === a ? void 0 : a.hover) ? e.push(b) : t.push(b),
                this.addLayerAnimations(b, i, s),
                this.hasWebGL && (null === (n = i.sprite) || void 0 === n ? void 0 : n.shadow) && !this.isCursor) {
                    let t = new ShadowNode(this.scene);
                    t.create(b, this.sprites),
                    this.shadows || (this.shadows = []),
                    this.shadows.push(t)
                }
                return b
            }
            createLayers() {
                var t, e, i, s;
                let o;
                if (!this.gameEntity) {
                    console.error("missing gameEntity");
                    return
                }
                this.hasWebGL = !!this.scene.renderer.gl;
                let r = []
                  , l = [];
                if (this.spriteH = 0,
                this.spriteW = 0,
                (null !== (s = null === (e = this.gameEntity.generic) || void 0 === e ? void 0 : null === (t = e.layers) || void 0 === t ? void 0 : t.length) && void 0 !== s ? s : 0) > 0) {
                    let t = this.gameEntity.generic.layers.map(t=>t).sort((t,e)=>t.depth - e.depth);
                    t.forEach(t=>{
                        let e = this.getLayerProps(t);
                        if (t.effect) {
                            let i = this.createLayerEffect(r, l, t, e);
                            i && !o && (o = i)
                        } else {
                            let i = this.createDefaultLayer(r, l, t, e);
                            i && !o && (o = i)
                        }
                    }
                    ),
                    o && (this.sprite = o)
                }
                this.sprites = this.scene.add.container(this.x, this.y, r),
                this.sprites.setSize(this.spriteW, this.spriteH),
                l.length && (this.hovers = this.scene.add.container(this.x, this.y, l),
                this.hovers.setSize(this.spriteW, this.spriteH)),
                null === (i = this.particles) || void 0 === i || i.forEach(t=>{
                    t.update(this.sprites)
                }
                )
            }
            magnetTo(t, e) {
                if (this.velocity || (this.magnetTime = Date.now(),
                this.velocity = new (o()).Math.Vector2(0,0)),
                this.sprites) {
                    let r = new (o()).Math.Vector2(this.sprites.x,this.sprites.y)
                      , l = new (o()).Math.Vector2(t,e);
                    l.subtract(r);
                    let n = l.lengthSq();
                    if (this.velocity.scale(.95),
                    l.normalize().scale(.8),
                    this.velocity.add(l),
                    r.add(this.velocity),
                    this.sprites.setPosition(r.x, r.y),
                    n <= this.velocity.lengthSq() && Date.now() - this.magnetTime > 400 && a.ZP.pendingEvents < 2 && GenericEntityNode.collideLimiter.ready()) {
                        var i, s;
                        delete this.magnetTime,
                        delete this.velocity,
                        this.handlers.magneto && a.ZP.sendEventDelayed(y.m.clickEntity, {
                            mid: this.mid,
                            entity: null === (s = this.gameEntity) || void 0 === s ? void 0 : s.id,
                            impact: "magneto",
                            inputs: [r.x, r.y]
                        }),
                        this.isMagnet = !1,
                        null === (i = this.sprites) || void 0 === i || i.setDepth(this.depth),
                        this.positionHotspot(),
                        this.positionProximity(),
                        this.updateShadows()
                    }
                } else
                    console.error("no body"),
                    this.isMagnet = !1
            }
            setupCollision() {
                let t = this.collision;
                if (this.sprites) {
                    if (!this.isCursor && (null == t ? void 0 : t.size) && t.enabled) {
                        var e, i;
                        null === (e = this.scene.physics.world) || void 0 === e || e.enable(this.sprites),
                        super.setupCollision(this.sprites.body, !0),
                        null === (i = this.body) || void 0 === i || i.setImmovable()
                    } else
                        super.setupCollision(this.sprites.body, !1)
                }
            }
            positionProximity() {
                if (!this.hasOnCollide)
                    return;
                let t = this.stateFromInstance(this.currentState)
                  , e = null == t ? void 0 : t.proximity
                  , {x: i, y: s} = this.position;
                this.circle ? e ? (this.circle.x = i + e.offset.x,
                this.circle.y = s + e.offset.y,
                this.circle.radius = e.radius) : (this.circle.x = this.x,
                this.circle.y = this.y,
                this.circle.radius = this.height) : e ? this.circle = {
                    x: i + e.offset.x,
                    y: s + e.offset.y,
                    radius: e.radius
                } : this.circle = {
                    x: this.x,
                    y: this.y,
                    radius: this.height
                }
            }
            tweenTo(t) {
                var e, i, s, o;
                let r = this.sprites;
                if (r && (null === (e = this.scene) || void 0 === e ? void 0 : e.tweens)) {
                    let e = [r]
                      , l = t.position.x
                      , a = t.position.y
                      , n = l
                      , h = a;
                    this.shadows && this.shadows.forEach(t=>e.push(t.shadow)),
                    this.setHover(!1),
                    (null === (i = this.collision) || void 0 === i ? void 0 : i.origin) || (n += .5 * this.width,
                    h += .5 * this.height);
                    let d = this.scene.tweens.add({
                        targets: e,
                        ease: t.easing,
                        duration: t.duration || 1500,
                        repeat: 0,
                        x: {
                            from: null === (s = this.sprites) || void 0 === s ? void 0 : s.x,
                            to: n
                        },
                        y: {
                            from: null === (o = this.sprites) || void 0 === o ? void 0 : o.y,
                            to: h
                        },
                        yoyo: !1,
                        onComplete: ()=>{
                            this.setPosition({
                                x: l,
                                y: a
                            }),
                            this.resetAnimation(),
                            d.remove()
                        }
                        ,
                        onStop: ()=>{
                            d.remove()
                        }
                    })
                }
                t.animation && this.play(t.animation)
            }
            positionHotspot() {
                var t, e, i, s, o, r, l, a, n, h, d, u, c;
                if (!this.hittest)
                    return;
                let p = null !== (s = null === (t = this.stateFromInstance(this.currentState)) || void 0 === t ? void 0 : t.hittest) && void 0 !== s ? s : null === (e = this.gameEntity.generic) || void 0 === e ? void 0 : e.hittest;
                if (null == p ? void 0 : p.size) {
                    this.hittest.setSize(null !== (l = p.size.width) && void 0 !== l ? l : 0, null !== (a = p.size.height) && void 0 !== a ? a : 0);
                    let {x: t, y: e} = this.position;
                    this.hittest.setPosition(t + (null !== (n = null === (o = p.offset) || void 0 === o ? void 0 : o.x) && void 0 !== n ? n : 0) + (null !== (h = p.size.width) && void 0 !== h ? h : 0) / 2, e + (null !== (d = null === (r = p.offset) || void 0 === r ? void 0 : r.y) && void 0 !== d ? d : 0) + (null !== (u = p.size.height) && void 0 !== u ? u : 0) / 2)
                } else
                    this.hittest.setPosition(this.x, this.y),
                    this.hittest.setSize(this.spriteW, this.spriteH);
                (null === (i = this.hittest.input) || void 0 === i ? void 0 : i.hitArea) && (this.hittest.input.hitArea.width = this.hittest.width,
                this.hittest.input.hitArea.height = this.hittest.height),
                this.hittest.setDepth(this.depth + (null !== (c = null == p ? void 0 : p.priority) && void 0 !== c ? c : 2e3))
            }
            load() {}
            add() {
                delete this.hasHovers,
                delete this.hasTimers,
                this.createLayers(),
                this.setInitialState(),
                this.setupCollision(),
                this.updateDefaultSprite(),
                this.sprites.setDepth(this.depth),
                this.hittest = new HitTestObject(this.scene,this.x,this.y,this.spriteW,this.spriteH,this.depth + 2e3),
                this.scene.add.existing(this.hittest),
                this.positionHotspot(),
                this.positionProximity(),
                this.setupInteraction(),
                this.updateShadows(),
                this.updateHovers(),
                this.hidden && (this.sprites.setVisible(this.isCursor),
                this.scene.invisibleObjects.push(this))
            }
            updateDefaultSprite() {
                var t;
                let e = null === (t = this.outlineContainer) || void 0 === t ? void 0 : t.visible;
                this.resetOutline(),
                this.firstSprite && (this.sprite = this.firstSprite,
                e && this.outline(!0))
            }
            updateShadows() {
                var t;
                null === (t = this.shadows) || void 0 === t || t.forEach(t=>{
                    t.update(this.sprites)
                }
                )
            }
            updateHovers() {
                if (this.hovers && this.sprites) {
                    let t = this.sprites;
                    this.hovers.setPosition(t.x, t.y),
                    this.hovers.setDepth(t.depth + 2e3),
                    this.hovers.setVisible(t.visible)
                }
            }
            updateHoverAnimation() {
                var t;
                if (super.updateHoverAnimation(),
                (null === (t = this.outlineContainer) || void 0 === t ? void 0 : t.visible) && this.sprites) {
                    let t = this.sprites.depth - 1;
                    this.outlineContainer.setDepth(t).setPosition(this.sprites.x, this.sprites.y)
                }
            }
            outline(t) {
                if (!t) {
                    this.offOutline();
                    return
                }
                if (!this.outlineContainer && this.sprite) {
                    var e;
                    null === (e = this.sprites) || void 0 === e || e.each(t=>{
                        let e = t.getData("outline");
                        e && t.visible && this.addOutlineSprites(t, !0)
                    }
                    )
                }
                this.outlineContainer && this.sprite && this.onOutline()
            }
            destroy() {
                var t, e, i, s, o, r, l, a;
                this.sprite = void 0,
                super.destroy(),
                this.timerRefresh && clearTimeout(this.timerRefresh),
                this.timerRefresh = 0,
                this.hoverTimer && (clearInterval(this.hoverTimer),
                this.hoverTimer = 0),
                null === (t = this.ellipse) || void 0 === t || t.destroy(),
                delete this.toggleLayers,
                delete this.ellipse,
                null === (e = this.shadows) || void 0 === e || e.forEach(t=>t.destroy()),
                delete this.shadows,
                null === (i = this.sprites) || void 0 === i || i.each(t=>{
                    null == t || t.destroy()
                }
                ),
                null === (s = this.sprites) || void 0 === s || s.destroy(),
                delete this.sprites,
                null === (o = this.particles) || void 0 === o || o.forEach(t=>{
                    t.destroy()
                }
                ),
                null === (r = this.hovers) || void 0 === r || r.each(t=>{
                    null == t || t.destroy()
                }
                ),
                null === (l = this.hovers) || void 0 === l || l.destroy(),
                delete this.hovers,
                null === (a = p.default.instance) || void 0 === a || a.removePositional(this.mid)
            }
            formatHoverText() {
                var t;
                let e = (0,
                C.Kt)(this.currentState)
                  , i = formatTime(null === (t = this.currentState.displayInfo) || void 0 === t ? void 0 : t.utcTarget);
                return i && (e ? e += "\n" : e = "",
                e += i),
                e
            }
            showHoverNow() {
                var t, e, i;
                let s = null === (i = this.scene.cameras) || void 0 === i ? void 0 : null === (e = i.main) || void 0 === e ? void 0 : null === (t = e.worldView) || void 0 === t ? void 0 : t.top
                  , o = this.y - this.height / 2;
                o < s && (o = s);
                let r = this.scene.getCanvasPoint(this.x, o);
                a.ZP.emitEventNow(a.fb.GAME_OBJECT_MOUSEOVER, {
                    text: this.formatHoverText(),
                    mouse: {
                        x: r.x,
                        y: r.y
                    }
                })
            }
            showHoverText(t, e) {
                let i = !e && t;
                i ? (this.showHoverNow(),
                this.hoverTimer || (this.hoverTimer = setInterval(()=>{
                    this.showHoverNow()
                }
                , 1e3))) : (this.hoverTimer && (clearInterval(this.hoverTimer),
                delete this.hoverTimer),
                super.showHoverText(!1, e)),
                !!this.hover !== i && (this.hover = i,
                this.hasHovers && this.setToggleLayers())
            }
            hasHoverText() {
                var t;
                return !this.isCursor && (this.hasHovers || !!((null === (t = this.currentState) || void 0 === t ? void 0 : t.displayInfo) && (this.currentState.displayInfo.format || this.currentState.displayInfo.utcTarget)))
            }
            contextWith(t) {
                var e, i;
                return super.contextWith({
                    ...t,
                    clickable: this.handlers.click,
                    entityId: null === (e = this.gameEntity) || void 0 === e ? void 0 : e.id,
                    entityState: null === (i = this.currentState) || void 0 === i ? void 0 : i.state,
                    type: "generic",
                    text: this.formatHoverText()
                })
            }
            constructor(t, e, i=!1) {
                var s, o, r;
                super(t, e, i),
                this.scene = t,
                this.getProperties = e,
                this.isCursor = i,
                this.trackerState = {},
                this.gameEntity = g.Z.getGameEntity(this.properties.element),
                this.stateMap = {},
                null === (r = this.gameEntity) || void 0 === r || null === (o = r.generic) || void 0 === o || null === (s = o.states) || void 0 === s || s.forEach(t=>{
                    this.stateMap[t.name] = t
                }
                ),
                this.spriteW = 0,
                this.spriteH = 0,
                this.handlers = {}
            }
        }
        ;
        GenericEntityNode.collideLimiter = new class {
            ready() {
                let t = Math.floor(Date.now() / this.ts);
                return t === this.timeSegment ? (this.count++,
                this.count <= this.maxevents) : (this.timeSegment = t,
                this.count = 1,
                !0)
            }
            constructor(t, e) {
                this.maxevents = t,
                this.ts = e,
                this.count = 0,
                this.timeSegment = Math.floor(Date.now() / e)
            }
        }
        (5,300);
        var T = i(83454);
        let S = new Map;
        function customFileProcessComplete(t) {
            var e;
            t.xhrLoader && S.has(t.key) && "object" == typeof (e = t.xhrLoader.response) && "image/png" === e.type ? t.xhrLoader.response.arrayBuffer().then(e=>{
                let i = function(t) {
                    let e = new Uint8Array(t);
                    return e.reduce((t,e,i)=>(t + (e << (7 & i)) & 4294967295) >>> 0, 0)
                }(e);
                S.get(t.key) === i || (t.state = 16),
                this.superfileProcessComplete(t)
            }
            ) : this.superfileProcessComplete(t)
        }
        let NodeFactory = class NodeFactory {
            init() {
                var t;
                (t = this.scene.load).superfileProcessComplete || (t.superfileProcessComplete = t.fileProcessComplete,
                t.fileProcessComplete = customFileProcessComplete)
            }
            preloadAssetsFor(t, e) {
                let {frameWidth: i, frameHeight: s, image: o} = e;
                if (o) {
                    if (this.loadedAssets.has(t))
                        return !1;
                    e.hash && S.set(t, e.hash);
                    let r = (0,
                    v.b7)(o);
                    i && s ? this.scene.load.spritesheet(t, r, {
                        frameWidth: i,
                        frameHeight: s
                    }) : this.scene.load.image(t, r),
                    this.loadedAssets.add(t)
                }
                return !0
            }
            preloadAssetsForNode(t, e) {
                e.node && this.loadedNodes.has(t) && (e.node.preload(),
                this.loadedNodes.add(t))
            }
            preloadAssetsArrayFor(t) {
                null == t || t.forEach(t=>{
                    this.preloadAssetsFor(t.key, t)
                }
                )
            }
            static getAtlas(t) {
                return t.at && "".concat(h.pZ, "/game/atlases/").concat(t.at.n)
            }
            preloadAssetsForSprite(t) {
                if (t.at) {
                    let e = NodeFactory.getAtlas(t);
                    return this.preloadAssetsFor(t.at.n, {
                        image: e
                    })
                }
                if (t.image) {
                    var e, i;
                    return this.preloadAssetsFor((0,
                    v.ZB)(t.image), {
                        image: t.image,
                        frameWidth: null === (e = t.size) || void 0 === e ? void 0 : e.width,
                        frameHeight: null === (i = t.size) || void 0 === i ? void 0 : i.height,
                        hash: t.hash
                    })
                }
            }
            lateLoad(t, e) {
                let i = new Promise(i=>{
                    this.scene.load.once(o().Loader.Events.COMPLETE, ()=>{
                        this.loadLoading.delete(e);
                        let s = t();
                        i(s)
                    }
                    )
                }
                );
                return this.loadLoading.set(e, i),
                this.scene.load.start(),
                i
            }
            async asyncBuilder(t, e, i, s) {
                var o, r, l, a, n;
                let h, d = !1, u = (null == e ? void 0 : e.object) || (null == s ? void 0 : s.entity) || (null == e ? void 0 : e.entity) || i.id;
                if ("generic"in i) {
                    let t = null === (o = i.generic.layers) || void 0 === o ? void 0 : o.filter(t=>{
                        var e;
                        return (null === (e = t.sprite) || void 0 === e ? void 0 : e.image) && !this.loadedAssets.has((0,
                        v.ZB)(t.sprite.image))
                    }
                    ).map(t=>{
                        var e, i;
                        return {
                            image: t.sprite.image,
                            frameWidth: null === (e = t.sprite.size) || void 0 === e ? void 0 : e.width,
                            frameHeight: null === (i = t.sprite.size) || void 0 === i ? void 0 : i.height,
                            key: (0,
                            v.ZB)(t.sprite.image),
                            hash: t.sprite.hash
                        }
                    }
                    );
                    (null == t ? void 0 : t.length) && (this.preloadAssetsArrayFor(t),
                    d = !0)
                } else if ("sprite"in i) {
                    let t = null !== (l = NodeFactory.getAtlas(i.sprite)) && void 0 !== l ? l : (0,
                    v.ZB)(null !== (r = i.sprite.image) && void 0 !== r ? r : "noimg");
                    this.loadedAssets.has(t) || (this.preloadAssetsForSprite(i.sprite),
                    d = !0)
                } else if ("image"in i) {
                    h = {
                        image: i.image
                    };
                    let t = (0,
                    v.ZB)(null !== (a = h.image) && void 0 !== a ? a : "noimg");
                    this.loadedAssets.has(t) || (this.preloadAssetsFor(t, h),
                    d = !0)
                }
                if ("npc" === t || "entity" === t && "npc" === i.type) {
                    let o = this.buildNodeInstance({
                        type: t,
                        mapConfig: e,
                        gameConfig: i,
                        playerEntity: s
                    });
                    return this.preloadAssetsForNode(u, {
                        node: o
                    }),
                    this.lateLoad(()=>o, u)
                }
                let build = ()=>this.buildNodeInstance({
                    type: t,
                    mapConfig: e,
                    gameConfig: i,
                    playerEntity: s
                });
                return !d && this.loadLoading.has(u) ? null === (n = this.loadLoading.get(u)) || void 0 === n ? void 0 : n.then(build) : d ? this.lateLoad(build, u) : build()
            }
            setGenericNodeState(t, e, i, s) {
                if ((null == i ? void 0 : i.generic) || (null == s ? void 0 : s.generic))
                    t.setCurrentState({
                        playerInstance: null == i ? void 0 : i.generic,
                        mapInstance: null == s ? void 0 : s.generic
                    });
                else {
                    var o, r;
                    let i = null === (r = e.generic) || void 0 === r ? void 0 : null === (o = r.states) || void 0 === o ? void 0 : o.findIndex(t=>{
                        var i;
                        return (null === (i = e.generic) || void 0 === i ? void 0 : i.defaultState) === t.name
                    }
                    );
                    i && -1 !== i || (i = 0),
                    t.setCurrentState({
                        playerInstance: {
                            current: i
                        },
                        mapInstance: {
                            current: i
                        }
                    })
                }
            }
            getPropBuilder(t) {
                let e = t.mapConfig;
                if (t.playerEntity) {
                    var i;
                    e = {
                        ...t.playerEntity
                    },
                    !t.playerEntity.position && (null === (i = t.mapConfig) || void 0 === i ? void 0 : i.posiiton) && (e.position = t.mapConfig.posiiton)
                }
                switch (t.type) {
                case "object":
                    return ()=>NodeFactory.convertGameObjectToMapElementProps(e, t.gameConfig);
                case "soil":
                    return ()=>NodeFactory.convertEntityToMapElementProps(e, t.gameConfig);
                case "crop":
                    return ()=>NodeFactory.convertEntityToMapElementProps({
                        ...e,
                        entity: t.gameConfig.id
                    }, t.gameConfig, t.mid);
                case "cookingTable":
                case "npc":
                case "entity":
                case "storage":
                case "generic":
                    let s = t.gameConfig.type;
                    if ("npc" === s)
                        return;
                    if ("crop" === s)
                        return ()=>NodeFactory.convertEntityToMapElementProps({
                            ...e,
                            entity: t.gameConfig.id
                        }, t.gameConfig, t.mid);
                    return ()=>NodeFactory.convertEntityToMapElementProps(e, t.gameConfig, t.mid);
                case "item":
                    return ()=>NodeFactory.convertItemToMapElementProps(t.gameConfig)
                }
            }
            buildNodeInstance(t) {
                let e;
                let i = !t.mapConfig && !t.playerEntity
                  , s = this.getPropBuilder(t);
                switch (t.type) {
                case "object":
                    e = new ObjectNode(this.scene,s,i);
                    break;
                case "soil":
                    T.env.SUPPORT_OLDCROPS && (e = new SoilNode(this.scene,s,i));
                    break;
                case "crop":
                    T.env.SUPPORT_OLDCROPS && (e = new CropNode(this.scene,s,i));
                    break;
                case "cookingTable":
                case "npc":
                case "entity":
                case "storage":
                case "generic":
                    let o = t.gameConfig.type;
                    if ("npc" === o)
                        (e = new NpcNode(this.scene,void 0,t.gameConfig,i)).preload();
                    else if ("generic" === o)
                        e = new GenericEntityNode(this.scene,s,i),
                        this.setGenericNodeState(e, t.gameConfig, t.playerEntity, t.mapConfig);
                    else if (T.env.SUPPORT_OLDCROPS && "soil" === o)
                        e = new SoilNode(this.scene,s,i);
                    else if (T.env.SUPPORT_OLDCROPS && "crop" === o)
                        e = new CropNode(this.scene,s,i);
                    else {
                        var r, l;
                        e = new EntityNode(this.scene,s,i);
                        let o = null === (r = t.gameConfig) || void 0 === r ? void 0 : r[t.gameConfig.type];
                        (null == o ? void 0 : o.defaultState) && (e.currentFrame = (null === (l = o.states[o.defaultState]) || void 0 === l ? void 0 : l.spriteFrame) || 0)
                    }
                    break;
                case "item":
                    e = new ItemNode(this.scene,s,i)
                }
                return e
            }
            static convertItemToMapElementProps(t) {
                let e = {
                    id: t.id,
                    key: t.id,
                    element: t.id,
                    type: "objects",
                    image: t.image,
                    position: {
                        x: 0,
                        y: 0
                    },
                    offset: {
                        x: 0,
                        y: 0
                    },
                    hidden: !1
                };
                return e
            }
            static convertGameObjectToMapElementProps(t, e, i) {
                var s, o, r, l, a, n, u, c, p, m, y, f, g, b;
                let w = {
                    id: i || (null == t ? void 0 : t._id) || e.id,
                    key: null !== (c = null === (s = e.sprite.at) || void 0 === s ? void 0 : s.n) && void 0 !== c ? c : (0,
                    v.ZB)(null !== (u = e.sprite.image) && void 0 !== u ? u : "noimg"),
                    element: (null == t ? void 0 : t.object) || e.id,
                    type: "objects",
                    soundId: e.soundId,
                    position: {
                        x: (null == t ? void 0 : t.x) || 0,
                        y: (null == t ? void 0 : t.y) || 0
                    },
                    image: null !== (p = NodeFactory.getAtlas(e.sprite)) && void 0 !== p ? p : e.sprite.image,
                    texframe: null === (o = e.sprite.at) || void 0 === o ? void 0 : o.p,
                    fc: e.sprite.frames || 1,
                    hash: e.sprite.hash,
                    size: e.sprite.size,
                    offset: {
                        x: 0,
                        y: 0
                    },
                    sprite: [e.sprite],
                    physics: e.physics,
                    hoverText: null == t ? void 0 : t.hoverText,
                    owner: null == t ? void 0 : t.player,
                    onClick: null == t ? void 0 : t.onClick,
                    onCollide: null == t ? void 0 : t.onCollide,
                    isWall: !!e.wall,
                    labels: e.labels,
                    hidden: !1,
                    animations: {},
                    animMode: null !== (m = e.anim) && void 0 !== m ? m : d.m.loop,
                    buildArea: e.buildArea,
                    targetSurfaceTypes: null !== (y = e.targetSurfaceTypes) && void 0 !== y ? y : ["floor"]
                };
                return e.sprite.scale && (w.scale = {
                    x: e.sprite.scale,
                    y: e.sprite.scale
                }),
                !w.isWall || (null === (r = w.physics) || void 0 === r ? void 0 : r.enabled) || (w.physics = {
                    enabled: !0,
                    offset: {
                        x: 0,
                        y: 0
                    },
                    size: {
                        width: 64,
                        height: 64
                    }
                }),
                !!e.sprite.flip != !!(null == t ? void 0 : t.flip) && (w.flip = !0),
                (null == t ? void 0 : t.onClick) && (w.actions = {
                    click: {
                        ...t.onClick
                    }
                }),
                w.hidden = (null === (l = e.wall) || void 0 === l ? void 0 : l.type) === "invisible" || (null === (a = e.sprite) || void 0 === a ? void 0 : a.invisible) || !1,
                (null === (n = e.sprite) || void 0 === n ? void 0 : n.isSpritesheet) && (w.animations = {
                    default: {
                        start: 0,
                        end: (null === (f = e.sprite) || void 0 === f ? void 0 : f.frames) !== void 0 ? (null === (g = e.sprite) || void 0 === g ? void 0 : g.frames) - 1 : -1,
                        frameRate: (null === (b = e.sprite) || void 0 === b ? void 0 : b.frameRate) || h.sD,
                        repeat: w.animMode & d.m.loop ? -1 : 0
                    }
                }),
                w
            }
            constructor(t) {
                this.scene = t,
                this.loadedAssets = new Set,
                this.loadedNodes = new Set,
                this.loadLoading = new Map
            }
        }
        ;
        NodeFactory.convertEntityToMapElementProps = (t,e,i)=>{
            var s, o, r, l, a, n, d, u, c;
            let p = {
                id: i || (null == t ? void 0 : t.mid) || e.id,
                key: (0,
                v.ZB)(null !== (n = e.sprite.image) && void 0 !== n ? n : "noimg"),
                element: (null == t ? void 0 : t.entity) || e.id,
                type: "objects",
                position: {
                    x: (null == t ? void 0 : null === (s = t.position) || void 0 === s ? void 0 : s.x) || 0,
                    y: (null == t ? void 0 : null === (o = t.position) || void 0 === o ? void 0 : o.y) || 0
                },
                image: e.sprite.image,
                hash: e.sprite.hash,
                size: e.sprite.size,
                offset: {
                    x: 0,
                    y: 0
                },
                entityType: e.type,
                owner: null == t ? void 0 : t.player,
                sprite: [e.sprite],
                physics: e.physics,
                hidden: (null === (r = e.sprite) || void 0 === r ? void 0 : r.invisible) || !1,
                buildArea: e.buildArea,
                targetSurfaceTypes: null !== (d = e.targetSurfaceTypes) && void 0 !== d ? d : ["floor"]
            };
            return (null === (l = e.animations) || void 0 === l ? void 0 : l.default) ? p.animations = e.animations : (null === (a = e.sprite) || void 0 === a ? void 0 : a.isSpritesheet) && (p.animations = {
                default: {
                    start: 0,
                    end: (null === (u = e.sprite) || void 0 === u ? void 0 : u.frames) !== void 0 ? e.sprite.frames - 1 : -1,
                    frameRate: (null === (c = e.sprite) || void 0 === c ? void 0 : c.frameRate) || h.sD,
                    repeat: -1
                }
            }),
            p
        }
        ;
        let getCharacterData = t=>{
            var e, i;
            let s = g.Z.getGameAvatar(t.avatarId || h.ft)
              , o = t.pieces;
            s && s.pieces || (s = g.Z.getGameAvatar(h.ft),
            o = {
                body: {
                    species: "human",
                    color: "darkest",
                    type: "body",
                    gender: "male",
                    id: "body-human-darkest"
                },
                eyes: {
                    eyes: "regularfemale",
                    type: "eyes",
                    species: "human",
                    id: "eyes-human-regularfemale"
                },
                hair: {
                    style: "cowboy",
                    species: "human",
                    type: "hair",
                    gender: "female",
                    color: "red",
                    id: "hair-human-1-red"
                },
                mouth: {
                    type: "mouth",
                    species: "human",
                    mouth: "smile",
                    id: "mouth-human-smile"
                },
                outfit: {
                    type: "outfit",
                    style: "astronaut",
                    species: "human",
                    id: "outfit-human-astronaut"
                }
            });
            let r = {
                avatar: {
                    ...s,
                    sprite: {
                        ...null == s ? void 0 : s.sprite
                    },
                    mood: 1
                },
                position: t.position,
                label: t.label,
                modifiers: t.modifiers ? [...t.modifiers] : void 0,
                kind: null !== (e = t.kind) && void 0 !== e ? e : "normal"
            };
            return r.avatar.display = o,
            r.avatar.sprite && t.flip && (r.avatar.sprite.flip = !r.avatar.sprite.flip),
            "fade"in t && (r.avatar.mood = null !== (i = t.fade) && void 0 !== i ? i : 0),
            r
        }
        ;
        let TilesetNode = class TilesetNode extends GenericNode {
            getProperties() {
                let t = {
                    id: this.tileset._id,
                    key: (0,
                    v.ZB)(this.tileset.image),
                    element: this.tileset.id,
                    type: "tileset",
                    image: this.tileset.image,
                    hidden: !1,
                    tileset: {
                        sid: 0,
                        spacing: h.DY,
                        margin: h.aU,
                        ...this.tileset
                    }
                };
                return t
            }
            editCategory() {
                return "floors"
            }
            get texture() {
                return (0,
                v.ZB)(this.tileset.image)
            }
            load() {
                let t = (0,
                v.b7)(this.properties.image);
                this.scene.load.spritesheet(this.properties.key, t, {
                    frameWidth: this.properties.tileset.size,
                    frameHeight: this.properties.tileset.size,
                    margin: this.properties.tileset.margin,
                    spacing: this.properties.tileset.spacing
                })
            }
            add() {}
            mapIndex(t) {
                return this.tileset.remap && t in this.tileset.remap ? this.tileset.remap[t] : t
            }
            initTileset(t, e) {
                var i;
                return this.sid = e,
                this.tilesetImage = null !== (i = null == t ? void 0 : t.addTilesetImage(this.properties.element, this.properties.key, this.properties.tileset.size, this.properties.tileset.size, this.properties.tileset.padding, this.properties.tileset.spacing, e)) && void 0 !== i ? i : void 0,
                this.tilesetImage
            }
            addCollisions(t) {
                if (this.tileset.indexes) {
                    let e = this.tileset.width * this.tileset.height
                      , i = Object.values(this.tileset.indexes).filter(t=>t.impassable && t.index < e).map(t=>this.sid + t.index);
                    i.length > 0 && (null == t || t.setCollision(i, !0, !1, !1))
                }
            }
            get size() {
                return this.properties.tileset.size
            }
            create() {
                this.add()
            }
            getTileSurfaceType(t) {
                var e;
                let i = null === (e = this.tileset.indexes) || void 0 === e ? void 0 : e[t];
                return i && i.allowBuilding ? i.wall ? "wall" : "floor" : null
            }
            getAutotileInfo() {
                return this.tileset.autotile
            }
            constructor(t, e) {
                super(t),
                this.scene = t,
                this.tileset = e,
                this.sid = 0,
                this.layer = 0,
                this.layer = e.layer || 0
            }
        }
        ;
        let TileNode = class TileNode extends GenericNode {
            getProperties() {
                let t = this.tileInfo.tilesetId || "empty-tile-info";
                return {
                    id: t,
                    key: t,
                    element: t,
                    type: "tileset",
                    hidden: !1,
                    targetSurfaceTypes: ["floor"],
                    sprite: [{
                        size: {
                            width: h.D9,
                            height: h.D9
                        }
                    }]
                }
            }
            setIndexes(t, e) {
                this.sprite && (this.sprite.destroy(),
                this.sprite = void 0),
                this.container && this.destroyContainer(),
                this.container = this.scene.add.container(this.x + this.containerOffset.x, this.y + this.containerOffset.y),
                t.forEach((t,i)=>{
                    var s, o, r, l;
                    if (!t)
                        return;
                    let a = null !== (r = null === (s = t.node) || void 0 === s ? void 0 : s.mapIndex(t.index)) && void 0 !== r ? r : t.index
                      , n = this.scene.add.image(i % e * h.D9 + h.D9 / 2, Math.floor(i / e) * h.D9 + h.D9 / 2, null !== (l = null === (o = t.node) || void 0 === o ? void 0 : o.texture) && void 0 !== l ? l : t.tileset, a);
                    this.container.add(n)
                }
                )
            }
            setContainerOffset(t) {
                this.containerOffset = t
            }
            applyChanges() {
                var t;
                super.applyChanges(),
                null === (t = this.container) || void 0 === t || t.setPosition(this.tempPosition.x + this.containerOffset.x, this.tempPosition.y + this.containerOffset.y)
            }
            getSnapPosition(t, e) {
                let i = Math.floor(t.x / e) * e
                  , s = Math.floor(t.y / e) * e;
                return {
                    x: i,
                    y: s
                }
            }
            editCategory() {
                return "floors"
            }
            updateTemporaryPosition(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.D9;
                this.tempPosition = e > 0 ? this.getSnapPosition(t, e) : t
            }
            add() {
                if (this.tileInfo.indexes)
                    this.setIndexes(this.tileInfo.indexes.map(t=>({
                        index: t,
                        tileset: this.tileInfo.tilesetId,
                        node: this.tileset
                    })), this.tileInfo.width);
                else if (void 0 !== this.tileInfo.tilesetIndex) {
                    var t, e, i;
                    let s = null !== (i = null === (t = this.tileset) || void 0 === t ? void 0 : t.mapIndex(this.tileInfo.tilesetIndex)) && void 0 !== i ? i : this.tileInfo.tilesetIndex;
                    (null === (e = this.tileset) || void 0 === e ? void 0 : e.texture) && (this.sprite = this.scene.add.image(0, 0, this.tileset.texture, s))
                }
            }
            destroy() {
                super.destroy(),
                this.destroyContainer(),
                this.tileset = void 0
            }
            destroyContainer() {
                var t, e;
                null === (t = this.container) || void 0 === t || t.each(t=>{
                    null == t || t.destroy()
                }
                ),
                null === (e = this.container) || void 0 === e || e.destroy(),
                this.container = void 0
            }
            constructor(t, e, i) {
                super(t, !0),
                this.scene = t,
                this.tileInfo = i,
                this.containerOffset = {
                    x: 0,
                    y: 0
                },
                this.tileset = e
            }
        }
        ;
        let GameScene = class GameScene extends o().Scene {
            resize(t, e) {
                this.scale.resize(t, e),
                this.physics.world.setBounds(0, 0, t, e)
            }
            preloadPlugins() {
                try {
                    window.matchMedia("(pointer: coarse)").matches && this.load.plugin("rexvirtualjoystickplugin", "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js", !0)
                } catch (t) {
                    console.error(t)
                }
            }
            preloadFonts() {
                this.load.textureManager.exists("press_start") || this.load.bitmapFont("press_start", (0,
                v.Uk)("/game/assets/fonts/press_start.png"), (0,
                v.Uk)("/game/assets/fonts/press_start.fnt"))
            }
            getSizeAttribute() {
                return "Large"
            }
            create() {
                this.input.on("pointerdown", t=>{
                    this.pointerDown = {
                        worldX: t.worldX,
                        worldY: t.worldY
                    }
                }
                )
            }
            addCollider(t) {
                this.collidingObjects.add(t)
            }
            removeCollider(t) {
                this.collidingObjects.delete(t)
            }
            handleEvent(t, e) {
                a.ZP.registerEventListener(t, e),
                this.handlers.push({
                    event: t,
                    callback: e
                })
            }
            init(t) {
                this.data = t,
                this.events.once("destroy", this.destroy, this)
            }
            destroy() {
                console.log("[GameScene] remove handlers..."),
                this.handlers.forEach(t=>{
                    a.ZP.removeEventListerner(t.event, t.callback)
                }
                ),
                this.handlers = []
            }
            clickCaptured() {
                return !1
            }
            editMode() {
                return !1
            }
            getCanvasPoint(t, e, i) {
                var s;
                void 0 === i && (i = new (o()).Math.Vector2);
                let r = this.camera;
                if (!r)
                    return i.x = t,
                    i.y = e,
                    i;
                let l = r.matrix.matrix;
                if (!l)
                    return i.x = t,
                    i.y = e,
                    i;
                let a = l[0]
                  , n = l[1]
                  , h = l[2]
                  , d = l[3]
                  , u = l[4]
                  , c = l[5];
                if (!(a * d - n * h))
                    return i.x = t,
                    i.y = e,
                    i;
                let p = null !== (s = r.resolution) && void 0 !== s ? s : 1
                  , v = (a * t + h * e + u) / p
                  , m = (n * t + d * e + c) / p
                  , y = Math.cos(r.rotation)
                  , f = Math.sin(r.rotation)
                  , {zoom: g, scrollX: b, scrollY: w} = r;
                return i.x = v - (b * y - w * f) * g,
                i.y = m - (b * f + w * y) * g,
                i
            }
            onNodeCreated(t) {}
            onNodeUpdated(t) {}
            hasJoystick() {
                return !1
            }
            constructor(t) {
                super(t),
                this.map = {
                    size: h.WS,
                    bounds: h.BA
                },
                this.tilesetImages = [],
                this.animations = {},
                this.collidingObjects = new Set,
                this.invisibleObjects = [],
                this.handlers = [],
                this.dynamicLayers = []
            }
        }
        ;
        let PlaceableCursor = class PlaceableCursor {
            get cursorOffset() {
                var t;
                return null !== (t = this.opts.cursorOffset) && void 0 !== t ? t : {
                    x: 0,
                    y: 0
                }
            }
            static clearCache() {
                PlaceableCursor.cache.updated = 0
            }
            blockCurrentBuildArea() {
                this.isBuildAreaFree() && this.blockMovingNodeArea()
            }
            blockMovingNodeArea() {
                let t = this.opts.movingNode.getBuildArea();
                PlaceableCursor.cache.nodeRects.find(e=>PlaceableCursor.matchesRect(e, t)) || (PlaceableCursor.cache.nodeRects.push(t),
                console.log("added temp node, reset build timer"),
                PlaceableCursor.cache.updated = Date.now(),
                delete PlaceableCursor.cache.position)
            }
            static blockAddedNode(t) {
                if (t.temp)
                    return;
                let e = t.getBuildArea();
                PlaceableCursor.cache.nodeRects.find(t=>PlaceableCursor.matchesRect(t, e)) || (PlaceableCursor.cache.nodeRects.push(e),
                console.log("added permanent node, reset build timer"),
                PlaceableCursor.cache.updated = Date.now(),
                delete PlaceableCursor.cache.position)
            }
            static unblockNode(t) {
                let e = t.getBuildArea()
                  , i = PlaceableCursor.cache.nodeRects.filter(t=>!PlaceableCursor.matchesRect(t, e));
                PlaceableCursor.cache.nodeRects = i
            }
            checkBuildCache() {
                return Date.now() - PlaceableCursor.cache.updated > 4e3 ? (console.log("updating node rects"),
                this.updateNodeRects(),
                PlaceableCursor.cache.updated = Date.now(),
                !0) : (console.log("not time to reset, only been ".concat(Date.now() - PlaceableCursor.cache.updated, "ms")),
                !1)
            }
            updateNodeRects() {
                var t, e, i;
                PlaceableCursor.cache = {
                    nodeRects: [],
                    wallRects: [],
                    updated: Date.now()
                };
                let s = null === (t = g.Z.getGameWallObjects()) || void 0 === t ? void 0 : t.map(t=>t.id);
                for (let t of (Object.values(this.opts.gameObjects).forEach(t=>{
                    if (t !== this.opts.originalNode) {
                        if (null == s ? void 0 : s.includes(t.getKey())) {
                            let e = t.width
                              , i = t.height
                              , s = t.x - e / 2
                              , o = t.y - i / 2;
                            PlaceableCursor.cache.wallRects.push({
                                left: s,
                                top: o,
                                width: e,
                                height: i
                            })
                        } else
                            PlaceableCursor.cache.nodeRects.push(t.getBuildArea())
                    }
                }
                ),
                this.opts.entities.values()))
                    t !== this.opts.originalNode && PlaceableCursor.cache.nodeRects.push(t.getBuildArea());
                PlaceableCursor.cache.tile = null !== (i = null === (e = this.opts.tilesetLayer) || void 0 === e ? void 0 : e.findTile(t=>!!t)) && void 0 !== i ? i : void 0
            }
            updateCursorPosition() {
                var t, e;
                let i = this.opts.movingNode.getBuildArea();
                if ((null === (t = PlaceableCursor.cache.position) || void 0 === t ? void 0 : t.x) === i.left && (null === (e = PlaceableCursor.cache.position) || void 0 === e ? void 0 : e.y) === i.top)
                    return;
                if (PlaceableCursor.cache.position = {
                    x: i.left,
                    y: i.top
                },
                this._isBuildAreaFree = !0,
                this.graphics.clear(),
                this.opts.editingWithoutPermissions) {
                    this.drawRect(16711680, i),
                    this._isBuildAreaFree = !1;
                    return
                }
                this.checkBuildCache();
                let s = this.calcCursorArea(i)
                  , o = this.getNodesInCursorArea(s);
                for (let t = s.top; t < s.top + s.height; t += this.opts.tileSize)
                    for (let e = s.left; e < s.left + s.width; e += this.opts.tileSize) {
                        let s = {
                            left: e,
                            top: t,
                            width: this.opts.tileSize,
                            height: this.opts.tileSize,
                            tilelike: i.tilelike
                        }
                          , r = this.overlapRects(i, s)
                          , l = this.getTileSurfaceType(e, t)
                          , a = this.overlapNodes(s, o.walls);
                        if (r || a.length)
                            for (let s = t; s < t + this.opts.tileSize; s += this.opts.snapSize)
                                for (let t = e; t < e + this.opts.tileSize; t += this.opts.snapSize) {
                                    let e = {
                                        left: t,
                                        top: s,
                                        width: this.opts.snapSize,
                                        height: this.opts.snapSize,
                                        tilelike: i.tilelike
                                    }
                                      , r = this.overlapRects(e, i)
                                      , n = this.overlapNodes(e, a).length > 0
                                      , h = n ? "wall" : l
                                      , d = h && this.opts.movingNode.canTargetSurface(h) && !this.overlapNodes(e, o.nodes).length;
                                    r ? d ? this.drawRect(65280, e) : (this._isBuildAreaFree = !1,
                                    this.drawRect(16711680, e)) : d || this.drawRect(15781730, e)
                                }
                        else {
                            let t = l && this.opts.movingNode.canTargetSurface(l);
                            t || this.drawRect(15781730, s)
                        }
                        this.drawBoundaries(s)
                    }
            }
            destroy() {
                this.graphics.destroy()
            }
            isBuildAreaFree() {
                return this._isBuildAreaFree
            }
            getSnapSize() {
                return this.opts.snapSize
            }
            getTileInfo() {}
            calcCursorArea(t) {
                var e;
                let i = PlaceableCursor.cache.tile || (null === (e = this.opts.tilesetLayer) || void 0 === e ? void 0 : e.getTileAtWorldXY(t.left, t.top))
                  , s = i ? (t.left - i.pixelX) % i.width : 0
                  , o = i ? (t.top - i.pixelY) % i.height : 0
                  , r = t.left - s
                  , l = t.top - o;
                return {
                    left: r - 3 * this.opts.tileSize,
                    top: l - 3 * this.opts.tileSize,
                    width: (6 + Math.ceil(t.width / this.opts.tileSize)) * this.opts.tileSize,
                    height: (6 + Math.ceil(t.height / this.opts.tileSize)) * this.opts.tileSize,
                    tilelike: t.tilelike
                }
            }
            overlapRects(t, e) {
                return !t.tilelike == !e.tilelike && t.left < e.left + e.width && t.top < e.top + e.height && t.left + t.width > e.left && t.top + t.height > e.top
            }
            static matchesRect(t, e) {
                return !t.tilelike == !e.tilelike && t.left === e.left && t.top === e.top && t.width === e.width && t.height === e.height
            }
            getTileSurfaceType(t, e) {
                var i, s;
                let o = null === (i = this.opts.tilesetLayer) || void 0 === i ? void 0 : i.getTileAtWorldXY(t, e);
                if (!o)
                    return null;
                let r = null === (s = o.tileset) || void 0 === s ? void 0 : s.name
                  , l = this.opts.tilesets[r];
                if (!l)
                    return null;
                let a = o.index - l.sid;
                return a >= 0 ? l.getTileSurfaceType(a) : null
            }
            overlapNodes(t, e) {
                return e.filter(e=>this.overlapRects(e, t))
            }
            getNodesInCursorArea(t) {
                return {
                    nodes: this.overlapNodes(t, PlaceableCursor.cache.nodeRects),
                    walls: this.overlapNodes(t, PlaceableCursor.cache.wallRects)
                }
            }
            drawRect(t, e) {
                this.graphics.fillStyle(t, .5),
                this.graphics.fillRect(e.left, e.top, e.width, e.height)
            }
            drawBoundaries(t) {
                let e = t.left
                  , i = t.top
                  , s = e + t.width
                  , o = i + t.height;
                this.graphics.lineStyle(.5, 16777215, .5),
                this.graphics.lineBetween(e, i, e + 4, i),
                this.graphics.lineBetween(e, i, e, i + 4),
                this.graphics.lineBetween(s, i, s - 4, i),
                this.graphics.lineBetween(s, i, s, i + 4),
                this.graphics.lineBetween(e, o, e + 4, o),
                this.graphics.lineBetween(e, o, e, o - 4),
                this.graphics.lineBetween(s, o, s - 4, o),
                this.graphics.lineBetween(s, o, s, o - 4)
            }
            constructor(t) {
                this.opts = t,
                this._isBuildAreaFree = !1,
                this.graphics = this.opts.scene.add.graphics(),
                this.graphics.setDepth(1e5),
                !this.checkBuildCache() && this.opts.originalNode && PlaceableCursor.unblockNode(this.opts.originalNode)
            }
        }
        ;
        PlaceableCursor.cache = {
            nodeRects: [],
            wallRects: [],
            updated: 0
        };
        let PlaceableTileCursor = class PlaceableTileCursor {
            get cursorOffset() {
                var t;
                return null !== (t = this.opts.cursorOffset) && void 0 !== t ? t : {
                    x: 0,
                    y: 0
                }
            }
            updateNodeRects() {
                this.baseCursor.updateNodeRects()
            }
            updateCursorPosition() {
                this.isCacheHit() || (this.calcCache(),
                this.getTilesetLayer() || this.baseCursor.blockMovingNodeArea(),
                this.baseCursor.updateCursorPosition(),
                this.onCursorPositionUpdated())
            }
            blockCurrentBuildArea() {}
            isBuildAreaFree() {
                return this.baseCursor.isBuildAreaFree()
            }
            getSnapSize() {
                return this.baseCursor.getSnapSize()
            }
            getTileInfo() {
                var t;
                return null === (t = this.cache.tileInfo) || void 0 === t ? void 0 : t.filter(t=>!!t).map(t=>{
                    let {position: e, ...i} = t
                      , toTileSpace = t=>Math.floor(t / this.opts.tileSize);
                    return {
                        position: {
                            x: toTileSpace(e.x),
                            y: toTileSpace(e.y)
                        },
                        ...i
                    }
                }
                )
            }
            destroy() {
                this.baseCursor.destroy(),
                this.restoreTiles()
            }
            onCursorPositionUpdated() {
                var t;
                if (!this.isBuildAreaFree()) {
                    this.opts.movingTile.setIndexes([], 1);
                    return
                }
                let e = this.calcCenterTile()
                  , i = this.calcNeighborTile(this.offsetToWorldXY({
                    x: 0,
                    y: -1
                }), e)
                  , s = this.calcNeighborTile(this.offsetToWorldXY({
                    x: 0,
                    y: 1
                }), e)
                  , o = this.calcNeighborTile(this.offsetToWorldXY({
                    x: 1,
                    y: 0
                }), e)
                  , r = this.calcNeighborTile(this.offsetToWorldXY({
                    x: -1,
                    y: 0
                }), e)
                  , l = this.calcCornerTile(this.offsetToWorldXY({
                    x: 1,
                    y: -1
                }), e, [i, o])
                  , a = this.calcCornerTile(this.offsetToWorldXY({
                    x: -1,
                    y: -1
                }), e, [i, r])
                  , n = this.calcCornerTile(this.offsetToWorldXY({
                    x: 1,
                    y: 1
                }), e, [s, o])
                  , h = this.calcCornerTile(this.offsetToWorldXY({
                    x: -1,
                    y: 1
                }), e, [s, r]);
                this.cache.tileInfo = [a, i, l, r, e, o, h, s, n],
                this.opts.movingTile.setIndexes(null === (t = this.cache.tileInfo) || void 0 === t ? void 0 : t.map(t=>{
                    if (null == t ? void 0 : t.add)
                        return {
                            index: t.add.index,
                            tileset: t.add.tileset,
                            node: this.getTilesetNode(t.add.tileset)
                        }
                }
                ), 3)
            }
            offsetToWorldXY(t) {
                return {
                    x: this.opts.movingTile.x + t.x * this.opts.tileSize,
                    y: this.opts.movingTile.y + t.y * this.opts.tileSize
                }
            }
            calcCenterTile() {
                let t = this.offsetToWorldXY({
                    x: 0,
                    y: 0
                });
                return this.hideTile(t),
                this.calcTile(t, !0)
            }
            calcNeighborTile(t, e) {
                var i, s, o, r;
                let l = this.calcTile(t);
                if ((null == l ? void 0 : null === (i = l.remove) || void 0 === i ? void 0 : i.tileset) === (null == e ? void 0 : null === (s = e.add) || void 0 === s ? void 0 : s.tileset) || (null == l ? void 0 : null === (o = l.remove) || void 0 === o ? void 0 : o.tileset) === (null == e ? void 0 : null === (r = e.remove) || void 0 === r ? void 0 : r.tileset))
                    return this.hideTile(t),
                    l
            }
            calcCornerTile(t, e, i) {
                var s, o, r, l, a, n, h, d, u, c, p, v;
                let m = this.calcTile(t)
                  , [y,f] = i;
                if ((null == m ? void 0 : null === (s = m.remove) || void 0 === s ? void 0 : s.tileset) === (null == e ? void 0 : null === (o = e.add) || void 0 === o ? void 0 : o.tileset)) {
                    if ((null == y ? void 0 : null === (a = y.remove) || void 0 === a ? void 0 : a.tileset) !== (null == m ? void 0 : null === (n = m.remove) || void 0 === n ? void 0 : n.tileset) || (null == f ? void 0 : null === (h = f.remove) || void 0 === h ? void 0 : h.tileset) !== (null == m ? void 0 : null === (d = m.remove) || void 0 === d ? void 0 : d.tileset))
                        return
                } else if ((null == m ? void 0 : null === (r = m.remove) || void 0 === r ? void 0 : r.tileset) !== (null == e ? void 0 : null === (l = e.remove) || void 0 === l ? void 0 : l.tileset) && (null == y ? void 0 : null === (u = y.remove) || void 0 === u ? void 0 : u.tileset) !== (null == m ? void 0 : null === (c = m.remove) || void 0 === c ? void 0 : c.tileset) && (null == f ? void 0 : null === (p = f.remove) || void 0 === p ? void 0 : p.tileset) !== (null == m ? void 0 : null === (v = m.remove) || void 0 === v ? void 0 : v.tileset))
                    return;
                return this.hideTile(t),
                m
            }
            calcTile(t, e) {
                var i;
                let s = this.getTile(t)
                  , o = this.getCurrentTilesetId(s)
                  , r = e ? this.getNewTilesetId(t) : o;
                if (!r)
                    return s && o ? {
                        position: t,
                        remove: {
                            index: s.index,
                            tileset: o
                        },
                        isCenter: e
                    } : void 0;
                let l = {
                    hasTileAt: (t,e)=>this.getNewTilesetId({
                        x: t,
                        y: e
                    }) === r,
                    autotile: null === (i = this.getTilesetNode(r)) || void 0 === i ? void 0 : i.getAutotileInfo()
                }
                  , a = {
                    ...t,
                    size: this.opts.tileSize
                };
                return {
                    position: t,
                    add: {
                        index: function(t, e) {
                            var i, s;
                            let o = function(t, e) {
                                let i = t(e.x, e.y - e.size)
                                  , s = t(e.x, e.y + e.size)
                                  , o = t(e.x + e.size, e.y)
                                  , r = t(e.x - e.size, e.y)
                                  , l = i && o && t(e.x + e.size, e.y - e.size)
                                  , a = i && r && t(e.x - e.size, e.y - e.size)
                                  , n = s && o && t(e.x + e.size, e.y + e.size)
                                  , h = s && r && t(e.x - e.size, e.y + e.size);
                                return function(t) {
                                    let {n: e, s: i, e: s, w: o, ne: r, nw: l, se: a, sw: n} = t;
                                    return ((+!!e << 0) + (+!!i << 1) + (+!!s << 2) + (+!!o << 3) + ((+!!r << 4) + (+!!l << 5) + (+!!a << 6) + (+!!n << 7))).toString(2).padStart(8, "0")
                                }({
                                    n: i,
                                    s,
                                    e: o,
                                    w: r,
                                    ne: l,
                                    nw: a,
                                    se: n,
                                    sw: h
                                })
                            }(t.hasTileAt, e)
                              , r = null === (i = t.autotile) || void 0 === i ? void 0 : i[o];
                            return r && (null === (s = function(t) {
                                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                if (!t.length)
                                    return;
                                let i = 0
                                  , s = t.map(t=>{
                                    var e;
                                    let s = null !== (e = t.weight) && void 0 !== e ? e : 0;
                                    if (s < 0)
                                        throw "weightedRandom.bad-weight";
                                    i += s;
                                    let o = {
                                        original: t,
                                        totalWeight: i
                                    };
                                    return o
                                }
                                );
                                if (!i) {
                                    let i = e() * t.length;
                                    return t[Math.floor(i)]
                                }
                                let o = e() * i
                                  , r = s.find(t=>t.totalWeight < o);
                                return r.original
                            }(r.indexes)) || void 0 === s ? void 0 : s.index)
                        }(l, a) || 0,
                        tileset: r
                    },
                    remove: s && o ? {
                        index: s.index,
                        tileset: o
                    } : void 0,
                    isCenter: e
                }
            }
            getTile(t) {
                var e;
                let {x: i, y: s} = t;
                return null === (e = this.getTilesetLayer()) || void 0 === e ? void 0 : e.getTileAtWorldXY(i, s)
            }
            getCurrentTilesetId(t) {
                var e;
                return null == t ? void 0 : null === (e = t.tileset) || void 0 === e ? void 0 : e.name
            }
            getNewTilesetId(t) {
                var e, i;
                return t.x !== this.opts.movingTile.x || t.y !== this.opts.movingTile.y ? this.getCurrentTilesetId(this.getTile(t)) : null === (i = this.opts.movingTile.tileset) || void 0 === i ? void 0 : null === (e = i.tilesetImage) || void 0 === e ? void 0 : e.name
            }
            getTilesetNode(t) {
                return t ? this.opts.tilesets[t] : void 0
            }
            hideTile(t) {
                var e;
                let {x: i, y: s} = t
                  , o = null === (e = this.getTilesetLayer()) || void 0 === e ? void 0 : e.getTileAtWorldXY(i, s);
                o && (this.hiddenTiles.push({
                    x: i,
                    y: s
                }),
                o.setVisible(!1))
            }
            restoreTiles() {
                this.hiddenTiles.forEach(t=>{
                    var e, i;
                    let {x: s, y: o} = t;
                    return null === (i = this.getTilesetLayer()) || void 0 === i ? void 0 : null === (e = i.getTileAtWorldXY(s, o)) || void 0 === e ? void 0 : e.setVisible(!0)
                }
                ),
                this.hiddenTiles = []
            }
            getTilesetLayer() {
                return this.cache.layer > 0 ? this.opts.tilesetLayers[this.cache.layer] : void 0
            }
            isCacheHit() {
                return this.cache.position.x === this.opts.movingTile.x && this.cache.position.y === this.opts.movingTile.y
            }
            calcCache() {
                var t;
                this.restoreTiles();
                let e = {
                    x: this.opts.movingTile.x,
                    y: this.opts.movingTile.y
                }
                  , i = (null === (t = this.opts.movingTile.tileset) || void 0 === t ? void 0 : t.layer) || this.getTopLayerAtPosition(e);
                this.cache = {
                    position: e,
                    layer: i,
                    tileInfo: []
                }
            }
            getTopLayerAtPosition(t) {
                let {x: e, y: i} = t
                  , s = this.opts.tilesetLayers
                  , o = s.length;
                for (let t = 0; t < o; ++t) {
                    let r = o - 1 - t;
                    if (s[r].hasTileAtWorldXY(e, i))
                        return r
                }
                return -1
            }
            constructor(t) {
                this.opts = t,
                this.hiddenTiles = [],
                this.baseCursor = new PlaceableCursor({
                    ...t,
                    movingNode: this.opts.movingTile,
                    originalNode: void 0,
                    snapSize: t.tileSize,
                    tilesetLayer: t.tilesetLayers[0]
                }),
                this.opts.movingTile.setContainerOffset({
                    x: -t.tileSize,
                    y: -t.tileSize
                }),
                this.calcCache()
            }
        }
        ;
        let EditableScene = class EditableScene extends GameScene {
            destroyGrid() {
                if (this.gridOverlay) {
                    var t, e, i;
                    this.gridOverlay.forEach(t=>{
                        null == t || t.destroy()
                    }
                    ),
                    this.gridOverlay = [],
                    null === (t = this.boundsRectangle) || void 0 === t || t.destroy(),
                    (null === (e = this.physics) || void 0 === e ? void 0 : e.world) && (this.physics.world.drawDebug = !1,
                    null === (i = this.physics.world.debugGraphic) || void 0 === i || i.clear())
                }
            }
            destroy() {
                var t;
                for (let t of (super.destroy(),
                this.destroyGrid(),
                this.entities.values()))
                    t.destroy();
                Object.values(this.gameObjects).forEach(t=>t.destroy()),
                null === (t = this.placeableCursor) || void 0 === t || t.destroy(),
                this.placeableCursor = void 0
            }
            drawGrid() {
                try {
                    this.destroyGrid(),
                    this.physics.world.debugGraphic || this.physics.world.createDebugGraphic(),
                    this.physics.world.drawDebug = !0;
                    let t = h.WS.width
                      , e = h.WS.height;
                    this.getSizeAttribute() && ("Large" === this.getSizeAttribute() ? (t = h.rq,
                    e = h.rq) : (t = h.ji,
                    e = h.ji));
                    let i = 3e3 - t / 2
                      , s = 3e3 - e / 2
                      , o = h.D9 === this.gridSize ? 0 : this.gridSize / 2;
                    this.mapBounds && (i > this.mapBounds.left && (i = this.mapBounds.left),
                    s > this.mapBounds.top && (s = this.mapBounds.top),
                    this.mapBounds.width > t && (t = this.mapBounds.width),
                    this.mapBounds.height > e && (e = this.mapBounds.height)),
                    i = Math.floor(i / this.gridSize) * this.gridSize,
                    s = Math.floor(s / this.gridSize) * this.gridSize,
                    this.boundsRectangle = this.add.rectangle(i, s, t, e),
                    this.boundsRectangle.setOrigin(0, 0).setStrokeStyle(4, 1729964);
                    let r = 10 * this.gridSize;
                    this.gridOverlay = [];
                    let l = 0;
                    for (; l < e; ) {
                        let e = 0;
                        for (; e < t; ) {
                            let t = this.add.grid(i + e - o, s + l - o, r, r, this.gridSize, this.gridSize, 0, .25, 16777215, .2);
                            t.setOrigin(0, 0),
                            t.setDepth(1e4),
                            this.gridOverlay.push(t),
                            e += r
                        }
                        l += r
                    }
                } catch (t) {
                    console.error(t)
                }
            }
            update(t, e) {
                if (super.update(t, e),
                this.camera) {
                    if (this.cursorNode) {
                        var i, s, o, r, l;
                        let t = this.editMode() && (null === (i = this.cursor) || void 0 === i ? void 0 : i.shift.isUp) || !!this.placeableCursor
                          , e = this.camera.getWorldPoint(this.input.activePointer.x, this.input.activePointer.y)
                          , a = null === (s = this.placeableCursor) || void 0 === s ? void 0 : s.cursorOffset;
                        a && (e.x -= a.x,
                        e.y -= a.y),
                        this.cursorNode.updateTemporaryPosition(e, t ? null !== (l = null === (o = this.placeableCursor) || void 0 === o ? void 0 : o.getSnapSize()) && void 0 !== l ? l : this.snapSize : 0, !a),
                        this.cursorNode.update(),
                        null === (r = this.placeableCursor) || void 0 === r || r.updateCursorPosition(),
                        this.outlineRect && this.updateOutline(e)
                    } else if ("erase" === this.editorMode && "floors" === this.category) {
                        let t = this.camera.getWorldPoint(this.input.activePointer.x, this.input.activePointer.y);
                        this.updateOutline(t)
                    }
                }
            }
            updateOutline(t) {
                if (!this.outlineRect)
                    return;
                let e = this.getSelectRect(t);
                this.outlineRect.displayWidth = this.snapSize * e.width,
                this.outlineRect.displayHeight = this.snapSize * e.height,
                this.outlineRect.setPosition(e.left * this.snapSize, e.top * this.snapSize)
            }
            releaseFromCursorHandler() {
                var t, e, i, s, o, r;
                if (null === (t = this.cursorConfig) || void 0 === t ? void 0 : t.original) {
                    let {node: t} = this.cursorConfig.original;
                    null == t || t.enable(),
                    null === (s = this.cursorNode) || void 0 === s || s.destroy()
                } else
                    (null === (e = this.cursorConfig) || void 0 === e ? void 0 : e.moving) && this.cursorConfig.mid ? null === (o = this.cursorNode) || void 0 === o || o.returnCursor() : null === (r = this.cursorNode) || void 0 === r || r.destroy();
                null === (i = this.placeableCursor) || void 0 === i || i.destroy(),
                this.placeableCursor = void 0,
                this.cursorNode = void 0,
                this.outlineRect && (this.outlineRect.displayWidth = 1,
                this.outlineRect.displayHeight = 1),
                this.cursorConfig = void 0
            }
            pickUpNodeAsCursor(t) {
                var e;
                this.releaseFromCursorHandler();
                let i = null !== (e = this.entities.get(t)) && void 0 !== e ? e : this.gameObjects[t];
                i && (this.cursorNode = i,
                this.cursorNode.pickUp(),
                this.cursorConfig = {
                    moving: !0,
                    mid: t
                })
            }
            createDynamicCursorSupport() {
                a.rV.attachToCursor.subscribeScene(this, t=>{
                    (async()=>{
                        if (this.releaseFromCursorHandler(),
                        t) {
                            this.cursorNode = await this.addTempNodeAtCursor(t.type, t.config),
                            this.cursorConfig = t;
                            let r = {
                                x: 0,
                                y: 0
                            };
                            if (t.moving) {
                                let e = this.entities.get(t.mid);
                                if (e) {
                                    let e = this.stateManager.getEntityByUniqueId(this.cursorConfig.mid);
                                    e && "mapEntity_id"in e && (t.mid = e.mapEntity_id)
                                }
                                let i = null != e ? e : this.gameObjects[t.mid];
                                if (i.disable(),
                                this.cursorConfig.original = {
                                    node: i
                                },
                                t.startCoords) {
                                    let e = i.position;
                                    e && (r.x = t.startCoords.x - e.x,
                                    r.y = t.startCoords.y - e.y)
                                }
                            } else if (t.placing && this.cursorNode) {
                                let t = this.cursorNode.position;
                                if (t) {
                                    let e = this.cursorNode.getBuildArea();
                                    r.x = e.left + e.width / 2 - t.x,
                                    r.y = e.top + e.height - t.y
                                }
                            }
                            if (this.cursorNode) {
                                var e, i, s, o;
                                if (this.cursorNode.create(),
                                null === (e = this.cursorNode.sprite) || void 0 === e || e.setDepth(1e5),
                                null === (i = this.cursorNode.sprite) || void 0 === i || i.disableInteractive(),
                                !this.editMode()) {
                                    if ("tile" === t.type) {
                                        let e = this.cursorNode;
                                        this.placeableCursor = new PlaceableTileCursor({
                                            entities: this.entities,
                                            gameObjects: this.gameObjects,
                                            movingTile: e,
                                            editingWithoutPermissions: t.editingWithoutPermissions,
                                            scene: this,
                                            tilesetLayers: this.dynamicLayers,
                                            tilesets: this.tilesets,
                                            tileSize: h.D9
                                        })
                                    } else
                                        "item" !== t.type && (this.placeableCursor = new PlaceableCursor({
                                            entities: this.entities,
                                            gameObjects: this.gameObjects,
                                            movingNode: this.cursorNode,
                                            originalNode: null === (o = this.cursorConfig) || void 0 === o ? void 0 : null === (s = o.original) || void 0 === s ? void 0 : s.node,
                                            editingWithoutPermissions: t.editingWithoutPermissions,
                                            scene: this,
                                            snapSize: this.snapSize,
                                            tilesetLayer: this.dynamicLayers[0],
                                            tilesets: this.tilesets,
                                            tileSize: h.D9,
                                            cursorOffset: r
                                        }))
                                }
                            }
                        }
                    }
                    )()
                }
                ),
                this.handleEvent(a.qM.RELEASE_FROM_CURSOR, this.releaseFromCursorHandler.bind(this))
            }
            createDynamicLayer(t) {
                let e = []
                  , i = 0
                  , s = Object.values(this.tilesets)
                  , o = s.filter(e=>e.layer === t);
                if (s.forEach(t=>{
                    t.tilesetImage && (e.push(t.tilesetImage),
                    i += t.tilesetImage.total)
                }
                ),
                o.forEach(t=>{
                    if (!t.tilesetImage) {
                        let s = t.initTileset(this.dynamicMap, i);
                        s && (e.push(s),
                        i += s.total)
                    }
                }
                ),
                this.dynamicLayers[t]) {
                    this.dynamicLayers[t].tileset = e;
                    let i = [];
                    e.forEach(t=>{
                        let e = t.firstgid;
                        for (let s = 0; s < t.total; s += 1)
                            i[e + s] = t
                    }
                    ),
                    this.dynamicLayers[t].gidMap = i
                } else {
                    let i = this.dynamicMap.createBlankLayer("dynamicLayer".concat(t), e);
                    i && (this.dynamicLayers[t] = i,
                    this.dynamicLayers[t].setDepth(t - 11))
                }
                return this.dynamicLayers[t]
            }
            addTileset(t) {
                let e = this.tilesets[t];
                if (e)
                    return e.loadPromise || Promise.resolve(e);
                let i = g.Z.getGameTiles()
                  , s = null == i ? void 0 : i[t];
                if (!s)
                    return Promise.reject(Error("tileset not found ".concat(t)));
                let r = new TilesetNode(this,s);
                return r.preload(),
                this.tilesets[t] = r,
                r.loadPromise = new Promise(t=>{
                    this.load.once(o().Loader.Events.COMPLETE, ()=>{
                        this.createDynamicLayer(s.layer),
                        t(r)
                    }
                    ),
                    this.load.start()
                }
                ),
                r.loadPromise
            }
            enumerateTiles(t, e) {
                if (t.indexes && t.width) {
                    let i = 0;
                    t.indexes.forEach(s=>{
                        s < 0 ? i -= s : (e(s, t.x + i % t.width, t.y + Math.floor(i / t.width)),
                        i += 1)
                    }
                    )
                } else
                    t.index >= 0 && e(t.index, t.x, t.y)
            }
            addTileConfig(t) {
                this.addTileset(t.tileset).then(()=>{
                    this.enumerateTiles(t, (e,i,s)=>{
                        this.addTile({
                            tileset: t.tileset,
                            index: e,
                            x: i,
                            y: s
                        })
                    }
                    )
                }
                ).catch(t=>{
                    console.log("ERROR: ", t)
                }
                )
            }
            updateTiles(t) {
                let e = g.Z.getGameTiles();
                if (!this.dynamicMap)
                    return;
                let i = new Set;
                t.forEach(t=>{
                    i.add(t.tileset)
                }
                ),
                i.forEach(t=>{
                    var i;
                    let s = this.tilesets[t];
                    if (!s)
                        return;
                    let o = this.dynamicLayers[null !== (i = s.layer) && void 0 !== i ? i : 0];
                    if (!o)
                        return;
                    let r = e[t]
                      , l = this.dynamicMap.width
                      , a = this.dynamicMap.height
                      , n = r.width * r.height;
                    for (let t = 0; t < a; t += 1)
                        for (let e = 0; e < l; e += 1) {
                            let i = o.getTileAt(e, t);
                            i && i.index >= s.sid && i.index < s.sid + n && o.removeTileAt(e, t)
                        }
                }
                );
                let s = g.Z.getMapTiles();
                Object.values(s).forEach(t=>{
                    i.has(t.tileset) && this.addTileConfig(t)
                }
                )
            }
            addTile(t) {
                let e = this.tilesets[t.tileset];
                if (e)
                    try {
                        let i = e.sid + e.mapIndex(t.index);
                        this.dynamicLayers[e.layer].putTileAt(i, t.x, t.y)
                    } catch (t) {
                        console.log("ERROR: ", t)
                    }
                else
                    console.log("".concat(t.tileset, " was not preloaded.")),
                    this.addTileset(t.tileset).then(e=>{
                        let i = e.sid + e.mapIndex(t.index);
                        this.dynamicLayers[e.layer].putTileAt(i, t.x, t.y)
                    }
                    ).catch(t=>{
                        console.log("ERROR: ", null == t ? void 0 : t.message)
                    }
                    )
            }
            clickCaptured() {
                return "paint" === this.editorMode
            }
            editMode() {
                return !!this.editorMode
            }
            updateCollisions() {}
            setAllObjectsVisible(t) {
                this.gameObjects && Object.values(this.gameObjects).forEach(e=>{
                    var i;
                    null === (i = e.sprite) || void 0 === i || i.setVisible(t && !e.hidden)
                }
                )
            }
            onPointerDown(t) {
                t.leftButtonDown() && (this.cursorDown = {
                    x: t.worldX / this.snapSize * this.snapSize,
                    y: t.worldY / this.snapSize * this.snapSize
                })
            }
            onPointerUp(t) {
                if (t.leftButtonReleased() && this.cursorDown)
                    this.buildAction(t),
                    delete this.cursorDown;
                else if (t.rightButtonReleased()) {
                    let e = this.dynamicLayers.length - 1;
                    for (; e >= 0; ) {
                        if (this.dynamicLayers[e]) {
                            let i = this.dynamicLayers[e].getTileAtWorldXY(t.worldX, t.worldY);
                            i && i.layer.tilemapLayer.tileset.forEach(s=>{
                                s.firstgid <= i.index && i.index < s.firstgid + s.columns * s.rows && (console.log("Layer ".concat(e, " tile is tileset ").concat(s.name, " index ").concat(i.index - s.firstgid)),
                                console.log("@ ".concat(t.worldX, ", ").concat(t.worldY, " or ").concat(Math.floor(t.worldX / 32), ", ").concat(Math.floor(t.worldY / 32))))
                            }
                            )
                        }
                        e -= 1
                    }
                }
            }
            buildTileConfig(t, e) {
                var i, s;
                if (!e.width || !e.indexes)
                    return;
                let o = (null === (i = t.add) || void 0 === i ? void 0 : i.width) || 1
                  , r = (null === (s = t.add) || void 0 === s ? void 0 : s.height) || 1;
                if (1 === o && 1 === r)
                    t.add.width = e.width,
                    t.add.height = e.height,
                    t.add.indexes = e.indexes;
                else {
                    let i = Array(o * r)
                      , s = e.indexes;
                    for (let t = 0; t < r; t += 1)
                        for (let r = 0; r < o; r += 1)
                            i[t * o + r] = s[t % e.height * e.width + r % e.width];
                    t.add.indexes = i
                }
            }
            getSelectRect(t) {
                let e = {
                    left: Math.floor(t.x / this.snapSize),
                    top: Math.floor(t.y / this.snapSize),
                    width: 1,
                    height: 1
                };
                if (this.cursorDown) {
                    let t = Math.floor(this.cursorDown.x / this.snapSize)
                      , i = Math.floor(this.cursorDown.y / this.snapSize);
                    if (e.left > t) {
                        let i = e.left;
                        e.left = t,
                        t = i
                    }
                    if (e.top > i) {
                        let t = e.top;
                        e.top = i,
                        i = t
                    }
                    e.width = t - e.left + 1,
                    e.height = i - e.top + 1
                }
                return e
            }
            clickItemAction(t) {
                var e, i, s, o, r, h, d;
                switch (this.category) {
                case "objects":
                case "walls":
                case "ugc":
                    {
                        let o = g.Z.getMapObject(t.targetId);
                        if (o) {
                            let r = g.Z.getGameObject(o.object);
                            if (!!(null == r ? void 0 : r.wall) != ("walls" === this.category))
                                return;
                            switch (this.editorMode) {
                            case "select":
                                if (t.rightClick) {
                                    console.log("got right click on object");
                                    let t = {
                                        type: "update",
                                        update: {
                                            _id: o._id,
                                            flip: !o.flip
                                        }
                                    };
                                    a.ZP.emitEventNow(a.qM.BUILD_OBJECT, t)
                                } else {
                                    let a = (0,
                                    n.Er)(l.h.getState());
                                    (null === (s = a.selectedItem) || void 0 === s ? void 0 : null === (i = s.object) || void 0 === i ? void 0 : null === (e = i.config) || void 0 === e ? void 0 : e._id) === (null == o ? void 0 : o._id) && (this.pickUpNodeAsCursor(t.targetId),
                                    delete this.cursorDown),
                                    l.h.dispatch((0,
                                    n.j6)({
                                        object: r,
                                        config: o
                                    }))
                                }
                                return;
                            case "erase":
                                let h = {
                                    type: "remove",
                                    remove: {
                                        _id: o._id
                                    }
                                };
                                a.ZP.emitEventNow(a.qM.BUILD_OBJECT, h)
                            }
                        }
                    }
                    break;
                case "entities":
                    let u = this.stateManager.getEntityByUniqueId(t.targetId);
                    if (u) {
                        let e = null !== (o = null == u ? void 0 : u.mapEntity_id) && void 0 !== o ? o : u.mid;
                        switch (e !== u.mid && (u = this.stateManager.getEntityByUniqueId(e)),
                        this.editorMode) {
                        case "erase":
                            console.log("erasing mid", t.targetId, null == u ? void 0 : u.mapEntity_id),
                            a.ZP.emitEventNow(a.qM.BUILD_ENTITY, {
                                action: "remove",
                                remove: {
                                    _id: e
                                }
                            });
                            return;
                        case "select":
                            if (t.rightClick) {
                                let t = {
                                    action: "move",
                                    move: {
                                        _id: e,
                                        x: u.position.x,
                                        y: u.position.y,
                                        flip: !u.flip
                                    }
                                };
                                a.ZP.emitEventNow(a.qM.BUILD_ENTITY, t)
                            } else {
                                let e = (0,
                                n.Er)(l.h.getState());
                                (null === (d = e.selectedItem) || void 0 === d ? void 0 : null === (h = d.entity) || void 0 === h ? void 0 : null === (r = h.config) || void 0 === r ? void 0 : r.mid) === u.mid && (this.pickUpNodeAsCursor(t.targetId),
                                delete this.cursorDown);
                                let i = g.Z.getGameEntity(u.entity);
                                l.h.dispatch((0,
                                n.CL)({
                                    entity: i,
                                    config: JSON.parse(JSON.stringify(u))
                                }))
                            }
                        }
                    } else
                        console.log("".concat(t.targetId, " is not an entity"))
                }
            }
            buildAction(t) {
                var e, i, s, o, r, h, d, u, c, p, v, m, y, f, g, b, w;
                let x = this.category;
                switch (this.editorMode) {
                case "erase":
                    if ("floors" === x) {
                        let e = this.getSelectRect({
                            x: t.worldX,
                            y: t.worldY
                        });
                        this.removeTopTiles(e)
                    }
                    break;
                case "select":
                    if (this.cursorNode && (null === (e = this.cursorConfig) || void 0 === e ? void 0 : e.mid)) {
                        if ("entities" === x) {
                            let t = this.stateManager.getEntityByUniqueId(this.cursorConfig.mid)
                              , e = {
                                action: "move",
                                move: {
                                    _id: null !== (i = null == t ? void 0 : t.mapEntity_id) && void 0 !== i ? i : this.cursorConfig.mid,
                                    x: this.cursorNode.position.x,
                                    y: this.cursorNode.position.y
                                }
                            };
                            a.ZP.emitEventNow(a.qM.BUILD_ENTITY, e)
                        } else if (["objects", "walls", "ugc"].includes(x)) {
                            let t = {
                                type: "update",
                                update: {
                                    _id: null === (s = this.cursorConfig) || void 0 === s ? void 0 : s.mid,
                                    x: this.cursorNode.position.x,
                                    y: this.cursorNode.position.y
                                }
                            };
                            a.ZP.emitEventNow(a.qM.BUILD_OBJECT, t)
                        }
                        this.releaseFromCursorHandler()
                    }
                    break;
                case "paint":
                    let P = (0,
                    n.Er)(l.h.getState());
                    if (P.selectedItem && this.cursorNode)
                        switch (P.selectedItem.type) {
                        case "object":
                            {
                                let t = {
                                    type: "add",
                                    add: {
                                        x: this.cursorNode.position.x,
                                        y: this.cursorNode.position.y,
                                        object: null === (r = P.selectedItem) || void 0 === r ? void 0 : null === (o = r.object) || void 0 === o ? void 0 : o.def.id
                                    }
                                };
                                a.ZP.emitEventNow(a.qM.BUILD_OBJECT, t)
                            }
                            break;
                        case "entity":
                            {
                                let t = {
                                    action: "add",
                                    add: {
                                        x: this.cursorNode.position.x,
                                        y: this.cursorNode.position.y,
                                        entity: null === (h = null === (u = P.selectedItem) || void 0 === u ? void 0 : null === (d = u.entity) || void 0 === d ? void 0 : d.def) || void 0 === h ? void 0 : h.id
                                    }
                                };
                                a.ZP.emitEventNow(a.qM.BUILD_ENTITY, t)
                            }
                            break;
                        case "tile":
                            if (this.dynamicMap) {
                                let e = this.getSelectRect({
                                    x: t.worldX,
                                    y: t.worldY
                                })
                                  , i = {
                                    action: "add",
                                    add: {
                                        tileset: null === (p = P.selectedItem) || void 0 === p ? void 0 : null === (c = p.tile) || void 0 === c ? void 0 : c.tilesetId,
                                        x: e.left,
                                        y: e.top,
                                        index: null === (m = P.selectedItem) || void 0 === m ? void 0 : null === (v = m.tile) || void 0 === v ? void 0 : v.tilesetIndex
                                    }
                                };
                                e.width * e.height > 1 && (i.add.width = e.width,
                                i.add.height = e.height),
                                (null === (f = P.selectedItem) || void 0 === f ? void 0 : null === (y = f.tile) || void 0 === y ? void 0 : y.indexes) && (null === (b = P.selectedItem) || void 0 === b ? void 0 : null === (g = b.tile) || void 0 === g ? void 0 : g.width) && this.buildTileConfig(i, null === (w = P.selectedItem) || void 0 === w ? void 0 : w.tile),
                                a.ZP.emitEventNow(a.qM.BUILD_TILE, i)
                            }
                        }
                }
            }
            static disableContextMenu(t) {
                return t.preventDefault(),
                !1
            }
            createEditorSupport() {
                a.rV.editor.on.subscribeScene(this, ()=>{
                    this.editorMode = "paint",
                    this.category = "objects",
                    this.snapSize = h.D9 / 4,
                    this.invisibleObjects.forEach(t=>{
                        var e;
                        return null === (e = t.sprite) || void 0 === e ? void 0 : e.setVisible(!0)
                    }
                    ),
                    this.drawGrid(),
                    this.outlineRect || (this.outlineRect = this.add.rectangle(0, 0, this.snapSize, this.snapSize, 3381759, .3),
                    this.outlineRect.setOrigin(0, 0)),
                    this.input.on("pointerdown", this.onPointerDown, this),
                    this.input.on("pointerup", this.onPointerUp, this)
                }
                ),
                a.rV.editor.off.subscribeScene(this, ()=>{
                    var t;
                    this.editorMode = void 0,
                    this.invisibleObjects.forEach(t=>{
                        var e;
                        return null === (e = t.sprite) || void 0 === e ? void 0 : e.setVisible(!1)
                    }
                    ),
                    this.setAllObjectsVisible(!0),
                    this.destroyGrid(),
                    this.input.off("pointerdown", this.onPointerDown),
                    this.input.off("pointerup", this.onPointerUp),
                    null === (t = this.outlineRect) || void 0 === t || t.destroy(),
                    this.outlineRect = void 0
                }
                ),
                this.handleEvent(a.qM.SET_MODE, t=>{
                    if (this.editorMode = t,
                    "paint" !== t) {
                        var e;
                        null === (e = this.cursorNode) || void 0 === e || e.destroy(),
                        this.cursorNode = void 0
                    }
                }
                ),
                this.handleEvent(a.fb.GAME_OBJECT_CLICKED, t=>{
                    this.editorMode && this.clickItemAction(t)
                }
                ),
                this.handleEvent(a.fb.SERVER_BUILD_NODE, t=>{
                    (async()=>{
                        switch (t.action) {
                        case "add":
                            "tile" === t.type ? this.addTileConfig(t.add) : "object" === t.type && await this.addObject(t);
                            break;
                        case "remove":
                            "tile" === t.type ? this.removeTiles(t.remove) : "object" === t.type && t._id in this.gameObjects && this.removeObject(t._id);
                            break;
                        case "update":
                            if ("object" === t.type) {
                                if (t._id in this.gameObjects) {
                                    this.removeObject(t._id);
                                    let e = g.Z.getMapObject(t._id);
                                    e && (Object.assign(e, t),
                                    await this.addObject(e))
                                }
                            } else
                                "tile" === t.type && t.update && this.updateTiles(t.update)
                        }
                        this.updateCollisions()
                    }
                    )()
                }
                ),
                this.handleEvent(a.qM.SET_CATEGORY, t=>{
                    this.category = t;
                    let e = "floors" === t;
                    this.releaseFromCursorHandler(),
                    this.snapSize = e ? h.D9 : h.D9 / 4,
                    this.setAllObjectsVisible(!e),
                    e || this.invisibleObjects.forEach(t=>{
                        var e;
                        return null === (e = t.sprite) || void 0 === e ? void 0 : e.setVisible(!0)
                    }
                    ),
                    this.drawGrid()
                }
                )
            }
            removeTiles(t) {
                var e, i, s;
                let o = this.dynamicLayers[null !== (e = t.layer) && void 0 !== e ? e : 0];
                if (!o)
                    return;
                let r = null !== (i = t.width) && void 0 !== i ? i : 1
                  , l = null !== (s = t.height) && void 0 !== s ? s : 1;
                for (let e = 0; e < l; e += 1)
                    for (let i = 0; i < r; i += 1)
                        o.removeTileAt(t.x + i, t.y + e)
            }
            removeTopTiles(t) {
                if (!this.dynamicMap)
                    return;
                let e = this.dynamicLayers.length - 1
                  , i = -1;
                for (; e >= 0; ) {
                    if (this.dynamicLayers[e]) {
                        let s = this.dynamicLayers[e].getTilesWithin(t.left, t.top, t.width, t.height);
                        if (s && s.some(t=>t.index >= 0)) {
                            i = e;
                            break
                        }
                    }
                    e -= 1
                }
                if (i >= 0) {
                    let e = {
                        action: "remove",
                        remove: {
                            layer: i,
                            x: t.left,
                            y: t.top,
                            width: t.width,
                            height: t.height
                        }
                    };
                    a.ZP.emitEventNow(a.qM.BUILD_TILE, e)
                }
            }
            async addObject(t) {
                var e, i;
                let s = await this.addGameObjectElement(t);
                s && (s.create(),
                null === (i = s.sprite) || void 0 === i || i.setVisible(!0),
                s.collides && this.updateCollisions()),
                this.gameObjects[t._id] = s,
                null === (e = this.placeableCursor) || void 0 === e || e.updateNodeRects()
            }
            removeObject(t) {
                var e;
                let i = this.gameObjects[t];
                if (i) {
                    let {collides: e} = i;
                    delete this.gameObjects[t],
                    i.destroy(),
                    e && this.updateCollisions()
                }
                null === (e = this.placeableCursor) || void 0 === e || e.updateNodeRects()
            }
            createTilemap() {
                this.dynamicMap = this.make.tilemap({
                    tileHeight: h.D9,
                    tileWidth: h.D9,
                    width: h.uT,
                    height: h.uT
                })
            }
            create() {
                this.createEditorSupport(),
                this.createDynamicCursorSupport(),
                PlaceableCursor.clearCache(),
                this.input.keyboard && (this.cursor = this.input.keyboard.addKeys({
                    upW: o().Input.Keyboard.KeyCodes.W,
                    downS: o().Input.Keyboard.KeyCodes.S,
                    leftA: o().Input.Keyboard.KeyCodes.A,
                    rightD: o().Input.Keyboard.KeyCodes.D,
                    up: o().Input.Keyboard.KeyCodes.UP,
                    down: o().Input.Keyboard.KeyCodes.DOWN,
                    left: o().Input.Keyboard.KeyCodes.LEFT,
                    right: o().Input.Keyboard.KeyCodes.RIGHT,
                    space: o().Input.Keyboard.KeyCodes.SPACE,
                    shift: o().Input.Keyboard.KeyCodes.SHIFT
                }, !1),
                a.rV.blur.subscribeScene(this, ()=>{
                    var t, e;
                    null === this || void 0 === this || null === (e = this.input) || void 0 === e || null === (t = e.keyboard) || void 0 === t || t.resetKeys()
                }
                ),
                this.input.keyboard.clearCaptures())
            }
            constructor(t) {
                super(t),
                this.joystickState = {
                    up: !1,
                    down: !1,
                    left: !1,
                    right: !1
                },
                this.gridSize = h.D9,
                this.snapSize = h.D9 / 4,
                this.tilesets = {},
                this.gameObjects = {},
                this.entities = new Map,
                this.stateManager = x.l.getInstance()
            }
        }
        ;
        function isTriggerNode(t) {
            return !!(t.getTriggerId && t.getTriggerArea)
        }
        let TriggerSystem = class TriggerSystem {
            setPlayer(t) {
                this.player = t
            }
            updateNode(t) {
                if (!isTriggerNode(t))
                    return;
                let e = this.triggers.indexOf(t);
                e < 0 && t.hasOnCollide ? this.triggers.push(t) : e >= 0 && !t.hasOnCollide && this.triggers.splice(e, 1)
            }
            addNode(t) {
                isTriggerNode(t) && t.hasOnCollide && this.triggers.push(t)
            }
            removeNode(t) {
                if (!isTriggerNode(t))
                    return;
                let e = this.triggers.indexOf(t);
                e < 0 || this.triggers.splice(e, 1)
            }
            update() {
                var t, e;
                if (null === (t = this.player) || void 0 === t ? void 0 : t.stopMoving)
                    return;
                let i = null === (e = this.player) || void 0 === e ? void 0 : e.body;
                if (i) {
                    this.searchIndex >= this.triggers.length && (this.searchIndex = 0);
                    for (let t = 0; t < 4 && this.searchIndex < this.triggers.length; t += 1,
                    this.searchIndex += 1) {
                        let t = this.triggers[this.searchIndex];
                        if (!t || t.disabled)
                            continue;
                        let e = t.getTriggerId();
                        if (!this.collide(i, t.getTriggerArea())) {
                            this.lastTriggerIds.has(e) && t.uncollided() && this.lastTriggerIds.delete(e);
                            continue
                        }
                        if (!this.lastTriggerIds.has(e)) {
                            this.lastTriggerIds.add(e),
                            console.log("collided with something ".concat(e)),
                            t.collided() || this.lastTriggerIds.delete(e);
                            break
                        }
                    }
                }
            }
            collide(t, e) {
                return !!e && ("radius"in e ? this.collideWithCircle(t, e) : this.collideWithRect(t, e))
            }
            collideWithCircle(t, e) {
                var i, s, o, r;
                let l = e.radius * e.radius;
                return i = t.x + t.halfWidth,
                s = t.bottom,
                o = i - e.x,
                r = s - e.y,
                o * o + r * r < l
            }
            collideWithRect(t, e) {
                return e.x - 3 < t.x + t.width && e.y - 3 < t.y + t.height && e.x + e.width > t.x - 3 && e.y + e.height > t.y - 3
            }
            constructor() {
                this.triggers = [],
                this.lastTriggerIds = new Set,
                this.searchIndex = 0
            }
        }
        ;
        var E = i(76570)
          , N = i(57532)
          , M = i(83454);
        let getPlayerCharacterData = t=>{
            let e = "mute" === t.status || "restrict" === t.status || "block" === t.status
              , i = "normal";
            return t.memberships ? ("function" == typeof t.memberships.has ? t.memberships.has("vip") : !!t.memberships.vip) && (i = "vip") : i = void 0,
            getCharacterData({
                avatarId: t.currentAvatar.id,
                pieces: JSON.parse(t.currentAvatar.pieces || "{}"),
                position: t.position,
                label: e ? "(muted)" : t.username,
                modifiers: t.modifiers,
                kind: i
            })
        }
          , getPlayerPetData = t=>{
            var e, i, s;
            return (null === (e = t.petAvatar) || void 0 === e ? void 0 : e.id) && (null === (i = t.petAvatar) || void 0 === i ? void 0 : i.pieces) ? getCharacterData({
                avatarId: t.petAvatar.id,
                pieces: JSON.parse(t.petAvatar.pieces || "{}"),
                position: {
                    x: t.position.x - 16,
                    y: t.position.y
                },
                label: null !== (s = t.petAvatar.name) && void 0 !== s ? s : "Fido",
                fade: t.petAvatar.fade,
                kind: "pet"
            }) : null
        }
        ;
        let RoomScene = class RoomScene extends EditableScene {
            setMapBackground() {
                var t, e;
                let i = this.stateManager.mapLabels;
                i && (this.mapBg = "interior",
                (null == i ? void 0 : i.length) > 0 && (i.includes("dream") ? this.mapBg = "dream" : i.includes("land") ? this.mapBg = "land" : i.includes("space") ? this.mapBg = "space" : i.includes("water") ? this.mapBg = "water" : (i.includes("trial") || i.includes("rent")) && (this.mapBg = "land")),
                this.isInterior = null !== (t = null == i ? void 0 : i.includes("interior")) && void 0 !== t && t,
                this.centerPlayer = null !== (e = null == i ? void 0 : i.includes("center")) && void 0 !== e && e)
            }
            preloadTilesets() {
                let t = g.Z.getGameTiles();
                if (t) {
                    let i = new Set
                      , s = g.Z.getMapTiles();
                    if (s) {
                        var e;
                        null === (e = Object.entries(s)) || void 0 === e || e.forEach(t=>{
                            let[,e] = t;
                            i.add(e.tileset)
                        }
                        ),
                        i.forEach(e=>{
                            let i = t[e];
                            if (i) {
                                let t = new TilesetNode(this,i);
                                t.preload(),
                                this.tilesets[e] = t
                            }
                        }
                        )
                    } else
                        console.warn("no tiles!")
                }
            }
            backgroundImage() {
                var t;
                let e = g.Z.getMapBackground();
                if (null == e ? void 0 : null === (t = e.sprite) || void 0 === t ? void 0 : t.image)
                    return e.sprite.image;
                let i = (0,
                v.Uk)("/game/assets/bg/spacetile.png");
                switch (this.mapBg) {
                case "dream":
                case "space":
                case "water":
                case "land":
                    return i;
                default:
                    return
                }
            }
            preloadBackground() {
                let t = this.backgroundImage();
                if (!t) {
                    this.mapBg = void 0;
                    return
                }
                let e = this.textures.exists("bg_image");
                e && t === RoomScene._bgImageLoaded || (e && this.textures.remove("bg_image"),
                this.load.image("bg_image", t),
                RoomScene._bgImageLoaded = t)
            }
            preloadAsset(t, e) {
                this.nodeFactory.preloadAssetsFor(t, e)
            }
            preloadGameObjects() {
                let t = g.Z.getMapObjects();
                t && Object.values(t).forEach(t=>{
                    if (!(null == t ? void 0 : t.object))
                        return;
                    let e = g.Z.getGameObject(t.object);
                    if (e) {
                        this.nodeFactory.preloadAssetsForSprite(e.sprite);
                        let s = this.nodeFactory.buildNodeInstance({
                            type: "object",
                            mapConfig: t,
                            gameConfig: e
                        });
                        if (s) {
                            var i;
                            this.gameObjects[t._id] = s,
                            null === (i = this.placeableCursor) || void 0 === i || i.updateNodeRects()
                        }
                    } else
                        console.log("Object not found", t)
                }
                )
            }
            preloadGameEntities() {
                var t;
                let e = this.stateManager.getMapEntities()
                  , i = new Set;
                null == e || e.forEach(t=>{
                    let e = g.Z.getGameEntity(t.entity);
                    e && i.add(e)
                }
                );
                let s = this.stateManager.currentPlayer;
                (null === (t = s.full) || void 0 === t ? void 0 : t.entities) && s.full.entities.forEach(t=>{
                    let e = g.Z.getGameEntity(t.entity);
                    e && i.add(e)
                }
                ),
                i.forEach(t=>{
                    if ("npc" !== t.type) {
                        var e, i, s;
                        if ("generic"in t) {
                            let i = null === (e = t.generic.layers) || void 0 === e ? void 0 : e.filter(t=>{
                                var e;
                                return null === (e = t.sprite) || void 0 === e ? void 0 : e.image
                            }
                            ).map(t=>{
                                var e, i, s;
                                return {
                                    image: t.sprite.image,
                                    frameWidth: null === (e = t.sprite.size) || void 0 === e ? void 0 : e.width,
                                    frameHeight: null === (i = t.sprite.size) || void 0 === i ? void 0 : i.height,
                                    key: (0,
                                    v.ZB)(null !== (s = t.sprite.image) && void 0 !== s ? s : "noimg"),
                                    hash: t.sprite.hash
                                }
                            }
                            );
                            this.nodeFactory.preloadAssetsArrayFor(i)
                        } else
                            this.nodeFactory.preloadAssetsFor((0,
                            v.ZB)(t.sprite.image), {
                                image: t.sprite.image,
                                frameWidth: null === (i = t.sprite.size) || void 0 === i ? void 0 : i.width,
                                frameHeight: null === (s = t.sprite.size) || void 0 === s ? void 0 : s.height,
                                hash: t.sprite.hash
                            })
                    }
                }
                )
            }
            preloadMapEntities() {
                var t;
                let e = this.stateManager.getMapEntities();
                this.entitiesToBuild || (this.entitiesToBuild = []);
                let i = this.stateManager.currentPlayer
                  , s = new Map;
                null === (t = i.full) || void 0 === t || t.entities.forEach(t=>{
                    s.set(t.mapEntity_id, t)
                }
                ),
                e && e.forEach((t,e)=>{
                    if (!s.has(t.mid)) {
                        let s = g.Z.getGameEntity(t.entity);
                        if (s) {
                            if ("npc" === s.type) {
                                var i, o;
                                let r = new NpcNode(this,t,s);
                                null === (i = this.nodesPreloaded) || void 0 === i || i.push(r),
                                this.entities.set(e, r),
                                null === (o = this.placeableCursor) || void 0 === o || o.updateNodeRects()
                            } else
                                "crop" === s.type || s.type,
                                this.entitiesToBuild.push(t)
                        }
                    }
                }
                )
            }
            preloadGameSprites() {
                M.env.SUPPORT_OLDCROPS && (this.load.spritesheet("crop-seeding", "".concat(h.pZ, "/entities/animations/Pixels_FX_FarmingSkill_seeds.png"), {
                    frameWidth: 32,
                    frameHeight: 32
                }),
                this.load.spritesheet("crop-watering", "".concat(h.pZ, "/entities/animations/Pixels_FX_FarmingSkill_Watering.png"), {
                    frameWidth: 32,
                    frameHeight: 32
                }),
                this.load.spritesheet("crop-fertilizing", "".concat(h.pZ, "/entities/animations/Pixels_FX_FarmingSkill_Fertilizing.png"), {
                    frameWidth: 32,
                    frameHeight: 32
                }),
                this.load.spritesheet("crop-shear-harvesting", "".concat(h.pZ, "/entities/animations/Pixels_FX_FarmingSkill_Harvesting.png"), {
                    frameWidth: 32,
                    frameHeight: 32
                }),
                this.load.spritesheet("crop-goldenrake-harvesting", "".concat(h.pZ, "/entities/animations/Pixels_FX_FarmingSkill_Golden+Rake.png"), {
                    frameWidth: 32,
                    frameHeight: 32
                }),
                this.load.spritesheet("crop-maturing", "".concat(h.pZ, "/entities/animations/Pixels_FX_Farming_CropLevel.png"), {
                    frameWidth: 32,
                    frameHeight: 32
                }))
            }
            preloadJuicyGoodness() {
                ParticleFX.preload(this)
            }
            preload() {
                console.log("preloading scene"),
                this.nodesPreloaded = this.nodesToAdd,
                this.nodesToAdd = [],
                this.nodeFactory.init(),
                this.resize(window.innerWidth, window.innerHeight),
                this.preloadPlugins(),
                this.preloadFonts(),
                this.preloadTilesets(),
                this.preloadGameEntities(),
                this.preloadGameObjects(),
                this.preloadMapEntities(),
                this.preloadPlayerEntities(),
                this.preloadGameSprites(),
                this.preloadBackground(),
                this.preloadJuicyGoodness(),
                this.nodesPreloaded.forEach(t=>t.preload())
            }
            onNodeCreated(t) {
                this.triggerSystem.addNode(t),
                PlaceableCursor.blockAddedNode(t)
            }
            onNodeUpdated(t) {
                this.triggerSystem.updateNode(t)
            }
            putTile(t, e, i, s, o) {
                if (super.addTile({
                    tileset: t,
                    index: e,
                    x: i,
                    y: s
                }),
                t in this.tilesets) {
                    let e = this.tilesets[t]
                      , r = e.size
                      , l = i * r
                      , a = s * r;
                    l < o.left && (o.left = l),
                    a < o.top && (o.top = a),
                    l + r > o.right && (o.right = l + r),
                    a + r > o.bottom && (o.bottom = a + r)
                } else
                    console.warn("Tileset ".concat(t, " not found."))
            }
            addTile(t) {
                if (super.addTile(t),
                this.mapBounds) {
                    let e = this.mapBounds
                      , i = this.tilesets[t.tileset]
                      , s = i.size
                      , o = t.x * s
                      , r = t.y * s;
                    (o < e.left || r < e.top || o + s > e.right || r + s > e.bottom) && (o < e.left && (e.left = o),
                    r < e.top && (e.top = r),
                    o + s > e.right && (e.right = o + s),
                    r + s > e.bottom && (e.bottom = r + s),
                    this.resetCamera())
                }
            }
            createTiles() {
                this.dynamicMap || this.createTilemap(),
                Object.values(this.tilesets).forEach(t=>t.create());
                let t = g.Z.getMapTiles();
                Object.values(this.tilesets).forEach(t=>{
                    this.dynamicLayers[t.layer] || this.createDynamicLayer(t.layer),
                    t.addCollisions(this.dynamicLayers[t.layer])
                }
                );
                let e = {
                    left: h.WS.width,
                    top: h.WS.height,
                    right: 0,
                    bottom: 0
                };
                t && Object.values(t).forEach(t=>{
                    this.enumerateTiles(t, (i,s,o)=>{
                        this.putTile(t.tileset, i, s, o, e)
                    }
                    )
                }
                ),
                (e.bottom - e.top < 500 || e.right - e.left < 800) && (e.top -= 40,
                e.bottom += 40,
                e.left -= 40,
                e.right += 40),
                this.mapBounds = new (o()).Geom.Rectangle(e.left,e.top,e.right - e.left,e.bottom - e.top)
            }
            createGameObjects() {
                Object.values(this.gameObjects).forEach(t=>{
                    t.create()
                }
                )
            }
            hasJoystick() {
                return !!this.joystick
            }
            createJoystick() {
                try {
                    if (window.matchMedia("(pointer: coarse)").matches) {
                        let t = this.plugins.get("rexvirtualjoystickplugin");
                        this.joystick = t.add(this, {
                            x: 96,
                            y: window.innerHeight - 96,
                            radius: 64,
                            base: this.add.circle(0, 0, 64, 13421772, .3),
                            thumb: this.add.circle(0, 0, 32, 13421772, .6),
                            enable: !0
                        }).on("update", ()=>{
                            try {
                                let t = this.joystick.createCursorKeys();
                                this.joystickState = {
                                    left: t.left.isDown,
                                    right: t.right.isDown,
                                    up: t.up.isDown,
                                    down: t.down.isDown
                                }
                            } catch (t) {
                                console.error(t)
                            }
                        }
                        ),
                        this.joystick.base.setDepth(1e5),
                        this.joystick.thumb.setDepth(100001),
                        this.joystick.setVisible("0" === (0,
                        v.Ul)("joystick_disabled")),
                        a.rV.joystickControl.subscribeScene(this, t=>{
                            this.joystick.setVisible(t.enabled)
                        }
                        ),
                        this.repositionJoystick()
                    }
                } catch (t) {
                    console.error(t)
                }
            }
            createMapEntities() {
                let t = this.entitiesToBuild;
                if (!t)
                    return;
                let e = [];
                t.forEach(t=>{
                    let i = g.Z.getGameEntity(t.entity);
                    if (i)
                        try {
                            let s;
                            "soil" === i.type ? s = this.buildSoilNode(t) : "crop" === i.type ? console.log("CROP not supported on MAP! Should only be player entity!") : s = this.buildMapEntityNode(t),
                            s && e.push(s)
                        } catch (t) {
                            console.error("failed to build entity: ", t)
                        }
                }
                ),
                this.entitiesToBuild = void 0,
                e.forEach(t=>t.create())
            }
            resize(t, e) {
                super.resize(t, e),
                this.mapBounds && (this.resetCamera(),
                this.updateBackground()),
                this.repositionJoystick()
            }
            static isPower2(t) {
                let e = 1;
                for (; e < t; )
                    e *= 2;
                return e === t
            }
            createBackground() {
                if (this.mapBg && this.mapBounds) {
                    var t;
                    let e = 1.41 * Math.max(this.scale.displaySize.width, this.scale.displaySize.height)
                      , i = null === (t = this.textures.get("bg_image")) || void 0 === t ? void 0 : t.get()
                      , s = null == i ? void 0 : i.height;
                    if (!i || i.height !== i.width || !RoomScene.isPower2(i.width)) {
                        console.warn("specified background is not a square or not a power of 2 ".concat(null == i ? void 0 : i.width, "x").concat(null == i ? void 0 : i.height));
                        return
                    }
                    if (this.bg = this.add.tileSprite(this.scale.displaySize.width / 2, this.scale.displaySize.height / 2, e, e, "bg_image"),
                    this.bg.tileScaleX = 2,
                    this.bg.tileScaleY = 2,
                    this.bg.setScrollFactor(0, 0),
                    this.bg.setOrigin(.5, .5),
                    this.bg.setDepth(-100),
                    "dream" === this.mapBg)
                        this.tweens.add({
                            targets: this.bg,
                            tilePositionY: {
                                from: 0,
                                to: -(.2 * s)
                            },
                            angle: 24,
                            loop: -1,
                            yoyo: !0,
                            ease: o().Math.Easing.Sine.InOut,
                            duration: 6e3
                        });
                    else {
                        let t = Math.trunc(270 * Math.random());
                        this.tweens.add({
                            targets: this.bg,
                            tilePositionY: {
                                from: 0,
                                to: -(8 * s)
                            },
                            angle: {
                                from: t,
                                to: 360 + t
                            },
                            loop: -1,
                            yoyo: !1,
                            duration: 4e5
                        })
                    }
                }
            }
            createGameAnimations() {
                M.env.SUPPORT_OLDCROPS && !this.anims.exists("crop-seeding-anims") && (this.anims.create({
                    key: "crop-seeding-anims",
                    frames: this.anims.generateFrameNumbers("crop-seeding", {
                        start: 0,
                        end: 5
                    }),
                    frameRate: 5,
                    repeat: 0
                }),
                this.anims.create({
                    key: "crop-watering-anims",
                    frames: this.anims.generateFrameNumbers("crop-watering", {
                        start: 0,
                        end: 16
                    }),
                    frameRate: 16,
                    repeat: 0
                }),
                this.anims.create({
                    key: "crop-fertilizing-anims",
                    frames: this.anims.generateFrameNumbers("crop-fertilizing", {
                        start: 0,
                        end: 9
                    }),
                    frameRate: 9,
                    repeat: 0
                }),
                this.anims.create({
                    key: "crop-shear-harvesting-anims",
                    frames: this.anims.generateFrameNumbers("crop-shear-harvesting", {
                        start: 0,
                        end: 6
                    }),
                    frameRate: 6,
                    repeat: 0
                }),
                this.anims.create({
                    key: "crop-goldenrake-harvesting-anims",
                    frames: this.anims.generateFrameNumbers("crop-goldenrake-harvesting", {
                        start: 0,
                        end: 10
                    }),
                    frameRate: 10,
                    repeat: 0
                }),
                this.anims.create({
                    key: "crop-maturing-anims",
                    frames: this.anims.generateFrameNumbers("crop-maturing", {
                        start: 0,
                        end: 6
                    }),
                    frameRate: 6,
                    repeat: 0
                }))
            }
            calcZoom() {
                var t;
                let {width: e, height: i} = this.scale.displaySize
                  , s = 1.7
                  , o = null !== (t = window.devicePixelRatio) && void 0 !== t ? t : 1;
                return (s *= Math.sqrt(e * i) / this._idealSize,
                .5 === o || 1.5 === o) ? s > 1 && s < 3.1 ? 2 : s < 6 ? 4 : Math.max(2, 2 * Math.round(s / 2)) : s > 1.4 && s < 3 ? 2 : s = Math.max(1, Math.round(s))
            }
            checkBrowserZoom(t) {
                var e;
                if (this.isAndroid)
                    return !1;
                let i = null !== (e = window.devicePixelRatio) && void 0 !== e ? e : 1
                  , s = t * i;
                return i < 1 && .5 !== i || Math.abs(Math.round(s) - s) > .02
            }
            createZoomWarning(t) {
                var e, i;
                null === (e = this.tweenWarning) || void 0 === e || e.stop(),
                null === (i = this.labelWarning) || void 0 === i || i.setVisible(!1)
            }
            getCameraBoundsAndZoom() {
                let t = this.calcZoom()
                  , e = {
                    left: this.mapBounds.left,
                    top: this.mapBounds.top,
                    width: this.mapBounds.width,
                    height: this.mapBounds.height
                }
                  , i = this.scale.displaySize.width / t - e.width
                  , s = this.scale.displaySize.height / t - e.height;
                if (this.centerPlayer || this.scale.displaySize.width < 600 && (e.height < 700 || this.isInterior)) {
                    let e = (0,
                    E.Zm)();
                    s = Math.max(s, 0) + h.Qc * e / t,
                    i = Math.max(i, 0) + h.Qc * e / t
                }
                return i > 0 && (e.left -= i / 2,
                e.width += i),
                s > 0 && (e.top -= s / 2,
                e.height += s),
                {
                    zoom: t,
                    bounds: e
                }
            }
            resetCamera() {
                if ("player" === this.camMode) {
                    let t = this.getCameraBoundsAndZoom();
                    this.camera = this.cameras.main.setBounds(t.bounds.left, t.bounds.top, t.bounds.width, t.bounds.height),
                    this.createZoomWarning(this.checkBrowserZoom(t.zoom)),
                    this.camera.setZoom(t.zoom),
                    this.following && this.follow()
                }
            }
            follow() {
                let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                if (this.camera) {
                    if (t) {
                        var e;
                        if (null === (e = this.selfPlayer) || void 0 === e ? void 0 : e.body) {
                            let t = this.camera.height > this.camera.width;
                            this.camera.startFollow(this.selfPlayer.body, !0, h.Kp, h.Kp, 0, t ? this.camera.height / (8 * this.camera.zoom) : 0),
                            this.following = !0
                        }
                    } else
                        this.camera.stopFollow(),
                        this.following = !1
                }
            }
            createCamera() {
                var t, e, i, s, r, l, a, n, d, u, c;
                this.mapBounds || (this.mapBounds = new (o()).Geom.Rectangle(0,0,h.WS.width,h.WS.height)),
                this.camMode = "player";
                let v = this.getCameraBoundsAndZoom();
                this.camera = this.cameras.main.setBounds(v.bounds.left, v.bounds.top, v.bounds.width, v.bounds.height),
                this.cameras.main.scrollX = h.WS.width / 2,
                this.cameras.main.scrollY = h.WS.height / 2,
                this.camera.setZoom(10 * h.m6),
                this.camera.setRoundPixels(!0),
                this.camera.setScroll(2e3, 2500);
                let m = 1500;
                "intro" === this.zoomIn ? (p.default.playAudio("snd_env_intro"),
                setTimeout(()=>{
                    var t;
                    null === (t = p.default.instance) || void 0 === t || t.setupMap()
                }
                , m = 5e3)) : "snap" !== this.zoomIn && (null === (t = p.default.instance) || void 0 === t || t.setupMap());
                let y = this.checkBrowserZoom(v.zoom);
                if (this.selfPlayer && (this.selfPlayer.stopMoving = !0),
                "snap" === this.zoomIn)
                    console.log("setting full zoom"),
                    this.fullZoom(!0);
                else if ("quick" !== this.zoomIn && this.game.renderer.gl) {
                    let t;
                    this.camera.setZoom(v.zoom);
                    let h = {
                        targets: this.camera,
                        ease: o().Math.Easing.Cubic.In,
                        duration: m,
                        repeat: 0,
                        yoyo: !1,
                        onComplete: ()=>{
                            var e, i;
                            null == t || t.remove(),
                            this.createZoomWarning(y),
                            (null === (e = this.zoomIn) || void 0 === e ? void 0 : e.startsWith("road")) && (null === (i = this.camera) || void 0 === i || i.shake(200, .001)),
                            this.selfPlayer && (this.selfPlayer.stopMoving = !1,
                            this.follow())
                        }
                    };
                    if (null === (e = this.zoomIn) || void 0 === e ? void 0 : e.startsWith("road")) {
                        let t = null !== (d = null !== (n = null === (i = this.selfPlayer.body) || void 0 === i ? void 0 : i.x) && void 0 !== n ? n : null === (s = this.selfPlayer.position) || void 0 === s ? void 0 : s.x) && void 0 !== d ? d : 3e3
                          , e = null !== (c = null !== (u = null === (r = this.selfPlayer.body) || void 0 === r ? void 0 : r.y) && void 0 !== u ? u : null === (l = this.selfPlayer.position) || void 0 === l ? void 0 : l.y) && void 0 !== c ? c : 3e3
                          , o = this.camera.clampX(t - this.camera.width / 2)
                          , p = o
                          , v = this.camera.clampY(e - this.camera.height / 2);
                        h.scrollX = {
                            from: p,
                            to: o
                        },
                        null === (a = this.selfPlayer) || void 0 === a || a.perfectDismount(this.zoomIn),
                        this.follow(!1),
                        this.camera.scrollY = v,
                        "roadright" === this.zoomIn ? p -= 200 : "roadleft" === this.zoomIn && (p += 200)
                    } else
                        this.follow();
                    this.camera.fadeIn(m),
                    t = this.tweens.add(h)
                } else
                    "quick" === this.zoomIn ? this.camera.setZoom(v.zoom) : this.camera.zoomTo(v.zoom, m, o().Math.Easing.Linear),
                    this.createZoomWarning(y),
                    this.camera.fadeIn(1e3, void 0, void 0, void 0, (t,e)=>{
                        1 === e && this.selfPlayer && (this.selfPlayer.stopMoving = !1)
                    }
                    ),
                    this.follow()
            }
            playerZoom() {
                if (this.mapBounds && this.camera && this.selfPlayer && "player" !== this.camMode) {
                    let t = this.calcPlayerZoom();
                    this.camera.zoomTo(t.zoom, 1500, o().Math.Easing.Linear, !0, (e,i,s)=>{
                        if (this.bg) {
                            let e = t.zoom / s
                              , i = 1.41 * Math.max(this.scale.displaySize.width, this.scale.displaySize.height);
                            this.bg.tileScaleX = 2 * e,
                            this.bg.tileScaleY = 2 * e,
                            this.bg.width = i * e,
                            this.bg.height = i * e
                        }
                    }
                    ),
                    this.camMode = "player",
                    this.selfPlayer.stopMoving = !0,
                    this.camera.pan(t.x, t.y, 2e3, o().Math.Easing.Linear, !0),
                    this.camera.once(o().Cameras.Scene2D.Events.PAN_COMPLETE, ()=>{
                        "player" === this.camMode && (t.bounds && (this.camera = this.cameras.main.setBounds(t.bounds.left, t.bounds.top, t.bounds.width, t.bounds.height)),
                        this.follow(),
                        this.selfPlayer && (this.selfPlayer.stopMoving = !1))
                    }
                    )
                }
            }
            fullZoom() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (this.mapBounds && "player" === this.camMode) {
                    var e, i, s, r;
                    console.log("setting full zoom in player mode", t);
                    let l = this.calcZoom()
                      , a = this.calcFullZoom();
                    if (l <= 1.1 * a.zoom && !t)
                        return;
                    this.follow(!1),
                    this.camera = this.cameras.main.removeBounds();
                    let zoomCallback = (t,e,i)=>{
                        if (this.bg) {
                            let t = l / i
                              , e = 1.41 * Math.max(this.scale.displaySize.width, this.scale.displaySize.height);
                            this.bg.tileScaleX = 2 * t,
                            this.bg.tileScaleY = 2 * t,
                            this.bg.width = e * t,
                            this.bg.height = e * t
                        }
                    }
                    ;
                    this.selfPlayer && (this.selfPlayer.stopMoving = !0),
                    t ? (null === (e = this.camera) || void 0 === e || e.setZoom(a.zoom),
                    zoomCallback(this.camera, 1, a.zoom),
                    null === (i = this.camera) || void 0 === i || i.setScroll(a.x - this.camera.width / 2, a.y - this.camera.height / 2)) : (null === (s = this.camera) || void 0 === s || s.zoomTo(a.zoom, 2e3, o().Math.Easing.Linear, !0, zoomCallback),
                    null === (r = this.camera) || void 0 === r || r.pan(a.x, a.y, 500, o().Math.Easing.Linear, !0)),
                    this.camMode = "map",
                    console.log("finished full zoom in player mode", t)
                }
            }
            calcPlayerZoom() {
                var t, e, i;
                this.mapBounds || (this.mapBounds = new (o()).Geom.Rectangle(0,0,h.WS.width,h.WS.height));
                let s = this.getCameraBoundsAndZoom()
                  , r = this.scale.displaySize.width
                  , l = this.scale.displaySize.height
                  , {zoom: a} = s
                  , n = null === (t = this.selfPlayer) || void 0 === t ? void 0 : t.bodyPosition
                  , d = null !== (e = null == n ? void 0 : n.x) && void 0 !== e ? e : this.mapBounds.centerX
                  , u = null !== (i = null == n ? void 0 : n.y) && void 0 !== i ? i : this.mapBounds.centerY;
                return (d - s.bounds.left) * a * 2 < r ? d = s.bounds.left + r / (2 * a) : (s.bounds.left + s.bounds.width - d) * a * 2 < r && (d = s.bounds.left + s.bounds.width - r / (2 * a)),
                (u - s.bounds.top) * a * 2 < l ? u = s.bounds.top + l / (2 * a) : (this.mapBounds.bottom - u) * a * 2 < l && (u = s.bounds.top + s.bounds.height - l / (2 * a)),
                {
                    zoom: s.zoom,
                    x: Math.round(d),
                    y: Math.round(u),
                    bounds: s.bounds
                }
            }
            calcFullZoom() {
                var t, e, i;
                this.mapBounds || (this.mapBounds = new (o()).Geom.Rectangle(0,0,h.WS.width,h.WS.height));
                let s = this.scale.displaySize.width
                  , r = this.scale.displaySize.height;
                if (this.editorMode)
                    return {
                        zoom: Math.min(s / this.mapBounds.width, r / this.mapBounds.height, .5),
                        x: this.mapBounds.centerX,
                        y: this.mapBounds.centerY
                    };
                if (this.mapBg)
                    return {
                        zoom: Math.min(s / this.mapBounds.width, r / this.mapBounds.height),
                        x: this.mapBounds.centerX,
                        y: this.mapBounds.centerY
                    };
                let l = Math.max(s / this.mapBounds.width, r / this.mapBounds.height)
                  , a = null === (t = this.selfPlayer) || void 0 === t ? void 0 : t.bodyPosition
                  , n = null !== (e = null == a ? void 0 : a.x) && void 0 !== e ? e : this.mapBounds.centerX
                  , d = null !== (i = null == a ? void 0 : a.y) && void 0 !== i ? i : this.mapBounds.centerY;
                return (n - this.mapBounds.left) * l * 2 < s ? n = this.mapBounds.left + s / (2 * l) : (this.mapBounds.right - n) * l * 2 < s && (n = this.mapBounds.right - s / (2 * l)),
                (d - this.mapBounds.top) * l * 2 < r ? d = this.mapBounds.top + r / (2 * l) : (this.mapBounds.bottom - d) * l * 2 < r && (d = this.mapBounds.bottom - r / (2 * l)),
                {
                    zoom: l,
                    x: Math.round(n),
                    y: Math.round(d)
                }
            }
            get movementPosition() {
                var t;
                if ((null === (t = this.joystick) || void 0 === t || !t.pointer) && this.movementPointer)
                    return {
                        x: this.movementPointer.x,
                        y: this.movementPointer.y
                    }
            }
            mouseHandlers() {
                this.input.on("pointerup", t=>{
                    var e, i, s, o, r, l, n, h, d, u, c, v;
                    let m;
                    let y = (null === (e = this.cursorConfig) || void 0 === e ? void 0 : e.type) === "item" ? null === (i = null === (s = this.cursorConfig.config) || void 0 === s ? void 0 : s.item) || void 0 === i ? void 0 : i.id : void 0;
                    if (this.mouseDown = !1,
                    this.movementPointer) {
                        this.movementPointer = void 0;
                        return
                    }
                    let f = !(null === (o = t.event) || void 0 === o ? void 0 : o.isTrusted)
                      , g = this.input.hitTestPointer(t)
                      , b = -1e3;
                    for (let t = 0; t < g.length; t += 1) {
                        let e = g[t]
                          , i = null == e ? void 0 : e.getData("pixelnode");
                        if (i && this.nodeClickable(i, y)) {
                            let t = null !== (r = e.depth) && void 0 !== r ? r : 0;
                            t > b && (b = t,
                            m = i)
                        }
                    }
                    if (m && !f) {
                        m.clicked(t, null === (l = this.selfPlayer) || void 0 === l ? void 0 : l.position);
                        return
                    }
                    if (t.leftButtonReleased()) {
                        let e = {};
                        this.cursorNode && this.cursorConfig && (e.tempNode = {
                            position: {
                                ...this.cursorNode.position
                            },
                            isBuildAreaFree: (null === (u = this.placeableCursor) || void 0 === u ? void 0 : u.isBuildAreaFree()) || !1
                        },
                        e.tempNode.mid = this.cursorConfig.mid,
                        e.tempNode.type = this.cursorConfig.type,
                        e.tiles = null === (c = this.placeableCursor) || void 0 === c ? void 0 : c.getTileInfo());
                        let i = {
                            key: "ground",
                            mouse: {
                                x: t.x,
                                y: t.y
                            },
                            world: {
                                x: t.worldX,
                                y: t.worldY
                            },
                            selfPlayer: {
                                x: null === (n = this.selfPlayer) || void 0 === n ? void 0 : n.x,
                                y: null === (h = this.selfPlayer) || void 0 === h ? void 0 : h.y
                            },
                            target: "self",
                            context: e
                        };
                        null === (d = this.placeableCursor) || void 0 === d || d.blockCurrentBuildArea(),
                        a.ZP.emitEventNow(a.fb.PLAYER_CLICKED, i)
                    } else
                        this.editMode() && t.rightButtonReleased() && (null === (v = this.selfPlayer) || void 0 === v || v.moveTo(t.worldX, t.worldY));
                    ParticleFX.emitDust({
                        x: t.worldX,
                        y: t.worldY
                    }),
                    p.default.playAudio("snd_ui_misclick")
                }
                ),
                this.input.on("pointermove", t=>{
                    this.hoverTimer && clearTimeout(this.hoverTimer),
                    this.hoverTimer = void 0,
                    this.handleMouseMove(t)
                }
                ),
                this.input.on("pointerdown", t=>{
                    this.hoverTimer && clearTimeout(this.hoverTimer),
                    this.mouseDown = !0,
                    this.editorMode || (this.hoverTimer = setTimeout(()=>{
                        this.hoverTimer = void 0,
                        this.handleMouseMove(t)
                    }
                    , 300))
                }
                )
            }
            handleMouseMove(t) {
                var e, i, s, o, r, l, a, n;
                let h, d;
                let u = this.input.hitTestPointer(t)
                  , c = (null === (e = this.cursorConfig) || void 0 === e ? void 0 : e.type) === "item" ? null === (i = null === (s = this.cursorConfig.config) || void 0 === s ? void 0 : s.item) || void 0 === i ? void 0 : i.id : void 0
                  , p = -1e3
                  , v = !this.editorMode && this.mouseDown && t.leftButtonDown();
                if (v && this.game.getTime() - t.downTime >= 200)
                    this.movementPointer = {
                        x: t.worldX,
                        y: t.worldY
                    },
                    null === (r = this.input) || void 0 === r || null === (o = r.keyboard) || void 0 === o || o.resetKeys();
                else
                    for (let e of (this.movementPointer = void 0,
                    t.leftButtonDown() || (this.mouseDown = !1),
                    u)) {
                        let t = null == e ? void 0 : e.getData("pixelnode");
                        if (t && (!h && !d && t.hasHoverText() && (d = t),
                        this.nodeClickable(t, c))) {
                            let i = null !== (l = e.depth) && void 0 !== l ? l : 0;
                            i > p && (p = i,
                            h = t,
                            d = t)
                        }
                    }
                this.hoverNode !== h && (null === (a = this.hoverNode) || void 0 === a || a.setHover(!1),
                null == h || h.setHover(!0),
                this.hoverNode = h),
                (this.hoverTextNode !== d || c !== this.hoverItem) && (null === (n = this.hoverTextNode) || void 0 === n || n.showHoverText(!1, c),
                null == d || d.showHoverText(!0, c),
                this.hoverTextNode = d,
                this.hoverItem = c),
                (v || this.hoverTextNode || this.hoverNode) && (this.hoverTimer = setTimeout(()=>{
                    this.hoverTimer = void 0,
                    this.handleMouseMove(this.input.activePointer)
                }
                , v ? 100 : 800))
            }
            create() {
                var t, e;
                this.selfPlayer && "dream" === this.mapBg && (this.selfPlayer.zoom = 2),
                super.create(),
                this.physics.world.setBounds(0, 0, h.WS.width, h.WS.height),
                this.createTiles(),
                this.createGameObjects(),
                this.createMapEntities(),
                this.createBackground(),
                this.createGameAnimations(),
                ParticleFX.init(this),
                this.createJoystick(),
                null === (t = this.nodesPreloaded) || void 0 === t || t.forEach(t=>t.create()),
                this.nodesPreloaded = void 0,
                this.updateCollisions(),
                this.createCamera(),
                this.createZoomHandler(),
                null === (e = this.input.mouse) || void 0 === e || e.disableContextMenu(),
                this.events.on("TRANSITION_OUT", t=>{
                    this.transitionOut(t)
                }
                ),
                this.events.on("TRANSITION_IN", t=>{
                    this.transitionIn(t)
                }
                ),
                this.mouseHandlers()
            }
            createZoomHandler() {
                this.handleEvent("TOGGLE_MINIMAP", t=>{
                    if (null == t ? void 0 : t.snap) {
                        this.fullZoom(!0);
                        return
                    }
                    this.selfPlayer && ("player" === this.camMode && this.selfPlayer.stopMoving || ("player" === this.camMode ? this.fullZoom() : this.playerZoom()))
                }
                ),
                this.handleEvent("TOGGLE_EDITOR", t=>{
                    if (t)
                        this.resetCamera();
                    else {
                        var e;
                        null === (e = this.camera) || void 0 === e || e.removeBounds()
                    }
                }
                ),
                this.handleEvent("EDITOR_SCROLL", t=>{
                    t && t.x && t.y && this.camera && (this.camera.stopFollow(),
                    this.camera.setScroll(t.x - this.camera.width / 2, t.y - this.camera.height / 2))
                }
                )
            }
            transitionIn(t) {
                if (this.camera && ("quick" === t || "portal" === t)) {
                    if (this.camera.fadeEffect && !this.camera.fadeEffect.isComplete) {
                        let t = this.camera.fadeEffect.progress;
                        this.camera.fadeIn(1e3),
                        this.camera.fadeEffect._elapsed = 1e3 * (1 - t),
                        this.camera.fadeEffect.alpha = 1 - t
                    } else
                        this.camera.fadeIn(1e3)
                }
            }
            transitionOut(t) {
                if (this.camera) {
                    if ("tramp" === t)
                        this.follow(!1),
                        p.default.playAudio("snd_env_scream"),
                        this.camera.fadeOut(1500),
                        this.selfPlayer && (this.selfPlayer.stopMoving = !0,
                        this.selfPlayer.trampoline());
                    else if (null == t ? void 0 : t.startsWith("road")) {
                        var e;
                        p.default.playAudio("snd_env_portal"),
                        this.follow(!1),
                        null === (e = this.selfPlayer) || void 0 === e || e.trampoline(),
                        this.camera.shake(350, 5e-4);
                        let i = this.camera.scrollX;
                        "roadleft" === t ? i -= 300 : "roadright" === t && (i += 300);
                        let s = this.tweens.add({
                            targets: this.camera,
                            scrollX: i,
                            ease: o().Math.Easing.Cubic.In,
                            duration: 1500,
                            repeat: 0,
                            yoyo: !1,
                            onComplete: ()=>{
                                s.remove()
                            }
                        });
                        this.camera.fadeOut(1500)
                    } else
                        this.camera.fadeOut(1e3)
                }
            }
            updateBackground() {
                if (this.bg && this.camera) {
                    let t = 1.41 * Math.max(this.scale.displaySize.width, this.scale.displaySize.height);
                    this.bg.x = this.scale.displaySize.width / 2,
                    this.bg.y = this.scale.displaySize.height / 2,
                    this.bg.width = t * this.bg.tileScaleX / 2,
                    this.bg.height = t * this.bg.tileScaleY / 2
                }
            }
            update(t, e) {
                var i;
                for (let s of (super.update(t, e),
                null === (i = this.selfPlayer) || void 0 === i || i.update(),
                this.otherPlayers.values()))
                    s.update();
                for (let t of this.crops.values())
                    t.update();
                for (let t of this.entities.values())
                    t.update();
                this.loadNodes(),
                this.triggerSystem.update()
                window.RoomScene_2 = this
            }
            nodeClickable(t, e) {
                var i, s;
                if (this.cursorConfig && (this.cursorConfig.moving || this.cursorConfig.placing || this.cursorConfig.editingWithoutPermissions && !this.cursorConfig.removing))
                    return !1;
                if (this.editorMode) {
                    let e = (0,
                    n.Y7)(l.h.getState());
                    if (["select", "erase"].includes(this.editorMode))
                        return t.editCategory() === e;
                    if ("paint" === this.editorMode || "floors" === e)
                        return !1
                } else if (null === (i = this.selfPlayer) || void 0 === i ? void 0 : i.stopMoving)
                    return !1;
                else if ((null === (s = this.cursorConfig) || void 0 === s ? void 0 : s.removing) && this.cursorConfig.editingWithoutPermissions && t.owner !== this.playerId)
                    return !1;
                return e ? t.clickableWithItem(e) : t.hasClickAction
            }
            loadNodes() {
                var t;
                if (this.nodesToAdd.length > 0 && (null === (t = this.load) || void 0 === t ? void 0 : t.isReady())) {
                    let t = new Set(this.nodesToAdd);
                    this.nodesToAdd = [],
                    t.forEach(t=>{
                        t.preload()
                    }
                    ),
                    this.load.once(o().Loader.Events.COMPLETE, ()=>{
                        var e;
                        let i = !1
                          , s = !1;
                        t.forEach(t=>{
                            t.create(),
                            t === this.selfPlayer && (i = !0),
                            t.collides && (s = !0)
                        }
                        ),
                        i && (null === (e = this.selfPlayer) || void 0 === e ? void 0 : e.body) && "player" === this.camMode && this.follow(),
                        (i || s) && this.updateCollisions()
                    }
                    ),
                    this.load.start()
                }
            }
            playerJoin(t, e) {
                var i;
                let s = g.Z.getGameAvatar((null == t ? void 0 : null === (i = t.currentAvatar) || void 0 === i ? void 0 : i.id) || h.ft);
                if (t && s && !t.isGuest) {
                    let i = getPlayerCharacterData(t)
                      , s = getPlayerPetData(t)
                      , o = this.otherPlayers.get(e);
                    return o ? (o.updatePetData(s),
                    o.updatePlayerData(i),
                    this.removeNode(o)) : (o = new OtherPlayerNode(this,t,i,s),
                    this.otherPlayers.set(e, o),
                    this.playerMidToSessionId.set(t.mid, e),
                    this.hideOthers && o.setVisible(!1),
                    this.selfPlayer && o.fadeIn()),
                    this.nodesToAdd.push(o),
                    o
                }
            }
            removeNode(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.triggerSystem.removeNode(t);
                let i = this.nodesToAdd.indexOf(t);
                -1 === i ? (e || t.destroy(),
                this.nodesPreloaded && (this.nodesPreloaded = this.nodesPreloaded.filter(e=>e !== t))) : this.nodesToAdd.splice(i, 1)
            }
            playerLeave(t, e) {
                if (t) {
                    let i = this.otherPlayers.get(t);
                    i && (this.otherPlayers.delete(t),
                    this.playerMidToSessionId.delete(e),
                    i.fadeAndDestroy(),
                    this.removeNode(i, !0))
                } else
                    this.otherPlayers.forEach(t=>{
                        this.removeNode(t)
                    }
                    ),
                    this.otherPlayers.clear()
            }
            buildSoilNode(t) {
                if (M.env.SUPPORT_OLDCROPS) {
                    let i = g.Z.getGameEntity(t.entity);
                    if (i && "soil" === i.type && !this.entities.has(t.mid)) {
                        let s = this.nodeFactory.buildNodeInstance({
                            type: i.type,
                            mapConfig: t,
                            gameConfig: i
                        });
                        if ("soil" === i.type) {
                            var e;
                            return this.entities.set(t.mid, s),
                            null === (e = this.placeableCursor) || void 0 === e || e.updateNodeRects(),
                            s
                        }
                    }
                }
            }
            buildCropNode(t) {
                let e = this.stateManager.getSoilEntity(t.mapEntity_id)
                  , i = g.Z.getGameEntity(t.entity);
                if (e && i) {
                    let s = this.nodeFactory.buildNodeInstance({
                        type: "crop",
                        mapConfig: e,
                        gameConfig: i,
                        mid: t.mid
                    });
                    return s && (this.crops.set(t.mid, s),
                    this.setCropState(s, t, i)),
                    s
                }
            }
            setCropState(t, e, i) {
                e.crop && t.updateState(e, i)
            }
            buildPlayerEntityNode(t) {
                let e = t.mapEntity_id ? this.stateManager.getEntityByUniqueId(t.mapEntity_id) : void 0
                  , i = t.position && t.position.x ? t.position : null == e ? void 0 : e.position
                  , s = g.Z.getGameEntity(t.entity);
                if (s) {
                    let l = this.nodeFactory.buildNodeInstance({
                        type: s.type,
                        mapConfig: e,
                        playerEntity: {
                            ...t,
                            position: i
                        },
                        gameConfig: s,
                        mid: t.mid
                    });
                    if (l) {
                        var o, r;
                        (null === (o = t[s.type]) || void 0 === o ? void 0 : o.state) && (l.state = t[s.type].state),
                        this.entities.set(t.mid, l),
                        null === (r = this.placeableCursor) || void 0 === r || r.updateNodeRects()
                    }
                    return l
                }
            }
            buildMapEntityNode(t) {
                let e = g.Z.getGameEntity(t.entity);
                if (!e || !e.type || "npc" === e.type)
                    return;
                let i = this.nodeFactory.buildNodeInstance({
                    type: e.type,
                    mapConfig: t,
                    gameConfig: e
                });
                if (i) {
                    var s, o, r;
                    (null === (s = t[e.type]) || void 0 === s ? void 0 : s.state) && (i.state = null === (o = t[e.type]) || void 0 === o ? void 0 : o.state),
                    this.entities.set(t.mid, i),
                    null === (r = this.placeableCursor) || void 0 === r || r.updateNodeRects()
                }
                return i
            }
            getPlayerEntityFromMapEntity(t) {
                let e, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], s = this.stateManager.currentPlayer;
                if (!i) {
                    var o;
                    if (!(null === (o = this.stateManager.getMapEntities()) || void 0 === o ? void 0 : o.get(t)))
                        return
                }
                return (null == s ? void 0 : s.full) && s.full.entities.forEach(i=>{
                    i.mapEntity_id === t && (e = i)
                }
                ),
                e
            }
            preloadPlayerEntities() {
                let t = this.stateManager.currentPlayer;
                (null == t ? void 0 : t.full) && (t.full.entities.forEach(t=>{
                    var e, i, s;
                    let o = g.Z.getGameEntity(t.entity);
                    if ((null == o ? void 0 : o.type) === "crop") {
                        let s = this.buildCropNode(t);
                        s && (null === (e = this.nodesPreloaded) || void 0 === e || e.push(s));
                        let o = this.stateManager.getSoilEntity(t.mapEntity_id);
                        if (o) {
                            let e = this.buildSoilNode(o);
                            e && (e.state = t.crop.soilState,
                            null === (i = this.nodesPreloaded) || void 0 === i || i.push(e))
                        }
                    } else if ((null == o ? void 0 : o.type) === "npc") {
                        let e = this.getConfigFromPlayerEntity(t);
                        if (e) {
                            let t = g.Z.getGameEntity(e.entity);
                            if (t) {
                                let i = new NpcNode(this,e,t);
                                this.entities.set(e.mid, i),
                                this.nodesPreloaded.push(i)
                            }
                        }
                    } else if ((null == o ? void 0 : o.type) === "soil")
                        ;
                    else {
                        if ((null == t ? void 0 : t.mapEntity_id) && !this.stateManager.getEntityByUniqueId(t.mapEntity_id)) {
                            console.log("missing map entity for", t);
                            return
                        }
                        let e = this.buildPlayerEntityNode(t);
                        e && (null === (s = this.nodesPreloaded) || void 0 === s || s.push(e))
                    }
                }
                ),
                t.full.entities.forEach(t=>{
                    let e = g.Z.getGameEntity(t.entity);
                    if ((null == e ? void 0 : e.type) === "soil") {
                        let e = this.getConfigFromPlayerEntity(t);
                        if (e) {
                            let t = this.buildSoilNode(e);
                            t && (this.entities.set(e.mid, t),
                            this.nodesPreloaded.push(t))
                        }
                    }
                }
                ))
            }
            initSelfPlayerState(t) {
                var e, i;
                let s = getPlayerCharacterData(t.core)
                  , o = getPlayerPetData(t.core);
                if (this.selfPlayer = new PlayerNode(this,s,o),
                t.full.pet ? this.selfPlayer.setPet(t.full.pet) : console.log("no pet when loaded"),
                this.nodesToAdd.push(this.selfPlayer),
                this.triggerSystem.setPlayer(this.selfPlayer),
                this.selfPlayer) {
                    let e = t.full.energy.level > h.Z6
                      , s = e ? 1 : h.p$;
                    this.selfPlayer.speed = s,
                    null === (i = p.default.instance) || void 0 === i || i.detune(e ? 0 : -200)
                }
                null === (e = p.default.instance) || void 0 === e || e.updatePosition(this.selfPlayer.position),
                this.playerId = t.core.mid,
                this.handleEvent(a.fb.CHAT_MESSAGE_RCV, t=>{
                    if (t.creator_id === this.playerId)
                        this.selfPlayer.showChatMessage(t.message);
                    else {
                        let e = this.playerMidToSessionId.get(t.creator_id);
                        if (e) {
                            let i = this.otherPlayers.get(e);
                            i && i.showChatMessage(t.message)
                        }
                    }
                }
                ),
                this.handleEvent("PLAYER_MODIFIERS_CHANGE", t=>{
                    this.selfPlayer && (this.selfPlayer.updatePlayerData({
                        modifiers: t.modifiers
                    }),
                    this.removeNode(this.selfPlayer),
                    this.nodesToAdd.push(this.selfPlayer))
                }
                ),
                this.handleEvent("PLAYER_CURRENTAVATAR_CHANGE", t=>{
                    if (this.selfPlayer) {
                        let e = getPlayerCharacterData(t);
                        delete e.kind,
                        this.selfPlayer.updatePlayerData(getPlayerCharacterData(t)),
                        this.removeNode(this.selfPlayer),
                        this.nodesToAdd.push(this.selfPlayer)
                    }
                }
                ),
                this.handleEvent("PLAYER_MEMBERSHIPS_CHANGE", t=>{
                    if (this.selfPlayer && t.memberships) {
                        let e = !1;
                        e = "function" == typeof t.memberships.has ? t.memberships.has("vip") : !!t.memberships.vip,
                        this.selfPlayer.updatePlayerData({
                            kind: e ? "vip" : "normal"
                        }),
                        this.removeNode(this.selfPlayer),
                        this.nodesToAdd.push(this.selfPlayer)
                    }
                }
                ),
                this.handleEvent("PLAYER_USERNAME_CHANGE", t=>{
                    this.selfPlayer && (this.selfPlayer.updatePlayerData({
                        label: t.username
                    }),
                    this.removeNode(this.selfPlayer),
                    this.nodesToAdd.push(this.selfPlayer))
                }
                ),
                this.handleEvent(a.fb.PLAYER_PET_UPDATE, t=>{
                    var e;
                    this.selfPlayer && (null == t ? void 0 : null === (e = t.full) || void 0 === e ? void 0 : e.pet) && this.selfPlayer.setPet(t.full.pet)
                }
                ),
                this.handleEvent(a.fb.PLAYER_PET_CHANGE, t=>{
                    if (this.selfPlayer) {
                        let e = this.selfPlayer.updatePetData(getPlayerPetData(t.core));
                        e && (this.removeNode(e),
                        t.full.pet && (this.nodesToAdd.push(e),
                        this.selfPlayer.setPet(t.full.pet)))
                    }
                }
                ),
                this.handleEvent(a.fb.PLAYER_ENERGY_CHANGE, t=>{
                    let {energy: e} = t;
                    if (e && this.selfPlayer) {
                        let t = e.level > h.Z6
                          , s = t ? 1 : h.p$;
                        if (s != this.selfPlayer.speed) {
                            var i;
                            this.selfPlayer.speed = s,
                            null === (i = p.default.instance) || void 0 === i || i.detune(t ? 0 : -200)
                        }
                    }
                }
                ),
                this.handleEvent(a.qM.HIDE_OTHERS, ()=>{
                    this.unhideTimeout && clearTimeout(this.unhideTimeout),
                    this.hideOthers = !0,
                    (0,
                    N.be)(this.otherPlayers, t=>{
                        t.setVisible(!1)
                    }
                    ),
                    this.unhideTimeout = setTimeout(()=>{
                        this.hideOthers = !1,
                        (0,
                        N.be)(this.otherPlayers, t=>{
                            t.setVisible(!0)
                        }
                        )
                    }
                    , 3e4)
                }
                )
            }
            removeEntityElement(t, e) {
                if ("crop" === e) {
                    let e = this.crops.get(t);
                    e && (this.crops.delete(t),
                    this.removeNode(e))
                } else {
                    var i;
                    let s = this.entities.get(t);
                    s && (this.entities.delete(t),
                    this.removeNode(s));
                    let o = null === (i = this.getPlayerEntityFromMapEntity(t, !0)) || void 0 === i ? void 0 : i.mid;
                    if (o) {
                        let t = this.entities.get(o);
                        t && (this.entities.delete(o),
                        this.removeNode(t))
                    }
                    if ("soil" === e && o) {
                        let t = this.crops.get(o);
                        t && (this.crops.delete(o),
                        this.removeNode(t))
                    }
                }
            }
            addNPCorSoilElement(t) {
                let e = g.Z.getGameEntity(t.entity);
                if (!e)
                    throw Error("Missing Entity from library: ".concat(t.entity));
                switch (e.type) {
                case "npc":
                    let i = new NpcNode(this,t,e);
                    return this.entities.set(t.mid, i),
                    this.nodesToAdd.push(i),
                    i;
                case "soil":
                    if (M.env.SUPPORT_OLDCROPS) {
                        let e = this.buildSoilNode(t);
                        return e && (this.entities.set(t.mid, e),
                        this.nodesToAdd.push(e)),
                        e
                    }
                }
            }
            async addEntityElement(t, e) {
                var i;
                if (!this.load)
                    return;
                let s = null != t ? t : e;
                if (!s)
                    return;
                let o = s.entity
                  , r = s.mid
                  , l = g.Z.getGameEntity(o);
                if (!l)
                    throw Error("Missing Entity from library: ".concat(o));
                if ("npc" === l.type)
                    return this.addNPCorSoilElement(s);
                let a = await this.nodeFactory.asyncBuilder(l.type, e, l, t);
                return (a && this.nodesToAdd.push(a),
                "crop" === l.type) ? (this.crops.set(r, a),
                this.setCropState(a, s, l)) : this.entities.set(r, a),
                this.updateEntity(s),
                null === (i = this.placeableCursor) || void 0 === i || i.updateNodeRects(),
                a
            }
            getConfigFromPlayerEntity(t) {
                var e, i;
                if (t.entity)
                    return {
                        position: {
                            x: (null === (e = t.position) || void 0 === e ? void 0 : e.x) || 2500,
                            y: (null === (i = t.position) || void 0 === i ? void 0 : i.y) || 2500
                        },
                        entity: t.entity,
                        mid: t.mid
                    }
            }
            async addPlayerEntityNodes(t) {
                var e;
                if (!this.load)
                    return;
                let i = t.mapEntity_id ? this.stateManager.getEntityByUniqueId(t.mapEntity_id) : void 0;
                if (!i || (null === (e = t.position) || void 0 === e ? void 0 : e.x) || (t = {
                    ...t,
                    position: null == i ? void 0 : i.position
                }),
                t.mapEntity_id && t.generic) {
                    let e = this.entities.get(t.mapEntity_id);
                    if (e) {
                        let s = g.Z.getGameEntity(t.entity);
                        if (s) {
                            let i = this.nodeFactory.getPropBuilder({
                                type: s.type,
                                mapConfig: t,
                                gameConfig: s
                            });
                            e.convertToPlayerEntity(t.mid, i)
                        }
                        e.setCurrentState({
                            playerInstance: t.generic,
                            mapInstance: null == i ? void 0 : i.generic
                        }),
                        this.entities.delete(t.mapEntity_id),
                        this.entities.set(t.mid, e);
                        let o = this.animationQueue.get(t.mid);
                        return o && (e.play(o.animation),
                        this.animationQueue.delete(t.mid)),
                        e
                    }
                }
                let s = await this.addEntityElement(t, i);
                if (s && t.mapEntity_id && !t.crop) {
                    let e = this.entities.get(t.mapEntity_id);
                    e && (this.removeNode(e),
                    this.entities.delete(t.mapEntity_id))
                }
                let o = this.animationQueue.get(t.mid);
                return o && (null == s || s.play(o.animation),
                this.animationQueue.delete(t.mid)),
                s
            }
            removeEntity(t) {
                if (!this.load)
                    return;
                let e = g.Z.getGameEntity(t.entity);
                if (M.env.SUPPORT_OLDCROPS && "crop" === e.type && this.crops.has(t.mid)) {
                    let e = this.crops.get(t.mid);
                    this.crops.delete(t.mid),
                    this.removeNode(e);
                    let i = this.entities.get(t.mapEntity_id);
                    i && (i.state = "normal")
                } else if (this.selfPlayer) {
                    let e = this.entities.get(t.mid);
                    if (e)
                        this.entities.delete(t.mid),
                        this.removeNode(e);
                    else {
                        let i = this.getPlayerEntityFromMapEntity(t.mid, !0);
                        i && (e = this.entities.get(i.mid),
                        this.entities.delete(i.mid),
                        e && this.removeNode(e))
                    }
                    let i = this.stateManager.getMapEntities();
                    if ((null == t ? void 0 : t.mapEntity_id) && i) {
                        let e;
                        let s = null == i ? void 0 : i.get(t.mapEntity_id);
                        if (!s)
                            return;
                        let o = g.Z.getGameEntity(s.entity);
                        if (!o)
                            return;
                        "soil" === o.type ? e = this.buildSoilNode(s) : "crop" === o.type ? console.log("CROP not supported on MAP! Should only be player entity!") : "npc" === o.type ? this.addNPCorSoilElement(s) : e = this.buildMapEntityNode(s),
                        e && e.create()
                    }
                }
            }
            updateEntity(t) {
                let e = g.Z.getGameEntity(t.entity);
                if (M.env.SUPPORT_OLDCROPS && (null == e ? void 0 : e.type) === "crop") {
                    let i = this.crops.get(t.mid);
                    if (!i)
                        return;
                    let s = i.state !== t.crop.state;
                    i.state = t.crop.state;
                    let o = this.entities.get(t.mapEntity_id);
                    if (!o || (o.state = t.crop.soilState,
                    this.setCropState(i, t, e),
                    !["healthy1", "healthy2", "ripe"].includes(i.state)))
                        return;
                    let {position: r} = o;
                    if (!r)
                        return;
                    s && this.playOneTimeAnimation({
                        spriteName: "crop-maturing",
                        animationName: "crop-maturing-anims",
                        x: r.x,
                        y: r.y
                    })
                } else {
                    let o = this.entities.get(t.mid);
                    if (o) {
                        if ((null == e ? void 0 : e.type) === "npc")
                            o.move({
                                x: 0,
                                y: 0
                            }, t.position),
                            o.setFacing(!!t.flip);
                        else {
                            var i, s;
                            if ((null === (i = t[e.type]) || void 0 === i ? void 0 : i.state) && (o.state = t[e.type].state),
                            (null == e ? void 0 : e.type) === "generic" && t.generic) {
                                let e = t.mapEntity_id
                                  , i = e ? this.stateManager.getEntityByUniqueId(e) : void 0;
                                o.setCurrentState({
                                    playerInstance: t.generic,
                                    mapInstance: null == i ? void 0 : i.generic
                                })
                            }
                            if (t.position && (o.setPosition(t.position),
                            this.selfPlayer && (null === (s = p.default.instance) || void 0 === s || s.updatePosition(this.selfPlayer.position)),
                            (null == e ? void 0 : e.type) === "soil")) {
                                let e = this.getPlayerEntityFromMapEntity(t.mid);
                                if (e) {
                                    let i = this.crops.get(e.mid);
                                    i && (null == i || i.setPosition(t.position))
                                }
                            }
                        }
                    } else {
                        let i = this.getPlayerEntityFromMapEntity(t.mid);
                        if (i && (o = this.entities.get(i.mid)),
                        !o) {
                            console.log("sprite not found for ".concat(t.entity));
                            return
                        }
                        t.position && ((null == e ? void 0 : e.type) === "npc" ? o.move({
                            x: 0,
                            y: 0
                        }, t.position) : o.setPosition(t.position)),
                        (null == e ? void 0 : e.type) === "generic" && t.generic && o.setCurrentState({
                            playerInstance: null == i ? void 0 : i.generic,
                            mapInstance: t.generic
                        })
                    }
                }
            }
            async addGameObjectElement(t) {
                var e;
                let i = g.Z.getGameObject(t.object);
                if (!i)
                    throw Error("Missing object from library ".concat(t.object));
                let s = await this.nodeFactory.asyncBuilder("object", t, i);
                return this.gameObjects[t._id] = s,
                null === (e = this.placeableCursor) || void 0 === e || e.updateNodeRects(),
                s
            }
            async addTempNodeAtCursor(t, e) {
                switch (t) {
                case "tile":
                    let i = e.tile
                      , s = i.tilesetId ? await this.addTileset(i.tilesetId) : void 0;
                    return new TileNode(this,s,i);
                case "object":
                    return this.nodeFactory.asyncBuilder(t, void 0, e.object);
                case "entity":
                case "soil":
                case "crop":
                    return this.nodeFactory.asyncBuilder(t, void 0, e.entity);
                case "item":
                    return;
                default:
                    return e.entity ? this.nodeFactory.asyncBuilder(t, void 0, e.entity) : void 0
                }
            }
            playOneTimeAnimation(t) {
                var e;
                let i = this.add.sprite(t.x, t.y, t.spriteName);
                i.setOrigin(0, .5),
                i.setDepth(null !== (e = t.depth) && void 0 !== e ? e : 9999),
                i.on("animationcomplete", ()=>{
                    i.destroy()
                }
                , i),
                i.anims.play(t.animationName)
            }
            playPlayerAnimation(t) {
                if (this.supportedPlayerAnimations.includes(t)) {
                    var e;
                    null === (e = this.selfPlayer) || void 0 === e || e.play(t, 0)
                }
            }
            playPetAnimation(t, e, i) {
                let s = this.selfPlayer;
                t && this.stateManager.getSessionId() !== t && (s = this.otherPlayers.get(t)),
                null == s || s.petPlay(e, i)
            }
            playNodeAnimation(t) {
                var e, i;
                let {mid: s, animation: o, position: r, emoji: l, pet: a, tween: n} = t;
                if (a) {
                    this.playPetAnimation(s, o, l);
                    return
                }
                let h = null !== (e = this.entities.get(s)) && void 0 !== e ? e : this.gameObjects[s];
                if (!h) {
                    let t = null === (i = this.getPlayerEntityFromMapEntity(s)) || void 0 === i ? void 0 : i.mid;
                    t && (h = this.entities.get(t))
                }
                if (h)
                    n ? h.tweenTo({
                        animation: o,
                        duration: n.duration,
                        position: r,
                        easing: n.easing
                    }) : h.play(o);
                else {
                    let t = this.otherPlayers.get(s);
                    t || this.stateManager.getSessionId() !== s || (t = this.selfPlayer),
                    t ? this.supportedPlayerAnimations.includes(o) ? t.play(o, 0) : r && ("hearts" === o ? ParticleFX.emitHearts({
                        x: r.x,
                        y: r.y - 16
                    }) : this.playOneTimeAnimation({
                        spriteName: o,
                        animationName: "".concat(o, "-anims"),
                        x: r.x,
                        y: r.y
                    })) : this.animationQueue.set(s, {
                        animation: o,
                        at: Date.now()
                    })
                }
            }
            playerUsedItem(t) {
                let e = null == t ? void 0 : t.id
                  , i = this.anmationItemTriggers[e];
                e && i && (null == t ? void 0 : t.type) === "self" && this.playPlayerAnimation(i)
            }
            playerCollides() {
                var t, e;
                (null === (t = this.selfPlayer) || void 0 === t ? void 0 : t.isMoving) && (this.selfPlayer.hitwall = !0,
                null === (e = p.default.loadAudio("snd_ui_collide")) || void 0 === e || e.then(t=>{
                    t && !t.isPlaying && t.play()
                }
                ))
            }
            checkCollision(t) {
                return !!this.collider && this.collider.world.collide(t, this.collider.object2)
            }
            updateCollisions() {
                var t;
                if (super.updateCollisions(),
                !(null === (t = this.selfPlayer) || void 0 === t ? void 0 : t.body))
                    return;
                let e = Array.from(this.collidingObjects).map(t=>t.gameObject);
                for (let t of this.dynamicLayers)
                    e.push(t);
                this.collider ? (this.collider.object1 = this.selfPlayer.body.gameObject,
                this.collider.object2 = e) : this.collider = this.physics.add.collider(this.selfPlayer.body.gameObject, e, this.playerCollides, void 0, this)
            }
            destroy() {
                for (let t of (super.destroy(),
                this.hoverTimer && clearTimeout(this.hoverTimer),
                this.unhideTimeout && clearTimeout(this.unhideTimeout),
                ParticleFX.destroy(),
                this.nodesToAdd = [],
                this.crops.values()))
                    t.destroy()
            }
            constructor(t, e, i, s, o) {
                var r;
                super(t),
                this.nodeFactory = new NodeFactory(this),
                this.characterAnimations = {},
                this.crops = new Map,
                this.otherPlayers = new Map,
                this.playerMidToSessionId = new Map,
                this.nodesToAdd = [],
                this.map = {
                    size: h.WS,
                    bounds: h.BA
                },
                this.camMode = "player",
                this.triggerSystem = new TriggerSystem,
                this.supportedPlayerAnimations = ["drink"],
                this.anmationItemTriggers = {
                    itm_energyDrink: "drink"
                },
                this.repositionJoystick = ()=>{
                    if (!this.joystick)
                        return;
                    let t = window.innerWidth
                      , e = window.innerHeight;
                    t > e ? (this.joystick.x = 1.5 * this.joystick.radius,
                    this.joystick.y = e - 1.5 * this.joystick.radius) : (this.joystick.x = t / 2,
                    this.joystick.y = e - 2 * this.joystick.radius)
                }
                ,
                this._idealSize = Math.sqrt(1079200),
                this.following = !1,
                this.mouseDown = !1,
                this.unhideTimeout = 0,
                this.hideOthers = !1,
                this.animationQueue = new Map,
                this.zoomIn = o;
                let n = l.h.getState();
                this.hasMouse = matchMedia("(pointer:fine)").matches,
                this.isAndroid = -1 != navigator.userAgent.indexOf("Android"),
                this.stateManager.connect(e, i, s, this, n.auth.sessionToken || void 0, null === (r = n.auth.playerAvatar) || void 0 === r ? void 0 : r.pieces, n.auth.username, n.auth.playerId, n.game.room.lastSavedAt).then(t=>{
                    null != t && (console.log("finished connect"),
                    this.setMapBackground(),
                    a.ZP.emitEventNow(a.fb.GAME_CONNECTED))
                }
                )
            }
        }
    }
}]);
