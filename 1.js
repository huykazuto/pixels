(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[421], {
    56421: function(e, t, i) {
        "use strict";
        let n;
        i.r(t),
        i.d(t, {
            UiContainer: function() {
                return UiContainer
            }
        });
        var a, l, s = i(85893), r = i(67294), o = i(5152), c = i.n(o), d = i(94184), u = i.n(d), m = i(35804), p = i(83171), v = i(97761), h = i(77341), g = i(25617), x = i(77058), _ = i(48583), f = i(6354), y = i(42630), j = i.n(y), b = i(61036), k = i(57497), N = i.n(k), C = i(70247), w = i(11496), S = i(1832), I = i(48999), T = i(12362), P = i.n(T), M = i(63491), D = i.n(M), E = i(83928), L = i(27335), B = i(27760);
        let ItemDescription = e=>{
            let {localizationId: t, defaultText: i="", className: n=""} = e
              , {t: a} = (0,
            x.$)(["game"])
              , l = t ? a(t, i) : i;
            return l && (0,
            s.jsx)("div", {
                className: n,
                style: {
                    fontSize: "8px"
                },
                children: (0,
                s.jsx)(L.Z, {
                    text: l
                })
            })
        }
          , InventoryItem = e=>{
            var t;
            let i, {isSelected: n, isUsable: a, inventorySlot: l, isOnActiveRow: o} = e, {t: c} = (0,
            x.$)(["game", "ui"]), [d,m] = (0,
            r.useState)(!1), p = (0,
            r.useMemo)(()=>{
                if (!l || !l.item || !l.quantity)
                    return {
                        render: !1
                    };
                let e = C.Z.getGameItem(l.item);
                if (!e)
                    return {
                        render: !0,
                        itemData: e
                    };
                let t = e && B.Z.preloadedBlob(e.image);
                return {
                    render: !0,
                    itemData: e,
                    itemImage: t
                }
            }
            , [!l, null == l ? void 0 : l.item, null == l ? void 0 : l.quantity, d]);
            return ((0,
            r.useEffect)(()=>{
                var e;
                !p.itemImage && p.render && (null === (e = p.itemData) || void 0 === e ? void 0 : e.image) && B.Z.preloadOneBlob((0,
                E.b7)(p.itemData.image)).then(()=>m(!d)).catch(()=>{}
                )
            }
            , [p.itemImage, p.itemData]),
            p.render) ? (p.itemData ? a || (i = c("inventory.unusable", {
                ns: "ui",
                defaultValue: "Move to use"
            })) : i = c("itemLocked.description", {
                ns: "ui",
                defaultValue: "Item not available in this universe"
            }),
            (0,
            s.jsx)(ItemTooltip, {
                item: p.itemData,
                showDetails: a,
                extraText: i,
                placement: "top",
                children: (0,
                s.jsxs)("div", {
                    className: D().inventoryItem,
                    children: [(0,
                    s.jsx)("img", {
                        className: u()(D().inventoryItemBackground, {
                            [D().activeRow]: o
                        }),
                        src: (0,
                        E.Uk)("/game/ui/backpack/backpack_button_slot.png")
                    }), (0,
                    s.jsxs)("div", {
                        className: u()(D().itemImage, {
                            [D().selected]: n
                        }),
                        children: [!n && !!(null === (t = p.itemData) || void 0 === t ? void 0 : t.tier) && (0,
                        s.jsx)("div", {
                            className: D().itemTier,
                            children: (0,
                            b.Qb)(p.itemData.tier)
                        }), (0,
                        s.jsx)("img", {
                            draggable: !1,
                            crossOrigin: "anonymous",
                            src: p.itemImage ? (0,
                            E.b7)(p.itemImage) : (0,
                            E.Uk)("/game/ui/store_item_lock.png")
                        })]
                    }), (0,
                    s.jsx)("div", {
                        className: D().itemQuantity,
                        children: l.quantity > 1 ? "x".concat(l.quantity) : ""
                    })]
                })
            })) : null
        }
          , A = (0,
        w.ZP)(e=>{
            let {className: t, isDragging: i, ...n} = e;
            return (0,
            s.jsx)(S.Z, {
                ...n,
                classes: {
                    popper: u()(t, j().toolTip, {
                        [j().hideTooltip]: i
                    })
                }
            })
        }
        )(()=>({
            ["& .".concat(I.Z.tooltip)]: {
                backgroundColor: "#333",
                fontSize: "12px"
            },
            "&": {
                pointerEvents: "none"
            }
        }))
          , ItemTooltip = e=>{
            let {showDetails: t, showUtility: i, item: n, extraText: a, ...l} = e
              , {t: r} = (0,
            x.$)("game");
            return void 0 === i && (i = t),
            (0,
            s.jsx)(A, {
                ...l,
                enterTouchDelay: 0,
                leaveTouchDelay: 4e3,
                title: (0,
                s.jsxs)("span", {
                    className: P().itemTooltip,
                    children: [(0,
                    s.jsx)("span", {
                        className: P().tooltipTitle,
                        children: (null == n ? void 0 : n.id) ? r((0,
                        b.sA)(n.id)) : r("itemLocked.name", "Locked")
                    }), t && n && (0,
                    s.jsx)(ItemDescription, {
                        className: P().ttDescription,
                        localizationId: (0,
                        b.sA)(n.id, "description")
                    }), t && n && (0,
                    s.jsx)(ItemDescription, {
                        className: P().ttUtility,
                        localizationId: (0,
                        b.sA)(n.id, "utility")
                    }), a && (0,
                    s.jsx)(ItemDescription, {
                        className: P().ttUtility,
                        defaultText: a
                    })]
                })
            })
        }
        ;
        function calcFontSize(e, t, i) {
            let n = e.length;
            return n <= i ? t : Math.floor(t * i / n)
        }
        var commons_CoinBalance = e=>{
            var t, i;
            let {currency: n, balance: a, styles: l, iconStyles: o, small: c=!1, fontSize: d, adjustForWidth: m, text: p, short: v} = e
              , {t: h} = (0,
            x.$)(["game"])
              , [g,_] = (0,
            r.useState)(a || 0);
            if (void 0 !== a && g !== a) {
                let e = Math.abs(g - a);
                setTimeout(()=>{
                    let t = Math.ceil(Math.log10(e))
                      , i = 1;
                    if (1 === t)
                        i = 1;
                    else
                        for (t -= 1; t > 0; )
                            i += 10 ** t / 2 - 1,
                            t -= 1;
                    let n = g;
                    n > a ? (n -= i) < a && (n = a) : (n += i) > a && (n = a),
                    _(n)
                }
                , 20)
            }
            let f = null != p ? p : ""
              , y = d;
            return void 0 === a || p || (f = v ? (0,
            E.zV)(g, n) : (0,
            E.xG)(g, n)),
            m && y && (y = calcFontSize(f, y, m)),
            (0,
            s.jsx)(A, {
                title: (0,
                s.jsx)("span", {
                    className: "pixelFont",
                    children: h("currency.".concat(null == n ? void 0 : n.name), {
                        ns: "game"
                    })
                }),
                placement: "top",
                children: (0,
                s.jsxs)("div", {
                    className: j().balanceDisplay,
                    style: null != l ? l : {},
                    children: [(0,
                    s.jsx)("img", {
                        className: j()["coin-icon"],
                        src: null !== (i = null == n ? void 0 : null === (t = n.sprite) || void 0 === t ? void 0 : t.image) && void 0 !== i ? i : (0,
                        E.Uk)("/game/ui/coin.png"),
                        style: null != o ? o : {}
                    }), (0,
                    s.jsx)("span", {
                        style: {
                            fontSize: y
                        },
                        className: u()({
                            [j().coinBalance]: !c,
                            [j().coinCost]: c
                        }),
                        children: f
                    })]
                })
            })
        }
          , F = i(60604);
        let SkillXP = e=>{
            let {skill: t, xp: i} = e
              , {t: n} = (0,
            x.$)("game")
              , a = r.useMemo(()=>n(t, {
                ns: "ui",
                defaultValue: (0,
                b.je)(t)
            }), [t])
              , l = r.useMemo(()=>(0,
            E.b7)("".concat(F.fd).concat(t, ".png")), [t]);
            return (0,
            s.jsx)(A, {
                title: (0,
                s.jsx)("span", {
                    className: "pixelFont",
                    children: a
                }),
                placement: "bottom",
                children: (0,
                s.jsxs)("div", {
                    className: j().balanceDisplay,
                    style: {
                        display: "inline"
                    },
                    children: [(0,
                    s.jsx)("img", {
                        className: j()["coin-icon"],
                        src: l
                    }), (0,
                    s.jsx)("span", {
                        className: u()({
                            [j().coinCost]: !0
                        }),
                        children: (0,
                        E.zV)(i)
                    })]
                })
            })
        }
          , StoreOrderItemCard = e=>{
            var t, i;
            let {request: n, reward: a, canFill: l, onFill: r, playerClassId: o} = e
              , {t: c} = (0,
            x.$)("ui");
            return (0,
            s.jsx)("div", {
                className: u()(N()["store-item-container"], N().order),
                children: (0,
                s.jsx)("div", {
                    className: u()(N()["card-content-wrapper"], N()["store-locked"], {
                        [N()["order-class-".concat(o)]]: !!o
                    }),
                    children: (0,
                    s.jsxs)("div", {
                        className: N()["card-content"],
                        children: [(0,
                        s.jsxs)("div", {
                            className: N()["card-header"],
                            children: [(0,
                            s.jsx)("div", {
                                children: !!a.skill.skillType && (0,
                                s.jsx)(SkillXP, {
                                    skill: a.skill.skillType,
                                    xp: a.skill.xp
                                })
                            }), (0,
                            s.jsx)("div", {
                                children: (0,
                                s.jsx)(commons_CoinBalance, {
                                    currency: C.Z.getGameCurrency(null !== (i = a.currency.currencyId) && void 0 !== i ? i : C.Z.getDefaultCurrency()),
                                    balance: a.currency.amount,
                                    styles: {
                                        display: "inline"
                                    },
                                    small: !0,
                                    short: !0
                                })
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            className: N()["card-img-wrapper"],
                            children: [!!(null === (t = n.item) || void 0 === t ? void 0 : t.tier) && (0,
                            s.jsx)("div", {
                                className: N()["card-tier"],
                                children: (0,
                                b.Qb)(n.item.tier)
                            }), (0,
                            s.jsx)("img", {
                                crossOrigin: "anonymous",
                                className: N()["card-img"],
                                src: n.item.image
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            className: N()["item-quantity"],
                            children: ["x", (0,
                            s.jsx)("span", {
                                children: n.quantity
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            className: N()["card-footer"],
                            children: [(0,
                            s.jsx)("div", {
                                className: N()["card-title"],
                                children: n.item.name
                            }), (0,
                            s.jsx)("button", {
                                type: "button",
                                className: u()(N()["btn-max"], j().pushbutton),
                                disabled: !l,
                                onClick: r,
                                children: c("store.orders.deliver", {
                                    defaultValue: "DELIVER"
                                })
                            })]
                        })]
                    })
                })
            })
        }
        ;
        var R = i(34377)
          , O = i(16562);
        function useTimeRemaining(e) {
            let t = O.l.getInstance().serverTimeDelta
              , [i,n] = r.useState(()=>t + e - Date.now());
            return r.useEffect(()=>{
                let i = setInterval(()=>n(t + e - Date.now()), 1e3);
                return ()=>clearInterval(i)
            }
            , [e]),
            r.useMemo(()=>(0,
            b.Zo)(Math.ceil(i / 1e3)), [i])
        }
        let TickingButton = e=>{
            let {timestamp: t} = e
              , i = useTimeRemaining(t);
            return (0,
            s.jsx)("button", {
                type: "button",
                className: u()(N()["btn-max"], j().pushbutton),
                disabled: !0,
                children: i
            })
        }
          , StoreOrderCooldownCard = e=>{
            let {cooldownEndTimestamp: t} = e
              , {t: i} = (0,
            x.$)("ui");
            return (0,
            s.jsx)("div", {
                className: u()(N()["store-item-container"], N().order),
                children: (0,
                s.jsx)("div", {
                    className: u()(N()["card-content-wrapper"], N()["store-locked"]),
                    children: (0,
                    s.jsxs)("div", {
                        className: N()["card-content"],
                        children: [(0,
                        s.jsx)("div", {
                            className: N()["card-header"]
                        }), (0,
                        s.jsx)("div", {
                            className: N()["card-img-wrapper"],
                            children: (0,
                            s.jsx)("img", {
                                crossOrigin: "anonymous",
                                className: N()["card-img"],
                                src: (0,
                                E.Uk)("/game/ui/store_item_lock.png")
                            })
                        }), (0,
                        s.jsxs)("div", {
                            className: N()["card-footer"],
                            children: [(0,
                            s.jsx)("div", {
                                className: N()["card-title"],
                                children: i("store.orders.cooldown.caption", {
                                    defaultValue: "NEW TASK IN:"
                                })
                            }), (0,
                            s.jsx)(TickingButton, {
                                timestamp: t
                            })]
                        })]
                    })
                })
            })
        }
          , StoreOrderLockedCardDefault = e=>{
            let {lockReason: t} = e
              , {t: i} = (0,
            x.$)("ui");
            return (0,
            s.jsx)("div", {
                className: u()(N()["store-item-container"], N().order),
                children: (0,
                s.jsx)("div", {
                    className: u()(N()["card-content-wrapper"], N()["store-locked"]),
                    children: (0,
                    s.jsxs)("div", {
                        className: N()["card-content"],
                        children: [(0,
                        s.jsx)("div", {
                            className: N()["card-header"]
                        }), (0,
                        s.jsx)("div", {
                            className: N()["card-img-wrapper"],
                            children: (0,
                            s.jsx)("img", {
                                crossOrigin: "anonymous",
                                className: N()["card-img"],
                                src: (0,
                                E.Uk)("/game/ui/store_item_lock.png")
                            })
                        }), (0,
                        s.jsx)("div", {
                            className: N()["card-footer"],
                            children: (0,
                            s.jsx)("div", {
                                className: N()["card-title"],
                                children: i("store.orders.locked.reason.".concat(t), {
                                    defaultValue: t.toUpperCase()
                                })
                            })
                        })]
                    })
                })
            })
        }
          , StoreOrderLockedCardVIP = ()=>{
            let {t: e} = (0,
            x.$)("ui");
            return (0,
            s.jsx)("div", {
                className: u()(N()["store-item-container"], N().order),
                children: (0,
                s.jsx)("div", {
                    className: u()(N()["card-content-wrapper"], N()["store-locked"]),
                    children: (0,
                    s.jsxs)("div", {
                        className: N()["card-content"],
                        children: [(0,
                        s.jsx)("div", {
                            className: N()["card-header"]
                        }), (0,
                        s.jsx)("div", {
                            className: N()["card-img-wrapper"],
                            children: (0,
                            s.jsx)("img", {
                                crossOrigin: "anonymous",
                                className: N()["card-img"],
                                src: (0,
                                E.Uk)("/game/ui/store_item_lock.png")
                            })
                        }), (0,
                        s.jsx)("div", {
                            className: N()["card-img-wrapper"],
                            children: e("store.orders.locked.vip.propmt", {
                                defaultValue: "Unlock task?"
                            })
                        }), (0,
                        s.jsx)("div", {
                            className: N()["card-footer"],
                            children: (0,
                            s.jsx)("button", {
                                type: "button",
                                className: u()(N()["btn-max"], j().pushbutton),
                                onClick: ()=>R.ZP.sendEventDelayed(R.fb.PRESENT_UI, {
                                    ui: "str_vipShop"
                                }),
                                children: e("button.getvip", {
                                    defaultValue: "Get VIP"
                                })
                            })
                        })]
                    })
                })
            })
        }
          , StoreOrderLockedCard = e=>{
            let {lockReason: t} = e;
            return "vip" === t ? (0,
            s.jsx)(StoreOrderLockedCardVIP, {}) : (0,
            s.jsx)(StoreOrderLockedCardDefault, {
                lockReason: t
            })
        }
          , Loading_Loading = e=>{
            let {maxDots: t=3, delay: i=700} = e
              , [n,a] = r.useState(0);
            r.useEffect(()=>{
                let e = setInterval(()=>a(e=>(e + 1) % (t + 1)), i);
                return ()=>clearInterval(e)
            }
            , [t, i]);
            let l = r.useMemo(()=>{
                let e = [];
                for (let t = 0; t < n; ++t)
                    e.push(".");
                return e.join("")
            }
            , [n]);
            return (0,
            s.jsx)("div", {
                className: j().loading,
                children: (0,
                s.jsxs)("div", {
                    children: ["Loading", l]
                })
            })
        }
          , TickerUntil = e=>{
            let {timestamp: t} = e
              , {t: i} = (0,
            x.$)("ui")
              , n = useTimeRemaining(t);
            return (0,
            s.jsx)("span", {
                children: i("generalStore.sellOrders.timeRemaining", {
                    ns: "ui",
                    defaultValue: "Reset in {{value}}",
                    value: n
                })
            })
        }
          , V = {
            nextReset: 0,
            orders: []
        }
          , StoreOrdersTab = e=>{
            var t;
            let {storeId: i, inventory: n} = e
              , [a] = (0,
            _.KO)(f.v)
              , {nextReset: l, orders: o, missingMembershipOrders: c, fetching: d} = null !== (t = a[i]) && void 0 !== t ? t : V
              , v = (0,
            m.C)(p.lA)
              , h = (0,
            m.C)(p.ge)
              , g = r.useMemo(()=>null == c ? void 0 : c.includes("vip"), [c]);
            !function(e, t, i, n) {
                let a = r.useMemo(()=>Math.min(t, ...i.filter(e=>{
                    let {completedAt: t} = e;
                    return t > 0
                }
                ).map(e=>{
                    let {completedAt: t, cooldown: i} = e;
                    return t + (i || 0)
                }
                )), [t, i]);
                (0,
                r.useEffect)(()=>{
                    if (n)
                        return;
                    let t = a + O.l.getInstance().serverTimeDelta
                      , l = Date.now();
                    if ((null == i ? void 0 : i.length) || !(t + 5e3 < l)) {
                        let i = setTimeout(e=>{
                            R.rV.sellOrders.fetch.emit({
                                storeId: e
                            })
                        }
                        , Math.max(t - l + 500, 1e3), e);
                        return clearTimeout.bind(void 0, i)
                    }
                    R.rV.sellOrders.fetch.emit({
                        storeId: e
                    })
                }
                , [e, a, n])
            }(i, h && g ? 0 : l, o, !!d);
            let {t: y} = (0,
            x.$)("game")
              , k = r.useMemo(()=>o.map(e=>{
                var t, i;
                let {request: a, reward: l, completedAt: s, cooldown: r} = e
                  , {itemId: o, quantity: c} = a
                  , d = C.Z.getGameItem(o)
                  , u = n.slots instanceof Map ? n.slots : Object.values(n.slots)
                  , m = 0;
                return u.forEach(e=>{
                    e.item === o && (m += e.quantity)
                }
                ),
                {
                    request: {
                        item: {
                            image: null !== (i = null === (t = (0,
                            b.J2)(d, !1)) || void 0 === t ? void 0 : t.image) && void 0 !== i ? i : "",
                            name: d ? y((0,
                            b.sA)(d.id), "") : "",
                            tier: null == d ? void 0 : d.tier
                        },
                        quantity: c
                    },
                    reward: l,
                    canFill: m >= c,
                    completed: s ? {
                        cooldownEndTime: s > 0 ? s + (r || 0) : 0
                    } : void 0,
                    playerClassId: e.playerClassId
                }
            }
            ), [n.slots, o]);
            return (0,
            s.jsx)("div", {
                className: N()["store-tab"],
                children: (0,
                s.jsxs)("div", {
                    className: u()(N()["sell-content-wrapper"], j().scrollArea),
                    children: [(0,
                    s.jsxs)("div", {
                        className: N()["items-header"],
                        children: [(0,
                        s.jsx)("div", {
                            children: (0,
                            s.jsx)(TickerUntil, {
                                timestamp: l
                            })
                        }), (null == v ? void 0 : v.full.godmode) && (0,
                        s.jsx)("div", {
                            children: (0,
                            s.jsx)("button", {
                                type: "button",
                                className: u()(N()["btn-max"], j().pushbutton),
                                onClick: ()=>R.rV.sellOrders.reset.emit({
                                    storeId: i
                                }),
                                children: y("store.orders.reset", {
                                    defaultValue: "RESET"
                                })
                            })
                        })]
                    }), d && !k.length ? (0,
                    s.jsx)(Loading_Loading, {}) : k.length ? (0,
                    s.jsxs)("div", {
                        className: N()["items-content"],
                        children: [k.map((e,t)=>e.completed ? (0,
                        s.jsx)(StoreOrderCooldownCard, {
                            cooldownEndTimestamp: e.completed.cooldownEndTime
                        }, t) : e.request.item.image && e.request.item.name ? (0,
                        s.jsx)(StoreOrderItemCard, {
                            request: e.request,
                            reward: e.reward,
                            canFill: e.canFill,
                            onFill: ()=>R.rV.sellOrders.fill.emit({
                                sellOrderIndex: t,
                                storeId: i
                            }),
                            playerClassId: e.playerClassId
                        }, t) : null), null == c ? void 0 : c.map((e,t)=>(0,
                        s.jsx)(StoreOrderLockedCard, {
                            lockReason: e
                        }, "locked_".concat(t)))]
                    }) : (0,
                    s.jsx)("div", {
                        className: N()["no-items-info"],
                        children: y("generalStore.sellOrders.empty", {
                            ns: "ui",
                            defaultValue: "No orders right now. Check back later."
                        })
                    })]
                })
            })
        }
        ;
        var StoreBuyItemCard = e=>{
            let {itemData: t, itemImage: i, selectedItem: n, handleCardOnClick: a} = e
              , {t: l} = (0,
            x.$)(["ui"]);
            if (!t)
                return null;
            let r = t.id === (null == n ? void 0 : n.id)
              , {currency: o, buyPrice: c} = t
              , d = c && c >= 0
              , m = "lock" === t.buyStatus || !d
              , p = C.Z.getGameCurrency(o);
            return p && d ? (0,
            s.jsxs)("div", {
                className: N()["store-item-container"],
                children: [(0,
                s.jsx)("div", {
                    className: u()(N()["card-content-wrapper"], {
                        [N().selected]: r,
                        [N()["store-locked"]]: m
                    }, "clickable"),
                    children: (0,
                    s.jsxs)("div", {
                        className: N()["card-content"],
                        onClick: ()=>a(t),
                        children: [(0,
                        s.jsx)("div", {
                            className: N()["card-title"],
                            children: t.nameValue
                        }), (0,
                        s.jsxs)("div", {
                            className: N()["card-img-wrapper"],
                            children: [!!(null == t ? void 0 : t.tier) && (0,
                            s.jsx)("div", {
                                className: N()["card-tier"],
                                children: (0,
                                b.Qb)(t.tier)
                            }), i && (0,
                            s.jsx)("img", {
                                crossOrigin: "anonymous",
                                className: N()["card-img"],
                                src: i
                            })]
                        }), (0,
                        s.jsx)("div", {
                            className: N()["item-price"],
                            children: m ? (0,
                            s.jsx)("span", {
                                style: {
                                    lineHeight: "2rem"
                                },
                                children: "?"
                            }) : (0,
                            s.jsx)(commons_CoinBalance, {
                                currency: p,
                                balance: c,
                                styles: {
                                    display: "inline"
                                },
                                small: !0
                            })
                        })]
                    })
                }), m && (0,
                s.jsxs)("div", {
                    className: N()["store-item-locked"],
                    children: [(0,
                    s.jsx)("img", {
                        className: N()["lock-icon"],
                        src: (0,
                        E.Uk)("/game/ui/store_item_lock.png")
                    }), (0,
                    s.jsxs)("p", {
                        children: [" ", l("generalStore.buy.itemLockedText", {
                            ns: "ui"
                        })]
                    })]
                })]
            }) : null
        }
          , q = i(96329)
          , W = i(27786)
          , Z = i(6514)
          , U = i(95047)
          , G = new class {
            async fetchStoreItemStockSupplyData(e, t) {
                return this.api.getStoreItemStockSupply(e, t)
            }
            constructor(e) {
                this.api = e
            }
        }
        (U.Z);
        let StockSupplyRow = e=>{
            let {isLoading: t, stockData: i} = e
              , {t: n} = (0,
            x.$)(["ui"]);
            return (0,
            s.jsxs)(s.Fragment, {
                children: [n("generalStore.supplyAndStock"), (0,
                s.jsx)("br", {}), t ? (0,
                s.jsx)("div", {
                    className: N().loading,
                    children: (0,
                    s.jsx)(q.s5, {
                        strokeColor: "white",
                        strokeWidth: "5",
                        animationDuration: "0.75",
                        width: "20",
                        visible: !0
                    })
                }) : (0,
                s.jsxs)("div", {
                    className: N()["item-utility"],
                    children: [i.stock, "/", i.supply]
                })]
            })
        }
        ;
        var buy_StoreBuyItemModal = e=>{
            var t, i, n, a, l, o;
            let {coinInventory: c, storeId: d, itemData: p, getItemImage: h, deselectItem: g, open: _} = e
              , f = (0,
            m.T)()
              , {t: y} = (0,
            x.$)(["game", "ui"])
              , [k,w] = (0,
            r.useState)(0)
              , [S,I] = (0,
            r.useState)(!1)
              , T = (0,
            r.useRef)(null)
              , P = (0,
            r.useRef)(null)
              , {stockData: M, isLoading: D} = function(e) {
                let {storeId: t, storeItemData: i} = e
                  , [n,a] = (0,
                r.useState)(!0)
                  , [l,s] = (0,
                r.useState)({
                    stock: (null == i ? void 0 : i.stock) || 0,
                    supply: (null == i ? void 0 : i.supply) || 0
                });
                return (0,
                r.useEffect)(()=>{
                    if (!(null == i ? void 0 : i.supply))
                        return;
                    let e = !0;
                    (async function() {
                        a(!0);
                        try {
                            let n = await G.fetchStoreItemStockSupplyData(t, i.id);
                            i && n && (i.stock = n.stock),
                            e && s(n)
                        } catch (e) {
                            console.log("failed to get stock/supply data", e)
                        } finally {
                            e && a(!1)
                        }
                    }
                    )()
                }
                , [t, i]),
                {
                    isLoading: n,
                    stockData: l
                }
            }({
                storeId: d,
                storeItemData: p
            })
              , B = C.Z.getGameCurrencies()
              , A = null == B ? void 0 : B[null !== (t = null == p ? void 0 : p.currency) && void 0 !== t ? t : ""]
              , F = A ? c.find(e=>e.currencyId === A.id) : void 0
              , R = F ? F.balance : 0;
            (0,
            r.useEffect)(()=>{
                if (p) {
                    var e, t;
                    w(Math.min(1, p.supply ? D ? null !== (e = p.stock) && void 0 !== e ? e : 0 : null !== (t = M.stock) && void 0 !== t ? t : 0 : 1 / 0)),
                    I(!!p.buyPrice && R >= p.buyPrice)
                }
            }
            , [p, D, M, R]);
            let O = r.useMemo(()=>{
                var e, t, i, n, a;
                let l = (null == p ? void 0 : null === (e = p.onUse) || void 0 === e ? void 0 : e.types.includes("placeEntity")) && (null === (t = p.onUse.placeEntity) || void 0 === t ? void 0 : t.entity)
                  , s = l && C.Z.getGameEntity(l)
                  , r = s && (null === (i = s.discoverability) || void 0 === i ? void 0 : i.points) || 0
                  , o = (null == p ? void 0 : null === (n = p.onUse) || void 0 === n ? void 0 : n.types.includes("placeObject")) && p.onUse.placeObject
                  , c = o && C.Z.getGameObject(o)
                  , d = c && (null === (a = c.discoverability) || void 0 === a ? void 0 : a.points) || 0;
                return r + d
            }
            , [p]);
            if (!p)
                return null;
            let V = h(p, !0);
            if (!B || !A)
                return null;
            let q = p.buyPrice || 1 / 0
              , U = Math.min(Math.floor(R / q), p.supply ? D ? null !== (i = p.stock) && void 0 !== i ? i : 0 : null !== (n = M.stock) && void 0 !== n ? n : 0 : 1 / 0);
            p.supply && p.limitBuyQuantity && (U = Math.min(U, p.limitBuyQuantity));
            let H = R >= q
              , validateBuyQuantity = e=>{
                !e || e < 1 || e > U ? I(!1) : I(!0)
            }
              , setValidQuantity = e=>!e || e < 0 ? Math.min(1, U) : e > U ? U : e
              , updateBuyQuantity = e=>{
                w(t=>{
                    let i = t + e;
                    return validateBuyQuantity(i = setValidQuantity(i)),
                    i
                }
                ),
                P.current = setTimeout(()=>{
                    let t = Date.now();
                    T.current = setInterval(()=>{
                        let i = Math.floor((Date.now() - t) / 1500);
                        w(t=>{
                            let n = t + e * (1 + i);
                            return validateBuyQuantity(n = setValidQuantity(n)),
                            n
                        }
                        )
                    }
                    , 50)
                }
                , 250)
            }
              , clearTimers = ()=>{
                P.current && clearTimeout(P.current),
                (null == T ? void 0 : T.current) && clearInterval(T.current)
            }
              , validateInputQuantity = e=>{
                let t = parseInt(e, 10);
                t < 1 || t > U || (w(t),
                validateBuyQuantity(t))
            }
              , z = p.descriptionValue
              , Q = p.utilityValue;
            return (0,
            s.jsxs)(W.Z, {
                maxWidth: "sm",
                open: _,
                className: u()(N()["store-item-modal"]),
                onKeyDown: e=>{
                    "Escape" === e.key && g()
                }
                ,
                PaperProps: {
                    className: u()(j().uikit, j().frame, j().orange, j().popup)
                },
                children: [(0,
                s.jsxs)(Z.Z, {
                    className: u()(N()["store-dialog-content"]),
                    children: [(0,
                    s.jsxs)("div", {
                        className: u()(j().scrollArea, N()["store-item-modal-container"]),
                        children: [(0,
                        s.jsxs)("div", {
                            className: N()["item-content"],
                            children: [(null == V ? void 0 : V.image) && (0,
                            s.jsxs)("div", {
                                className: N()["item-img-wrapper"],
                                children: [!!(null == p ? void 0 : p.tier) && (0,
                                s.jsx)("div", {
                                    className: N()["item-tier"],
                                    style: V.width ? {
                                        fontSize: Math.ceil(6 * (V.width / 32)),
                                        left: "calc(50% - ".concat(V.width / 2, "px)")
                                    } : void 0,
                                    children: (0,
                                    b.Qb)(p.tier)
                                }), (0,
                                s.jsx)("img", {
                                    crossOrigin: "anonymous",
                                    className: N()["item-img"],
                                    style: {
                                        width: null !== (a = V.width) && void 0 !== a ? a : "auto",
                                        height: null !== (l = V.height) && void 0 !== l ? l : "auto",
                                        overflow: "hidden",
                                        objectFit: "cover"
                                    },
                                    src: V.image
                                })]
                            }), (0,
                            s.jsx)("div", {
                                className: N()["item-title"],
                                children: p.nameValue
                            }), (null == p ? void 0 : p.buyPrice) && A ? (0,
                            s.jsx)(commons_CoinBalance, {
                                currency: A,
                                balance: null !== (o = p.buyPrice) && void 0 !== o ? o : 0,
                                styles: {
                                    display: "inline"
                                }
                            }) : void 0]
                        }), (0,
                        s.jsxs)("div", {
                            className: N()["item-metadata"],
                            children: [z && (0,
                            s.jsxs)(s.Fragment, {
                                children: [y("generalStore.itemDescriptionTitle", {
                                    ns: "ui"
                                }), ":", (0,
                                s.jsx)("br", {}), (0,
                                s.jsx)("div", {
                                    className: N()["item-description"],
                                    children: (0,
                                    s.jsx)(L.Z, {
                                        text: z
                                    })
                                })]
                            }), Q && (0,
                            s.jsxs)(s.Fragment, {
                                children: [y("generalStore.itemUtilityTitle", {
                                    ns: "ui"
                                }), ":", (0,
                                s.jsx)("br", {}), (0,
                                s.jsx)("div", {
                                    className: N()["item-utility"],
                                    children: Q
                                })]
                            }), O ? (0,
                            s.jsxs)(s.Fragment, {
                                children: [y("generalStore.itemDiscoverabiltyTitle", {
                                    ns: "ui",
                                    defaultValue: "Discoverability"
                                }), ":", (0,
                                s.jsx)("br", {}), (0,
                                s.jsx)("div", {
                                    className: N()["item-discoverability"],
                                    children: y("generalStore.itemDiscoverabiltyPoints", {
                                        ns: "ui",
                                        count: O,
                                        defaultValue: "".concat(O, " points")
                                    })
                                })]
                            }) : null, p.supply ? (0,
                            s.jsx)(StockSupplyRow, {
                                stockData: M,
                                isLoading: D
                            }) : null, p.supply && p.limitBuyQuantity ? (0,
                            s.jsxs)(s.Fragment, {
                                children: [y("generalStore.itemLimitBuyQuantityTitle", {
                                    ns: "ui"
                                }), ":", (0,
                                s.jsx)("br", {}), (0,
                                s.jsx)("div", {
                                    className: N()["item-limit"],
                                    children: (0,
                                    E.uf)(p.limitBuyQuantity)
                                })]
                            }) : null]
                        })]
                    }), H ? (0,
                    s.jsxs)("div", {
                        className: N()["buy-section"],
                        children: [(0,
                        s.jsxs)("div", {
                            className: N()["buy-quantity"],
                            children: [(0,
                            s.jsxs)("div", {
                                className: N().quantityTitle,
                                style: {
                                    margin: "0"
                                },
                                children: [y("generalStore.itemQuantityTitle", {
                                    ns: "ui"
                                }), ":"]
                            }), (0,
                            s.jsx)("button", {
                                className: u()(N()["btn-down"], "clickable"),
                                type: "button",
                                onMouseDown: ()=>updateBuyQuantity(-1),
                                onMouseUp: clearTimers,
                                onMouseLeave: clearTimers,
                                children: (0,
                                s.jsx)("img", {
                                    className: N()["arrow-down"],
                                    src: (0,
                                    E.Uk)("/game/ui/arrow_left_black.png")
                                })
                            }), (0,
                            s.jsx)("div", {
                                className: N()["quantity-val"],
                                children: (0,
                                s.jsx)("input", {
                                    className: u()(N()["quantity-input"], {
                                        "is-error": !S
                                    }),
                                    value: k,
                                    onChange: e=>validateInputQuantity(e.target.value),
                                    type: "number"
                                })
                            }), (0,
                            s.jsx)("button", {
                                className: u()(N()["btn-up"], "clickable"),
                                type: "button",
                                onMouseDown: ()=>updateBuyQuantity(1),
                                onMouseUp: clearTimers,
                                onMouseLeave: clearTimers,
                                children: (0,
                                s.jsx)("img", {
                                    className: N()["arrow-up"],
                                    src: (0,
                                    E.Uk)("/game/ui/arrow_right_black.png")
                                })
                            }), (0,
                            s.jsx)("button", {
                                className: u()(N()["btn-max"], j().pushbutton),
                                type: "button",
                                onClick: ()=>{
                                    w(U),
                                    I(U > 0)
                                }
                                ,
                                children: y("generalStore.maxButtonText", {
                                    defaultValue: "MAX",
                                    ns: "ui"
                                })
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            style: {
                                marginBottom: 15,
                                display: "flex",
                                justifyContent: "space-between"
                            },
                            children: [(0,
                            s.jsx)("span", {
                                children: y("generalStore.buy.total", {
                                    ns: "ui"
                                })
                            }), Number.isNaN(k) ? void 0 : (0,
                            s.jsx)(commons_CoinBalance, {
                                currency: A,
                                balance: k * q,
                                styles: {
                                    display: "inline"
                                }
                            })]
                        }), (0,
                        s.jsxs)("button", {
                            className: u()(N()["buy-btn"], j().pushbutton),
                            type: "button",
                            onClick: ()=>{
                                f((0,
                                v.NN)({
                                    storeId: d,
                                    itemId: p.id,
                                    quantity: k
                                })),
                                g()
                            }
                            ,
                            disabled: !S || Number.isNaN(k),
                            children: [y("generalStore.buyButtonText", {
                                ns: "ui"
                            }), " ", Number.isNaN(k) ? 0 : k]
                        })]
                    }) : (0,
                    s.jsx)("div", {
                        className: N()["buy-section"],
                        children: (0,
                        s.jsx)("p", {
                            className: N()["not-enough-coins"],
                            children: y("generalStore.buy.notEnoughCoinsText", {
                                ns: "ui"
                            })
                        })
                    })]
                }), (0,
                s.jsx)("button", {
                    className: j().closeBtn,
                    type: "button",
                    onClick: g,
                    children: "\xa0"
                })]
            })
        }
          , H = i(34853);
        let getLocalizedItemMap = e=>{
            let t = {};
            return e.items.forEach(e=>{
                let i = C.Z.getGameItem(e.item);
                (null == i ? void 0 : i.id) && (t[i.id] = {
                    ...e,
                    ...i,
                    nameValue: H.ZP.t((0,
                    b.sA)(i.id), {
                        ns: "game"
                    }),
                    descriptionValue: H.ZP.t((0,
                    b.sA)(i.id, "description"), {
                        ns: "game",
                        defaultValue: ""
                    }),
                    utilityValue: H.ZP.t((0,
                    b.sA)(i.id, "utility"), {
                        ns: "game",
                        defaultValue: ""
                    })
                })
            }
            ),
            t
        }
        ;
        function getLocalizedStore(e) {
            let t = C.Z.getStoreData()
              , i = !!e && (null == t ? void 0 : t[e]);
            return i ? {
                ...i,
                localizedItems: getLocalizedItemMap(i)
            } : i
        }
        var buy_StoreBuyTab = e=>{
            var t;
            let {store: i, coinInventory: n} = e
              , {t: a} = (0,
            x.$)("ui")
              , [l,o] = r.useState("")
              , c = (0,
            m.C)(p.lA)
              , [d,v] = (0,
            r.useState)([])
              , [h,g] = (0,
            r.useState)(null)
              , _ = i && (null === (t = i.ui) || void 0 === t ? void 0 : t.search) !== !1;
            (0,
            r.useEffect)(()=>{
                let e = i ? i.localizedItems : {}
                  , t = (()=>{
                    if (!e || !Object.keys(e).length)
                        return [];
                    let t = Object.values(e);
                    return t.filter(e=>{
                        var t;
                        if (!(null == e ? void 0 : e.id) || !c || "hide" === e.buyStatus)
                            return !1;
                        if (!(null === (t = e.requirements) || void 0 === t ? void 0 : t.levels))
                            return !0;
                        let i = c.full.levels
                          , n = e.requirements.levels.every(e=>{
                            var t;
                            let n = i[e.levelType];
                            return (null !== (t = null == n ? void 0 : n.level) && void 0 !== t ? t : 0) >= e.level
                        }
                        );
                        return n
                    }
                    )
                }
                )()
                  , n = (null == i ? void 0 : i.sort) && (null == i ? void 0 : i.sort) === "price" ? function(e) {
                    let isLocked = e=>!e || "lock" === e.buyStatus || !e.buyPrice
                      , t = e.filter(e=>isLocked(e))
                      , i = e.filter(e=>!isLocked(e));
                    return t.sort((e,t)=>(e.buyPrice || 0) - (t.buyPrice || 0)),
                    i.sort((e,t)=>(e.buyPrice || 0) - (t.buyPrice || 0)),
                    [...i, ...t]
                }(t) : function(e) {
                    let isLocked = e=>!e || "lock" === e.buyStatus || !e.buyPrice
                      , t = e.filter(e=>isLocked(e))
                      , i = e.filter(e=>!isLocked(e));
                    return t.sort((e,t)=>e.nameValue.localeCompare(t.nameValue)),
                    i.sort((e,t)=>e.nameValue.localeCompare(t.nameValue)),
                    [...i, ...t]
                }(t);
                return v(n),
                ()=>{
                    v([]),
                    g(null)
                }
            }
            , [i, c]);
            let f = r.useMemo(()=>{
                if (!l || !_)
                    return d;
                let e = l.toLocaleLowerCase();
                return d.filter(t=>t.nameValue.toLocaleLowerCase().includes(e))
            }
            , [d, l, _])
              , handleCardOnClick = e=>{
                (null == h ? void 0 : h.id) === e.id ? g(null) : g(e)
            }
            ;
            return (0,
            s.jsxs)("div", {
                className: N()["store-tab"],
                children: [(0,
                s.jsx)("input", {
                    type: "text",
                    className: N().filter,
                    placeholder: a("generalStore.filter", {
                        ns: "ui",
                        defaultValue: "Search"
                    }),
                    value: l,
                    onChange: e=>o(e.target.value),
                    style: {
                        display: _ ? "block" : "none"
                    }
                }), (0,
                s.jsxs)("div", {
                    className: u()(N()["category-content-wrapper"], j().scrollArea),
                    children: [(0,
                    s.jsx)("div", {
                        className: N()["category-content"],
                        children: f && f.map(e=>{
                            var t;
                            return (0,
                            s.jsx)(StoreBuyItemCard, {
                                itemData: e,
                                itemImage: null === (t = (0,
                                b.J2)(e, !1)) || void 0 === t ? void 0 : t.image,
                                selectedItem: h,
                                handleCardOnClick: handleCardOnClick
                            }, e.id)
                        }
                        )
                    }), 0 === d.length && (0,
                    s.jsx)("div", {
                        className: N()["no-items-info"],
                        children: (0,
                        s.jsx)("div", {
                            children: a("generalStore.buy.nothingInACategoryText")
                        })
                    })]
                }), i && (0,
                s.jsx)(buy_StoreBuyItemModal, {
                    coinInventory: n,
                    storeId: i.id,
                    itemData: h,
                    getItemImage: b.J2,
                    deselectItem: ()=>{
                        g(null)
                    }
                    ,
                    open: null !== h
                })]
            })
        }
          , sell_StoreSellItemCard = e=>{
            var t;
            let {itemData: i, itemImage: n, inventorySlotData: a, isSelected: l, handleCardOnClick: r} = e;
            if (!i)
                return null;
            let o = null !== (t = i.currencySell) && void 0 !== t ? t : i.currency
              , c = C.Z.getGameCurrency(o)
              , d = c && i.sellPrice && i.sellPrice >= 0;
            return (0,
            s.jsx)("div", {
                className: N()["store-item-container"],
                children: (0,
                s.jsx)("div", {
                    className: u()(N()["card-content-wrapper"], {
                        [N().selected]: l
                    }, "clickable"),
                    children: (0,
                    s.jsxs)("div", {
                        className: N()["card-content"],
                        onClick: ()=>r(i, a),
                        children: [(0,
                        s.jsx)("div", {
                            className: N()["card-title"],
                            children: i.nameValue
                        }), (0,
                        s.jsxs)("div", {
                            className: N()["card-img-wrapper"],
                            children: [!!(null == i ? void 0 : i.tier) && (0,
                            s.jsx)("div", {
                                className: N()["card-tier"],
                                children: (0,
                                b.Qb)(i.tier)
                            }), (0,
                            s.jsx)("img", {
                                crossOrigin: "anonymous",
                                className: N()["card-img"],
                                src: n
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            className: N()["card-footer"],
                            children: [d ? (0,
                            s.jsx)(commons_CoinBalance, {
                                currency: c,
                                balance: i.sellPrice,
                                styles: {
                                    display: "inline"
                                },
                                small: !0
                            }) : (0,
                            s.jsx)(s.Fragment, {
                                children: "---"
                            }), (0,
                            s.jsxs)("div", {
                                className: N()["item-quantity"],
                                children: ["x", (0,
                                s.jsx)("span", {
                                    children: a.quantity
                                })]
                            })]
                        })]
                    })
                })
            })
        }
          , sell_StoreSellItemModal = e=>{
            var t, i;
            let {storeId: n, itemData: a, inventorySlotData: l, getItemImage: o, handleModalClose: c, open: d} = e
              , p = (0,
            m.T)()
              , {t: h} = (0,
            x.$)(["game", "ui"])
              , [g,_] = (0,
            r.useState)(1)
              , [f,y] = (0,
            r.useState)(!0)
              , k = (0,
            r.useRef)(null)
              , w = (0,
            r.useRef)(null);
            if ((0,
            r.useEffect)(()=>{
                a && (_(1),
                y(!0))
            }
            , [a]),
            !a || !l)
                return null;
            let S = o(a, !1)
              , I = C.Z.getGameCurrencies();
            if (!I)
                return null;
            let T = I[null !== (i = null !== (t = a.currencySell) && void 0 !== t ? t : a.currency) && void 0 !== i ? i : ""];
            if (!T)
                return null;
            let validateSellQuantity = e=>{
                !e || e < 1 || e > l.quantity ? y(!1) : y(!0)
            }
              , setValidQuantity = e=>!e || e < 0 ? 1 : e > l.quantity ? l.quantity : e
              , updateSellQuantity = e=>{
                _(t=>{
                    let i = t + e;
                    return validateSellQuantity(i = setValidQuantity(i)),
                    i
                }
                ),
                w.current = setTimeout(()=>{
                    let t = Date.now();
                    k.current = setInterval(()=>{
                        let i = Math.floor((Date.now() - t) / 1500);
                        _(t=>{
                            let n = t + e * (1 + i);
                            return validateSellQuantity(n = setValidQuantity(n)),
                            n
                        }
                        )
                    }
                    , 50)
                }
                , 250)
            }
              , clearTimers = ()=>{
                w.current && clearTimeout(w.current),
                (null == k ? void 0 : k.current) && clearInterval(k.current)
            }
              , validateInputQuantity = e=>{
                let t = parseInt(e, 10);
                t < 1 || t > l.quantity || (_(t),
                validateSellQuantity(t))
            }
              , P = a.descriptionValue
              , M = a.utilityValue;
            return (0,
            s.jsxs)(W.Z, {
                maxWidth: "sm",
                open: d,
                className: u()(N()["store-item-modal"]),
                onKeyDown: e=>{
                    "Escape" === e.key && c()
                }
                ,
                PaperProps: {
                    className: u()(j().uikit, j().frame, j().orange, j().popup)
                },
                children: [(0,
                s.jsxs)(Z.Z, {
                    className: N()["store-sell-dialog-content"],
                    children: [(0,
                    s.jsxs)("div", {
                        className: u()(j().scrollArea, N()["store-item-modal-container"]),
                        children: [(0,
                        s.jsxs)("div", {
                            className: N()["item-content"],
                            children: [(0,
                            s.jsxs)("div", {
                                className: N()["item-img-wrapper"],
                                children: [!!(null == a ? void 0 : a.tier) && (0,
                                s.jsx)("div", {
                                    className: N()["item-tier"],
                                    children: (0,
                                    b.Qb)(a.tier)
                                }), (null == S ? void 0 : S.image) && (0,
                                s.jsx)("img", {
                                    crossOrigin: "anonymous",
                                    className: N()["item-img"],
                                    src: S.image
                                })]
                            }), (0,
                            s.jsx)("div", {
                                className: N()["item-title"],
                                children: a.nameValue
                            }), (0,
                            s.jsxs)("div", {
                                className: N()["item-subtitle"],
                                children: [a.sellPrice && (0,
                                s.jsx)(commons_CoinBalance, {
                                    currency: T,
                                    balance: a.sellPrice,
                                    styles: {
                                        display: "inline"
                                    }
                                }), "\xa0\xa0", (0,
                                s.jsxs)("div", {
                                    className: N()["item-quantity"],
                                    children: ["x", (0,
                                    s.jsx)("span", {
                                        children: l.quantity || 0
                                    })]
                                })]
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            className: N()["item-metadata"],
                            children: [P && (0,
                            s.jsxs)(s.Fragment, {
                                children: [h("generalStore.itemDescriptionTitle", {
                                    ns: "ui"
                                }), ":", (0,
                                s.jsx)("br", {}), (0,
                                s.jsx)("div", {
                                    className: N()["item-description"],
                                    children: (0,
                                    s.jsx)(L.Z, {
                                        text: P
                                    })
                                })]
                            }), M && (0,
                            s.jsxs)(s.Fragment, {
                                children: [h("generalStore.itemUtilityTitle", {
                                    ns: "ui"
                                }), ":", (0,
                                s.jsx)("br", {}), (0,
                                s.jsx)("div", {
                                    className: N()["item-utility"],
                                    children: M
                                })]
                            })]
                        })]
                    }), a.sellPrice ? (0,
                    s.jsxs)("div", {
                        className: N()["sell-section"],
                        children: [(0,
                        s.jsxs)("div", {
                            className: N()["sell-quantity"],
                            children: [(0,
                            s.jsxs)("div", {
                                className: N().quantityTitle,
                                style: {
                                    margin: "0"
                                },
                                children: [h("generalStore.itemQuantityTitle", {
                                    ns: "ui"
                                }), ":"]
                            }), (0,
                            s.jsx)("button", {
                                className: u()(N()["btn-down"], "clickable"),
                                type: "button",
                                onMouseDown: ()=>updateSellQuantity(-1),
                                onMouseUp: clearTimers,
                                onMouseLeave: clearTimers,
                                children: (0,
                                s.jsx)("img", {
                                    className: N()["arrow-down"],
                                    src: (0,
                                    E.Uk)("/game/ui/arrow_left_black.png")
                                })
                            }), (0,
                            s.jsx)("div", {
                                className: N()["quantity-val"],
                                children: (0,
                                s.jsx)("input", {
                                    className: u()(N()["quantity-input"], {
                                        "is-error": !f
                                    }),
                                    value: g,
                                    onChange: e=>validateInputQuantity(e.target.value),
                                    type: "number",
                                    min: "1",
                                    max: l.quantity
                                })
                            }), (0,
                            s.jsx)("button", {
                                className: u()(N()["btn-up"], "clickable"),
                                type: "button",
                                onMouseDown: ()=>updateSellQuantity(1),
                                onMouseUp: clearTimers,
                                onMouseLeave: clearTimers,
                                children: (0,
                                s.jsx)("img", {
                                    className: N()["arrow-up"],
                                    src: (0,
                                    E.Uk)("/game/ui/arrow_right_black.png")
                                })
                            }), (0,
                            s.jsx)("button", {
                                className: u()(N()["btn-max"], j().pushbutton),
                                type: "button",
                                onClick: ()=>{
                                    _(l.quantity),
                                    y(!0)
                                }
                                ,
                                children: h("generalStore.maxButtonText", {
                                    ns: "ui",
                                    defaultValue: "MAX"
                                })
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            style: {
                                marginBottom: 15,
                                display: "flex",
                                justifyContent: "space-between"
                            },
                            children: [(0,
                            s.jsx)("span", {
                                children: h("generalStore.sellReceiveTotal", {
                                    ns: "ui"
                                })
                            }), !Number.isNaN(g) && a.sellPrice ? (0,
                            s.jsx)(commons_CoinBalance, {
                                currency: T,
                                balance: g * a.sellPrice,
                                styles: {
                                    display: "inline"
                                }
                            }) : void 0]
                        }), (0,
                        s.jsxs)("button", {
                            className: u()(N()["sell-btn"], j().pushbutton),
                            type: "button",
                            onClick: ()=>{
                                p((0,
                                v.IT)({
                                    storeId: n,
                                    itemId: a.id,
                                    quantity: g,
                                    slot: l.slot
                                })),
                                c()
                            }
                            ,
                            disabled: !f || Number.isNaN(g),
                            children: [h("generalStore.sellButtonText", {
                                ns: "ui"
                            }), " ", Number.isNaN(g) ? 0 : g]
                        })]
                    }) : (0,
                    s.jsx)("div", {
                        className: N()["sell-section"],
                        children: (0,
                        s.jsx)("p", {
                            className: N()["no-sell-price"],
                            children: h("generalStore.itemNotForSale", {
                                ns: "ui"
                            })
                        })
                    })]
                }), (0,
                s.jsx)("button", {
                    className: j().closeBtn,
                    type: "button",
                    onClick: c,
                    children: "\xa0"
                })]
            })
        }
          , sell_StoreSellTab = e=>{
            let {store: t, inventory: i} = e
              , [n,a] = (0,
            r.useState)(null)
              , [l,o] = (0,
            r.useState)(null)
              , handleCardOnClick = (e,t)=>{
                a(e),
                o(t)
            }
            ;
            return (0,
            s.jsxs)("div", {
                className: N()["store-tab"],
                children: [(0,
                s.jsx)("div", {
                    className: u()(N()["sell-content-wrapper"], j().scrollArea),
                    children: (0,
                    s.jsx)("div", {
                        className: N()["items-content"],
                        children: (null == i ? void 0 : i.slots) && t && Object.keys(i.slots).map(e=>{
                            let n = i.slots[e];
                            if (!n || !n.item)
                                return null;
                            let a = t.localizedItems[n.item];
                            if (!a)
                                return null;
                            let r = (0,
                            b.J2)(a, !1);
                            return (null == r ? void 0 : r.image) ? (0,
                            s.jsx)(sell_StoreSellItemCard, {
                                itemData: a,
                                itemImage: r.image,
                                inventorySlotData: n,
                                isSelected: (null == l ? void 0 : l.slot.toString()) === e,
                                handleCardOnClick: handleCardOnClick
                            }, "".concat(n.item, "-").concat(e)) : null
                        }
                        )
                    })
                }), t && (0,
                s.jsx)(sell_StoreSellItemModal, {
                    storeId: t.id,
                    itemData: n,
                    inventorySlotData: l,
                    getItemImage: b.J2,
                    handleModalClose: ()=>{
                        a(null),
                        o(null)
                    }
                    ,
                    open: null !== n
                })]
            })
        }
          , z = i(76873);
        let Q = 0
          , DisablePlayerMovement_DisablePlayerMovement = e=>{
            let {onKeyDown: t, depth: i=0, block: n=!0} = e
              , a = (0,
            m.C)(z.pT);
            return r.useEffect(()=>{
                if (!a) {
                    let handleKeydown = e=>{
                        i === Q && (n && e.stopPropagation(),
                        null == t || t(e))
                    }
                      , e = Q;
                    return i > Q && (Q = i),
                    document.body.addEventListener("keydown", handleKeydown),
                    ()=>{
                        document.body.removeEventListener("keydown", handleKeydown),
                        Q = e
                    }
                }
            }
            , [t, a]),
            null
        }
          , GameStore = ()=>{
            var e, t, i;
            let n = (0,
            m.C)(v.D2)
              , a = (0,
            m.C)(p.lA)
              , {t: l} = (0,
            x.$)(["game", "ui"])
              , [o,c] = (0,
            r.useState)(getLocalizedStore(null == n ? void 0 : n.storeId))
              , d = o && (null == o ? void 0 : null === (e = o.ui) || void 0 === e ? void 0 : e.tabs) || ["buy", "sell"]
              , [h,_] = (0,
            r.useState)(d[0])
              , f = (0,
            g.I0)();
            (0,
            r.useEffect)(()=>{
                _(d[0])
            }
            , [o && (null == o ? void 0 : null === (t = o.ui) || void 0 === t ? void 0 : t.tabs), n.storeId]);
            let y = d.includes("orders")
              , b = null == a ? void 0 : a.full.coinInventory
              , k = null == a ? void 0 : a.full.inventory;
            if ((0,
            r.useEffect)(()=>{
                let e = null == n ? void 0 : n.storeId;
                (null == n ? void 0 : n.isOpen) && e && C.Z.reloadOne({
                    kind: "store",
                    id: e
                }).then(e=>{
                    let t = e.items.filter(e=>{
                        let t = C.Z.getGameItem(e.item);
                        return !(null == t ? void 0 : t.id)
                    }
                    ).map(e=>e.item);
                    return C.Z.updateLibraryItems(t)
                }
                ).then(()=>{
                    let t = getLocalizedStore(e);
                    t && c(t)
                }
                ).catch(()=>{}
                )
            }
            , [null == n ? void 0 : n.storeId, null == n ? void 0 : n.isOpen]),
            !(null == n ? void 0 : n.isOpen))
                return (0,
                s.jsx)(s.Fragment, {});
            let w = new Set;
            return w.add(C.Z.getDefaultCurrency()),
            null == o || null === (i = o.items) || void 0 === i || i.forEach(e=>{
                e.currency && w.add(e.currency),
                e.currencySell && w.add(e.currencySell)
            }
            ),
            (0,
            s.jsxs)("div", {
                className: N().storeDialog,
                style: {
                    zIndex: 1e3
                },
                children: [(0,
                s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                    onKeyDown: e=>{
                        "Escape" === e.key && f((0,
                        v.fD)()),
                        e.stopPropagation()
                    }
                }), (0,
                s.jsx)("div", {
                    className: j().modalBackdrop
                }), (0,
                s.jsxs)("div", {
                    className: u()(N().box, N()["modal-box-container"], j().uikit, j().frame, j().purpleinset),
                    children: [(0,
                    s.jsx)("button", {
                        className: j().closeBtn,
                        type: "button",
                        onClick: ()=>{
                            f((0,
                            v.fD)())
                        }
                        ,
                        children: "\xa0"
                    }), (0,
                    s.jsxs)("div", {
                        className: N()["modal-box-content"],
                        children: [(0,
                        s.jsxs)("div", {
                            className: N().storeHeader,
                            children: [(0,
                            s.jsx)("h1", {
                                className: N()["store-title"],
                                children: o && l(null == o ? void 0 : o.name, {
                                    ns: "game",
                                    defaultValue: "General Store"
                                })
                            }), (0,
                            s.jsx)("div", {
                                className: N()["store-description"],
                                children: o && l(null == o ? void 0 : o.description, {
                                    ns: "game",
                                    defaultValue: ""
                                })
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            className: N().contentDivider,
                            children: [(0,
                            s.jsx)("div", {
                                className: N()["coin-inventory-row"],
                                children: (null == b ? void 0 : b.length) && b.map(e=>{
                                    if (!w.has(e.currencyId))
                                        return null;
                                    let t = C.Z.getGameCurrency(e.currencyId);
                                    return t ? (0,
                                    s.jsx)("div", {
                                        className: N().currency,
                                        children: (0,
                                        s.jsx)(commons_CoinBalance, {
                                            currency: t,
                                            balance: e.balance,
                                            styles: {
                                                display: "inline"
                                            }
                                        })
                                    }, e.currencyId) : null
                                }
                                )
                            }), (0,
                            s.jsxs)("div", {
                                className: N().tabBuySell,
                                children: [d.includes("buy") && (0,
                                s.jsx)("button", {
                                    className: u()(N().buyButton, {
                                        [N().active]: "buy" === h
                                    }),
                                    type: "button",
                                    onClick: ()=>_("buy"),
                                    children: l("generalStore.buyItems", {
                                        ns: "ui",
                                        defaultValue: "Buy"
                                    })
                                }), d.includes("sell") && (0,
                                s.jsx)("button", {
                                    className: u()(N().sellButton, {
                                        [N().active]: "sell" === h
                                    }),
                                    type: "button",
                                    onClick: ()=>_("sell"),
                                    children: l("generalStore.sellItems", {
                                        ns: "ui",
                                        defaultValue: "Sell"
                                    })
                                }), y && (0,
                                s.jsx)("button", {
                                    className: u()(N().ordersButton, {
                                        [N().active]: "orders" === h
                                    }),
                                    type: "button",
                                    onClick: ()=>_("orders"),
                                    children: l("generalStore.ordersTab", {
                                        ns: "ui",
                                        defaultValue: "Orders"
                                    })
                                })]
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            className: N()["store-tabs-wrapper"],
                            children: ["sell" === h && (0,
                            s.jsx)(sell_StoreSellTab, {
                                store: o,
                                inventory: k
                            }), "buy" === h && (0,
                            s.jsx)(buy_StoreBuyTab, {
                                store: o,
                                coinInventory: b
                            }), "orders" === h && (0,
                            s.jsx)(StoreOrdersTab, {
                                storeId: o ? o.id : "",
                                inventory: k
                            })]
                        })]
                    })]
                })]
            })
        }
        ;
        var K = i(23493)
          , $ = i.n(K)
          , Y = i(34256)
          , X = i(41914)
          , J = i(39983)
          , ee = i(69377)
          , et = i.n(ee)
          , ei = i(79750)
          , en = i(31189)
          , ea = i(76570);
        let GameDialog = e=>{
            var t, i;
            let {open: n} = e
              , {dialogMessage: a, isLastDialog: l, isFirstDialog: o} = (0,
            m.C)(p.pB)
              , c = (0,
            m.C)(p.Nz)
              , d = (0,
            m.C)(p.lA)
              , {t: v} = (0,
            x.$)(["quest", "game", "ui"])
              , h = (0,
            m.T)()
              , [,g] = (0,
            r.useReducer)(e=>e + 1, 0)
              , [_,f] = (0,
            r.useState)(!1)
              , y = (0,
            r.useRef)(null)
              , j = (0,
            en.ob)()
              , b = _
              , {startTime: k, dialogText: N, entity: w, pet: S} = (0,
            r.useMemo)(()=>{
                var e;
                return f(!1),
                b = !1,
                {
                    startTime: new Date().getTime(),
                    dialogText: a ? v([a, "game:".concat(a), a]) : "",
                    entity: c.character ? C.Z.getGameEntity(c.character) : void 0,
                    pet: c.pet ? null == d ? void 0 : null === (e = d.full) || void 0 === e ? void 0 : e.pet : void 0
                }
            }
            , [a, c]);
            if (!n)
                return null === J.default || void 0 === J.default || J.default.stopAudio("snd_ui_npctalk"),
                null;
            let I = b ? N.length : Math.min(N.length, Math.max(Math.floor((new Date().getTime() - k) / 35) + 1, 1))
              , T = J.default.loadAudio("snd_ui_npctalk")
              , scrollToText = ()=>{
                let e = y.current;
                e && (e.scrollTop = e.scrollHeight - e.clientHeight)
            }
            ;
            if (I < N.length) {
                let e = 35 - (new Date().getTime() - k - 35 * (I - 1));
                setTimeout(()=>{
                    g(),
                    scrollToText()
                }
                , Math.max(1, e)),
                null == T || T.then(e=>{
                    e && !e.isPlaying && e.play()
                }
                )
            } else
                null == T || T.then(e=>null == e ? void 0 : e.stop());
            let triggerDialogClose = ()=>{
                l && R.ZP.emitEventNow(R.Yi.NPCDIALOG_CLOSE, {
                    dialogId: a,
                    event: c.event,
                    npcId: null == w ? void 0 : w.id
                })
            }
              , P = $()(()=>{
                R.rV.playSound.emit("snd_ui_click1"),
                h((0,
                Y.Nb)())
            }
            , 1500)
              , M = $()(()=>{
                R.rV.playSound.emit("snd_ui_click1");
                let e = y.current;
                I < N.length ? f(!0) : e && e.scrollHeight - e.clientHeight - e.scrollTop > 10 ? e.scrollTop = e.scrollTop + e.clientHeight - 10 : (triggerDialogClose(),
                h((0,
                Y.nl)()))
            }
            , 1500)
              , D = (null == w ? void 0 : null === (t = w.npc) || void 0 === t ? void 0 : t.name) || c.character
              , L = N.substring(0, I)
              , B = N.substring(I).split(/\s/)[0]
              , A = (0,
            ei.GU)()
              , F = null !== (i = A.uiprefix) && void 0 !== i ? i : ""
              , O = N.length > 130
              , V = !F && j.width < innerHeight
              , q = V ? j.height / 340 : j.width / 500;
            return (0,
            s.jsxs)("div", {
                className: u()(et().dialog5),
                children: [(0,
                s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {}), (0,
                s.jsxs)("div", {
                    className: u()(et().content, {
                        [et().showVerticalBackground]: V
                    }),
                    style: {
                        backgroundImage: V ? "url('".concat((0,
                        E.Uk)("/assets/ui/dialogue/dialog_background_portrait.png"), "')") : "url('".concat((0,
                        E.Uk)("/assets/ui/dialogue/".concat(F, "dialog_background.png")), "')"),
                        transform: V || (0,
                        ea.tq)(j.width) ? "scale(min(1, ".concat(q / (0,
                        ea.Zm)(), "))") : void 0
                    },
                    children: [(0,
                    s.jsx)("div", {
                        ref: y,
                        className: et().messageBox,
                        children: a && (0,
                        s.jsxs)("div", {
                            className: u()(et().message, {
                                [et().blowhard]: O
                            }),
                            children: [(0,
                            s.jsx)("span", {
                                children: L
                            }), (0,
                            s.jsx)("span", {
                                style: {
                                    opacity: 0
                                },
                                children: B
                            })]
                        })
                    }), w ? (0,
                    s.jsxs)(s.Fragment, {
                        children: [(0,
                        s.jsx)("div", {
                            className: et().avatar,
                            children: (0,
                            s.jsx)(X.z, {
                                selectedTraits: w.npc.avatarPieces,
                                symbol: w.npc.avatar,
                                height: V ? 50 : 75,
                                flip: !V
                            })
                        }), (0,
                        s.jsx)("div", {
                            className: et().avatarname,
                            children: D
                        })]
                    }) : S && (0,
                    s.jsxs)(s.Fragment, {
                        children: [(0,
                        s.jsx)("div", {
                            className: et().avatar,
                            children: (0,
                            s.jsx)(X.z, {
                                selectedTraits: S.avatar.pieces,
                                symbol: S.avatar.id,
                                height: 75,
                                anim: "sit"
                            })
                        }), (0,
                        s.jsx)("div", {
                            className: et().avatarname,
                            children: S.avatar.name
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: et().buttons,
                        children: [!o && (0,
                        s.jsx)("button", {
                            type: "button",
                            className: et().back,
                            onClick: P,
                            children: (0,
                            s.jsx)("img", {})
                        }), (0,
                        s.jsx)("button", {
                            type: "button",
                            className: et().skip,
                            onClick: M,
                            autoFocus: !0,
                            children: (0,
                            s.jsx)("img", {})
                        })]
                    })]
                })]
            })
        }
        ;
        var el = i(48623)
          , es = i.n(el)
          , er = i(30766)
          , eo = i.n(er)
          , ec = i(54698)
          , ed = i(26307);
        let eu = [{
            e: ":-)",
            o: "\uD83D\uDE00"
        }, {
            e: ";-)",
            o: "\uD83D\uDE09"
        }, {
            e: ":-||",
            o: "\uD83D\uDE20"
        }, {
            e: ":-|",
            o: "\uD83D\uDE20"
        }, {
            e: ":-(",
            o: "\uD83D\uDE1E"
        }, {
            e: ":-((",
            o: "\uD83D\uDE22"
        }, {
            e: ":-O",
            o: "\uD83D\uDE32"
        }, {
            e: ":-P",
            o: "\uD83D\uDE1B"
        }, {
            e: ";-P",
            o: "\uD83D\uDE1C"
        }, {
            e: ":-/",
            o: "\uD83D\uDE15"
        }, {
            e: ":-]",
            o: "\uD83D\uDE37"
        }, {
            e: ":-]",
            o: "\uD83D\uDE37"
        }]
          , em = (a = ()=>{
            R.ZP.emitEventNow(R.Yi.SET_TYPING_STATE, {})
        }
        ,
        l = (0,
        b.x9)({
            seconds: 2
        }),
        ()=>{
            n || (a(),
            n = setTimeout(()=>{
                n = void 0
            }
            , l))
        }
        );
        let ChatDisplay = class ChatDisplay {
            constructor(e) {
                var t;
                this.message = e.message,
                this.creator_id = e.creator_id,
                this.creatorName = e.creatorName,
                this.createdAt = e.createdAt,
                this.isSelf = !1,
                this.isWhisper = null !== (t = e.whisper) && void 0 !== t && t,
                this.isSystem = !e.creator_id || "sys" === e.creator_id || "pixels-bot" === e.creator_id
            }
        }
        ;
        let ChatMessageDisplay = e=>{
            let {message: t, username: i, createdAt: n, isSelf: a, isSystem: l, isWhisper: o, onClick: c} = e
              , d = u()(eo().chatmessage, {
                [eo().isSelf]: a,
                [eo().isSystem]: l,
                [eo().whisper]: o
            })
              , m = r.useMemo(()=>new Date(n).toLocaleTimeString(void 0, {
                hour: "numeric",
                minute: "2-digit"
            }), [n]);
            return (0,
            s.jsxs)("div", {
                className: d,
                children: [!!i && (0,
                s.jsxs)("div", {
                    className: u()(eo().messageHeader, "clickable"),
                    onClick: c,
                    children: [(0,
                    s.jsx)("span", {
                        className: u()(eo().username),
                        children: i
                    }), (0,
                    s.jsx)("span", {
                        className: u()(eo().timestamp),
                        children: m
                    })]
                }), o ? "*whisper* " : "", (0,
                s.jsx)("span", {
                    className: eo().message,
                    children: function(e) {
                        let t = e;
                        for (let e = 0; e < eu.length; e += 1) {
                            let i = eu[e].o
                              , n = eu[e].e;
                            if (t === n)
                                return i;
                            t.startsWith(n + " ") && (t = i + t.substring(n.length)),
                            t.endsWith(" " + n) && (t = t.slice(0, -1 * n.length) + i),
                            t = t.replaceAll(" " + n + " ", i)
                        }
                        return t
                    }(t)
                })]
            })
        }
          , ChatWindow = ()=>{
            let[e,t] = (0,
            r.useState)("")
              , [i,n] = (0,
            r.useState)(!0)
              , a = (0,
            r.useRef)(null)
              , {t: l} = (0,
            x.$)("ui")
              , o = (0,
            m.T)()
              , {messages: c, isVisible: d, chatEnabled: v, openedNow: h} = (0,
            m.C)(ec.tz)
              , g = (0,
            m.C)(p.lA)
              , _ = (0,
            r.useRef)(null)
              , scrollToBottom = ()=>{
                if (_.current) {
                    let e = _.current;
                    e.scrollTop = e.scrollHeight - e.offsetHeight
                }
            }
            ;
            if ((0,
            r.useEffect)(()=>{
                if (h) {
                    var e;
                    null === (e = a.current) || void 0 === e || e.focus()
                }
            }
            , [h]),
            (0,
            r.useEffect)(()=>{
                d ? i && scrollToBottom() : n(!0)
            }
            , [c, d]),
            !d || !v)
                return (0,
                s.jsx)(s.Fragment, {});
            let f = "0"
              , y = 0
              , j = null == c ? void 0 : c.map(e=>{
                let t = new ChatDisplay(e);
                return e.creatorName && (e.creator_id !== f || e.createdAt - y > (0,
                b.x9)({
                    minutes: 3
                })) ? t.username = e.creatorName : t.username = "",
                y = e.createdAt,
                f = e.creator_id,
                t.isSelf = e.creator_id === (null == g ? void 0 : g.core.mid),
                t.message = t.isSystem ? e.message : (0,
                E.FL)(e.message),
                t
            }
            )
              , handleSendClick = ()=>{
                var i;
                e && R.ZP.emitEventNow(R.Yi.CHAT_MESSAGE_SEND, {
                    message: e
                }),
                t(""),
                null === (i = a.current) || void 0 === i || i.focus()
            }
              , handleInput = e=>{
                var i;
                let n = null !== (i = e.target.value) && void 0 !== i ? i : "";
                n && em(),
                t(n)
            }
              , k = ""
              , eatKeys = e=>{
                var t;
                "" === e.target.value && (null === (t = e.key) || void 0 === t ? void 0 : t.startsWith("Arrow")) || (k = e.key,
                e.stopPropagation())
            }
              , handleKey = e=>{
                var t;
                null !== (t = e.key) && void 0 !== t && t.startsWith("Arrow") || (k === e.key && (e.stopPropagation(),
                k = ""),
                "Enter" === e.key && (e.preventDefault(),
                handleSendClick()))
            }
            ;
            return (0,
            s.jsxs)("div", {
                className: u()(es().overlayWindow, eo().chatwindow, "is-active"),
                children: [(0,
                s.jsx)("div", {
                    className: u()("clickable", eo().people),
                    onClick: ()=>{
                        o((0,
                        Y.GP)())
                    }
                    ,
                    children: (0,
                    s.jsx)(A, {
                        title: l("ui.players", "Players"),
                        placement: "right",
                        children: (0,
                        s.jsx)("span", {
                            children: "\uD83D\uDC65"
                        })
                    })
                }), (0,
                s.jsx)("div", {
                    className: u()(eo().chats, es().scrollArea),
                    onScroll: e=>{
                        let t = e.currentTarget.scrollTop - (e.currentTarget.scrollHeight - e.currentTarget.offsetHeight);
                        n(5 > Math.abs(t))
                    }
                    ,
                    ref: _,
                    children: null == j ? void 0 : j.map(e=>(0,
                    s.jsx)(ChatMessageDisplay, {
                        message: e.message,
                        username: e.username,
                        createdAt: e.createdAt,
                        isSelf: e.isSelf,
                        isSystem: e.isSystem,
                        isWhisper: e.isWhisper,
                        onClick: ()=>{
                            o((0,
                            Y.ol)({
                                mid: e.creator_id,
                                username: e.username || ""
                            }))
                        }
                    }, e.creator_id + e.createdAt))
                }), (0,
                s.jsx)("input", {
                    type: "text",
                    maxLength: 90,
                    className: eo().chatInput,
                    value: e,
                    onInput: e=>handleInput(e),
                    onKeyDown: e=>eatKeys(e),
                    onKeyUp: e=>handleKey(e),
                    ref: a
                }), (0,
                s.jsx)("button", {
                    className: es().closeButton,
                    onClick: ()=>{
                        o((0,
                        ec.wt)())
                    }
                    ,
                    type: "button",
                    children: "✖"
                }), (0,
                s.jsx)("button", {
                    onClick: handleSendClick,
                    type: "button",
                    className: u()(eo().sendButton, "button"),
                    style: {
                        zIndex: 1e4,
                        pointerEvents: "all"
                    },
                    children: (0,
                    s.jsx)(ed.Z, {
                        fontSize: "large",
                        htmlColor: "white"
                    })
                })]
            })
        }
        ;
        var ep = i(21519)
          , ev = i(98456)
          , eh = i(36919)
          , eg = i(17830)
          , ex = i.n(eg)
          , NFTPicker_NFTCard = e=>{
            let {selected: t, setSelected: i, nft: n, isLargeCard: a} = e
              , l = (0,
            en.dD)()
              , {imageUrl: r, name: o} = n
              , c = t && t.tokenId === n.tokenId && t.assetContract === n.assetContract
              , d = l ? a ? 110 : 80 : a ? 140 : 100;
            return (0,
            s.jsx)("div", {
                style: {
                    background: "rgba(255,255,255,0.9)",
                    height: d,
                    width: d
                },
                onClick: function() {
                    i && (c ? i(void 0) : i(n))
                },
                children: (0,
                s.jsx)("div", {
                    style: {
                        height: "100%",
                        width: "100%",
                        background: "url('".concat((0,
                        E.b7)(r, !1), "')"),
                        backgroundSize: "contain"
                    },
                    children: (0,
                    s.jsxs)("div", {
                        style: {
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            background: " linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 33%, rgba(0,0,0,0.1) 66%, rgba(0,0,0,0) 100%)",
                            boxShadow: c ? "0 0 0 4px #27a792" : "none"
                        },
                        children: [(0,
                        s.jsx)("div", {
                            className: i ? "".concat(ex()["hover-cover"]) : ""
                        }), (0,
                        s.jsx)("div", {
                            style: {
                                position: "absolute",
                                fontSize: "8px",
                                bottom: -8,
                                color: "white",
                                padding: 4,
                                paddingBottom: 0
                            },
                            children: (0,
                            s.jsx)("h3", {
                                style: {
                                    color: "white",
                                    fontSize: "8px",
                                    textShadow: "1px 1px rgb(0,0,0)"
                                },
                                children: o
                            })
                        })]
                    })
                })
            })
        }
          , commons_ReloadNfts = e=>{
            let {nfts: t, override: i=!1, overrideReloadAt: n=0} = e
              , {t: a} = (0,
            x.$)("ui")
              , l = "every 3 hours";
            if (t.canReload || i)
                l = "now";
            else if (t.canReloadAt) {
                let e = 0 === n ? t.canReloadAt : n;
                l = "in " + (0,
                b.Zo)(Math.ceil((e - Date.now()) / 1e3))
            }
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)(ep.Z, {}), (0,
                s.jsx)("div", {
                    style: {
                        width: "100%"
                    },
                    children: (0,
                    s.jsx)("div", {
                        style: {
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            marginTop: 30
                        },
                        children: (0,
                        s.jsx)(S.Z, {
                            title: "Reload ".concat(l, " (staked and delegated nfts are included)."),
                            children: (0,
                            s.jsx)("span", {
                                children: (0,
                                s.jsx)("button", {
                                    type: "button",
                                    className: u()(j().pushbutton),
                                    disabled: !t.canReload && !i,
                                    onClick: ()=>{
                                        (t.canReload || i) && t.reload(!0)
                                    }
                                    ,
                                    children: a("button.loadnft", "Find NFTs")
                                })
                            })
                        })
                    })
                })]
            })
        }
        ;
        let e_ = RegExp("[^a-zA-Z0-9#]", "g");
        var NFTPicker_NFTPicker = e=>{
            var t, i, n, a, l, o, c;
            let {selectedNft: d, setSelectedNft: u, nfts: v} = e
              , h = (0,
            m.C)(p.lA)
              , {t: g} = (0,
            x.$)(["ui"])
              , _ = (0,
            en.dD)()
              , f = (0,
            r.useCallback)(e=>{
                u(e)
            }
            , [u]);
            return (0,
            r.useEffect)(()=>{
                var e, t;
                if (v && !v.loading && (null === (e = v.filteredData) || void 0 === e ? void 0 : e.supported.length)) {
                    if (d)
                        f(d);
                    else if (h) {
                        let {name: e} = (null === (t = h.core.currentAvatar) || void 0 === t ? void 0 : t.pieces) ? JSON.parse(h.core.currentAvatar.pieces) : "";
                        f(e && v.filteredData.supported.find(t=>{
                            var i;
                            return ((i = t.name) ? i.replace(e_, "").toLowerCase() : "") === e
                        }
                        ) || v.filteredData.supported[0])
                    }
                }
            }
            , [v, v.loading, d, f]),
            (0,
            s.jsx)("div", {
                style: {
                    padding: 1
                },
                children: v.loading ? (0,
                s.jsxs)("div", {
                    className: "has-text-centered",
                    style: {
                        minHeight: 250
                    },
                    children: [(0,
                    s.jsx)(ev.Z, {}), (0,
                    s.jsx)("div", {}), (0,
                    s.jsx)("div", {}), (0,
                    s.jsx)("div", {})]
                }) : (0,
                s.jsx)("div", {
                    children: v.error ? (0,
                    s.jsx)("div", {
                        children: g("nftPicker.nftLoadingError")
                    }) : (0,
                    s.jsx)("div", {
                        children: (0,
                        s.jsxs)(eh.Z, {
                            sx: _ ? {
                                p: 2
                            } : {
                                p: 3
                            },
                            children: [!!(null === (t = v.filteredData) || void 0 === t ? void 0 : t.supported.length) && (0,
                            s.jsx)(s.Fragment, {
                                children: (0,
                                s.jsx)("div", {
                                    style: {
                                        marginBottom: 30
                                    },
                                    children: (0,
                                    s.jsx)("div", {
                                        style: {
                                            display: "flex",
                                            flexWrap: "wrap",
                                            justifyContent: "center"
                                        },
                                        children: (null === (o = v.filteredData) || void 0 === o ? void 0 : o.supported) && v.filteredData.supported.map((e,t)=>(0,
                                        s.jsx)("div", {
                                            className: "clickable",
                                            style: {
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                marginBottom: 10
                                            },
                                            children: (0,
                                            s.jsx)(NFTPicker_NFTCard, {
                                                nft: e,
                                                setSelected: u,
                                                selected: d,
                                                isLargeCard: !0
                                            })
                                        }, "nft-".concat(t)))
                                    })
                                })
                            }), !!(null === (i = v.filteredData) || void 0 === i ? void 0 : i.unsupported.length) && (null === (n = v.filteredData) || void 0 === n ? void 0 : n.supported.length) < 4 && (0,
                            s.jsxs)(s.Fragment, {
                                children: [(0,
                                s.jsx)(ep.Z, {}), (0,
                                s.jsxs)("div", {
                                    style: {
                                        marginTop: 30
                                    },
                                    children: [(0,
                                    s.jsx)("h1", {
                                        style: _ ? {
                                            width: "100%",
                                            fontSize: "20px"
                                        } : void 0,
                                        children: "Unsupported NFTs:"
                                    }), (0,
                                    s.jsxs)("p", {
                                        style: _ ? {
                                            width: "100%",
                                            fontSize: "14px"
                                        } : {
                                            maxWidth: "90%",
                                            margin: "0px auto"
                                        },
                                        children: [g("nftPicker.unsupportedNfts"), (0,
                                        s.jsx)("a", {
                                            href: "https://discord.gg/pixels",
                                            children: "Discord"
                                        }), "."]
                                    }), (0,
                                    s.jsx)("div", {
                                        style: {
                                            display: "flex",
                                            flexWrap: "wrap",
                                            justifyContent: "center"
                                        },
                                        children: (null === (c = v.filteredData) || void 0 === c ? void 0 : c.unsupported) && v.filteredData.unsupported.filter(e=>e && e.traits).map((e,t)=>(0,
                                        s.jsx)("div", {
                                            style: {
                                                padding: _ ? 5 : 10
                                            },
                                            children: (0,
                                            s.jsx)(NFTPicker_NFTCard, {
                                                nft: e
                                            })
                                        }, "unsupported-nft-".concat(t)))
                                    })]
                                })]
                            }), !v.canReload && !v.loading && !(null === (a = v.filteredData) || void 0 === a ? void 0 : a.supported.length) && !(null === (l = v.filteredData) || void 0 === l ? void 0 : l.unsupported.length) && (0,
                            s.jsxs)(s.Fragment, {
                                children: [(0,
                                s.jsx)("h1", {
                                    className: "title has-text-centered",
                                    style: _ ? {
                                        width: "100%",
                                        fontSize: "20px"
                                    } : void 0,
                                    children: g("nftPicker.noSupportedNfts")
                                }), (0,
                                s.jsx)("p", {
                                    className: "subtitle has-text-centered",
                                    style: _ ? {
                                        width: "100%",
                                        fontSize: "14px"
                                    } : {
                                        maxWidth: 500,
                                        margin: "0px auto"
                                    },
                                    children: g("nftPicker.buySupportedNft")
                                })]
                            }), (0,
                            s.jsx)(commons_ReloadNfts, {
                                nfts: v
                            })]
                        })
                    })
                })
            })
        }
        ;
        let PlayerButtons = ()=>{
            let e = (0,
            m.C)(p.QV)
              , t = (0,
            m.T)()
              , {t: i} = (0,
            x.$)(["ui"])
              , openNftPicker = ()=>{
                t((0,
                Y.$J)({
                    dialog: "nftpicker"
                }))
            }
              , openAvatarPicker = ()=>{
                t((0,
                Y.$J)({
                    dialog: "avatar"
                }))
            }
              , openUsername = ()=>{
                t((0,
                Y.$J)({
                    dialog: "username"
                }))
            }
              , openPlayerInfo = ()=>{
                t((0,
                Y.$J)({
                    dialog: "playerinfo"
                }))
            }
              , aloneMode = ()=>{
                R.ZP.emitEventNow(R.qM.HIDE_OTHERS),
                t((0,
                Y.Mr)())
            }
            ;
            return (0,
            s.jsxs)("div", {
                children: [(0,
                s.jsx)("button", {
                    onClick: e=>{
                        e.preventDefault(),
                        openAvatarPicker()
                    }
                    ,
                    type: "button",
                    disabled: "avatar" === e,
                    className: j().pushbutton,
                    children: i("onboarding.createAvatar", "Change Avatar")
                }), (0,
                s.jsx)("button", {
                    onClick: e=>{
                        e.preventDefault(),
                        openNftPicker()
                    }
                    ,
                    type: "button",
                    disabled: "nftpicker" === e,
                    className: j().pushbutton,
                    children: i("onboarding.nftavatar", "Choose NFT Avatar")
                }), (0,
                s.jsx)("button", {
                    onClick: e=>{
                        e.preventDefault(),
                        openUsername()
                    }
                    ,
                    type: "button",
                    disabled: "username" === e,
                    className: j().pushbutton,
                    children: i("onboarding.setUsername", "Change Username")
                }), (0,
                s.jsx)("button", {
                    onClick: e=>{
                        e.preventDefault(),
                        R.ZP.emitEventNow(R.fb.LINK_OPEN, {
                            link: "/dashboard/vip",
                            msgKey: ["link.vipdashboard", "Open Pixels VIP Dashboard?"]
                        })
                    }
                    ,
                    type: "button",
                    style: {
                        display: "none"
                    },
                    className: j().pushbutton,
                    children: i("onboarding.vipPage", "VIP Page")
                }), (0,
                s.jsx)("button", {
                    onClick: e=>{
                        e.preventDefault(),
                        openPlayerInfo()
                    }
                    ,
                    type: "button",
                    disabled: "playerinfo" === e,
                    className: j().pushbutton,
                    children: i("onboarding.playerinfo", "Player Statistics")
                }), (0,
                s.jsx)("button", {
                    onClick: e=>{
                        e.preventDefault(),
                        aloneMode()
                    }
                    ,
                    type: "button",
                    className: j().pushbutton,
                    children: i("onboarding.alonemode", "30 Seconds Alone")
                })]
            })
        }
          , PlayerBackButton = ()=>{
            let e = (0,
            m.T)()
              , {t} = (0,
            x.$)(["ui"]);
            return (0,
            s.jsx)("div", {
                children: (0,
                s.jsx)("button", {
                    onClick: t=>{
                        t.preventDefault(),
                        e((0,
                        Y.$J)({
                            dialog: "playerprofilecontextmenu"
                        }))
                    }
                    ,
                    type: "button",
                    className: j().pushbutton,
                    style: {
                        minHeight: 48,
                        padding: 15
                    },
                    children: t("onboarding.backtocosmetics", "Back")
                })
            })
        }
        ;
        var NFTPicker_NFTPickerWrapper = e=>{
            let {nfts: t} = e
              , n = (0,
            m.C)(p.o7)
              , a = (0,
            m.T)()
              , {t: l} = (0,
            x.$)(["ui"])
              , [o,c] = (0,
            r.useState)(void 0)
              , handleSubmit = e=>{
                if (!e.avatarId)
                    return;
                let t = C.Z.getGameAvatar(e.avatarId);
                t && (i.e(757).then(i.bind(i, 45757)).then(i=>i.convertToDisplayData(e, t)).then(e=>{
                    R.ZP.sendEventDelayed(R.Yi.NFT_SELECTED, {
                        avatar: e
                    })
                }
                ).catch(e=>{
                    console.log(e)
                }
                ),
                close())
            }
              , close = ()=>{
                a((0,
                Y.Mr)())
            }
            ;
            return n ? (0,
            s.jsxs)("div", {
                className: j().modalBackdrop,
                children: [(0,
                s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                    onKeyDown: e=>{
                        e.stopPropagation(),
                        "Escape" === e.key && close()
                    }
                }), (0,
                s.jsx)("div", {
                    className: u()(j().uikit, j().pixelbox, j().navy, j().center, j().profilewindow),
                    children: (0,
                    s.jsxs)("div", {
                        className: j().inner,
                        children: [(0,
                        s.jsx)("h1", {
                            children: l("ui.SelectNFT", "Select Your NFT")
                        }), (0,
                        s.jsx)("button", {
                            className: j().closeBtn,
                            type: "button",
                            onClick: close,
                            children: "\xa0"
                        }), (0,
                        s.jsx)("div", {
                            className: u()(j().fillflex, j().scrollArea),
                            children: (0,
                            s.jsx)(NFTPicker_NFTPicker, {
                                nfts: t,
                                selectedNft: o,
                                setSelectedNft: c
                            })
                        }), (0,
                        s.jsxs)("div", {
                            className: j().flexsingleline,
                            children: [(0,
                            s.jsx)("button", {
                                onClick: e=>{
                                    e.preventDefault(),
                                    o && handleSubmit(o)
                                }
                                ,
                                disabled: !o,
                                type: "button",
                                className: u()(j().pushbutton, j().yellow),
                                style: {
                                    minHeight: 48,
                                    padding: 15
                                },
                                children: l("onboarding.selectavatar", "Select Avatar")
                            }), (0,
                            s.jsx)("div", {
                                className: j().fillflex,
                                children: (0,
                                s.jsx)(PlayerBackButton, {})
                            })]
                        })]
                    })
                })]
            }) : (0,
            s.jsx)(s.Fragment, {})
        }
          , ef = i(83035)
          , ey = i(74674)
          , ej = i(69997)
          , eb = i.n(ej)
          , ek = i(71343)
          , eN = i(42379);
        function useOnTransitionEnd(e, t) {
            r.useEffect(()=>{
                let i = e.current;
                if (!i)
                    return;
                let n = "transitionend";
                return i.addEventListener(n, t),
                i.addEventListener("transitioncancel", t),
                ()=>{
                    i.removeEventListener(n, t),
                    i.removeEventListener("transitioncancel", t)
                }
            }
            , [e, t])
        }
        let PetItem = e=>{
            var t, i, n, a, l, o, c, d, v, h, g, _, f, y, j, b, k;
            let {pet: N, enabled: C, current: w, selecting: S, onSelected: I} = e
              , {t: T} = (0,
            x.$)("ui")
              , P = (0,
            m.C)(p.CO)
              , [M,D] = r.useState(!0)
              , [L,B] = r.useState(0)
              , A = r.useRef(null)
              , F = r.useCallback(e=>{
                B(e=>1 === e ? 2 : 0),
                1 === L && "transitionend" === e.type && D(e=>!e)
            }
            , [L]);
            useOnTransitionEnd(A, F);
            let R = r.useRef(null);
            return useOnTransitionEnd(R, I),
            (0,
            r.useEffect)(()=>{
                !M && S && I()
            }
            , [M, S, I]),
            (0,
            r.useLayoutEffect)(()=>{
                w || M || 0 !== L || B(1)
            }
            , [w, M, L]),
            (0,
            s.jsx)("div", {
                className: eb().pet,
                children: (0,
                s.jsx)("div", {
                    className: u()(eb().box, {
                        [eb().disabled]: !C,
                        [eb().hatching]: "capsule" === P.mode,
                        [eb().space]: (null === (t = N.traits) || void 0 === t ? void 0 : t.Terrain) === "Space",
                        [eb().land]: (null === (i = N.traits) || void 0 === i ? void 0 : i.Terrain) === "Land",
                        [eb().water]: (null === (n = N.traits) || void 0 === n ? void 0 : n.Terrain) === "Water",
                        [eb().back]: w && !M,
                        [eb().transitioning]: 1 === L
                    }),
                    ref: A,
                    onClick: ()=>"hatched" === P.mode && w && !S && B(e=>0 === e ? 1 : e),
                    children: M ? (0,
                    s.jsxs)(s.Fragment, {
                        children: [(0,
                        s.jsxs)("div", {
                            className: eb().character,
                            children: [(0,
                            s.jsx)("div", {
                                className: eb().logo
                            }), "capsule" === N.stage ? (0,
                            s.jsx)("img", {
                                src: "".concat(eN.LB, "/v1/pets/image/").concat(N.avatar.id, "/").concat(N.tokenId),
                                height: 180
                            }) : (0,
                            s.jsx)("div", {
                                className: u()(eb().petpic, {
                                    [eb().walkoff]: w && S
                                }),
                                ref: R,
                                children: (0,
                                s.jsx)(X.z, {
                                    symbol: N.avatar.id,
                                    selectedTraits: N.avatar.pieces,
                                    height: 195,
                                    anim: w ? S ? "walk" : "idle" : "sit"
                                })
                            }), (0,
                            s.jsx)("div", {
                                className: eb().stats,
                                children: "hatched" === P.mode && C && (0,
                                s.jsxs)(s.Fragment, {
                                    children: [(0,
                                    s.jsxs)("div", {
                                        className: eb().stat,
                                        children: [(0,
                                        s.jsx)("img", {
                                            src: (0,
                                            E.Uk)("/assets/ui/pets/pet_trait_icon_strength.png")
                                        }), (0,
                                        s.jsx)("span", {
                                            children: (0,
                                            E.uf)(null !== (g = null === (a = N.traits) || void 0 === a ? void 0 : a.Strength) && void 0 !== g ? g : 0)
                                        })]
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: eb().stat,
                                        children: [(0,
                                        s.jsx)("img", {
                                            src: (0,
                                            E.Uk)("/assets/ui/pets/pet_trait_icon_speed.png")
                                        }), (0,
                                        s.jsx)("span", {
                                            children: (0,
                                            E.uf)(null !== (_ = null === (l = N.traits) || void 0 === l ? void 0 : l.Speed) && void 0 !== _ ? _ : 0)
                                        })]
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: eb().stat,
                                        children: [(0,
                                        s.jsx)("img", {
                                            src: (0,
                                            E.Uk)("/assets/ui/pets/pet_trait_icon_luck.png")
                                        }), (0,
                                        s.jsx)("span", {
                                            children: (0,
                                            E.uf)(null !== (f = null === (o = N.traits) || void 0 === o ? void 0 : o.Luck) && void 0 !== f ? f : 0)
                                        })]
                                    })]
                                })
                            })]
                        }), (0,
                        s.jsx)("div", {
                            className: u()({
                                [eb().name]: !0,
                                [eb().longname]: N.avatar.name.length > 9
                            }),
                            children: N.avatar.name
                        })]
                    }) : (0,
                    s.jsxs)(s.Fragment, {
                        children: [(0,
                        s.jsx)("div", {
                            className: u()({
                                [eb().name]: !0,
                                [eb().longname]: N.avatar.name.length > 9
                            }),
                            children: N.avatar.name
                        }), (0,
                        s.jsxs)("div", {
                            className: eb().stats,
                            children: [(0,
                            s.jsx)("div", {
                                className: eb().stat,
                                children: T("pets.stat.token", {
                                    defaultValue: "Token Id: #{{value}}",
                                    value: N.tokenId
                                })
                            }), "capsule" !== N.stage ? (0,
                            s.jsxs)(s.Fragment, {
                                children: [(0,
                                s.jsx)("div", {
                                    className: eb().stat,
                                    children: T("pets.stat.birthday", {
                                        defaultValue: "Birthday: {{value}}",
                                        value: new Date(null !== (y = N.birthday) && void 0 !== y ? y : 0).toLocaleDateString()
                                    })
                                }), (0,
                                s.jsx)("div", {
                                    className: eb().stat,
                                    children: T("pets.stat.speed", {
                                        defaultValue: "Speed: {{value}}",
                                        value: (0,
                                        E.uf)(null !== (j = null === (c = N.traits) || void 0 === c ? void 0 : c.Speed) && void 0 !== j ? j : 0)
                                    })
                                }), (0,
                                s.jsx)("div", {
                                    className: eb().stat,
                                    children: T("pets.stat.strength", {
                                        defaultValue: "Strength: {{value}}",
                                        value: (0,
                                        E.uf)(null !== (b = null === (d = N.traits) || void 0 === d ? void 0 : d.Strength) && void 0 !== b ? b : 0)
                                    })
                                }), (0,
                                s.jsx)("div", {
                                    className: eb().stat,
                                    children: T("pets.stat.luck", {
                                        defaultValue: "Luck: {{value}}",
                                        value: (0,
                                        E.uf)(null !== (k = null === (v = N.traits) || void 0 === v ? void 0 : v.Luck) && void 0 !== k ? k : 0)
                                    })
                                }), (0,
                                s.jsx)("div", {
                                    className: eb().stat,
                                    children: T("pets.stat.terrain", {
                                        defaultValue: "Terrain: {{value}}",
                                        value: null === (h = N.traits) || void 0 === h ? void 0 : h.Terrain
                                    })
                                }), (0,
                                s.jsx)("div", {
                                    className: eb().stat,
                                    children: T("pets.stat.happiness", {
                                        defaultValue: "Happiness: {{value}}%",
                                        value: (0,
                                        E.uf)(N.happiness)
                                    })
                                })]
                            }) : N.hatch ? (0,
                            s.jsx)(s.Fragment, {
                                children: (0,
                                s.jsx)("div", {
                                    className: eb().stat,
                                    children: T("pets.hatch.map", {
                                        defaultValue: "Hatching: {{value}}",
                                        value: N.hatch.mapId
                                    })
                                })
                            }) : (0,
                            s.jsx)("div", {
                                className: eb().stat,
                                children: T("pets.hatch.msg", {
                                    defaultValue: "Hatch in Growth Lab"
                                })
                            })]
                        }), (0,
                        s.jsx)("div", {
                            children: (0,
                            s.jsx)("img", {
                                src: (0,
                                E.Uk)("/environments/icons/land.png")
                            })
                        })]
                    })
                })
            })
        }
          , PetButton = e=>{
            let t, i, {pet: n, selected: a, disabled: l, hatching: r, needhatch: o, onSelect: c} = e, {t: d} = (0,
            x.$)("ui"), u = (0,
            m.C)(p.CO), v = (0,
            m.T)(), onHatch = ()=>{
                let e = {
                    entity: "",
                    mid: u.entity,
                    impact: "capsule",
                    inputs: [n.mid]
                };
                R.ZP.sendEventDelayed(ek.m.clickEntity, e),
                v((0,
                Y.iJ)())
            }
            , onRest = ()=>{
                R.ZP.sendEventDelayed(R.Yi.PET_SELECTED, {}),
                v((0,
                Y.iJ)())
            }
            ;
            return r ? (t = d("petpicker.hatching", "Hatching..."),
            i = d("button.cannothatch", "This pet is already being hatched")) : "capsule" === u.mode ? t = d("button.hatchpet", "Hatch Pet") : a ? t = d("button.restpet", "Rest Pet") : o ? (t = d("petpicker.needhatch", "Use Growth Lab"),
            i = d("button.cannotselectpet", "Must be hatched in Growth Lab")) : t = d("button.selectpet", "Select Pet"),
            (0,
            s.jsx)(A, {
                title: i,
                children: (0,
                s.jsx)("span", {
                    children: (0,
                    s.jsx)("button", {
                        type: "button",
                        className: eb().petbutton,
                        onClick: e=>{
                            e.preventDefault(),
                            "capsule" === u.mode ? onHatch() : a ? onRest() : c()
                        }
                        ,
                        disabled: l,
                        children: t
                    })
                })
            })
        }
        ;
        var Pets_PetList = e=>{
            var t, i, n;
            let {loading: a, pets: l, selectedPet: o, setSelectedPet: c, mode: d} = e
              , v = (0,
            m.C)(p.lA)
              , h = (0,
            m.T)();
            r.useEffect(()=>{
                if (l && !a && l.length) {
                    if (o)
                        c(o);
                    else {
                        var e;
                        if (null == v ? void 0 : null === (e = v.full.pet) || void 0 === e ? void 0 : e.tokenId) {
                            let e = l.find(e=>e.avatar.id === v.full.pet.avatar.id && e.tokenId === v.full.pet.tokenId);
                            c(null != e ? e : l[0])
                        }
                    }
                }
            }
            , [a, o, c]);
            let g = r.useCallback(e=>(null == e ? void 0 : e.avatar.id) === (null == o ? void 0 : o.avatar.id) && (null == e ? void 0 : e.tokenId) === (null == o ? void 0 : o.tokenId), [o])
              , isEnabled = e=>{
                var t;
                return "capsule" !== d ? ["mature", "juvenille"].includes(null == e ? void 0 : e.stage) : !!(v && e && "capsule" === e.stage && (!(null === (t = e.hatch) || void 0 === t ? void 0 : t.entity) || e.hatch.playerId !== v.core.mid))
            }
              , [x,_] = r.useState(0);
            r.useMemo(()=>{
                if (!l)
                    return 0;
                let e = l.findIndex(g);
                return e < 0 ? 0 : (_(e),
                e)
            }
            , [l, g]);
            let f = r.useCallback(e=>{
                _(t=>(null == l ? void 0 : l.length) ? Math.min(Math.max(0, t + e), l.length - 1) : 0)
            }
            , [null == l ? void 0 : l.length])
              , [y,b] = r.useState(!1)
              , onPetSelected = ()=>{
                b(!1),
                h((0,
                Y.iJ)())
            }
            ;
            r.useEffect(()=>{
                let e;
                if (y)
                    return;
                let t = 0
                  , i = "wheel"
                  , listener = i=>{
                    !e && Math.abs(t += i.deltaY) > 100 && (f(t > 0 ? 1 : -1),
                    t = 0,
                    e = window.setTimeout(()=>{
                        e = void 0
                    }
                    , 200))
                }
                ;
                return window.addEventListener(i, listener),
                ()=>{
                    window.removeEventListener(i, listener),
                    window.clearTimeout(e)
                }
            }
            , [l, f, y]);
            let[k,N] = r.useState(1)
              , [C,w] = r.useState(null)
              , S = r.useCallback(e=>{
                w(e)
            }
            , []);
            r.useLayoutEffect(()=>{
                let e = "resize"
                  , listener = ()=>{
                    if (!C)
                        return;
                    let {clientWidth: e, clientHeight: t} = C;
                    N(Math.min(e / 620, t / 520, 1))
                }
                ;
                return window.addEventListener(e, listener),
                listener(),
                ()=>window.removeEventListener(e, listener)
            }
            , [C]);
            let I = Math.max(x - 5, 0);
            function offsetCalc(e) {
                let t = 32
                  , i = 0;
                for (; e > 0; )
                    i += t,
                    t /= 2,
                    e--;
                return i
            }
            return a ? (0,
            s.jsx)("div", {
                className: u()(j().fillflex, eb().loading),
                children: (0,
                s.jsx)(ev.Z, {})
            }) : (null == l ? void 0 : l.length) ? (0,
            s.jsx)("div", {
                className: u()(j().fillflex, eb().petwrap),
                ref: S,
                children: (0,
                s.jsxs)("div", {
                    className: eb().cardsAndButton,
                    style: {
                        position: "relative",
                        transformOrigin: "50% 0 0",
                        transform: "scale3d(".concat(k, ", ").concat(k, ", 1)"),
                        width: "100%",
                        height: 520
                    },
                    children: [(0,
                    s.jsx)("div", {
                        className: eb().petlist,
                        children: l.slice(I, Math.min(x + 6, l.length)).map((e,t)=>{
                            let i = "";
                            if ((t += I) < x) {
                                let e = -220 - offsetCalc(x - t);
                                i = "translateX(".concat(e, "px) rotate3d(0, 1, 0, 70deg) scale(90%)")
                            } else if (t > x) {
                                let e = 220 + offsetCalc(t - x);
                                i = "translateX(".concat(e, "px) rotate3d(0, 1, 0, -70deg) scale(90%)")
                            } else
                                i = "rotateY(0) translateX(0) scale(100%)";
                            if (null == e ? void 0 : e.avatar)
                                return (0,
                                s.jsx)("div", {
                                    className: u()(eb().petposition, "clickable"),
                                    style: {
                                        zIndex: t <= x ? t + 10 : x + 10 - (t - x),
                                        transform: i,
                                        transformOrigin: "center center"
                                    },
                                    onClick: ()=>{
                                        y || f(t - x)
                                    }
                                    ,
                                    children: (0,
                                    s.jsx)(PetItem, {
                                        pet: e,
                                        enabled: isEnabled(e),
                                        current: t === x,
                                        selecting: y,
                                        onSelected: onPetSelected
                                    })
                                }, "".concat(e.avatar.id, "-").concat(e.tokenId))
                        }
                        )
                    }), l && l.length > 0 && (0,
                    s.jsxs)("div", {
                        className: eb().buttons,
                        children: [(0,
                        s.jsx)("button", {
                            className: eb().arrow,
                            onClick: ()=>f(-1),
                            disabled: y || x <= 0,
                            children: "<"
                        }), (0,
                        s.jsx)(PetButton, {
                            pet: l[x],
                            hatching: !!((null == (t = l[x]) ? void 0 : t.stage) === "capsule" && !(!(null === (i = t.hatch) || void 0 === i ? void 0 : i.entity) || t.hatch.playerId !== (null == v ? void 0 : v.core.mid))),
                            needhatch: (n = l[x],
                            "hatched" === d && (null == n ? void 0 : n.stage) === "capsule"),
                            selected: g(l[x]),
                            disabled: y || !isEnabled(l[x]),
                            onSelect: ()=>{
                                if (!l || !l[x])
                                    return;
                                let e = {
                                    tokenId: l[x].tokenId,
                                    avatarId: l[x].avatar.id
                                };
                                R.ZP.sendEventDelayed(R.Yi.PET_SELECTED, e),
                                b(!0)
                            }
                        }), (0,
                        s.jsx)("button", {
                            className: eb().arrow,
                            onClick: ()=>f(1),
                            disabled: y || x >= l.length - 1,
                            children: ">"
                        })]
                    })]
                })
            }) : (0,
            s.jsx)("h2", {
                className: j().center,
                children: "BUY SOME PETS!"
            })
        }
        ;
        let loadNFTPets = async(e,t)=>{
            var i;
            let n = null === (i = e.filteredData) || void 0 === i ? void 0 : i.pets.filter(e=>{
                let i = t.find(t=>t.tokenId.toString() === e.tokenId && e.avatarId === t.avatar.id);
                return !i
            }
            );
            if (n && n.length > 0) {
                let e = await ey.Z.claimPets(n.map(e=>({
                    tokenId: e.tokenId,
                    avatarId: e.avatarId
                })));
                t.push.apply(t, e)
            }
        }
        ;
        var PetPicker = e=>{
            var t;
            let {nfts: i} = e
              , n = (0,
            m.C)(p.CO)
              , a = (0,
            m.C)(p.lA)
              , l = (0,
            m.T)()
              , {t: o} = (0,
            x.$)(["ui"])
              , [c,d] = (0,
            r.useState)(void 0)
              , [v,h] = (0,
            r.useState)(void 0)
              , [g,_] = (0,
            r.useState)(!1)
              , [f,y] = (0,
            r.useState)(0)
              , k = null == a ? void 0 : a.full.pet
              , close = ()=>{
                l((0,
                Y.iJ)())
            }
              , N = null !== (t = null == a ? void 0 : a.full.cryptoWallets.map(e=>e.address).join(",")) && void 0 !== t ? t : "";
            return ((0,
            r.useEffect)(()=>{
                if (n.isVisible) {
                    var e;
                    let t = !!(n.refresh && n.refresh > Date.now() && (!i.canReloadAt || i.canReloadAt - Date.now() < 1074e4));
                    _(t);
                    let l = Math.min(36e5, Date.now() - (null !== (e = n.refresh) && void 0 !== e ? e : 0));
                    if ((0,
                    b.HX)("player-pets-".concat(N), async()=>{
                        let e = await ey.Z.fetchPlayerPets(N);
                        return await loadNFTPets(i, e),
                        e
                    }
                    , l).then(e=>{
                        let t = "capsule" === n.mode ? e.filter(e=>{
                            var t;
                            return "capsule" === e.stage && (!e.hatch || (null === (t = e.hatch) || void 0 === t ? void 0 : t.playerId) !== (null == a ? void 0 : a.core.mid))
                        }
                        ) : e;
                        if (h(t),
                        k && "hatched" === n.mode) {
                            let t = e.find(e=>{
                                var t;
                                return k.avatar.id === (null === (t = e.avatar) || void 0 === t ? void 0 : t.id) && k.tokenId === e.tokenId
                            }
                            );
                            d(t)
                        } else
                            d(void 0)
                    }
                    ).catch(e=>{
                        console.log("error getting pets", e),
                        h([])
                    }
                    ),
                    n.refresh && n.refresh > Date.now() && !t && !i.canReload) {
                        y(Date.now() + 3e4);
                        let e = setTimeout(()=>_(!0), 3e4);
                        return ()=>clearTimeout(e)
                    }
                    y(0)
                }
            }
            , [i, N, n.isVisible, n.mode, n.refresh]),
            n.isVisible) ? (0,
            s.jsxs)("div", {
                className: j().modalBackdrop,
                children: [(0,
                s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                    onKeyDown: e=>{
                        e.stopPropagation(),
                        "Escape" === e.key && close()
                    }
                }), (0,
                s.jsx)("div", {
                    className: u()(j().uikit, j().pixelbox, j().navy, j().center, j().profilewindow),
                    children: (0,
                    s.jsxs)("div", {
                        className: j().inner,
                        children: [(0,
                        s.jsx)("h1", {
                            children: "capsule" === n.mode ? o("ui.SelectCapsule", "Select Pet to Hatch") : o("ui.SelectPet", "Select Your Pet")
                        }), (0,
                        s.jsx)("button", {
                            className: j().closeBtn,
                            type: "button",
                            onClick: close,
                            children: "\xa0"
                        }), (0,
                        s.jsx)(Pets_PetList, {
                            loading: !v,
                            pets: v,
                            mode: n.mode,
                            selectedPet: c,
                            setSelectedPet: d
                        }), (0,
                        s.jsx)("div", {
                            className: j().flexsingleline,
                            children: (0,
                            s.jsx)(commons_ReloadNfts, {
                                nfts: i,
                                override: g,
                                overrideReloadAt: f
                            })
                        })]
                    })
                })]
            }) : (0,
            s.jsx)(s.Fragment, {})
        }
          , eC = i(69959)
          , ew = i(51653)
          , eS = i.n(ew);
        let getEnvironmentIcon = e=>{
            if ("string" == typeof e || !e.environ)
                return;
            let t = e.environ.toLowerCase();
            return (0,
            E.Uk)("/environments/icons/".concat(t, ".png"))
        }
          , Container = e=>{
            let {title: t, onClose: i, children: n} = e;
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)("div", {
                    className: j().modalBackdrop
                }), (0,
                s.jsxs)("div", {
                    className: u()(eS().container, j().uikit),
                    children: [(0,
                    s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                        onKeyDown: e=>{
                            e.stopPropagation(),
                            e.preventDefault(),
                            "Escape" === e.key && i()
                        }
                    }), (0,
                    s.jsx)("button", {
                        type: "button",
                        className: j().closeBtn,
                        onClick: i
                    }), (0,
                    s.jsx)("div", {
                        className: eS().header,
                        children: (0,
                        s.jsx)("div", {
                            className: eS().title,
                            children: t
                        })
                    }), n]
                })]
            })
        }
          , Tabs = e=>{
            let {children: t} = e;
            return (0,
            s.jsx)("div", {
                className: eS().tabs,
                children: t
            })
        }
          , Tab = e=>{
            let {onClick: t, children: i} = e;
            return (0,
            s.jsx)("button", {
                className: eS().tab,
                onClick: t,
                children: i
            })
        }
          , Content = e=>{
            let {children: t} = e;
            return (0,
            s.jsx)("div", {
                className: u()(eS().content, j().scrollArea),
                children: t
            })
        }
          , MapSquare = e=>{
            let {mapId: t, mapName: i, icon: n, onTeleport: a, onRemove: l} = e
              , {t: r} = (0,
            x.$)("ui")
              , o = (0,
            ei.GU)();
            return (0,
            s.jsxs)("div", {
                className: eS().mapSquare,
                children: [(0,
                s.jsx)("div", {
                    children: i || t.replace(o.mapPrefix, "#") || (0,
                    E.r5)(t, !0)
                }), (0,
                s.jsx)("div", {
                    children: (0,
                    s.jsx)("img", {
                        src: (0,
                        E.Uk)(n || o.landIcon || "/environments/icons/land.png")
                    })
                }), (0,
                s.jsx)("button", {
                    type: "button",
                    onClick: a,
                    className: eS().buttonTeleport,
                    children: r("landAndTravel.teleport", "Go")
                }), l && (0,
                s.jsx)("button", {
                    type: "button",
                    onClick: l,
                    className: eS().removeBookmarkButton,
                    children: "✖"
                })]
            }, t)
        }
          , eI = (0,
        E.Uk)("/game/assets/landandtravel")
          , BookmarksTab = e=>{
            let {active: t, onActivate: i} = e;
            return (0,
            s.jsx)(Tab, {
                onClick: ()=>!t && i(),
                children: (0,
                s.jsx)("img", {
                    src: t ? "".concat(eI, "/bookmark_active.png") : "".concat(eI, "/bookmark_inactive.png")
                })
            })
        }
          , BookmarksContent = ()=>{
            let {t: e} = (0,
            x.$)("ui")
              , t = (0,
            m.T)()
              , i = (0,
            m.C)(p.PD)
              , onTeleport = e=>{
                R.ZP.emitEventNow(R.fb.ROOM_WARP, {
                    mapId: e
                }),
                t((0,
                eC._V)())
            }
              , handleRemoveBookmark = e=>{
                R.ZP.sendEventDelayed(R.fb.BOOKMARK_MAP, {
                    mapId: e,
                    bookmark: !1
                })
            }
            ;
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)("div", {
                    className: eS().subtitle,
                    children: e("landAndTravel.bookmarks.title", "My Bookmarks")
                }), (0,
                s.jsx)("div", {
                    className: eS().mapsSquare,
                    children: i.map(e=>{
                        let t;
                         if (window.map) {
                            t = window.map;
                         } else {
                             t = "string" == typeof e ? e : e.mapId;
                         }
                        return (0,
                        s.jsx)(MapSquare, {
                            mapId: t,
                            icon: getEnvironmentIcon(e),
                            onTeleport: ()=>onTeleport(t),
                            onRemove: ()=>handleRemoveBookmark(t)
                        }, t)
                    }
                    )
                })]
            })
        }
          , eT = (0,
        E.Uk)("/game/assets/landandtravel")
          , MyLandTab = e=>{
            let {active: t, onActivate: i} = e;
            return (0,
            s.jsx)(Tab, {
                onClick: ()=>!t && i(),
                children: (0,
                s.jsx)("img", {
                    src: t ? "".concat(eT, "/house_active.png") : "".concat(eT, "/house_inactive.png")
                })
            })
        }
          , MyLandContent = e=>{
            let {nfts: t} = e
              , i = (0,
            m.T)()
              , {t: n} = (0,
            x.$)("ui")
              , a = (0,
            ei.GU)()
              , l = (0,
            m.C)(p.VQ)
              , o = r.useMemo(()=>{
                var e, i;
                return t && t.filteredData && null !== (i = null === (e = t.filteredData.tenants[a.name]) || void 0 === e ? void 0 : e.map(e=>{
                    var t, i;
                    return {
                        image: e.imageUrl,
                        name: "#".concat(e.tokenId),
                        mapId: "".concat(a.mapPrefix).concat(e.tokenId),
                        environ: null === (i = e.traits) || void 0 === i ? void 0 : null === (t = i.find(e=>"environment" === e.traitKey.toLowerCase())) || void 0 === t ? void 0 : t.traitValue
                    }
                }
                )) && void 0 !== i ? i : []
            }
            , [t, a])
              , c = r.useMemo(()=>{
                var e, i;
                return t && t.filteredData && null !== (i = null === (e = t.filteredData.realms) || void 0 === e ? void 0 : e.map(e=>({
                    image: e.imageUrl,
                    name: "#Realm".concat(e.tokenId),
                    mapId: "realm".concat(e.tokenId)
                }))) && void 0 !== i ? i : []
            }
            , [t, a]);
            (0,
            r.useEffect)(()=>{
                var e;
                t && !t.loading && t.filteredData && (null === (e = a.contracts) || void 0 === e ? void 0 : e.length) && t.canReload && t.reload(!0),
                l && (t.reload(!0),
                i((0,
                Y.dd)()))
            }
            , [t, a, l]);
            let d = O.l.getInstance().currentPlayer
              , u = (0,
            b.Fc)(d.full.farms)
              , onClick = e=>{
                R.ZP.emitEventNow(R.fb.ROOM_WARP, {
                    mapId: e
                }),
                i((0,
                eC._V)())
            }
              , v = "pixels" === a.id
              , h = (0,
            E.Uk)(a.landIcon || "/environments/icons/land.png");
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)("div", {
                    className: eS().subtitle,
                    children: n("landAndTravel.myLand.title", "My Land")
                }), !o.length && (!v || !u) && (0,
                s.jsx)("div", {
                    className: eS().description,
                    children: n("plots.noPlots", "YOUR land will show up here")
                }), v && !u && (0,
                s.jsx)("div", {
                    className: eS().description,
                    children: n("plots.getSpeck", "Talk to Karen in PLOT building to receive your Speck")
                }), (0,
                s.jsxs)("div", {
                    className: eS().mapsSquare,
                    children: [v && u && (0,
                    s.jsx)(MapSquare, {
                        icon: h,
                        mapId: u,
                        mapName: n("plot.RentedFarm", "Rented Land"),
                        onTeleport: ()=>onClick(u)
                    }, u), o.sort((e,t)=>parseInt((0,
                    E.r5)(e.mapId)) - parseInt((0,
                    E.r5)(t.mapId))).map(e=>{
                        var t;
                        return (0,
                        s.jsx)(MapSquare, {
                            mapId: e.mapId,
                            mapName: e.name,
                            icon: null !== (t = getEnvironmentIcon(e)) && void 0 !== t ? t : h,
                            onTeleport: ()=>onClick(e.mapId)
                        }, e.mapId)
                    }
                    ), (null == t ? void 0 : t.loading) && (0,
                    s.jsx)("div", {
                        className: eS().mapSquare,
                        children: (0,
                        s.jsx)(q.s5, {})
                    })]
                }), !!c.length && (0,
                s.jsxs)(s.Fragment, {
                    children: [(0,
                    s.jsx)("div", {
                        className: eS().subtitle,
                        children: n("landAndTravel.myRealm.title", "My Realm")
                    }), !c.length && (0,
                    s.jsx)("div", {
                        className: eS().description,
                        children: n("landAndTravel.myRealm.norealm", "YOUR realm will show up here")
                    }), (0,
                    s.jsx)("div", {
                        className: eS().mapsSquare,
                        children: c.map(e=>{
                            var t;
                            return (0,
                            s.jsx)(MapSquare, {
                                mapId: e.mapId,
                                mapName: e.name,
                                icon: null !== (t = getEnvironmentIcon(e)) && void 0 !== t ? t : h,
                                onTeleport: ()=>onClick(e.mapId)
                            }, e.mapId)
                        }
                        )
                    })]
                })]
            })
        }
          , OptionsTab = e=>{
            let {active: t, onActivate: i} = e
              , n = (0,
            E.Uk)("/game/assets/landandtravel");
            return (0,
            s.jsx)(Tab, {
                onClick: ()=>!t && i(),
                children: (0,
                s.jsx)("img", {
                    src: t ? "".concat(n, "/land_active.png") : "".concat(n, "/land_inactive.png")
                })
            })
        }
          , RentLink = ()=>{
            let {t: e} = (0,
            x.$)("ui");
            return (0,
            s.jsxs)("div", {
                className: eS().option,
                children: [(0,
                s.jsx)("div", {
                    className: eS().optionTitle,
                    children: e("landAndTravel.options.rentTitle", "Rent NFT Farmland")
                }), (0,
                s.jsx)("div", {
                    className: eS().description,
                    children: e("landAndTravel.options.rentDescription", "Renting a Pixels NFT Farmland is the perfect way to dip your toes into the exciting world of virtual land ownership.")
                }), (0,
                s.jsx)("div", {
                    className: eS().optionButtons,
                    children: (0,
                    s.jsx)("button", {
                        type: "button",
                        onClick: ()=>R.ZP.emitEventNow(R.fb.LINK_OPEN, {
                            link: "https://pixels.xyz/rent",
                            msgKey: "landAndTravel.options.confirm-link"
                        }),
                        children: e("landAndTravel.options.rentButton", "Browse Rentals")
                    })
                })]
            })
        }
          , PurchaseLink = ()=>{
            let {t: e} = (0,
            x.$)("ui")
              , t = (0,
            ei.GU)();
            return t.purchaseLink ? (0,
            s.jsxs)("div", {
                className: eS().option,
                children: [(0,
                s.jsx)("div", {
                    className: eS().optionTitle,
                    children: e("landAndTravel.".concat(t.name, ".options.purchaseTitle"), "Own NFT Farmland")
                }), (0,
                s.jsx)("div", {
                    className: eS().description,
                    children: e("landAndTravel.".concat(t.name, ".options.purchaseDescription"), "Own one of the 5000 Pixels NFT Farmlands. Become a real estate mogul, build an empire, while enjoying many other benefits.")
                }), (0,
                s.jsx)("div", {
                    className: eS().optionButtons,
                    children: (0,
                    s.jsx)("button", {
                        type: "button",
                        onClick: ()=>{
                            R.ZP.emitEventNow(R.fb.LINK_OPEN, {
                                link: t.purchaseLink,
                                msgKey: "landAndTravel.".concat(t.name, ".options.purchase.confirm-link")
                            })
                        }
                        ,
                        children: e("landAndTravel.".concat(t.name, ".options.purchaseButton"), "Browse Marketplace")
                    })
                })]
            }) : null
        }
          , OptionsContent = ()=>{
            let {t: e} = (0,
            x.$)("ui");
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)("div", {
                    className: eS().subtitle,
                    children: e("landAndTravel.options.title", "Land Options")
                }), (0,
                s.jsxs)("div", {
                    className: eS().options,
                    children: ["pixels" === (0,
                    ei.F5)() && (0,
                    s.jsx)(RentLink, {}), (0,
                    s.jsx)(PurchaseLink, {})]
                })]
            })
        }
        ;
        var eP = new class {
            env() {
                try {
                    return "prod"
                } catch (e) {}
                return "preview"
            }
            async fetchPlayerFarms(e) {
                try {
                    let {freeFarms: t, nftFarms: i} = await this.api.fetchPlayerFarms(e);
                    return [...i, ...t]
                } catch (e) {
                    return console.log(e),
                    []
                }
            }
            async searchFarms(e) {
                try {
                    return await this.api.searchFarms(e)
                } catch (e) {
                    return console.log(e),
                    []
                }
            }
            async getTopFarms() {
                try {
                    return await this.api.getTopFarms()
                } catch (e) {
                    return console.log(e),
                    []
                }
            }
            async getTopNFTFarms() {
                try {
                    return await this.api.getTopNFTFarms()
                } catch (e) {
                    return console.log(e),
                    []
                }
            }
            async getTopFreeFarms() {
                try {
                    return await this.api.getTopFreeFarms()
                } catch (e) {
                    return console.log(e),
                    []
                }
            }
            async getFarmDetails(e) {
                try {
                    return await this.api.farmDetails(e)
                } catch (e) {
                    return console.log(e),
                    null
                }
            }
            constructor(e) {
                this.api = e
            }
        }
        (U.Z);
        function FarmsRequest_useRequest(e) {
            let[t,i] = r.useState();
            return r.useEffect(()=>{
                i("fetching");
                let t = !1;
                return e().then(e=>{
                    t || i({
                        data: e
                    })
                }
                , e=>{
                    t || i({
                        error: e
                    })
                }
                ),
                ()=>{
                    t = !0
                }
            }
            , [e]),
            t
        }
        var eM = i(69140);
        function eatKey(e) {
            e.stopPropagation()
        }
        let WarpOption = ()=>{
            let e = (0,
            ei.GU)()
              , t = e.maxMaps || 5e3
              , {t: i} = (0,
            x.$)("ui")
              , [n,a] = r.useState(Math.floor(Math.random() * t))
              , l = (0,
            m.C)(eM.j2)
              , o = r.useRef(null)
              , c = (0,
            m.T)()
              , d = O.l.getInstance().getEntityByUniqueId(l.mid_portal)
              , onWarp = ()=>{
                if (n >= 1 && n <= t) {
                    if (d) {
                        let e = {
                            mid: l.mid_portal,
                            impact: "setup",
                            entity: d.entity,
                            inputs: [n]
                        };
                        R.ZP.emitEventNow(ek.m.clickEntity, e),
                        c((0,
                        eM.e4)())
                    } else
                        (null == e ? void 0 : e.mapPrefix) && (R.ZP.emitEventNow(R.fb.ROOM_WARP, {
                            mapId: "".concat(e.mapPrefix).concat(n)
                        }),
                        c((0,
                        eM.e4)()))
                }
            }
            ;
            return r.useEffect(()=>{
                if (o.current) {
                    var e;
                    null === (e = o.current) || void 0 === e || e.select()
                }
            }
            , []),
            (0,
            s.jsxs)("div", {
                className: eS().option,
                children: [(0,
                s.jsx)("div", {
                    className: eS().optionTitle,
                    children: i("landAndTravel.warp.direct.title", "To Farm")
                }), (0,
                s.jsx)("div", {
                    className: eS().description,
                    children: i("infiniportal.manual.tutorial", "Enter a Farm Number between 0 and 5000 this portal will take you to it.")
                }), (0,
                s.jsxs)("div", {
                    className: eS().optionButtons,
                    children: [(0,
                    s.jsx)("input", {
                        tabIndex: 1,
                        ref: o,
                        className: eS().numberInput,
                        type: "number",
                        value: n,
                        onKeyDown: e=>{
                            e.stopPropagation(),
                            "Enter" === e.key && onWarp()
                        }
                        ,
                        onChange: e=>{
                            let i = parseInt(e.target.value);
                            for (i < 0 && (i *= -1); i > t; )
                                i = Math.floor(i / 10);
                            a(i),
                            e.stopPropagation(),
                            e.preventDefault()
                        }
                        ,
                        autoFocus: !0
                    }), (0,
                    s.jsx)("button", {
                        type: "button",
                        onClick: e=>{
                            e.preventDefault(),
                            onWarp()
                        }
                        ,
                        children: i("landAndTravel.teleport", "Go")
                    })]
                })]
            })
        }
          , SearchOption = e=>{
            let {setSearchTerm: t} = e
              , {t: i} = (0,
            x.$)("ui")
              , [n,a] = r.useState("");
            return r.useEffect(()=>{
                let e = setTimeout(()=>t(n), (0,
                b.x9)({
                    seconds: 1
                }));
                return ()=>clearTimeout(e)
            }
            , [n, t]),
            (0,
            s.jsxs)("div", {
                className: eS().option,
                children: [(0,
                s.jsx)("div", {
                    className: eS().optionTitle,
                    children: i("landAndTravel.warp.search.title", "To Player")
                }), (0,
                s.jsx)("div", {
                    className: eS().description,
                    children: i("infiniportal.manual.playerTutorial", "Or, find a player by username or wallet and go to one of their farms.")
                }), (0,
                s.jsx)("div", {
                    className: eS().optionButtons,
                    children: (0,
                    s.jsx)("input", {
                        placeholder: i("infiniportal.manual.searchPlayerPlaceholder", "Username or ETH"),
                        value: n,
                        onKeyDown: eatKey,
                        onChange: e=>a(e.target.value)
                    })
                })]
            })
        }
          , FarmerOption = e=>{
            let {playerId: t, username: i, delay: n} = e
              , a = (0,
            m.T)()
              , [l,o] = r.useState(!1);
            r.useEffect(()=>{
                if (!n)
                    return;
                o(!0);
                let e = setTimeout(()=>o(!1), n);
                return ()=>clearTimeout(e)
            }
            , [n]);
            let c = r.useCallback(()=>l ? Promise.resolve([]) : (0,
            b.HX)("farms-by-player-".concat(t), async()=>await eP.fetchPlayerFarms(t)), [t, l])
              , d = FarmsRequest_useRequest(c);
            return (0,
            s.jsxs)("div", {
                className: u()(eS().option, eS().stretchOption),
                children: [(0,
                s.jsx)("div", {
                    className: eS().optionTitle,
                    children: i
                }), "fetching" === d ? (0,
                s.jsx)("div", {
                    className: eS().description,
                    children: (0,
                    s.jsx)(Loading_Loading, {})
                }) : (0,
                s.jsx)("div", {
                    className: eS().mapsSquare,
                    children: (null == d ? void 0 : d.data) && d.data.map(e=>(0,
                    s.jsx)(MapSquare, {
                        mapId: e.id,
                        mapName: e.name,
                        onTeleport: ()=>{
                            R.ZP.emitEventNow(R.fb.ROOM_WARP, {
                                mapId: e.id
                            }),
                            a((0,
                            eC._V)())
                        }
                    }, e.id))
                })]
            })
        }
          , WarpContent = ()=>{
            var e;
            let {t} = (0,
            x.$)("ui")
              , [i,n] = r.useState("")
              , a = r.useCallback(async()=>{
                if (!i)
                    return Promise.resolve([]);
                let e = await (0,
                b.HX)("username-or-eth-".concat(i), async()=>await eP.searchFarms(i));
                return e
            }
            , [i])
              , l = FarmsRequest_useRequest(a);
            return (0,
            s.jsx)(s.Fragment, {
                children: (0,
                s.jsxs)("div", {
                    className: eS().options,
                    children: [(0,
                    s.jsx)(WarpOption, {}), (0,
                    s.jsx)(SearchOption, {
                        setSearchTerm: n
                    }), !!i && (0,
                    s.jsx)(s.Fragment, {
                        children: "fetching" === l ? (0,
                        s.jsx)("div", {
                            className: u()(eS().option, eS().stretchOption),
                            children: (0,
                            s.jsx)("div", {
                                className: eS().description,
                                children: (0,
                                s.jsx)(Loading_Loading, {})
                            })
                        }) : (null == l ? void 0 : null === (e = l.data) || void 0 === e ? void 0 : e.length) ? l.data.map((e,t)=>(0,
                        s.jsx)(FarmerOption, {
                            delay: (0,
                            b.x9)({
                                ms: 200 * t
                            }),
                            playerId: e._id,
                            username: e.username
                        }, e._id)) : (0,
                        s.jsx)("div", {
                            className: u()(eS().option, eS().stretchOption),
                            children: (0,
                            s.jsx)("div", {
                                className: eS().optionTitle,
                                children: (0,
                                s.jsx)("span", {
                                    children: t("landAndTravel.warp.noPlayers", "No players found")
                                })
                            })
                        })
                    })]
                })
            })
        }
          , TerravillaHeader = ()=>{
            let {t: e} = (0,
            x.$)("ui")
              , t = (0,
            m.T)()
              , i = (0,
            ei.GU)()
              , onTeleport = ()=>{
                R.ZP.emitEventNow(R.fb.ROOM_WARP, {
                    mapId: i.map
                }),
                t((0,
                eC._V)())
            }
            ;
            return (0,
            s.jsx)("div", {
                className: eS().customHeader,
                children: (0,
                s.jsx)("button", {
                    type: "button",
                    onClick: ()=>onTeleport(),
                    children: e("landAndTravel.teleport.defaultMap", {
                        defaultValue: "Go to {{name}}",
                        name: e("landAndTravel.".concat(i.name, ".bookmarks.defaultMap"), (0,
                        b.je)(i.map))
                    })
                })
            })
        }
          , LandAndTravel = e=>{
            let {nfts: t} = e
              , i = function(e) {
                let t = (0,
                m.C)(eC.pM)
                  , i = (0,
                m.C)(eM.j2)
                  , {t: n} = (0,
                x.$)("ui")
                  , a = (0,
                m.T)();
                return r.useMemo(()=>{
                    if (t) {
                        var l, s, r;
                        let t = n("landAndTravel.title", "Land & Travel")
                          , i = (0,
                        ei.GU)()
                          , o = "pixels" === (0,
                        ei.F5)() ? null === (r = O.l.getInstance().currentPlayer.full.farms) || void 0 === r ? void 0 : r.some(e=>/rent/gi.test(e)) : null === (s = e.filteredData) || void 0 === s ? void 0 : null === (l = s.tenants[i.name]) || void 0 === l ? void 0 : l.length;
                        return {
                            title: t,
                            onClose: ()=>{
                                a((0,
                                eC._V)())
                            }
                            ,
                            tabs: {
                                options: !0,
                                myLand: !0,
                                bookmarks: !0
                            },
                            defaultTab: o ? "myLand" : "options",
                            header: "terravilla"
                        }
                    }
                    if (i.isVisible && "pixels" === i.tenant && "infiniportal" === i.mode) {
                        let e = n("infiniportal.title", "Infiniportal");
                        return {
                            title: e,
                            onClose: ()=>{
                                a((0,
                                eM.e4)())
                            }
                            ,
                            defaultTab: "warp"
                        }
                    }
                }
                , [e, t, i, n, a])
            }(t)
              , [n,a] = r.useState();
            if (r.useEffect(()=>{
                i || a(void 0)
            }
            , [i]),
            !i)
                return null;
            let l = i.tabs
              , o = n || i.defaultTab;
            return (0,
            s.jsxs)(Container, {
                title: i.title,
                onClose: i.onClose,
                children: [(0,
                s.jsx)("div", {
                    className: eS().title
                }), "terravilla" === i.header && (0,
                s.jsx)(TerravillaHeader, {}), l && (0,
                s.jsxs)(Tabs, {
                    children: [l.options && (0,
                    s.jsx)(OptionsTab, {
                        active: "options" === o,
                        onActivate: ()=>a("options")
                    }), l.myLand && (0,
                    s.jsx)(MyLandTab, {
                        active: "myLand" === o,
                        onActivate: ()=>a("myLand")
                    }), l.bookmarks && (0,
                    s.jsx)(BookmarksTab, {
                        active: "bookmarks" === o,
                        onActivate: ()=>a("bookmarks")
                    })]
                }), (0,
                s.jsxs)(Content, {
                    children: ["options" === o && (0,
                    s.jsx)(OptionsContent, {
                        nfts: t,
                        updateTab: e=>{
                            a(e)
                        }
                    }), "myLand" === o && (0,
                    s.jsx)(MyLandContent, {
                        nfts: t
                    }), "bookmarks" === o && (0,
                    s.jsx)(BookmarksContent, {}), "warp" === o && (0,
                    s.jsx)(WarpContent, {})]
                })]
            })
        }
        ;
        var UiContainer_NFTComponents = ()=>{
            let e = (0,
            m.C)(p.lA)
              , t = (0,
            m.C)(p.GO)
              , i = (0,
            m.C)(p.K7)
              , n = (0,
            m.C)(p.wk)
              , a = (0,
            m.C)(eC.pM)
              , l = (0,
            ef.n)(e || void 0, n || a)
              , r = (0,
            m.C)(p.ge);
            return t || i ? (0,
            s.jsx)(s.Fragment, {}) : (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)(NFTPicker_NFTPickerWrapper, {
                    nfts: l,
                    vip: r
                }), (0,
                s.jsx)(LandAndTravel, {
                    nfts: l
                }), (0,
                s.jsx)(PetPicker, {
                    nfts: l
                })]
            })
        }
        ;
        let ScaledUI = e=>{
            let {children: t} = e
              , [i,n] = r.useState(ea.Zm)
              , a = (0,
            m.C)(z.pT);
            return r.useEffect(()=>{
                let updateScale = ()=>n((0,
                ea.Zm)());
                return updateScale(),
                window.addEventListener("resize", updateScale),
                ()=>window.removeEventListener("resize", updateScale)
            }
            , []),
            (0,
            s.jsx)("div", {
                style: {
                    pointerEvents: "none",
                    userSelect: "none",
                    background: "none",
                    overflow: "hidden",
                    display: a ? "none" : "block",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                },
                children: (0,
                s.jsx)("div", {
                    style: {
                        background: "none",
                        position: "absolute",
                        left: 0,
                        top: 0,
                        imageRendering: "pixelated",
                        width: "".concat(100 / i, "%"),
                        height: "".concat(100 / i, "%"),
                        transformOrigin: "0 0 0",
                        transform: "scale3d(".concat(i, ", ").concat(i, ", 1)")
                    },
                    children: t
                })
            })
        }
        ;
        var eD = i(69520)
          , eE = i.n(eD);
        let expToNextLevel = e=>Math.round(1e3 * Math.exp((e + 1) / 10) - 1005)
          , requiredExp = (e,t)=>{
            if (0 === e)
                return 0;
            let i = 0;
            for (let n = 0; n < e; n++)
                i += expToNextLevel(n) * (t ? 100 : 1);
            return i
        }
          , SkillSlot = e=>{
            let {name: t, icon: i="", level: n=0, maxPoints: a=100, totalXP: l=0, exp: o=0, isFarm: c=!1} = e
              , [d,m] = r.useState(!1)
              , p = requiredExp((null != n ? n : 0) + 1, c)
              , v = Math.floor(10 * o) / 10
              , h = p - requiredExp(null != n ? n : 0, c);
            return (0,
            s.jsx)(A, {
                title: (0,
                s.jsxs)("span", {
                    className: "pixelFont",
                    children: [t, (0,
                    s.jsx)("br", {}), (0,
                    E.uf)(v, 1), " XP", (0,
                    s.jsx)("br", {}), n >= 0 && (0,
                    s.jsxs)(s.Fragment, {
                        children: ["↑ +", (0,
                        E.uf)(p - Math.floor(10 * l) / 10, 1), " XP"]
                    })]
                }),
                placement: "top",
                children: (0,
                s.jsx)("div", {
                    className: u()(j().uikit, eE().skillSlot),
                    onClick: ()=>m(e=>!e),
                    children: (0,
                    s.jsxs)("div", {
                        className: eE().skillContent,
                        children: [(0,
                        s.jsx)("div", {
                            style: {
                                marginBottom: "4px"
                            },
                            children: d ? (0,
                            s.jsx)("span", {
                                className: eE().skillDivider,
                                children: "XP"
                            }) : (0,
                            s.jsx)("img", {
                                crossOrigin: "anonymous",
                                src: i,
                                style: {
                                    filter: "drop-shadow(3px 3px 2px #000000)"
                                }
                            })
                        }), d ? (0,
                        s.jsxs)(s.Fragment, {
                            children: [(0,
                            s.jsx)("div", {
                                className: u()(eE().skillPoints, eE().numerator),
                                children: (0,
                                E.uf)(v, 1)
                            }), (0,
                            s.jsx)("div", {
                                className: u()(eE().skillPoints, eE().denominator),
                                children: (0,
                                E.uf)(h)
                            })]
                        }) : (0,
                        s.jsxs)("div", {
                            className: eE().skillBar,
                            children: [(0,
                            s.jsx)("div", {
                                className: eE().skillBaseBar,
                                children: (0,
                                s.jsxs)("div", {
                                    className: eE().skillData,
                                    children: [(0,
                                    s.jsx)("span", {
                                        className: eE().skillPoints,
                                        children: "".concat(null != n ? n : 0)
                                    }), (0,
                                    s.jsx)("span", {
                                        className: eE().skillDivider,
                                        children: "/"
                                    }), (0,
                                    s.jsx)("span", {
                                        className: eE().skillPoints,
                                        children: "".concat(a)
                                    })]
                                })
                            }), (0,
                            s.jsx)("div", {
                                className: eE().skillFilledBar,
                                style: {
                                    width: "".concat(100 * o / h, "%")
                                },
                                children: (0,
                                s.jsxs)("div", {
                                    className: eE().skillData,
                                    children: [(0,
                                    s.jsx)("span", {
                                        className: eE().skillPoints,
                                        children: "".concat(null != n ? n : 0)
                                    }), (0,
                                    s.jsx)("span", {
                                        className: eE().skillDivider,
                                        children: "/"
                                    }), (0,
                                    s.jsx)("span", {
                                        className: eE().skillPoints,
                                        children: "".concat(a)
                                    })]
                                })
                            })]
                        })]
                    })
                })
            })
        }
        ;
        var eL = i(79274);
        let eB = {
            farming: !0,
            forestry: !0,
            mining: !0
        }
          , eA = {
            ceramicist: !1,
            cooking: !0,
            woodwork: !0,
            granger: !1,
            textiler: !1,
            redifferentiator: !1,
            winemaking: !1,
            forestry: !0,
            beekeeping: !1,
            aviculture: !1,
            metalworking: !0,
            stoneshaping: !0,
            farming: !0,
            mining: !0,
            slugger: !1,
            business: !0,
            petcare: !0,
            fishing: !1,
            exploration: !0
        }
          , SkillsList = e=>{
            let {getLevelData: t, isFarm: i=!1} = e
              , {t: n} = (0,
            x.$)(["ui"])
              , a = i ? eB : eA
              , l = eL.nA.filter(e=>a[e])
              , r = i ? 0 : (3 - l.length % 3) % 3;
            return (0,
            s.jsxs)("div", {
                className: u()(eE().skillsPanel, j().scrollArea),
                children: [l.map(e=>({
                    name: n(e, (0,
                    b.je)(e)),
                    icon: "".concat(F.fd).concat(e, ".png"),
                    level: t(e)
                })).map(e=>{
                    let {name: t, icon: n, level: a} = e;
                    return (0,
                    s.jsx)(SkillSlot, {
                        name: t,
                        icon: (0,
                        E.b7)(n),
                        level: null == a ? void 0 : a.level,
                        totalXP: null == a ? void 0 : a.totalExp,
                        exp: null == a ? void 0 : a.exp,
                        isFarm: i
                    }, t)
                }
                ), Array.from(Array(r)).map((e,t)=>(0,
                s.jsx)(SkillSlot, {
                    name: n("upcoming_tooltip", "Upcoming..."),
                    icon: (0,
                    E.b7)("".concat(F.fd, "upcoming.png")),
                    isFarm: i
                }, "empty".concat(t)))]
            })
        }
          , SkillsPanel = ()=>{
            let e = (0,
            m.C)(p.qb)
              , t = (0,
            m.C)(p.cV)
              , i = (0,
            g.I0)()
              , {t: n} = (0,
            x.$)("ui");
            return t ? (0,
            s.jsxs)("div", {
                className: u()(eE().skillPopup, j().uikit, j().frame, j().orange, j().absolute),
                children: [(0,
                s.jsx)("button", {
                    type: "button",
                    className: j().closeBtn,
                    onClick: ()=>i((0,
                    Y.po)())
                }), (0,
                s.jsxs)("div", {
                    className: eE().skillContainer,
                    children: [(0,
                    s.jsx)("h1", {
                        children: n("skilllevels", "Skills")
                    }), (0,
                    s.jsx)(SkillsList, {
                        getLevelData: e
                    })]
                })]
            }) : (0,
            s.jsx)(s.Fragment, {})
        }
        ;
        var eF = i(59739)
          , eR = i(89608)
          , eO = i(40630)
          , eV = i(94229)
          , eq = i(71332)
          , eW = i(69008)
          , eZ = i(3206)
          , eU = i.n(eZ)
          , eG = i(75341)
          , FarmDetails_ClaimNftFarm = ()=>{
            var e, t;
            let {t: i} = (0,
            x.$)("ui")
              , n = (0,
            m.C)(p.Ai);
            if (!(null === (e = n.mapId) || void 0 === e ? void 0 : e.includes("pixelsNFTFarm-")))
                return null;
            let a = null == n ? void 0 : null === (t = n.ownership) || void 0 === t ? void 0 : t.lastClaim
              , l = !a || (Date.now() - a) / 36e5 > 1;
            return (0,
            s.jsx)("div", {
                style: {
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    margin: 2
                },
                children: (0,
                s.jsx)(S.Z, {
                    title: "Refetch owner address/staked/renft data from the chain(Will be refetch only if some hours have passed form the last refetch)",
                    children: (0,
                    s.jsx)("span", {
                        children: (0,
                        s.jsx)("button", {
                            type: "button",
                            className: u()([j().uikit, j().button]),
                            disabled: !l,
                            onClick: ()=>{
                                R.ZP.emitEventNow(R.qM.CLAIM_NFTMAP, {})
                            }
                            ,
                            children: (0,
                            s.jsxs)(s.Fragment, {
                                children: [(0,
                                s.jsx)(eG.Z, {}), (0,
                                s.jsx)("span", {
                                    className: eU().fullbutton,
                                    children: i("button.claimnftMap", "Claim")
                                })]
                            })
                        })
                    })
                })
            })
        }
          , eH = i(96486)
          , ez = i.n(eH)
          , eQ = i(51322);
        async function prepareMapObject(e) {
            let t = O.l.getInstance()
              , i = new Map
              , n = t.getMapEntities()
              , a = C.Z.getMapObjects();
            null == n || n.forEach(t=>{
                if (t.player) {
                    i.has(t.player) || i.set(t.player, {
                        playerId: t.player,
                        playerName: "",
                        objects: new Map,
                        self: t.player === e
                    });
                    let n = i.get(t.player);
                    n && (n.objects.has(t.entity) ? n.objects.get(t.entity).count++ : n.objects.set(t.entity, {
                        name: (0,
                        b.sA)(t.entity.replace("ent_", "itm_")),
                        count: 1
                    }))
                }
            }
            ),
            a && Object.values(a).forEach(t=>{
                if (t.player) {
                    i.has(t.player) || i.set(t.player, {
                        playerId: t.player,
                        playerName: "",
                        objects: new Map,
                        self: t.player === e
                    });
                    let n = i.get(t.player);
                    n && (n.objects.has(t.object) ? n.objects.get(t.object).count++ : n.objects.set(t.object, {
                        name: (0,
                        b.sA)(t.object.replace("obj_", "itm_")),
                        count: 1
                    }))
                }
            }
            );
            let l = Array.from(i.values()).map(e=>e.playerId)
              , s = await U.Z.fetchPlayersUsernames(l);
            return s && i.forEach(e=>{
                var t;
                return e.playerName = null !== (t = s[e.playerId]) && void 0 !== t ? t : e.playerId
            }
            ),
            i
        }
        let FarmItemOwnership = ()=>{
            let {t: e} = (0,
            x.$)(["game"])
              , t = (0,
            m.C)(p.lA)
              , i = (0,
            m.C)(p.Ai)
              , [n,a] = (0,
            r.useState)()
              , l = (0,
            m.T)();
            (0,
            r.useEffect)(()=>{
                var e, i;
                a(void 0),
                prepareMapObject(null !== (i = null == t ? void 0 : null === (e = t.core) || void 0 === e ? void 0 : e.mid) && void 0 !== i ? i : "").then(e=>{
                    a(e)
                }
                )
            }
            , [i.mapId]);
            let reclaimItems = ()=>{
                R.ZP.emitEventNow(ek.m.claimAll),
                l({
                    type: "game/DISMISS_FARM_DETAILS"
                })
            }
              , o = n && Array.from(n.values());
            return (0,
            s.jsxs)("div", {
                className: u()(eU().itemlist, j().scrollArea),
                children: [null == o ? void 0 : o.map(t=>(0,
                s.jsxs)("div", {
                    className: eU().playeritems,
                    children: [(0,
                    s.jsxs)("span", {
                        className: eU().playername,
                        children: [t.playerName, t.self && (0,
                        s.jsxs)(s.Fragment, {
                            children: [" (You) ", (0,
                            s.jsx)(S.Z, {
                                title: "Remove Items",
                                children: (0,
                                s.jsx)("span", {
                                    className: "clickable",
                                    onClick: reclaimItems,
                                    children: (0,
                                    s.jsx)(eW.Z, {})
                                })
                            })]
                        })]
                    }), Array.from(t.objects.values()).map(t=>{
                        let i = ez().upperCase(t.name.replace("itm_", "").replace("_name", "").replace("_", " "));
                        return (0,
                        s.jsxs)("div", {
                            className: eU().playeritem,
                            children: [(0,
                            s.jsx)("span", {
                                className: eU().itemqty,
                                children: "".concat(t.count)
                            }), (0,
                            s.jsx)("span", {
                                className: eU().itemname,
                                children: e(t.name, i)
                            })]
                        }, t.name)
                    }
                    )]
                }, t.playerId)), o && 0 === o.length && (0,
                s.jsx)("span", {
                    className: eU().noitems,
                    children: e("noowneditems", {
                        ns: "ui",
                        defaultValue: "No player owned items."
                    })
                })]
            })
        }
          , FarmDetails = ()=>{
            var e, t, i, n, a, l;
            let o = (0,
            m.C)(p.Ai)
              , c = (0,
            m.C)(p.PD)
              , d = (0,
            m.C)(p.zY)
              , {t: v} = (0,
            x.$)(["game"])
              , h = (0,
            m.T)()
              , g = (0,
            z.Ei)(eQ.h.getState())
              , _ = c.filter(e=>{
                var t;
                return (null !== (t = null == e ? void 0 : e.mapId) && void 0 !== t ? t : e) === o.mapId
            }
            ).length > 0
              , f = (0,
            m.C)(z.Mt)
              , y = (0,
            m.C)(p.V4)
              , k = O.l.getInstance()
              , N = k.mapLabels.includes("exterior") && ["nft", "pixelsNFTFarm", "player"].includes(k.mapType)
              , C = (0,
            r.useMemo)(()=>{
                var e;
                let t = 1;
                for (; null === (e = o.labels) || void 0 === e ? void 0 : e.includes("tier".concat(t + 1)); )
                    t++;
                return t
            }
            , o.labels)
              , handleBookmark = async()=>{
                var e;
                R.ZP.sendEventDelayed(R.fb.BOOKMARK_MAP, {
                    mapId: o.mapId,
                    environ: null === (e = k.mapTraits) || void 0 === e ? void 0 : e.environment,
                    bookmark: !_
                })
            }
              , handleClose = ()=>{
                h({
                    type: "game/DISMISS_FARM_DETAILS"
                })
            }
              , w = null === (e = o.mapId) || void 0 === e ? void 0 : e.match(/\d+$/)
              , I = w && w[0]
              , T = (0,
            ei.GU)()
              , P = o.mapId === "".concat(T.mapPrefix).concat(I) ? "".concat(window.location.origin, "/").concat(T.id, "/share/").concat(I) : ""
              , M = ((null === (t = o.mapId) || void 0 === t ? void 0 : t.includes("shareRent")) || (null === (i = o.mapId) || void 0 === i ? void 0 : i.includes("shareInterior"))) && g;
            return (0,
            s.jsx)(s.Fragment, {
                children: o.isActive && (0,
                s.jsxs)("div", {
                    className: u()([eU().FarmDetailsPanel, j().uikit, j().frame, j().scrollArea, j().orangeinset]),
                    children: [(0,
                    s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                        onKeyDown: e=>{
                            e.stopPropagation(),
                            "Escape" === e.key && handleClose()
                        }
                    }), (0,
                    s.jsx)("button", {
                        type: "button",
                        className: u()(j().closeBtn),
                        onClick: handleClose
                    }), (0,
                    s.jsxs)("span", {
                        className: eU().farmNo,
                        children: [(0,
                        s.jsxs)("span", {
                            children: ["#", I]
                        }), (0,
                        s.jsxs)("span", {
                            children: ["Tier ", (0,
                            b.Qb)(C)]
                        }), (0,
                        s.jsx)("span", {
                            children: _ && v("bookmarked_flag", {
                                ns: "ui",
                                defaultValue: "Bookmarked"
                            })
                        }), P && (0,
                        s.jsx)(S.Z, {
                            title: v("shareLand.".concat(T.name), "Share"),
                            children: (0,
                            s.jsx)(eF.Z, {
                                className: "clickable",
                                onClick: ()=>(0,
                                b.Bf)(P, T.displayName)
                            })
                        })]
                    }), (0,
                    s.jsx)("h2", {
                        children: o.farmName
                    }), (0,
                    s.jsxs)("div", {
                        className: eU().FarmDetailsPanelContent,
                        children: [(0,
                        s.jsxs)("div", {
                            className: eU().FarmDetailsActions,
                            children: [N && (0,
                            s.jsx)(S.Z, {
                                title: _ ? "Remove Bookmark" : "Bookmark this location",
                                children: (0,
                                s.jsx)("button", {
                                    type: "button",
                                    className: u()([j().uikit, j().button]),
                                    disabled: (c.length || 0) >= d && !_,
                                    onClick: handleBookmark,
                                    children: _ ? (0,
                                    s.jsxs)(s.Fragment, {
                                        children: [(0,
                                        s.jsx)(eO.Z, {}), (0,
                                        s.jsx)("span", {
                                            className: eU().fullbutton,
                                            children: v("farmDetails.remove_bookmark_button", {
                                                ns: "ui",
                                                defaultValue: "Unbookmark"
                                            })
                                        })]
                                    }) : (0,
                                    s.jsxs)(s.Fragment, {
                                        children: [(0,
                                        s.jsx)(eR.Z, {}), (0,
                                        s.jsx)("span", {
                                            className: eU().fullbutton,
                                            children: v("farmDetails.bookmark_button", {
                                                ns: "ui",
                                                defaultValue: "Bookmark"
                                            })
                                        })]
                                    })
                                })
                            }), (0,
                            s.jsx)(FarmDetails_ClaimNftFarm, {}), f && (0,
                            s.jsx)(S.Z, {
                                title: v("farmDetails.settings_tooltip", {
                                    ns: "ui",
                                    defaultValue: "Location Settings"
                                }),
                                children: (0,
                                s.jsx)("button", {
                                    type: "button",
                                    className: u()([j().uikit, j().button]),
                                    onClick: ()=>{
                                        h({
                                            type: "game/activateSidePanel"
                                        })
                                    }
                                    ,
                                    children: (0,
                                    s.jsxs)(s.Fragment, {
                                        children: [(0,
                                        s.jsx)(eV.Z, {}), (0,
                                        s.jsx)("span", {
                                            className: eU().fullbutton,
                                            children: v("farmDetails.settings_button", {
                                                ns: "ui",
                                                defaultValue: "Settings"
                                            })
                                        })]
                                    })
                                })
                            }), M && (0,
                            s.jsx)("button", {
                                type: "button",
                                className: u()([j().uikit, j().button]),
                                onClick: ()=>{
                                    handleClose(),
                                    h({
                                        type: "game/activateFarmUpgradePanel"
                                    })
                                }
                                ,
                                children: (0,
                                s.jsxs)(s.Fragment, {
                                    children: [(0,
                                    s.jsx)(eq.Z, {}), (0,
                                    s.jsx)("span", {
                                        className: eU().fullbutton,
                                        children: v("button.upgrade", "Upgrade")
                                    })]
                                })
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            className: eU().DetailsText,
                            children: [o.ethAddress && (0,
                            s.jsxs)("div", {
                                children: ["Owner: ", o.ethAddress]
                            }), o.guild && (0,
                            s.jsxs)("div", {
                                children: ["Guild: ", o.guild]
                            }), (null == o ? void 0 : null === (n = o.ownership) || void 0 === n ? void 0 : n.forSale) && (0,
                            s.jsx)("p", {
                                children: v("farmDetails.forSale", {
                                    ns: "ui",
                                    defaultValue: "For Sale"
                                })
                            }), (null == o ? void 0 : null === (a = o.ownership) || void 0 === a ? void 0 : a.forRent) && (0,
                            s.jsx)("p", {
                                children: v("farmDetails.forRent", {
                                    ns: "ui",
                                    defaultValue: "For Rent"
                                })
                            })]
                        })]
                    }), (null === (l = o.mapId) || void 0 === l ? void 0 : l.includes("pixelsNFTFarm-")) && (0,
                    s.jsxs)(s.Fragment, {
                        children: [(0,
                        s.jsx)("h2", {
                            children: v("mapskills", {
                                ns: "ui",
                                defaultValue: "Map Skills"
                            })
                        }), (0,
                        s.jsx)(SkillsList, {
                            getLevelData: y,
                            isFarm: !0
                        })]
                    }), (0,
                    s.jsx)("h2", {
                        children: v("objectowners", {
                            ns: "ui",
                            defaultValue: "Object Owners"
                        })
                    }), (0,
                    s.jsx)(FarmItemOwnership, {})]
                })
            })
        }
        ;
        var eK = i(67355)
          , e$ = i.n(eK);
        let InfoSettings = e=>{
            let {roomSettings: t, handleOnchange: i} = e;
            return (0,
            s.jsxs)("div", {
                children: [(0,
                s.jsx)("div", {
                    className: e$().farmSettingsFieldTitle,
                    children: "Farm Name"
                }), (0,
                s.jsx)("input", {
                    className: e$().farmSettingsInput,
                    maxLength: 30,
                    defaultValue: t.name || "",
                    onBlur: e=>{
                        var t;
                        let n = (0,
                        E.FL)((null === (t = e.currentTarget) || void 0 === t ? void 0 : t.value) || "");
                        i("name", n)
                    }
                })]
            })
        }
        ;
        var eY = i(41733)
          , eX = i(93946)
          , eJ = i(15861)
          , e0 = i(18496)
          , MapEditor_MapMemberTile = e=>{
            var t, i;
            let {player_id: n, mapMember: a} = e
              , [l,o] = (0,
            r.useState)(null)
              , [c,d] = (0,
            r.useState)(!0)
              , {t: u} = (0,
            x.$)("ui")
              , p = (0,
            m.T)();
            (0,
            r.useEffect)(()=>{
                e0.Z.fetchPlayer(n).then(e=>{
                    o(e),
                    d(!1)
                }
                ).catch(()=>{}
                )
            }
            , [n]);
            let deleteMember = e=>{
                p({
                    type: "mapEditor/addMember",
                    payload: {
                        type: "remove",
                        remove: {
                            member_id: e
                        }
                    }
                })
            }
            ;
            return c || !l ? (0,
            s.jsx)("div", {}) : (0,
            s.jsxs)("div", {
                style: {
                    display: "flex"
                },
                children: [(0,
                s.jsx)(eX.Z, {
                    onClick: ()=>{
                        var e;
                        deleteMember(null === (e = l._id) || void 0 === e ? void 0 : e.toString())
                    }
                    ,
                    children: (0,
                    s.jsx)(eY.Z, {})
                }), (0,
                s.jsxs)("div", {
                    style: {
                        marginLeft: 4,
                        marginTop: 2
                    },
                    children: [(0,
                    s.jsx)(eJ.Z, {
                        style: {
                            fontSize: 13
                        },
                        children: null !== (i = null == l ? void 0 : l.username) && void 0 !== i ? i : n
                    }, "1"), (0,
                    s.jsx)(eJ.Z, {
                        style: {
                            fontSize: 12
                        },
                        children: null == a ? void 0 : a.roles.map(e=>u("role.".concat(e), e)).join(", ")
                    }, "2"), null == l ? void 0 : null === (t = l.cryptoWallets) || void 0 === t ? void 0 : t.map(e=>(null == e ? void 0 : e.type) === "eth" ? (0,
                    s.jsx)(eJ.Z, {
                        style: {
                            fontSize: 9
                        },
                        children: e.address
                    }, "3") : (0,
                    s.jsx)("div", {}))]
                })]
            })
        }
        ;
        let AccessSettings = e=>{
            var t, i, n, a, l, o, c, d, p, v;
            let {roomSettings: h, handleOnchange: g} = e
              , _ = (0,
            m.T)()
              , f = (0,
            m.C)(z._0)
              , [y,b] = (0,
            r.useState)("")
              , [k,N] = (0,
            r.useState)("Builder")
              , [C,w] = (0,
            r.useState)(h.guild || "")
              , {t: S} = (0,
            x.$)("ui")
              , [I,T] = (0,
            r.useState)("")
              , validateManagerAddresses = ()=>(T(""),
            !0)
              , addMember = ()=>{
                _({
                    type: "mapEditor/addMember",
                    payload: {
                        type: "add",
                        add: {
                            ethAddress: y,
                            role: k
                        }
                    }
                })
            }
            ;
            if (!f)
                return (0,
                s.jsx)("div", {
                    className: e$().farmSettingsFieldTitle,
                    children: "Why did the user feel left out? They couldn't access the access tab."
                });
            let P = "ANY";
            return (null === (i = h.permissions) || void 0 === i ? void 0 : null === (t = i.use) || void 0 === t ? void 0 : t.includes("ANY")) || (P = (null === (a = h.permissions) || void 0 === a ? void 0 : null === (n = a.use) || void 0 === n ? void 0 : n.includes("Guild")) ? "Visitor,Manager,OWNER,Guild" : (null === (o = h.permissions) || void 0 === o ? void 0 : null === (l = o.use) || void 0 === l ? void 0 : l.includes("Guild-Pledger")) ? "Visitor,Manager,OWNER,Guild-Pledger" : (null === (d = h.permissions) || void 0 === d ? void 0 : null === (c = d.use) || void 0 === c ? void 0 : c.includes("Guild-Member")) ? "Visitor,Manager,OWNER,Guild-Member" : (null === (v = h.permissions) || void 0 === v ? void 0 : null === (p = v.use) || void 0 === p ? void 0 : p.includes("Guild-Worker")) ? "Visitor,Manager,OWNER,Guild-Worker" : "Visitor,Manager,OWNER"),
            (0,
            s.jsxs)("div", {
                children: [(0,
                s.jsxs)("div", {
                    className: e$().farmSettingsFieldTitle,
                    children: [(0,
                    s.jsx)("h2", {
                        children: S("settings.accessmode", "Access Mode")
                    }), (0,
                    s.jsxs)("span", {
                        className: e$().farmSettingsFieldDescription,
                        children: ["Who do you want to be able to use your farm?", (0,
                        s.jsx)("br", {}), 'If you select "People I Add", you can add them as Players.', (0,
                        s.jsx)("br", {}), '"Guild Members" will also include people you add directly.']
                    }), (0,
                    s.jsxs)("select", {
                        style: {
                            height: 40,
                            marginTop: 12,
                            width: "100%",
                            textAlign: "center"
                        },
                        value: P,
                        onChange: e=>{
                            let t = e.target.value;
                            g("permissions.use", t.split(","))
                        }
                        ,
                        children: [(0,
                        s.jsx)("option", {
                            value: "ANY",
                            children: S("settings.everybody", "Everybody")
                        }), (0,
                        s.jsx)("option", {
                            value: "Visitor,Manager,OWNER",
                            children: S("settings.peopleiadd", "People I Add")
                        }), (0,
                        s.jsx)("option", {
                            value: "Visitor,Manager,OWNER,Guild-Worker",
                            children: S("settings.guildworkers", "Guild Workers")
                        }), (0,
                        s.jsx)("option", {
                            value: "Visitor,Manager,OWNER,Guild-Member",
                            children: S("settings.guildmembers", "Guild Members")
                        }), (0,
                        s.jsx)("option", {
                            value: "Visitor,Manager,OWNER,Guild-Pledger",
                            children: S("settings.guildpledgers", "Guild Pledgers")
                        }), (0,
                        s.jsx)("option", {
                            value: "Visitor,Manager,OWNER,Guild",
                            children: S("settings.guildsupporters", "Guild Supporters")
                        })]
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: e$().farmSettingsFieldTitle,
                    children: [(0,
                    s.jsx)("h2", {
                        children: S("settings.guildtitle", "Guild Association")
                    }), (0,
                    s.jsx)("div", {
                        className: e$().farmSettingsFieldDescription,
                        children: "You may enter a single guild handle. Your farm will be associated with the guild selected."
                    }), (0,
                    s.jsx)("br", {}), (0,
                    s.jsxs)("div", {
                        className: e$().guildRow,
                        children: [(0,
                        s.jsx)("span", {
                            className: e$().guildPrefix,
                            children: "@"
                        }), (0,
                        s.jsx)("input", {
                            type: "text",
                            className: e$().guildHandle,
                            value: C,
                            onChange: e=>w(e.target.value)
                        }), (0,
                        s.jsx)("button", {
                            type: "button",
                            style: {
                                marginTop: "8px"
                            },
                            className: u()(j().uikit, j().button),
                            onClick: ()=>{
                                g("guild", C)
                            }
                            ,
                            children: S("button.set", "Set")
                        })]
                    })]
                }), f && (0,
                s.jsxs)("div", {
                    className: e$().farmSettingsFieldTitle,
                    children: [(0,
                    s.jsx)("h2", {
                        children: "Add Players by ETH Address"
                    }), (0,
                    s.jsxs)("ul", {
                        className: e$().farmSettingsFieldDescription,
                        children: [(0,
                        s.jsx)("li", {
                            children: "Builders - can add and rearrange objects on your farm "
                        }), (0,
                        s.jsx)("li", {
                            children: "Managers - Add/Remove items. Rename farm and ADD OTHER MEMBERS "
                        }), (0,
                        s.jsx)("li", {
                            children: "Player - People who can use your farm (See Access) "
                        })]
                    }), I && (0,
                    s.jsx)("span", {
                        children: I
                    }), (0,
                    s.jsx)("textarea", {
                        className: e$().farmSettingsInput,
                        rows: 5,
                        value: y,
                        onChange: e=>{
                            let t = e.target.value;
                            validateManagerAddresses(),
                            b(t)
                        }
                        ,
                        placeholder: "Separate addresses with commas"
                    }), (0,
                    s.jsxs)("div", {
                        className: e$().farmSettingsEndedRow,
                        children: [(0,
                        s.jsxs)("select", {
                            style: {
                                height: 40,
                                marginTop: 12,
                                flexGrow: 1
                            },
                            onChange: e=>{
                                N(e.target.value)
                            }
                            ,
                            children: [(0,
                            s.jsx)("option", {
                                value: "Builder",
                                children: S("role.Builder", "Builder")
                            }), (0,
                            s.jsx)("option", {
                                value: "Manager",
                                children: S("role.Manager", "Manager")
                            }), (0,
                            s.jsx)("option", {
                                value: "Visitor",
                                children: S("role.Visitor", "Visitor")
                            })]
                        }), (0,
                        s.jsxs)("button", {
                            type: "button",
                            style: {
                                marginTop: "8px"
                            },
                            className: u()(j().uikit, j().button),
                            onClick: ()=>addMember(),
                            children: [S("button.add", "Add"), " ", S("role.".concat(k), k)]
                        })]
                    }), (0,
                    s.jsx)("div", {
                        style: {
                            height: 24
                        }
                    }), h.members.length > 0 ? (0,
                    s.jsxs)(s.Fragment, {
                        children: [(0,
                        s.jsx)("span", {
                            children: S("settings.addedplayers", "Added Players")
                        }), (0,
                        s.jsx)("div", {
                            style: {
                                height: 8
                            }
                        }), h.members.map(e=>{
                            var t, i;
                            return (0,
                            s.jsx)(s.Fragment, {
                                children: (0,
                                s.jsx)("div", {
                                    children: (0,
                                    s.jsx)(MapEditor_MapMemberTile, {
                                        player_id: null == e ? void 0 : null === (t = e.member) || void 0 === t ? void 0 : t.toString(),
                                        mapMember: e
                                    })
                                }, null == e ? void 0 : null === (i = e.member) || void 0 === i ? void 0 : i.toString())
                            })
                        }
                        )]
                    }) : (0,
                    s.jsx)("span", {})]
                })]
            })
        }
          , SidePanel = ()=>{
            let e = (0,
            m.C)(z.Mp)
              , t = (0,
            m.C)(z._0)
              , [i,n] = r.useState("Info")
              , a = (0,
            m.T)()
              , handleOnchange = (e,t)=>{
                a((0,
                z.r5)({
                    path: e,
                    value: t
                }))
            }
              , l = {
                Info: InfoSettings
            };
            return t && (l.Access = AccessSettings),
            (0,
            s.jsx)("div", {
                className: e$().farmSettingsPanel,
                onKeyDown: e=>{
                    e.stopPropagation()
                }
                ,
                children: (0,
                s.jsxs)("div", {
                    style: {
                        overflowY: "auto",
                        height: "100%"
                    },
                    className: u()(e$().farmSettingsPanelContent, j().uikit, j().frame, j().orangeinset),
                    children: [(0,
                    s.jsx)("button", {
                        onClick: ()=>{
                            a((0,
                            Y.Rp)())
                        }
                        ,
                        type: "button",
                        className: u()(j().uikit, j().closeBtn),
                        children: " "
                    }), (0,
                    s.jsx)("div", {
                        className: u()(j().tabs, "pixelFont"),
                        children: (0,
                        s.jsx)("ul", {
                            children: Object.keys(l).map(e=>(0,
                            s.jsx)("li", {
                                className: u()({
                                    [j().activetab]: e === i
                                }),
                                children: (0,
                                s.jsx)("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        n(e)
                                    }
                                    ,
                                    children: e
                                })
                            }, e))
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: j().tabcontent,
                        children: Object.entries(l).filter(e=>{
                            let[t] = e;
                            return t === i
                        }
                        ).map(t=>{
                            let[i,n] = t;
                            return (0,
                            s.jsx)(n, {
                                roomSettings: e,
                                handleOnchange: handleOnchange
                            }, i)
                        }
                        )
                    })]
                })
            })
        }
        ;
        var e1 = i(8703)
          , e2 = i.n(e1);
        let CraftingPageRecipeListHeader = ()=>{
            let e = (0,
            m.C)(h.hL)
              , t = (0,
            m.C)(h.ki)
              , {t: i} = (0,
            x.$)(["game", "ui"]);
            return (0,
            s.jsxs)("div", {
                className: e2().craftHeader,
                children: [(0,
                s.jsx)("div", {
                    className: e2().subheader,
                    children: (0,
                    s.jsx)("div", {
                        className: e2().yetanotherdiv,
                        children: (0,
                        s.jsx)("div", {
                            className: e2().craftingPageTitle,
                            children: i("title_".concat(e), {
                                ns: "ui"
                            })
                        })
                    })
                }), (0,
                s.jsx)("div", {
                    className: e2().craftingPageTier,
                    children: i("format_tier", {
                        ns: "ui",
                        defaultValue: "Tier {{tier}}",
                        tier: (0,
                        b.Qb)(t.tableTier),
                        count: t.tableTier
                    })
                })]
            })
        }
          , CraftingPageRecipeListItem = e=>{
            var t;
            let {achievementId: i, title: n, name: a} = e
              , l = (null === (t = (0,
            m.C)(h.U1)) || void 0 === t ? void 0 : t.achievementId) === i;
            return (0,
            s.jsx)(A, {
                title: n,
                children: (0,
                s.jsx)("div", {
                    className: e2().craftingRecipeItem,
                    children: (0,
                    s.jsxs)("span", {
                        className: u()(e2().craftingFontText, "clickable"),
                        style: {
                            color: l ? "red" : "black",
                            textShadow: l ? "2px 2px 2px yellow" : "none",
                            marginLeft: "4px",
                            display: "block",
                            padding: "4px",
                            width: "100%",
                            overflow: "hidden"
                        },
                        children: [a, " "]
                    })
                })
            })
        }
          , CraftingPageRecipeListBody = ()=>{
            var e, t;
            let i = (0,
            m.C)(h.og)
              , n = (0,
            m.C)(p.qb)
              , a = (0,
            m.C)(h.Up)
              , l = (0,
            m.C)(h.ki)
              , [o,c] = (0,
            r.useState)([])
              , d = (0,
            m.T)()
              , {t: v} = (0,
            x.$)(["game", "ui"])
              , levelsRequired = e=>{
                var t, a, l;
                if (!e)
                    return 100;
                if (i.some(t=>t.achievementId === e.id))
                    return 0;
                if (null === (t = e.craftable) || void 0 === t ? void 0 : t.requiredLevel) {
                    let t = e.craftable.requiredSkill || eL.oi[e.craftable.type]
                      , i = (null === (l = n(t)) || void 0 === l ? void 0 : l.level) || 0;
                    return Math.max(e.craftable.requiredLevel - i, 0)
                }
                return (null === (a = e.craftable) || void 0 === a ? void 0 : a.autoGrant) ? 0 : 100
            }
              , g = null !== (t = null === (e = C.Z.getGameAchievements()) || void 0 === e ? void 0 : e.filter(e=>e && "craftable" === e.type && !e.archived && e.craftable.type === l.craftType && (!e.craftable.requiredTier || l.tableTier >= e.craftable.requiredTier) && (e.craftable.autoGrant || i.some(t=>t.achievementId === e.id))).map(e=>({
                ach: e,
                levels: levelsRequired(e)
            }))) && void 0 !== t ? t : []
              , formatTip = e=>{
                if (!e.allowed) {
                    var t, i;
                    if (null === (i = e.recipe) || void 0 === i ? void 0 : null === (t = i.craftable) || void 0 === t ? void 0 : t.requiredLevel) {
                        let t = e.recipe.craftable.requiredSkill || eL.oi[e.recipe.craftable.type];
                        return "".concat(v(t, {
                            ns: "ui",
                            defaultValue: (0,
                            b.je)(t)
                        }), " ").concat(v("crafting.levelneeded", {
                            ns: "ui",
                            defaultValue: "Level Needed"
                        }), ": ").concat(e.recipe.craftable.requiredLevel)
                    }
                }
            }
              , _ = r.useMemo(()=>g.map(e=>({
                recipe: e.ach,
                lvl: e.levels,
                name: v((0,
                b.sA)(e.ach.id)),
                allowed: e.levels <= 0 ? 1 : 0
            })).reduce((e,t)=>{
                var i;
                let n = (null === (i = t.recipe.craftable) || void 0 === i ? void 0 : i.requiredTier) || 1
                  , a = e.find(e=>e.tier === n);
                return a ? a.recipes.push(t) : (a = {
                    tier: n,
                    recipes: [t],
                    active: !1
                },
                e.push(a)),
                t.allowed && (a.active = !0),
                e
            }
            , []).map(e=>(e.recipes.sort((e,t)=>{
                var i, n, a, l;
                let s = t.allowed - e.allowed;
                return s || (s = (null !== (a = null === (i = e.recipe.craftable) || void 0 === i ? void 0 : i.requiredTier) && void 0 !== a ? a : 0) - (null !== (l = null === (n = t.recipe.craftable) || void 0 === n ? void 0 : n.requiredTier) && void 0 !== l ? l : 0)) ? s : e.name.localeCompare(t.name)
            }
            ),
            e)).sort((e,t)=>t.tier - e.tier), [g]);
            return (0,
            s.jsx)("div", {
                className: e2().recipeSection,
                children: (0,
                s.jsxs)("div", {
                    className: u()(e2().craftingSection, e2().subsection),
                    children: [(0,
                    s.jsx)("div", {
                        className: e2().anotherpointlessdiv,
                        children: (0,
                        s.jsx)("div", {
                            className: e2().craftingFontSubtitle,
                            style: {
                                flexGrow: 1,
                                textAlign: "center"
                            },
                            children: v("recipes_title", {
                                ns: "ui",
                                defaultValue: "Recipes"
                            })
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: u()(j().scrollArea, e2().recipelist),
                        children: _.map(e=>{
                            let t = o[e.tier];
                            return void 0 === t && (t = e.active),
                            (0,
                            s.jsxs)(r.Fragment, {
                                children: [(0,
                                s.jsxs)("div", {
                                    className: u()("clickable", e2().tierHeader),
                                    onClick: ()=>{
                                        var i, n;
                                        return i = e.tier,
                                        n = !t,
                                        void c(e=>{
                                            let t = [...e];
                                            return t[i] = n,
                                            t
                                        }
                                        )
                                    }
                                    ,
                                    children: [(0,
                                    s.jsx)("div", {
                                        className: u()(e2().tierToggle, {
                                            [e2().tierExpanded]: t
                                        })
                                    }), v("format_tier", {
                                        ns: "ui",
                                        defaultValue: "Tier {{tier}}",
                                        tier: (0,
                                        b.Qb)(e.tier),
                                        count: e.tier
                                    })]
                                }), t && (0,
                                s.jsx)("ul", {
                                    className: e2().tierSection,
                                    children: e.recipes.map(e=>(0,
                                    s.jsx)("li", {
                                        style: {
                                            lineHeight: "18px",
                                            filter: e.allowed ? "none" : "grayscale(100%) opacity(40%)"
                                        },
                                        onClick: ()=>{
                                            !a && e.allowed && d((0,
                                            h.sY)({
                                                id: e.recipe.id
                                            }))
                                        }
                                        ,
                                        children: (0,
                                        s.jsx)(CraftingPageRecipeListItem, {
                                            achievementId: e.recipe.id,
                                            name: e.name,
                                            title: formatTip(e)
                                        })
                                    }, e.recipe.id))
                                })]
                            }, "".concat(e.tier))
                        }
                        )
                    })]
                })
            })
        }
          , CraftingPageRecipeList = ()=>(0,
        s.jsxs)(s.Fragment, {
            children: [(0,
            s.jsx)(CraftingPageRecipeListHeader, {}), (0,
            s.jsx)(CraftingPageRecipeListBody, {})]
        });
        var e3 = i(66005);
        let CraftingMaterial = e=>{
            let {item: t, required: i=1, available: n=0, showPlus: a} = e
              , l = null == t ? void 0 : t.image;
            return (0,
            s.jsx)(ItemTooltip, {
                placement: "top",
                item: t,
                showDetails: !0,
                showUtility: !1,
                children: (0,
                s.jsx)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-around",
                        position: "relative",
                        width: "64px",
                        height: "64px"
                    },
                    children: (0,
                    s.jsxs)("div", {
                        style: {
                            backgroundImage: "url('".concat((0,
                            E.Uk)("/game/ui/crafting/crafting_material_border.png"), "')"),
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            backgroundBlendMode: "multiply",
                            flexGrow: 1,
                            display: "flex",
                            padding: "4px"
                        },
                        children: [(0,
                        s.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                padding: "4px",
                                width: "100%",
                                backgroundColor: i <= n ? "#00FF0020" : "#FF000020"
                            },
                            children: [(0,
                            s.jsx)("div", {
                                style: {
                                    width: "100%",
                                    textAlign: "center"
                                },
                                children: l && (0,
                                s.jsx)("div", {
                                    style: {
                                        position: "relative",
                                        opacity: i <= n ? 1 : .4
                                    },
                                    children: (0,
                                    s.jsx)("img", {
                                        crossOrigin: "anonymous",
                                        src: (0,
                                        E.b7)(l)
                                    })
                                })
                            }), (0,
                            s.jsxs)("div", {
                                className: e2().craftingFontQuantities,
                                style: {
                                    width: "100%",
                                    textAlign: "right",
                                    position: "absolute",
                                    right: 6,
                                    bottom: 4
                                },
                                children: [n, "/", i]
                            })]
                        }), a && (0,
                        s.jsx)("img", {
                            style: {
                                position: "absolute",
                                zIndex: 99,
                                top: "20px",
                                left: "54px"
                            },
                            src: (0,
                            E.Uk)("/game/ui/crafting/crafting_icon_material_plus.png"),
                            width: 20,
                            height: 18
                        })]
                    })
                })
            })
        }
          , CraftingRequirements = e=>{
            var t, i;
            let {quantityMultiplier: n=1, craftingCraftable: a} = e
              , l = (0,
            m.C)(h.U1)
              , r = a || l
              , o = (0,
            m.C)(p.RQ)
              , c = (0,
            m.C)(h.Gp)
              , d = r ? C.Z.getGameAchievement(r.achievementId) : null
              , u = null == d ? void 0 : null === (i = d.craftable) || void 0 === i ? void 0 : null === (t = i.result) || void 0 === t ? void 0 : t.items[0].id
              , v = u ? C.Z.getGameItem(u) : null
              , {t: g} = (0,
            x.$)(["game", "ui"]);
            return (0,
            s.jsx)(s.Fragment, {
                children: (0,
                s.jsxs)("div", {
                    className: e2().craftingSection,
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                    },
                    children: [v && (0,
                    s.jsx)("div", {
                        style: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "8px"
                        },
                        children: (0,
                        s.jsx)("div", {
                            className: e2().craftingFontSubtitle,
                            children: g("required_items_title", {
                                ns: "ui"
                            })
                        })
                    }), (0,
                    s.jsxs)("div", {
                        style: {
                            display: "flex",
                            justifyContent: "start",
                            flexWrap: "wrap",
                            width: "100%",
                            overflowY: "auto",
                            overflowX: "hidden",
                            marginRight: "auto",
                            marginLeft: "auto"
                        },
                        children: [d && d.craftable.requiredItems.filter(e=>!e.unconsumable).map((e,t)=>({
                            ...e,
                            position: t,
                            item: C.Z.getGameItem(e.id),
                            available: o(e.id)
                        })).map((e,t,i)=>(0,
                        s.jsx)(CraftingMaterial, {
                            item: e.item,
                            available: e.available,
                            required: e.quantity * n,
                            showPlus: t % 4 < 3 && t < i.length - 1
                        }, e.position)), !!c.length && (0,
                        s.jsxs)("div", {
                            className: e2().craftingFontText,
                            style: {
                                marginTop: "6px"
                            },
                            children: ["You need ", c.map(e=>"".concat(g((0,
                            b.sA)(e.id)), " ")), " to craft this."]
                        })]
                    })]
                })
            })
        }
          , getReturnValues = e=>[Math.floor(e / 864e5), Math.floor(e % 864e5 / 36e5), Math.floor(e % 36e5 / 6e4), Math.floor(e % 6e4 / 1e3)]
          , useClockTimer = e=>{
            let[t,i] = (0,
            r.useState)(e - new Date().getTime());
            return (0,
            r.useEffect)(()=>{
                let t = setInterval(()=>{
                    i(e - new Date().getTime())
                }
                , 500);
                return ()=>clearInterval(t)
            }
            , [e]),
            getReturnValues(t)
        }
          , padTo2Digits = e=>e.toString().padStart(2, "0")
          , toHoursAndMinutes = e=>{
            let t = Math.round(e % 1 * 60)
              , i = Math.floor(e) % 60
              , n = Math.floor(e / 60);
            return "".concat(padTo2Digits(n), ":").concat(padTo2Digits(i), ":").concat(padTo2Digits(t))
        }
          , CountdownTimer = e=>{
            let {until: t} = e
              , [,i,n,a] = useClockTimer(t);
            return i + n + a > 0 ? (0,
            s.jsxs)("span", {
                children: [i.toString().padStart(2, "0"), ":", n.toString().padStart(2, "0"), ":", a.toString().padStart(2, "0")]
            }) : (0,
            s.jsx)("span", {
                children: "00:00:00"
            })
        }
          , e5 = 0
          , e4 = ""
          , entitySendEvent = (e,t,i,n)=>{
            if (e && !t) {
                let i = O.l.getInstance().getEntityByUniqueId(e);
                t = null == i ? void 0 : i.entity
            }
            if (t && e) {
                if (e4 === i && Date.now() - e5 < 1e3)
                    return;
                e4 = i,
                e5 = Date.now(),
                R.ZP.sendEventDelayed(ek.m.clickEntity, {
                    mid: e,
                    impact: i,
                    entity: t,
                    inputs: n
                })
            }
        }
          , CraftingPageDetails = ()=>{
            var e, t, i, n, a, l, o, c, d, p, v, g;
            let _ = (0,
            m.C)(h.ki)
              , f = (0,
            m.C)(h._r)
              , y = (0,
            m.C)(h.qx)
              , {t: j} = (0,
            x.$)(["game", "ui"])
              , k = O.l.getInstance().serverTimeDelta
              , N = null == _ ? void 0 : _.completionTime
              , w = (null == _ ? void 0 : _.entityState) === "ready"
              , S = (null == _ ? void 0 : _.entityState) && ["crafting", "ready"].includes(_.entityState)
              , I = S ? _.selectedCraftable : void 0
              , T = I || (null == _ ? void 0 : _.selectedCraftable)
              , P = I || T
              , M = P ? C.Z.getGameAchievement(P) : null
              , D = null == M ? void 0 : null === (t = M.craftable) || void 0 === t ? void 0 : null === (e = t.result) || void 0 === e ? void 0 : e.items[0].id
              , B = D ? C.Z.getGameItem(D) : null
              , A = (0,
            m.C)(h.yq)((null == B ? void 0 : B.id) || "")
              , [F,R] = (0,
            r.useState)();
            M && B || (S = !1,
            P = void 0);
            let V = S ? 200 : 66
              , q = (0,
            e3.q_)({
                backgroundImage: "url(".concat((0,
                E.Uk)("/game/ui/crafting/crafting_border_recipe_details.png"), ")"),
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
                height: V,
                width: V,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative"
            })
              , W = V / 66
              , Z = (0,
            e3.q_)({
                position: "absolute",
                fontSize: 12 * W,
                color: "white",
                filter: "drop-shadow(1px 1px 0 black)",
                left: 11 * W,
                top: 11 * W
            })
              , U = (0,
            e3.q_)({
                backgroundColor: "#FBF4BB",
                borderRadius: "8px",
                padding: "6px",
                fontSize: "".concat(S ? "24" : "12", "px")
            })
              , skillToString = e=>j(e, {
                ns: "ui",
                defaultValue: (0,
                b.je)(e)
            })
              , handleCraftStart = e=>{
                var t;
                e.preventDefault(),
                M && (Date.now() - (null !== (t = _.updated) && void 0 !== t ? t : 0) < 200 || ("busy" === y && (e4 = "startCraft",
                e5 = Date.now() + 5e3),
                entitySendEvent(_.table_mid, _.table_entity, "startCraft", [M.id, 1])))
            }
              , handleClaimCraftable = e=>{
                var t;
                e.preventDefault(),
                M && (Date.now() - (null !== (t = _.updated) && void 0 !== t ? t : 0) < 200 || entitySendEvent(_.table_mid, _.table_entity, "claim"))
            }
              , G = !!(null == M ? void 0 : null === (a = M.craftable) || void 0 === a ? void 0 : null === (n = a.result) || void 0 === n ? void 0 : null === (i = n.benefits) || void 0 === i ? void 0 : i.length);
            return (0,
            s.jsxs)("div", {
                className: e2().PageDetails,
                children: [P && (0,
                s.jsxs)("div", {
                    className: u()(e2().craftingSection, e2().craftingColumn),
                    children: [S ? (0,
                    s.jsxs)("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        children: [(0,
                        s.jsx)("div", {
                            className: e2().detailsTitle,
                            children: (0,
                            s.jsx)("div", {
                                className: e2().craftingFontText,
                                children: j((0,
                                b.sA)(M.id))
                            })
                        }), (0,
                        s.jsxs)(e3.q.div, {
                            style: q,
                            children: [(0,
                            s.jsx)("img", {
                                crossOrigin: "anonymous",
                                src: (0,
                                E.b7)(null == B ? void 0 : B.image),
                                height: 132
                            }), (null == B ? void 0 : B.tier) ? (0,
                            s.jsx)(e3.q.div, {
                                style: Z,
                                children: (0,
                                b.Qb)(B.tier)
                            }) : null]
                        })]
                    }) : (0,
                    s.jsxs)("div", {
                        style: {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        children: [(0,
                        s.jsxs)(e3.q.div, {
                            style: q,
                            children: [(0,
                            s.jsx)("img", {
                                crossOrigin: "anonymous",
                                src: (0,
                                E.b7)(null == B ? void 0 : B.image),
                                height: 44
                            }), (null == B ? void 0 : B.tier) ? (0,
                            s.jsx)(e3.q.div, {
                                style: Z,
                                children: (0,
                                b.Qb)(null !== (g = null == B ? void 0 : B.tier) && void 0 !== g ? g : 0)
                            }) : null]
                        }), (0,
                        s.jsx)("div", {
                            className: e2().detailsTitle,
                            children: (0,
                            s.jsx)("div", {
                                className: e2().craftingFontText,
                                children: j((0,
                                b.sA)(M.id))
                            })
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        style: {
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: "6px",
                            paddingRight: "12px",
                            paddingLeft: "12px"
                        },
                        children: [S && w && (0,
                        s.jsxs)("div", {
                            className: e2().craftingFontText,
                            style: {
                                marginTop: "10px",
                                width: "100%",
                                textAlign: "center"
                            },
                            children: [" ", j((0,
                            b.sA)(B.id), ""), " done!"]
                        }), (0,
                        s.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                flexGrow: 1
                            },
                            children: [!S && (0,
                            s.jsx)("div", {
                                className: e2().craftingFontText,
                                children: j("time_to_craft", {
                                    ns: "ui"
                                })
                            }), S && (0,
                            s.jsx)("div", {
                                style: {
                                    height: "200px"
                                }
                            }), (!S || !w) && (0,
                            s.jsx)(e3.q.div, {
                                style: U,
                                children: S && N ? (0,
                                s.jsx)(CountdownTimer, {
                                    until: N + k
                                }) : toHoursAndMinutes((null == M ? void 0 : null === (l = M.craftable) || void 0 === l ? void 0 : l.minutesRequired) || 0)
                            })]
                        })]
                    })]
                }), P && !S && (0,
                s.jsxs)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1
                    },
                    children: [(0,
                    s.jsxs)("div", {
                        className: u()(e2().craftingSection, e2().craftingFontText),
                        style: {
                            overflowY: "hidden",
                            position: "relative",
                            height: G ? void 0 : "18em"
                        },
                        children: [(0,
                        s.jsx)(L.Z, {
                            text: j((0,
                            b.sA)(null == B ? void 0 : B.id, "description"), "")
                        }), (null == M ? void 0 : null === (c = M.craftable) || void 0 === c ? void 0 : null === (o = c.result) || void 0 === o ? void 0 : o.exps) && M.craftable.result.exps.length > 0 && (0,
                        s.jsx)("div", {
                            style: {
                                position: "absolute",
                                bottom: 0,
                                right: 10
                            },
                            children: (0,
                            s.jsx)("ul", {
                                style: {
                                    listStyle: "none",
                                    marginTop: "8px"
                                },
                                children: M.craftable.result.exps.map((e,t)=>(0,
                                s.jsxs)("li", {
                                    style: {
                                        marginTop: "4px"
                                    },
                                    children: [skillToString(e.type), ": ", "+".concat((0,
                                    E.uf)(e.exp), "XP")]
                                }, t))
                            })
                        })]
                    }), M && G && (0,
                    s.jsx)("div", {
                        className: u()(e2().craftingSection, e2().craftingFontText),
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            flexGrow: 1,
                            justifyContent: "space-between",
                            alignItems: "center",
                            overflowY: "hidden"
                        },
                        children: (0,
                        s.jsxs)("div", {
                            className: u()(e2().craftingSectionHighlight, e2().craftingFontText),
                            style: {
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                flexGrow: 1,
                                justifyContent: "space-between"
                            },
                            children: [(0,
                            s.jsxs)("div", {
                                style: {
                                    width: "40%"
                                },
                                children: [(0,
                                s.jsx)("span", {
                                    children: j("result_benefit")
                                }), (0,
                                s.jsx)("ul", {
                                    style: {
                                        listStyle: "none",
                                        marginTop: "8px"
                                    },
                                    children: null === (v = M.craftable) || void 0 === v ? void 0 : null === (p = v.result) || void 0 === p ? void 0 : null === (d = p.benefits) || void 0 === d ? void 0 : d.map(e=>(0,
                                    s.jsx)("li", {
                                        style: {
                                            marginTop: "4px"
                                        },
                                        onMouseEnter: ()=>R(e.description),
                                        onMouseLeave: ()=>R(void 0),
                                        children: j(e.title)
                                    }, e.title))
                                })]
                            }), F && (0,
                            s.jsx)("div", {
                                className: e2().benefitDescription,
                                children: j(F)
                            })]
                        })
                    })]
                }), P && !S ? (0,
                s.jsx)(CraftingRequirements, {
                    craftingCraftable: I,
                    quantityMultiplier: 1
                }) : (0,
                s.jsx)("div", {
                    className: e2().craftingSection,
                    style: {
                        display: "flex",
                        flexGrow: 1
                    }
                }), (0,
                s.jsx)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center"
                    },
                    children: (0,
                    s.jsxs)("button", {
                        type: "button",
                        onClick: e=>{
                            S ? handleClaimCraftable(e) : handleCraftStart(e)
                        }
                        ,
                        disabled: (S || !M || !f(1)) && !w,
                        className: e2().craftingButton,
                        style: {
                            backgroundColor: "transparent",
                            border: "none",
                            backgroundImage: "url('".concat((0,
                            E.Uk)("/game/ui/crafting/crafting_bg_create.png"), "')"),
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "100% 100%",
                            color: "red",
                            padding: "12px",
                            marginTop: "10px"
                        },
                        children: [!S && (0,
                        s.jsx)("span", {
                            children: j("button_create_crafting", {
                                ns: "ui",
                                defaultValue: "Create"
                            })
                        }), S && !w && (0,
                        s.jsx)("span", {
                            children: j("button_crafting", {
                                ns: "ui",
                                defaultValue: "In Progress"
                            })
                        }), S && w && (0,
                        s.jsx)("span", {
                            children: j("button_claim_crafting", {
                                ns: "ui",
                                defaultValue: "Collect"
                            })
                        })]
                    })
                }), !A && T && (0,
                s.jsxs)("div", {
                    className: e2().craftingFontText,
                    style: {
                        marginTop: "8px",
                        textAlign: "end"
                    },
                    children: ["* ", j("inventory_full", {
                        ns: "ui",
                        defaultValue: "Inventory is full"
                    })]
                })]
            })
        }
          , CraftingPages = ()=>(0,
        s.jsxs)("div", {
            className: e2().craftPages,
            children: [(0,
            s.jsx)("div", {
                className: e2().leftPage,
                children: (0,
                s.jsx)("div", {
                    className: e2().inner,
                    children: (0,
                    s.jsx)(CraftingPageRecipeList, {})
                })
            }), (0,
            s.jsx)("div", {
                className: e2().rightPage,
                children: (0,
                s.jsx)("div", {
                    className: e2().inner,
                    children: (0,
                    s.jsx)(CraftingPageDetails, {})
                })
            })]
        })
          , CraftingBook = e=>{
            let {scale: t} = e;
            return (0,
            s.jsx)("div", {
                style: {
                    width: 1014,
                    height: 676,
                    backgroundImage: "url('".concat((0,
                    E.Uk)("/game/ui/crafting/crafting_background_notabs.png"), "')"),
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    transform: "scale3d(".concat(t, ", ").concat(t, ", 1)")
                },
                children: (0,
                s.jsx)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "row"
                    },
                    children: (0,
                    s.jsx)("div", {
                        style: {
                            marginLeft: "128px",
                            display: "flex",
                            flexDirection: "column",
                            width: "894px"
                        },
                        children: (0,
                        s.jsx)(CraftingPages, {})
                    })
                })
            })
        }
          , CloseCrafting = e=>{
            let {style: t} = e
              , i = (0,
            m.T)();
            return (0,
            s.jsx)("button", {
                type: "button",
                onClick: ()=>{
                    i((0,
                    h.F0)())
                }
                ,
                className: e2().craftingCloseButton,
                style: t,
                children: (0,
                s.jsx)("img", {
                    src: (0,
                    E.Uk)("/game/ui/crafting/crafting_exitbutton.png"),
                    width: "100%"
                })
            })
        }
          , MobileWrapper = e=>{
            let {width: t, scale: i, children: n} = e
              , {t: a} = (0,
            x.$)("ui")
              , l = (0,
            m.C)(h.U1)
              , r = (0,
            m.C)(h.Up)
              , o = (0,
            m.T)()
              , c = l ? 580 : 170
              , d = t / 2 - c - 172 * i
              , p = 340 * (1 - i)
              , v = -80 * (1 - i)
              , g = l ? v : p
              , _ = c + 316 * i - 32 * i + (l ? g / 15 : -g / 15);
            return (0,
            s.jsxs)("div", {
                style: {
                    position: "absolute",
                    left: d,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    overflow: "hidden"
                },
                children: [(0,
                s.jsx)("div", {
                    style: {
                        position: "relative",
                        left: -g,
                        top: -p
                    },
                    children: n
                }), (0,
                s.jsx)(CloseCrafting, {
                    style: {
                        left: _,
                        top: l ? 10 - p / 10 : 70 - p / 4,
                        transform: "scale3d(".concat(i, ", ").concat(i, ", 1)")
                    }
                }), l && (0,
                s.jsx)("div", {
                    className: j().uikit,
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        position: "absolute",
                        left: c - 10 - p / 9,
                        top: 2 - p / 13,
                        transform: "scale3d(".concat(i, ", ").concat(i, ", 1)")
                    },
                    children: (0,
                    s.jsx)("button", {
                        type: "button",
                        className: u()(j().pushbutton, j().yellow),
                        onClick: ()=>{
                            o((0,
                            h.sY)({
                                id: void 0
                            }))
                        }
                        ,
                        style: {
                            width: 100,
                            height: 40,
                            display: r ? "none" : void 0
                        },
                        children: a("crafting.mobile.switchLeft", "Back")
                    })
                })]
            })
        }
          , DesktopWrapper = e=>{
            let {scale: t, children: i} = e;
            return (0,
            s.jsxs)("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 670,
                    position: "absolute",
                    top: "calc((100vh - 670px) / 2)",
                    left: "calc((100% - 720px) / 2)"
                },
                children: [(0,
                s.jsx)("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 0
                    },
                    children: i
                }), (0,
                s.jsx)(CloseCrafting, {
                    style: {
                        top: 15 + 310 * (1 - t),
                        right: -92 + 400 * (1 - t),
                        transform: "scale3d(".concat(t, ", ").concat(t, ", 1)")
                    }
                })]
            })
        }
          , CraftingContainer = ()=>{
            let e = (0,
            m.T)()
              , t = (0,
            en.ob)()
              , i = Math.min(t.width / 344, t.height / 676, 1);
            return (0,
            s.jsxs)("div", {
                className: j().modalBackdrop,
                children: [(0,
                s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                    onKeyDown: t=>{
                        "Escape" === t.key && e((0,
                        h.F0)())
                    }
                }), t.width < 1014 * i ? (0,
                s.jsx)(MobileWrapper, {
                    width: t.width,
                    scale: i,
                    children: (0,
                    s.jsx)(CraftingBook, {
                        scale: i
                    })
                }) : (0,
                s.jsx)(DesktopWrapper, {
                    scale: i,
                    children: (0,
                    s.jsx)(CraftingBook, {
                        scale: i
                    })
                })]
            })
        }
        ;
        var e6 = i(41745)
          , e8 = i.n(e6)
          , e9 = i(77497)
          , e7 = i(46787)
          , te = i(86193);
        let tt = {
            icon: "".concat(F.fd, "upcoming.png"),
            text: {
                id: "default_notification_id"
            }
        }
          , ti = {
            error: {
                text: {
                    id: "default_error_notification_id"
                },
                icon: (0,
                E.Uk)("/game/ui/hud/hud_icon_alert.png")
            },
            energy: {
                icon: (0,
                E.Uk)("/game/ui/energy.png")
            },
            coin: {
                icon: (0,
                E.Uk)("/game/ui/hud/hud_icon_coin_berry16.png")
            },
            quest: {
                icon: (0,
                E.Uk)("/game/ui/hud/hud_notification_quest.png")
            },
            mail: {
                icon: (0,
                E.Uk)("/game/ui/hud/hud_icon_mailbox.png")
            }
        };
        function isTradeNotification(e) {
            return "trade" === e.source
        }
        let Notification = e=>{
            var t;
            let {notification: i, outgoing: n=!1, onAccept: a, onDecline: l} = e
              , {t: r} = (0,
            x.$)(["ui", "game"])
              , {uikit: o, frame: c, orange: d, pushbutton: m, orangeinset: p} = j()
              , v = "string" != typeof i.icon || i.icon.includes("/") || "skills" !== i.source && "achievement" !== i.source ? i.icon || i.source && (null === (t = ti[i.source]) || void 0 === t ? void 0 : t.icon) || tt.icon : "".concat(F.fd).concat(i.icon, ".png")
              , {id: h, ...g} = function(e) {
                var t;
                if (e.text && e.stacking) {
                    let {key: t, textPropertyName: i} = e.stacking
                      , n = C.Z.getGameCurrencies()
                      , a = n && Object.values(n).find(e=>{
                        let {id: i} = e;
                        return t.includes(i)
                    }
                    )
                      , l = e.text[i];
                    if (a && "number" == typeof l)
                        return {
                            ...e.text,
                            [i]: (0,
                            E.xG)(l, a)
                        }
                }
                return e.text || e.source && (null === (t = ti[e.source]) || void 0 === t ? void 0 : t.text) || tt.text
            }(i)
              , _ = isTradeNotification(i);
            return (0,
            s.jsx)("div", {
                className: e8().root,
                children: (0,
                s.jsxs)("div", {
                    className: u()(o, c, d, e8().background, {
                        [e8().backgroundOutgoing]: n
                    }),
                    onMouseDown: _ ? void 0 : l,
                    onClick: _ ? void 0 : l,
                    children: [(0,
                    s.jsx)("div", {
                        className: u()(o, c, p, e8().iconBackground),
                        children: (0,
                        s.jsx)("div", {
                            children: (0,
                            s.jsx)("img", {
                                crossOrigin: "anonymous",
                                src: (0,
                                E.b7)(v),
                                style: {
                                    filter: "drop-shadow(3px 3px 2px #000000)"
                                }
                            })
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: e8().textContainer,
                        children: (0,
                        s.jsx)("span", {
                            className: e8().text,
                            children: r(h, g)
                        })
                    }), !!i.duplicates && (0,
                    s.jsx)("div", {
                        className: e8().duplicatesContainer,
                        children: (0,
                        s.jsxs)("span", {
                            className: e8().text,
                            children: ["x", i.duplicates]
                        })
                    }), _ && (0,
                    s.jsxs)(s.Fragment, {
                        children: [(0,
                        s.jsx)("button", {
                            className: u()(o, m),
                            onClick: a,
                            disabled: n,
                            children: r("yes", "Yes")
                        }), (0,
                        s.jsx)("button", {
                            className: u()(o, m),
                            onClick: l,
                            disabled: n,
                            children: r("no", "No")
                        })]
                    })]
                })
            })
        }
          , Notifications = ()=>{
            let[e] = (0,
            _.KO)(e9.wm)
              , [,t] = (0,
            _.KO)(e9.HS)
              , i = (0,
            m.C)(p.x6)
              , [n,a] = r.useState()
              , l = (0,
            m.T)()
              , o = (0,
            m.C)(e7.KU)
              , c = r.useCallback(()=>{
                a(e),
                t(e)
            }
            , [e, t])
              , d = r.useCallback(()=>{
                l((0,
                e7.V)()),
                c()
            }
            , [c, l])
              , u = r.useCallback(()=>{
                e && isTradeNotification(e) && (0,
                te.U)({
                    subcommand: "close",
                    tradeId: o
                }),
                c()
            }
            , [c, o, e]);
            return r.useEffect(()=>{
                if (!e)
                    return;
                let t = isTradeNotification(e) ? 7e3 : 4e3
                  , i = setTimeout(u, t);
                return ()=>clearTimeout(i)
            }
            , [e, u]),
            r.useEffect(()=>{
                if (!n)
                    return;
                let e = setTimeout(()=>{
                    a(void 0)
                }
                , 1e3);
                return ()=>clearTimeout(e)
            }
            , [n]),
            (0,
            s.jsxs)(s.Fragment, {
                children: [n && (0,
                s.jsx)(Notification, {
                    notification: n,
                    outgoing: !0
                }, null == n ? void 0 : n.reactKey), e && (0,
                s.jsx)(Notification, {
                    notification: e,
                    onAccept: d,
                    onDecline: ()=>{
                        (null == e ? void 0 : e.source) !== "quest" || i || l((0,
                        Y.eW)()),
                        u()
                    }
                }, null == e ? void 0 : e.reactKey)]
            })
        }
        ;
        var tn = i(37645)
          , ta = i(31425);
        let URLDisclaimer = e=>{
            let {open: t, link: i, msgKey: n} = e
              , a = (0,
            m.T)()
              , [l,o] = (0,
            r.useState)(i)
              , {t: c} = (0,
            x.$)(["ui"])
              , cancelHandler = ()=>{
                a((0,
                Y.Sm)())
            }
            ;
            function setLink(e) {
                o((0,
                E.b7)(e, !1).replace("//", "").replace(/\/$/, "").replace("/", "/​"))
            }
            let d = t && (!(0,
            E.T1)(i) || !n);
            return (0,
            r.useEffect)(()=>{
                d && (setLink(i),
                (0,
                E.fI)(i) && (0,
                E.Ky)(i).then(e=>{
                    e && e !== i && setLink(e)
                }
                ).catch(()=>{
                    setLink(i)
                }
                ))
            }
            , [i, d]),
            (0,
            s.jsxs)(W.Z, {
                open: t,
                PaperProps: {
                    className: u()(j().uikit, j().frame, j().purple)
                },
                children: [(0,
                s.jsx)(tn.Z, {
                    children: (0,
                    s.jsx)("p", {
                        children: c("externalLink.title", "Navigate to Web Page")
                    })
                }), (0,
                s.jsxs)(Z.Z, {
                    children: [(0,
                    s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                        onKeyDown: e=>{
                            "Escape" === e.key && (e.stopPropagation(),
                            cancelHandler())
                        }
                    }), (0,
                    s.jsxs)("div", {
                        style: {
                            position: "relative",
                            boxSizing: "border-box",
                            overflowX: "hidden"
                        },
                        className: "is-rounded",
                        children: [(0,
                        s.jsx)("p", {
                            children: n ? c(n) : c("externalLink.defaultMsg", "That object has a link to an external site with content not verified by pixels.")
                        }), (0,
                        s.jsx)("br", {}), (0,
                        s.jsxs)("p", {
                            style: {
                                textAlign: "center"
                            },
                            children: [" ", d && l, " "]
                        })]
                    })]
                }), (0,
                s.jsxs)(ta.Z, {
                    children: [(0,
                    s.jsx)("button", {
                        type: "button",
                        className: u()(j().pushbutton, j().standard),
                        onClick: ()=>{
                            if ((0,
                            E.T1)(i))
                                window.location.href = (0,
                                E.Fp)(i);
                            else {
                                var e;
                                null === (e = window.open(i, "_blank")) || void 0 === e || e.focus()
                            }
                            a((0,
                            Y.Sm)())
                        }
                        ,
                        children: c("externalLink.open", "YES")
                    }), (0,
                    s.jsx)("button", {
                        type: "button",
                        className: u()(j().pushbutton, j().standard),
                        onClick: cancelHandler,
                        children: c("externalLink.cancel", "NO")
                    })]
                })]
            })
        }
        ;
        var tl = i(39621)
          , ts = i.n(tl);
        let DraggableDiv = e=>{
            let {left: t, top: i, ...n} = e
              , [a,l] = r.useState()
              , [o,c] = r.useState({
                x: t,
                y: i
            })
              , d = r.useRef(null);
            return (0,
            s.jsx)("div", {
                ...n,
                ref: d,
                style: {
                    left: o.x,
                    top: o.y,
                    userSelect: "none",
                    ...n.style
                },
                onPointerDown: e=>{
                    var t;
                    l({
                        position: o,
                        mouse: {
                            x: e.clientX,
                            y: e.clientY
                        }
                    }),
                    null === (t = n.onPointerDown) || void 0 === t || t.call(n, e)
                }
                ,
                onPointerMove: e=>{
                    var t, i;
                    if (a) {
                        let t = e.clientX - a.mouse.x
                          , n = e.clientY - a.mouse.y;
                        t * t + n * n > 25 && (null === (i = d.current) || void 0 === i || i.setPointerCapture(e.pointerId));
                        let l = a.position.x + t
                          , s = a.position.y + n
                          , r = Math.min(Math.max(0, l), window.innerWidth - 50)
                          , o = Math.min(Math.max(0, s), window.innerHeight - 50);
                        c({
                            x: r,
                            y: o
                        })
                    }
                    null === (t = n.onPointerMove) || void 0 === t || t.call(n, e)
                }
                ,
                onPointerUp: e=>{
                    var t, i;
                    (null === (t = d.current) || void 0 === t ? void 0 : t.hasPointerCapture(e.pointerId)) && d.current.releasePointerCapture(e.pointerId),
                    l(void 0),
                    null === (i = n.onPointerUp) || void 0 === i || i.call(n, e)
                }
            })
        }
          , PlayerOnline = e=>{
            let {mid: t, username: i} = e
              , n = (0,
            m.T)();
            return (0,
            s.jsx)("div", {
                className: u()("clickable", es().username),
                onClick: ()=>{
                    n((0,
                    Y.ol)({
                        mid: t,
                        username: i
                    }))
                }
                ,
                children: i
            })
        }
          , PlayersOnlineContainer = e=>{
            let {open: t, children: i} = e
              , n = (0,
            en.dD)();
            return t ? n ? (0,
            s.jsx)("div", {
                style: {
                    left: 20,
                    top: 160,
                    width: "calc(100% - 40px)",
                    height: "calc(100% - 300px)"
                },
                className: u()(ts().playersWindow, es().overlayWindow, "is-active"),
                children: i
            }) : (0,
            s.jsx)(DraggableDiv, {
                left: 350,
                top: 120,
                style: {
                    width: 250,
                    height: 400
                },
                className: u()(ts().playersWindow, es().overlayWindow, "is-active"),
                children: i
            }) : null
        }
          , PlayersOnline = e=>{
            let {open: t} = e
              , i = (0,
            m.T)();
            (0,
            m.C)(p.$b);
            let {players: n} = O.l.getInstance();
            return (0,
            s.jsxs)(PlayersOnlineContainer, {
                open: t,
                children: [(0,
                s.jsx)("button", {
                    className: es().closeButton,
                    onClick: ()=>{
                        i((0,
                        Y.GP)())
                    }
                    ,
                    type: "button",
                    children: "✖"
                }), (0,
                s.jsxs)("h1", {
                    children: [null == n ? void 0 : n.size, " Player(s):"]
                }), (0,
                s.jsx)("div", {
                    className: es().scrollArea,
                    style: {
                        top: 40,
                        left: 15,
                        overflowX: "hidden"
                    },
                    children: Array.from((null == n ? void 0 : n.values()) || []).filter(e=>{
                        var t;
                        return e && !e.isGuest && !["block", "restrict", "mute"].includes(null !== (t = e.status) && void 0 !== t ? t : "")
                    }
                    ).map(e=>(0,
                    s.jsx)(PlayerOnline, {
                        mid: e.mid,
                        username: e.username
                    }, "player-".concat(e.mid)))
                })]
            })
        }
        ;
        var tr = i(82339)
          , to = i.n(tr)
          , tc = i(87434);
        let ReportContainer = e=>{
            let {children: t} = e
              , i = (0,
            en.dD)();
            return i ? (0,
            s.jsx)("div", {
                style: {
                    left: "10px",
                    top: 230,
                    width: "calc(100% - 20px)",
                    height: 220
                },
                className: u()(es().overlayWindow, to().window, "is-active"),
                children: t
            }) : (0,
            s.jsx)(DraggableDiv, {
                left: 610,
                top: 430,
                className: u()(es().overlayWindow, to().window, "is-active"),
                children: t
            })
        }
          , Report = e=>{
            let {hasBanPermissions: t} = e
              , i = (0,
            m.C)(tc.fp)
              , [n,a] = r.useState("")
              , l = (0,
            m.T)()
              , handleClose = ()=>{
                l((0,
                tc.Hg)())
            }
              , handleSendClick = e=>{
                let {kind: t} = e;
                i && (n || t) && R.ZP.emitEventNow(R.fb.REPORT_PLAYER, {
                    mid: i,
                    message: n,
                    kind: t
                }),
                a(""),
                handleClose()
            }
              , handleInput = e=>{
                var t;
                a(null !== (t = e.target.value) && void 0 !== t ? t : "")
            }
              , o = ""
              , eatKeys = e=>{
                var t;
                "" === e.target.value && (null === (t = e.key) || void 0 === t ? void 0 : t.startsWith("Arrow")) || (o = e.key,
                e.stopPropagation())
            }
              , handleKey = e=>{
                var t;
                null !== (t = e.key) && void 0 !== t && t.startsWith("Arrow") || o !== e.key || (e.stopPropagation(),
                o = "")
            }
            ;
            return (0,
            s.jsxs)(ReportContainer, {
                children: [(0,
                s.jsx)("textarea", {
                    maxLength: 250,
                    className: to().input,
                    value: n,
                    onChange: e=>handleInput(e),
                    onKeyDown: e=>eatKeys(e),
                    onKeyUp: e=>handleKey(e)
                }), (0,
                s.jsxs)("div", {
                    className: to().buttonbar,
                    children: [(0,
                    s.jsx)("button", {
                        onClick: ()=>handleSendClick({}),
                        type: "button",
                        className: u()(to().send, "button"),
                        style: {
                            fontSize: "1em",
                            pointerEvents: "all"
                        },
                        children: "Send Report"
                    }), (0,
                    s.jsx)("button", {
                        onClick: handleClose,
                        type: "button",
                        className: u()(to().cancel, "button"),
                        style: {
                            fontSize: "1em",
                            pointerEvents: "all"
                        },
                        children: "Cancel"
                    })]
                }), t && (0,
                s.jsxs)("div", {
                    children: [(0,
                    s.jsx)("button", {
                        onClick: ()=>handleSendClick({
                            kind: "block"
                        }),
                        type: "button",
                        className: u()(to().other, "button"),
                        style: {
                            fontSize: "1em",
                            pointerEvents: "all"
                        },
                        children: "Block from Game"
                    }), (0,
                    s.jsx)("br", {}), (0,
                    s.jsx)("button", {
                        onClick: ()=>handleSendClick({
                            kind: "restrict"
                        }),
                        type: "button",
                        className: u()(to().other, "button"),
                        style: {
                            fontSize: "1em",
                            pointerEvents: "all"
                        },
                        children: "Stop Trading & Mute"
                    }), (0,
                    s.jsx)("br", {}), (0,
                    s.jsx)("button", {
                        onClick: ()=>handleSendClick({
                            kind: "mute"
                        }),
                        type: "button",
                        className: u()(to().other, "button"),
                        style: {
                            fontSize: "1em",
                            pointerEvents: "all"
                        },
                        children: "Mute"
                    })]
                })]
            })
        }
          , ReportWindow = ()=>{
            let e = (0,
            m.C)(tc.op)
              , t = (0,
            m.C)(p.lA);
            if (!e)
                return null;
            let i = t.full.modmode || t.full.godmode || !1;
            return (0,
            s.jsx)(Report, {
                hasBanPermissions: i
            })
        }
          , Status = e=>{
            let {value: t, captions: i} = e;
            return (0,
            s.jsxs)("div", {
                children: [(0,
                s.jsx)("div", {
                    style: {
                        borderRadius: "16px",
                        width: "16px",
                        height: "16px",
                        display: "inline-block",
                        backgroundColor: t ? "#00ff00" : "#f0f0f0",
                        position: "relative",
                        top: "-1px",
                        marginRight: 10
                    }
                }), (0,
                s.jsx)("span", {
                    children: t ? i.yes : i.no
                })]
            })
        }
          , td = {}
          , PlayerInfoWindow = e=>{
            var t, i, n;
            let {open: a, mid: l, username: o} = e
              , c = (0,
            m.T)()
              , d = function(e) {
                let[t,i] = r.useState("")
                  , n = r.useCallback(()=>{
                    i(O.l.getInstance().getPlayerSessionIdByMid(e) || "")
                }
                , [e]);
                return r.useEffect(()=>{
                    n();
                    let e = setInterval(n, 1e3);
                    return ()=>clearInterval(e)
                }
                , [n]),
                t
            }(l)
              , [p,v] = (0,
            r.useState)(null)
              , [h,g] = (0,
            r.useState)(null)
              , [_,f] = (0,
            r.useState)("about")
              , {t: y} = (0,
            x.$)("ui")
              , handleClose = ()=>{
                c((0,
                Y.dM)())
            }
              , travelToSpeckMap = e=>{
                e && (handleClose(),
                R.ZP.emitEventNow(R.fb.ROOM_WARP, {
                    mapId: e
                }))
            }
            ;
            if ((0,
            r.useEffect)(()=>{
                if (v(null),
                g(null),
                l)
                    try {
                        if (td[l]) {
                            var e, t;
                            let i = td[l];
                            g(i);
                            let n = null === (e = i.cryptoWallets) || void 0 === e ? void 0 : e.filter(e=>(null == e ? void 0 : e.type) === "eth");
                            v(null === (t = n[0]) || void 0 === t ? void 0 : t.address)
                        } else
                            e0.Z.fetchPlayer(l, 1).then(e=>{
                                var t, i;
                                g(e);
                                let n = null === (t = e.cryptoWallets) || void 0 === t ? void 0 : t.filter(e=>(null == e ? void 0 : e.type) === "eth");
                                td[l] = e,
                                v(null === (i = n[0]) || void 0 === i ? void 0 : i.address)
                            }
                            ).catch(()=>{}
                            )
                    } catch (e) {
                        console.log("Error getting wallet", e)
                    }
            }
            , [l]),
            !a)
                return null;
            let k = O.l.getInstance()
              , N = k.getSessionId() === d
              , {players: w} = k
              , S = null == w ? void 0 : w.get(l)
              , I = null == S ? void 0 : S.currentAvatar
              , T = {
                id: (null == I ? void 0 : I.id) || F.ft,
                pieces: null == I ? void 0 : I.pieces
            }
              , P = T.pieces ? JSON.parse(T.pieces) : void 0
              , M = (null == S ? void 0 : S.status) === "block" || (null == S ? void 0 : S.status) === "restrict"
              , D = !M && ["cur_berry", "cur_coins"].includes(C.Z.getDefaultCurrency())
              , E = (null === (t = k.selfPlayer) || void 0 === t ? void 0 : t.modmode) || (null === (i = k.selfPlayer) || void 0 === i ? void 0 : i.godmode)
              , L = (null == S ? void 0 : S.memberships.get("vip")) ? "VIP" : ""
              , B = new Date(null !== (n = null == h ? void 0 : h.createdAt) && void 0 !== n ? n : Date.now()).toLocaleDateString()
              , A = E ? (0,
            s.jsxs)("div", {
                onPointerDown: e=>{
                    e.stopPropagation()
                }
                ,
                className: u()("clickable", ts().modinfo),
                onClick: ()=>{
                    navigator.clipboard.writeText(l),
                    eQ.e.set(e9.W_, [{
                        source: "other",
                        text: {
                            id: "Copied to Clipboard"
                        }
                    }])
                }
                ,
                style: {
                    userSelect: "text"
                },
                children: [l, " ", null == S ? void 0 : S.status]
            }) : void 0
              , V = (0,
            b.Fc)(null == h ? void 0 : h.farms);
            return (0,
            s.jsxs)("div", {
                className: u()(ts().blurbg, j().uikit),
                children: [(0,
                s.jsx)("button", {
                    className: ts().closeButton,
                    onClick: handleClose,
                    type: "button",
                    children: "✖"
                }), (0,
                s.jsx)("div", {
                    className: ts().vipindicator,
                    style: {
                        fontSize: "1.3em",
                        fontWeight: "bold"
                    },
                    children: L
                }), (0,
                s.jsxs)("div", {
                    style: {
                        padding: 12
                    },
                    children: [(0,
                    s.jsx)("div", {
                        className: ts().playericon,
                        children: (0,
                        s.jsx)("div", {
                            children: P ? (0,
                            s.jsx)(X.z, {
                                selectedTraits: P,
                                symbol: T.id,
                                height: 70
                            }) : (0,
                            s.jsx)("div", {
                                style: {
                                    height: 70
                                }
                            })
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: ts().username,
                        children: (0,
                        s.jsx)(Status, {
                            value: !!d,
                            captions: {
                                yes: o,
                                no: "".concat(o, " (Offline)")
                            }
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: ts().playerbuttons,
                        children: N ? (0,
                        s.jsx)("button", {
                            type: "button",
                            className: u()(j().pushbutton, j().purple),
                            onClick: ()=>{
                                R.ZP.emitEventNow(R.fb.LINK_OPEN, {
                                    link: "/dashboard/vip",
                                    msgKey: ["link.vipdashboard", "Open Pixels VIP Dashboard?"]
                                })
                            }
                            ,
                            children: y("button.VIP", "VIP Page")
                        }) : (0,
                        s.jsxs)(s.Fragment, {
                            children: [D && (0,
                            s.jsx)("button", {
                                onClick: ()=>{
                                    (0,
                                    te.U)({
                                        subcommand: "open",
                                        otherPlayerSessionId: d
                                    }),
                                    handleClose()
                                }
                                ,
                                className: u()(j().pushbutton, j().purple),
                                disabled: !d,
                                style: {
                                    width: "100%",
                                    backgroundColor: "#622AFF",
                                    padding: 10,
                                    color: "white",
                                    height: "62px"
                                },
                                children: y("button.trade", "Trade")
                            }), (0,
                            s.jsx)("button", {
                                onClick: ()=>travelToSpeckMap(V),
                                className: u()(j().pushbutton, j().purple),
                                disabled: !V,
                                style: {
                                    width: "100%",
                                    backgroundColor: "#622AFF",
                                    padding: 10,
                                    color: "white",
                                    marginTop: 6,
                                    height: "62px"
                                },
                                children: y("button.visitspeck", "Visit")
                            }), (0,
                            s.jsx)("button", {
                                onClick: ()=>{
                                    c((0,
                                    tc.ht)({
                                        mid: l
                                    }))
                                }
                                ,
                                className: u()(j().pushbutton, j().purple),
                                style: {
                                    width: "100%",
                                    backgroundColor: "#622AFF",
                                    padding: 10,
                                    color: "white",
                                    marginTop: 6,
                                    height: "62px"
                                },
                                children: y("button.report", "Report")
                            })]
                        })
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: ts().tabs,
                    children: [(0,
                    s.jsx)("div", {
                        onClick: ()=>f("about"),
                        className: u()({
                            clickable: "about" !== _,
                            [ts().active]: "about" === _
                        }),
                        children: "About"
                    }), (0,
                    s.jsx)("div", {
                        onClick: ()=>f("skills"),
                        className: u()({
                            clickable: "skills" !== _,
                            [ts().active]: "skills" === _
                        }),
                        children: "Skills"
                    })]
                }), (0,
                s.jsx)("div", {
                    className: ts().tabarea,
                    children: h && (0,
                    s.jsxs)(s.Fragment, {
                        children: [(0,
                        s.jsxs)("div", {
                            className: u()(ts().aboutframe, {
                                [ts().visible]: "about" === _
                            }),
                            children: ["Joined: ", B, (0,
                            s.jsx)("br", {}), "ETH: ", p, (0,
                            s.jsx)("br", {}), A]
                        }), (0,
                        s.jsx)("div", {
                            className: u()(ts().skillsframe, j().scrollArea, {
                                [ts().visible]: "skills" === _
                            }),
                            children: (0,
                            s.jsx)(SkillsList, {
                                getLevelData: e=>{
                                    var t;
                                    return null == h ? void 0 : null === (t = h.levels) || void 0 === t ? void 0 : t[e]
                                }
                            })
                        })]
                    })
                })]
            })
        }
        ;
        var tu = i(92217);
        let CriticalMessage = ()=>{
            let {isActive: e, text: t} = (0,
            m.C)(p.px)
              , i = (0,
            m.C)(tu.Gq)
              , n = (0,
            m.C)(p.qB)
              , {t: a} = (0,
            x.$)(["ui"]);
            return e && t && i && !n ? (0,
            s.jsx)("div", {
                style: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translateX(-50%) translateY(-50%)",
                    pointerEvents: "none",
                    maxWidth: "450px",
                    padding: "20px",
                    background: "rgba(255,255,255,0.5)",
                    color: "black",
                    fontFamily: "Kemco pixel",
                    fontSize: "30px",
                    overflow: "hidden",
                    border: "4px solid rgba(0,0,0,0.5)",
                    borderRadius: "8px",
                    textAlign: "center",
                    display: e ? "flex" : "none"
                },
                children: a(t)
            }) : (0,
            s.jsx)(s.Fragment, {})
        }
        ;
        var tm = i(19445);
        let InventoryItemEmpty = e=>{
            let {isOnActiveRow: t} = e;
            return (0,
            s.jsx)("div", {
                className: D().inventoryItem,
                children: (0,
                s.jsx)("img", {
                    draggable: !1,
                    className: u()(D().inventoryItemBackground, {
                        [D().activeRow]: t
                    })
                })
            })
        }
          , ItemSlot = e=>{
            let {onClick: t, inventorySlot: i, isSelected: n, isUsable: a, isOnActiveRow: l} = e;
            return (0,
            s.jsx)("div", {
                draggable: !1,
                onClick: t,
                onContextMenu: t,
                className: u()(D().inventoryBox, {
                    [D().unusableSlot]: !a
                }),
                children: i && i.item && i.quantity ? (0,
                s.jsx)(InventoryItem, {
                    isSelected: n,
                    isUsable: a,
                    inventorySlot: i,
                    isOnActiveRow: l
                }) : (0,
                s.jsx)(InventoryItemEmpty, {
                    isOnActiveRow: l
                })
            })
        }
          , SwitchPageButton = e=>{
            let {onSwitchPage: t, className: i, children: n} = e;
            return (0,
            s.jsx)("button", {
                type: "button",
                className: u()(D().page, i),
                onClick: t,
                children: n
            })
        }
          , InventorySlots = e=>{
            let {mid: t, inventory: i, maxSlots: n, disabled: a=!1} = e
              , l = (0,
            m.T)()
              , o = (0,
            m.C)(tm.pc)
              , c = (0,
            m.C)(tm.xM)
              , [d,p] = r.useState(0);
            if (r.useMemo(()=>{
                p(0)
            }
            , [t]),
            !(null == i ? void 0 : i.slots))
                return console.log("no slots on inventory"),
                null;
            t && (o = -1);
            let v = JSON.parse(JSON.stringify(i))
              , h = Object.values(v.slots).reduce((e,t)=>Math.max(e, t.slot), -1)
              , g = (null == v ? void 0 : v.size) || 18
              , x = Math.max(g, h + 1);
            n > 0 && x > n && (x = n);
            let _ = Math.floor((x - 1) / 18)
              , f = Math.min(18, x - 18 * d)
              , getSlotItem = e=>{
                if (v && v.slots && 0 !== Object.keys(v.slots).length)
                    return Object.values(v.slots).find(t=>t.slot === e)
            }
              , clickedSlot = (e,i)=>{
                var n;
                if (a)
                    return;
                e.preventDefault(),
                e.stopPropagation();
                let s = getSlotItem(i);
                !function(e) {
                    let t = e.item
                      , i = e.selected && e.slot === e.selected.slot && e.selected.storage === e.storageMid
                      , n = 2 === e.button || e.shift
                      , a = e.storageMid
                      , l = e.slot;
                    if (i) {
                        (0,
                        e.dispatch)((0,
                        tm.aq)());
                        return
                    }
                    if (e.selected && -1 !== e.selected.slot) {
                        if (!e.usableSlot)
                            return;
                        if (n) {
                            let t = Math.floor(e.selected.quantity / 2);
                            t > 0 && e.dispatch((0,
                            tm.oi)({
                                targetIndex: l,
                                targetContainer: e.storageMid,
                                sourceIndex: e.selected.slot,
                                sourceContainer: e.selected.storage,
                                splitQuantity: t
                            }));
                            return
                        }
                        (0,
                        e.dispatch)((0,
                        tm.aq)()),
                        e.dispatch((0,
                        tm.oi)({
                            targetIndex: l,
                            targetContainer: e.storageMid,
                            sourceIndex: e.selected.slot,
                            sourceContainer: e.selected.storage
                        })),
                        l = e.selected.slot,
                        a = e.selected.storage
                    }
                    if (!t)
                        return;
                    let s = C.Z.getGameItem(t);
                    e.storageMid && n && (!e.selected || -1 === e.selected.slot) ? function(e) {
                        var t;
                        let i = null === (t = O.l.getInstance().selfPlayer) || void 0 === t ? void 0 : t.inventory;
                        if (!i)
                            return;
                        let n = i.size || 18
                          , a = i.activeRow || 0
                          , l = -1;
                        for (let e = 0; e < n; e++) {
                            let t = (6 * a + e) % n;
                            if (!i.slots.has("".concat(t))) {
                                l = t;
                                break
                            }
                        }
                        -1 !== l && e.dispatch((0,
                        tm.oi)({
                            targetIndex: l,
                            sourceIndex: e.slot,
                            sourceContainer: e.storageMid
                        }))
                    }({
                        storageMid: e.storageMid,
                        dispatch: e.dispatch,
                        slot: e.slot
                    }) : e.dispatch((0,
                    tm.$Z)({
                        selectedEquipment: l,
                        item: s,
                        mid: a,
                        quantity: e.quantity
                    }))
                }({
                    selected: c,
                    slot: i,
                    storageMid: t,
                    item: null == s ? void 0 : s.item,
                    quantity: null !== (n = null == s ? void 0 : s.quantity) && void 0 !== n ? n : 0,
                    usableSlot: i < g,
                    shift: e.shiftKey,
                    alt: e.altKey,
                    meta: e.metaKey,
                    ctrl: e.ctrlKey,
                    button: e.button,
                    dispatch: l
                })
            }
            ;
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)("div", {
                    className: u()(D().inventoryContent, {
                        [D().disabled]: a
                    }),
                    children: (0,
                    s.jsx)("div", {
                        className: D().inventorySlotWrapper,
                        children: [...Array(f)].map((e,i)=>{
                            let n = 18 * d + i
                              , l = getSlotItem(n)
                              , r = o <= n / 6 && n / 6 < o + 1;
                            if (!(n >= x) && (!(n >= g) || l))
                                return (0,
                                s.jsx)(ItemSlot, {
                                    onClick: e=>clickedSlot(e, n),
                                    storageSource: t,
                                    i: n,
                                    isUsable: n < g && !a,
                                    isSelected: (null == c ? void 0 : c.slot) === n && c.storage === t,
                                    inventorySlot: l,
                                    isOnActiveRow: r
                                }, n)
                        }
                        )
                    })
                }), d > 0 && (0,
                s.jsx)(SwitchPageButton, {
                    className: u()("clickable", D().prev),
                    onSwitchPage: ()=>p(e=>Math.max(e - 1, 0)),
                    children: "<"
                }), d < _ && (0,
                s.jsx)(SwitchPageButton, {
                    className: u()("clickable", D().next),
                    onSwitchPage: ()=>p(e=>e + 1),
                    children: ">"
                })]
            })
        }
          , InventoryContainer = e=>{
            var t, i, n, a, l, r;
            let o, c, {mid: d} = e, p = (0,
            m.T)(), v = (0,
            m.C)(tm.xM), {t: h} = (0,
            x.$)(["ui"]), g = "backpack", _ = O.l.getInstance();
            if (d) {
                if ("wardrobe" === d)
                    o = null === (n = _.selfPlayer) || void 0 === n ? void 0 : n.wardrobe,
                    g = "wardrobe";
                else if (d === _.mapStorageId)
                    o = _.getMapStorage(),
                    g = "mapstorage";
                else if (d === (null === (i = _.selfPlayer) || void 0 === i ? void 0 : null === (t = i.pet) || void 0 === t ? void 0 : t.mid))
                    o = _.selfPlayer.pet.inventory,
                    g = "petstorage";
                else {
                    let e = _.getEntityByUniqueId(d);
                    if (e) {
                        if (e.storage)
                            o = e.storage;
                        else {
                            let t = C.Z.getGameEntity(e.entity);
                            o = {
                                size: (null == t ? void 0 : null === (a = t.storage) || void 0 === a ? void 0 : a.slotCount) || 18,
                                slots: {},
                                transient: (null == t ? void 0 : null === (l = t.storage) || void 0 === l ? void 0 : l.transient) || !1
                            }
                        }
                    } else
                        console.error("specified storage entity not found", d);
                    g = (null == o ? void 0 : o.transient) ? "tempStorage" : "storage"
                }
            } else
                o = null === (r = _.selfPlayer) || void 0 === r ? void 0 : r.inventory,
                g = "backpack";
            if (!(null == o ? void 0 : o.slots))
                return console.log("no slots on inventory"),
                null;
            let f = JSON.parse(JSON.stringify(o))
              , y = Object.values(f.slots).reduce((e,t)=>Math.max(e, t.slot), -1)
              , j = (null == f ? void 0 : f.size) || 18
              , b = "tempStorage" === g ? 6 : 0
              , k = h("inventory.mapstorageCapacity", "Capacity");
            switch (g) {
            case "backpack":
                c = h("inventory.backpack", "Click and move items to arrange. TAB key to change active row.");
                break;
            case "storage":
                c = h("inventory.storage", "Move items between action bar and storage slots.");
                break;
            case "petstorage":
                c = h("inventory.petstorage", "Your pet can carry things for you. Move items between pet and the action bar.");
                break;
            case "tempStorage":
                c = h("inventory.tempStorage", "Move items from action bar to trash slot.");
                break;
            case "mapstorage":
                c = h("inventory.mapstorage", "Bonus collected items. Move items to empty slot on action bar.");
                break;
            case "wardrobe":
                c = h("inventory.storage", "Move cosmetic items between action bar and wardrobe slots.")
            }
            return (0,
            s.jsxs)("div", {
                draggable: !1,
                className: u()(D().inventoryContainer, {
                    [D().backpack]: "backpack" === g
                }, {
                    [D().storage]: "storage" === g || "wardrobe" === g
                }, {
                    [D().tempStorage]: "tempStorage" === g
                }, {
                    [D().mapstorage]: "mapstorage" === g
                }, {
                    [D().petstorage]: "petstorage" === g
                }, {
                    [D().empty]: -1 === y
                }),
                children: [(0,
                s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                    onKeyDown: e=>{
                        "Escape" === e.key && -1 === v.slot && p((0,
                        tm.me)())
                    }
                    ,
                    block: !1
                }), (0,
                s.jsx)("button", {
                    type: "button",
                    className: D().closeBtn,
                    onClick: ()=>p((0,
                    tm.me)()),
                    children: (0,
                    s.jsx)("img", {
                        src: ""
                    })
                }), (0,
                s.jsxs)("div", {
                    className: D().inventoryHeader,
                    children: [c, "mapstorage" === g && " ".concat(k, ": ").concat(j)]
                }), (0,
                s.jsx)(InventorySlots, {
                    mid: d,
                    inventory: o,
                    maxSlots: b,
                    disabled: !1
                })]
            })
        }
          , InventoryWindow = ()=>{
            let e = (0,
            m.C)(tm.NS);
            return e.isOpen ? (0,
            s.jsx)(InventoryContainer, {
                mid: e.mid
            }) : null
        }
        ;
        var tp = i(60888)
          , tv = i(59462);
        let Questlog = ()=>{
            let e;
            let {isVisible: t} = (0,
            m.C)(p.y4)
              , i = (0,
            m.T)()
              , {t: n} = (0,
            x.$)(["ui", "quest"])
              , a = (0,
            en.dD)()
              , l = (0,
            m.C)(p.lA)
              , r = C.Z.getGameQuests()
              , o = (0,
            ei.GU)()
              , onLinkClick = (e,t)=>{
                R.ZP.emitEventNow(R.fb.LINK_OPEN, {
                    link: e,
                    msgKey: t
                })
            }
              , c = Object.values(l.full.quests || {})
              , getPlayerQuestStatus = e=>c.find(t=>t.questId === e)
              , getQuestData = e=>{
                let t = getPlayerQuestStatus(e)
                  , i = null == r ? void 0 : r[e];
                if (t) {
                    var a, l, s, c, d;
                    let e = (null === (a = t.completedSteps) || void 0 === a ? void 0 : a.length) ? t.completedSteps[t.completedSteps.length - 1].step : 0
                      , r = null == i ? void 0 : null === (l = i.steps.find(t=>t.step === e + 1)) || void 0 === l ? void 0 : l.hint;
                    return {
                        id: null == i ? void 0 : i.id,
                        kind: null !== (s = null == i ? void 0 : i.kind) && void 0 !== s ? s : "normal",
                        name: n(null !== (c = null == i ? void 0 : i.title) && void 0 !== c ? c : "", {
                            ns: "quest",
                            defaultValue: ""
                        }),
                        description: n(null !== (d = null == i ? void 0 : i.description) && void 0 !== d ? d : "", {
                            ns: "quest",
                            defaultValue: ""
                        }),
                        complete: t.isComplete || !1,
                        hint: r ? n(r, {
                            ns: "quest",
                            defaultValue: ""
                        }) : "",
                        started: t.createdAt,
                        show: i && "hidden" !== i.kind && (!i.expired || t.isComplete) && (!i.tenants || 0 === i.tenants.length || i.tenants.includes(o.name))
                    }
                }
            }
            ;
            if (!t)
                return (0,
                s.jsx)(s.Fragment, {});
            if (l.core.isGuest)
                e = (0,
                s.jsxs)(s.Fragment, {
                    children: [n("guestQuestDialog", "To participate in Quests, log in using your MetaMask wallet"), (0,
                    s.jsx)("br", {}), (0,
                    s.jsx)("button", {
                        className: j().pushbutton,
                        type: "button",
                        onClick: ()=>onLinkClick("https://metamask.io", "externalLink.metamask"),
                        children: n("metamaskLink", "Visit MetaMask")
                    })]
                });
            else {
                let t = Object.values(r || {}).map(e=>getQuestData(e.id)).filter(e=>null == e ? void 0 : e.show);
                t.sort((e,t)=>e.complete === t.complete ? e.started - t.started : e.complete ? 1 : -1),
                e = t.map(e=>(0,
                s.jsxs)("div", {
                    style: {
                        marginBottom: 15
                    },
                    children: [(0,
                    s.jsxs)("div", {
                        style: {
                            display: "flex",
                            alignItems: "center"
                        },
                        children: [e.complete ? (0,
                        s.jsx)(tp.Z, {
                            fontSize: "large",
                            className: j().colorGreen
                        }) : (0,
                        s.jsx)(tv.Z, {
                            fontSize: "large"
                        }), (0,
                        s.jsx)("span", {
                            className: u()(j().brandFontTitle, j().colorOrange),
                            style: {
                                fontSize: "1.3em",
                                paddingLeft: 10
                            },
                            children: e.name
                        })]
                    }), !e.complete && (0,
                    s.jsxs)("div", {
                        className: j().brandFont2,
                        style: {
                            paddingLeft: 50
                        },
                        children: [e.description, (0,
                        s.jsxs)("span", {
                            className: u()(j().colorGreen),
                            children: [" ", e.hint]
                        })]
                    })]
                }, e.id))
            }
            return (0,
            s.jsxs)(W.Z, {
                open: t,
                PaperProps: {
                    className: u()(j().uikit, j().frame, j().purpleinset),
                    style: a ? {
                        marginLeft: 0,
                        marginRight: 0
                    } : void 0
                },
                style: a ? {
                    width: "100%"
                } : {
                    minWidth: 700,
                    maxWidth: 1200,
                    margin: "auto"
                },
                children: [(0,
                s.jsx)(tn.Z, {
                    className: j().dialogTitle,
                    children: (0,
                    s.jsx)("span", {
                        className: j().brandFontTitle,
                        children: n("quests", "Quest Progress")
                    })
                }), (0,
                s.jsx)(Z.Z, {
                    className: u()(j().brandFont2, j().scrollArea),
                    children: e
                }), (0,
                s.jsx)(ta.Z, {
                    children: (0,
                    s.jsx)("button", {
                        className: j().pushbutton,
                        type: "button",
                        onClick: ()=>{
                            i((0,
                            Y.eW)())
                        }
                        ,
                        children: n("close", "CLOSE")
                    })
                })]
            })
        }
          , ConfirmationBox = e=>{
            let {onYes: t, onNo: i} = e
              , {t: n} = (0,
            x.$)("ui");
            return (0,
            s.jsx)("div", {
                className: D().confirmationBoxContainer,
                children: (0,
                s.jsxs)("div", {
                    className: u()(j().uikit, j().frame, j().orangeinset, D().confirmationBox),
                    children: [(0,
                    s.jsx)("div", {
                        children: (0,
                        s.jsx)("span", {
                            children: n("trade.areyousure", "Give so much stuff away?")
                        })
                    }), (0,
                    s.jsxs)("div", {
                        className: D().confirmationBoxButtons,
                        children: [(0,
                        s.jsx)("button", {
                            className: u()(j().uikit, j().pushbutton),
                            onClick: t,
                            children: n("trade.yes", "Yes")
                        }), (0,
                        s.jsx)("button", {
                            className: u()(j().uikit, j().pushbutton),
                            onClick: i,
                            children: n("trade.no", "No")
                        })]
                    })]
                })
            })
        }
          , RepeatingButton = e=>{
            let {onClick: t, ...i} = e
              , [n,a] = r.useState(!1);
            r.useEffect(()=>{
                let e;
                if (!n)
                    return;
                let i = setTimeout(()=>{
                    e = setInterval(t, 50)
                }
                , 250);
                return ()=>{
                    clearTimeout(i),
                    clearInterval(e)
                }
            }
            , [n, t]);
            let handleStopClicking = ()=>{
                a(!1)
            }
            ;
            return (0,
            s.jsx)("button", {
                ...i,
                onMouseDown: ()=>{
                    t(),
                    a(!0)
                }
                ,
                onMouseUp: handleStopClicking,
                onMouseLeave: handleStopClicking
            })
        }
          , EditableQuantity = e=>{
            let {value: t, setValue: i, allowZero: n, classes: a} = e
              , [l,o] = r.useState(0)
              , c = r.useCallback(e=>{
                let t = Number(e);
                "" !== e && (t > 0 || n && 0 === t) && (i(t),
                o(e=>e + 1))
            }
            , [i, n]);
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)(RepeatingButton, {
                    onClick: ()=>c(t - 1),
                    className: null == a ? void 0 : a.back,
                    children: (0,
                    s.jsx)("img", {
                        src: (0,
                        E.Uk)("/game/ui/arrow_left_black.png")
                    })
                }), (0,
                s.jsx)("input", {
                    defaultValue: t,
                    className: null == a ? void 0 : a.input,
                    onBlur: e=>{
                        c(e.target.value)
                    }
                    ,
                    onKeyDown: e=>{
                        e.stopPropagation(),
                        "Enter" === e.key && c(e.currentTarget.value)
                    }
                    ,
                    type: "number"
                }, l * t), (0,
                s.jsx)(RepeatingButton, {
                    onClick: ()=>c(t + 1),
                    className: null == a ? void 0 : a.forward,
                    children: (0,
                    s.jsx)("img", {
                        src: (0,
                        E.Uk)("/game/ui/arrow_right_black.png")
                    })
                })]
            })
        }
          , TradeCharacterSection = e=>{
            var t;
            let {className: i, player: n, items: a, didAgree: l, onClick: o, setItemQuantity: c, coins: d, setCoins: m, tradeValue: p} = e
              , {t: v} = (0,
            x.$)("ui")
              , h = C.Z.getDefaultCurrency()
              , g = null === (t = C.Z.getGameCurrencies()) || void 0 === t ? void 0 : t[h]
              , _ = r.useMemo(()=>JSON.parse((null == n ? void 0 : n.currentAvatar.pieces) || "{}"), [null == n ? void 0 : n.currentAvatar.pieces]);
            return g ? (0,
            s.jsxs)("div", {
                className: i,
                children: [n && (0,
                s.jsxs)(s.Fragment, {
                    children: [(0,
                    s.jsx)("div", {
                        className: D().character,
                        children: (0,
                        s.jsx)(X.z, {
                            selectedTraits: _,
                            symbol: n.currentAvatar.id,
                            height: 75
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: D().username,
                        children: (0,
                        s.jsx)("span", {
                            children: n.username
                        })
                    })]
                }), p || 0 === p ? (0,
                s.jsxs)("div", {
                    className: D().tradevalue,
                    children: [v("trade-value", "Trade Value"), (0,
                    s.jsx)("br", {}), (0,
                    s.jsx)("span", {
                        children: (0,
                        E.xG)(p, g)
                    })]
                }) : (0,
                s.jsx)("div", {}), (0,
                s.jsxs)("div", {
                    className: D().tradeCoins,
                    children: [(0,
                    s.jsx)("img", {
                        className: j()["coin-icon"],
                        src: g.sprite.image
                    }), m ? (0,
                    s.jsx)(EditableQuantity, {
                        value: d,
                        setValue: m,
                        classes: {
                            input: D().coinQuantity
                        },
                        allowZero: !0
                    }) : (0,
                    s.jsx)("span", {
                        className: D().receiveCoins,
                        children: (0,
                        E.xG)(d, g)
                    })]
                }), a && (0,
                s.jsx)("div", {
                    className: D().inventoryContent,
                    children: (0,
                    s.jsx)("div", {
                        className: D().inventorySlotWrapper,
                        children: [...Array(6)].map((e,t)=>{
                            let i = a.find(e=>e.slot === t);
                            return (0,
                            s.jsxs)("div", {
                                className: u()(D().tradeSlotWrapper, {
                                    [D().agreeToTradeSlot]: l
                                }),
                                children: [(0,
                                s.jsx)(ItemSlot, {
                                    onClick: e=>{
                                        e.preventDefault(),
                                        e.stopPropagation(),
                                        o(e.button, t)
                                    }
                                    ,
                                    storageSource: "trade",
                                    isSelected: !1,
                                    isUsable: !0,
                                    i: t,
                                    inventorySlot: i,
                                    isOnActiveRow: !1
                                }), i && c && (0,
                                s.jsx)(EditableQuantity, {
                                    value: i.quantity,
                                    setValue: e=>c(i, e),
                                    classes: {
                                        back: D().tradeArrowLeft,
                                        forward: D().tradeArrowRight,
                                        input: D().tradeQuantity
                                    }
                                })]
                            }, t)
                        }
                        )
                    })
                })]
            }) : null
        }
          , TradeContainer = e=>{
            let {tradeId: t, trade: i, tradeValue: n} = e;
            r.useEffect(()=>{
                let e = setInterval(()=>{
                    (0,
                    te.U)({
                        subcommand: "update",
                        tradeId: t,
                        trade: {}
                    })
                }
                , 5e3);
                return ()=>clearInterval(e)
            }
            , [t]);
            let a = (0,
            m.T)()
              , [l,o] = r.useState(!1)
              , c = O.l.getInstance()
              , d = c.getSessionId()
              , [p] = Object.keys(i.players).filter(e=>e !== d)
              , v = c.getPlayerCoreBySessionId(d)
              , h = c.getPlayerCoreBySessionId(p)
              , g = C.Z.getDefaultCurrency();
            r.useEffect(()=>{
                let e = setInterval(()=>{
                    c.getPlayerCoreBySessionId(p) || (0,
                    te.U)({
                        subcommand: "close",
                        tradeId: t
                    })
                }
                , 1e3);
                return ()=>clearInterval(e)
            }
            , []);
            let agreeToTrade = e=>{
                (0,
                te.U)({
                    subcommand: "update",
                    tradeId: t,
                    trade: {
                        agreedToVersion: e ? i.version : -1
                    }
                })
            }
              , x = i.players[d]
              , _ = (null == x ? void 0 : x.agreedToVersion) === i.version
              , f = i.players[p];
            return (0,
            s.jsxs)("div", {
                className: u()(D().inventoryContainer, D().storage, D().trade),
                children: [(0,
                s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                    onKeyDown: e=>{
                        "Escape" === e.key && (0,
                        te.U)({
                            subcommand: "close",
                            tradeId: t
                        })
                    }
                }), (0,
                s.jsx)(TradeCharacterSection, {
                    tradeValue: n.tradeValue,
                    isSelf: !0,
                    className: D().selfPlayerWrapper,
                    player: v,
                    items: null == x ? void 0 : x.items,
                    didAgree: _,
                    onClick: (e,t)=>{
                        a((0,
                        e7.gJ)({
                            slot: t,
                            mouseButton: e
                        })),
                        a((0,
                        tm.aq)())
                    }
                    ,
                    setItemQuantity: (e,t)=>{
                        var i;
                        let n = (0,
                        te.V)(e.originalSource, e.originalSlot)
                          , l = Math.floor(Math.min(Math.max(t, 0), null !== (i = null == n ? void 0 : n.quantity) && void 0 !== i ? i : e.quantity));
                        l !== e.quantity && a((0,
                        e7.sU)({
                            slot: e.slot,
                            adjustment: l,
                            sourceSlot: e.originalSlot,
                            item: e.item
                        }))
                    }
                    ,
                    coins: null == x ? void 0 : x.coins,
                    setCoins: e=>{
                        var i, n;
                        let a = (null === (n = c.currentPlayer.full.coinInventory) || void 0 === n ? void 0 : null === (i = n.find(e=>e.currencyId === g)) || void 0 === i ? void 0 : i.balance) || 0
                          , l = Math.min(Math.max(e, 0), a);
                        l !== x.coins && (0,
                        te.U)({
                            tradeId: t,
                            subcommand: "update",
                            trade: {
                                coins: l
                            }
                        })
                    }
                }), (0,
                s.jsx)(TradeCharacterSection, {
                    tradeValue: n.otherTradeValue,
                    className: D().otherPlayerWrapper,
                    player: h,
                    items: null == f ? void 0 : f.items,
                    onClick: ()=>!1,
                    didAgree: (null == f ? void 0 : f.agreedToVersion) === i.version,
                    coins: null == f ? void 0 : f.coins
                }), (0,
                s.jsx)("div", {
                    className: D().tradeButtons,
                    children: (0,
                    s.jsx)("button", {
                        onClick: ()=>{
                            let e = !!(null == x ? void 0 : x.items.length) || (null == x ? void 0 : x.coins) > 0
                              , t = !!(null == f ? void 0 : f.items.length) || (null == f ? void 0 : f.coins) > 0;
                            _ || !e || t ? agreeToTrade(!_) : o(!0)
                        }
                        ,
                        children: _ ? "Disagree" : "Agree"
                    })
                }), (0,
                s.jsx)("button", {
                    type: "button",
                    className: D().closeBtn,
                    onClick: ()=>{
                        (0,
                        te.U)({
                            subcommand: "close",
                            tradeId: t
                        })
                    }
                    ,
                    children: (0,
                    s.jsx)("img", {
                        src: ""
                    })
                }), l && (0,
                s.jsx)(ConfirmationBox, {
                    onYes: ()=>{
                        agreeToTrade(!0),
                        o(!1)
                    }
                    ,
                    onNo: ()=>o(!1)
                })]
            })
        }
        ;
        function useTrade() {
            let[e] = (0,
            _.KO)(e7.eH)
              , t = (0,
            m.C)(e7.sG);
            return e ? void 0 : t
        }
        let TradeWindow = ()=>{
            let e = useTrade()
              , t = (0,
            m.C)(e7.KU)
              , i = (0,
            m.C)(e7.$6);
            return e ? (0,
            s.jsx)(TradeContainer, {
                trade: e,
                tradeId: t,
                tradeValue: i
            }) : null
        }
        ;
        var th = i(51912)
          , tg = i.n(th)
          , tx = i(98597)
          , t_ = i.n(tx);
        let InfiniportalActive_InfiniportalActive = ()=>{
            var e;
            let t = function() {
                let e = r.useCallback(()=>(0,
                b.HX)("farms-active", async()=>{
                    var e;
                    let t = await (null === (e = O.l.getInstance().client) || void 0 === e ? void 0 : e.getAvailableRooms())
                      , i = t.reduce((e,t)=>{
                        let {clients: i, metadata: n} = t;
                        if (((null == n ? void 0 : n.mapId.includes("pixelsNFTFarm-")) || (null == n ? void 0 : n.mapId.includes("shareRent"))) && i) {
                            var a;
                            e[null == n ? void 0 : n.mapId] = {
                                clients: i + ((null === (a = e[null == n ? void 0 : n.mapId]) || void 0 === a ? void 0 : a.clients) || 0),
                                name: null == n ? void 0 : n.name
                            }
                        }
                        return e
                    }
                    , {});
                    return Object.entries(i).sort((e,t)=>{
                        let[,i] = e
                          , [,n] = t;
                        return n.clients - i.clients
                    }
                    ).map(e=>{
                        let[t,{name: i, clients: n}] = e;
                        return {
                            id: t,
                            name: null != i ? i : function(e) {
                                let t = e.match(/\d+$/)
                                  , i = t && t[0];
                                return e.includes("shareRent") ? "Plot #".concat(i) : "Farm #".concat(i)
                            }(t),
                            clients: n
                        }
                    }
                    )
                }
                ), []);
                return FarmsRequest_useRequest(e)
            }()
              , i = (0,
            m.T)();
            return "fetching" === t ? (0,
            s.jsx)(Loading_Loading, {}) : (0,
            s.jsx)("div", {
                style: {
                    height: "calc(100% - 1px)"
                },
                className: u()(j().scrollArea),
                children: (0,
                s.jsx)("div", {
                    style: {
                        marginTop: 16,
                        marginLeft: 16,
                        marginRight: 16
                    },
                    children: null == t ? void 0 : null === (e = t.data) || void 0 === e ? void 0 : e.map(e=>(0,
                    s.jsxs)("div", {
                        style: {
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: 8
                        },
                        children: [(0,
                        s.jsx)("div", {
                            style: {
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                maxWidth: "65%",
                                fontFamily: "Arial",
                                fontSize: 15,
                                fontWeight: 600
                            },
                            children: e.name
                        }), (0,
                        s.jsx)("div", {
                            style: {
                                width: 24
                            }
                        }), (0,
                        s.jsxs)("div", {
                            style: {
                                display: "flex"
                            },
                            children: [(0,
                            s.jsxs)("div", {
                                style: {
                                    fontFamily: "arial",
                                    fontSize: 14
                                },
                                children: [e.clients, " Players"]
                            }), (0,
                            s.jsx)("div", {
                                style: {
                                    width: 16
                                }
                            }), (0,
                            s.jsx)("button", {
                                className: u()(t_().joinButton),
                                onClick: ()=>{
                                    R.ZP.emitEventNow(R.fb.ROOM_WARP, {
                                        mapId: e.id
                                    }),
                                    i((0,
                                    eM.e4)())
                                }
                                ,
                                children: "Join"
                            })]
                        })]
                    }, e.id))
                })
            })
        }
        ;
        var Infiniportal_FarmTile = e=>{
            var t, i, n, a;
            let {farm: l, rank: o, kind: c} = e
              , d = (0,
            m.T)()
              , [p,v] = (0,
            r.useState)(null);
            return (0,
            r.useEffect)(()=>{
                l && eP.getFarmDetails(l.id).then(e=>{
                    v(e)
                }
                ).catch(e=>{
                    console.log(e)
                }
                )
            }
            , []),
            l ? (0,
            s.jsxs)("div", {
                style: {
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 8
                },
                children: [(0,
                s.jsx)("img", {
                    style: {
                        height: "free" === c ? 118 : 162
                    },
                    src: l.thumbnail
                }), (0,
                s.jsxs)("div", {
                    style: {
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        maxWidth: "65%",
                        fontFamily: "Arial",
                        fontSize: 15,
                        fontWeight: 600,
                        marginLeft: 12
                    },
                    children: [(0,
                    s.jsxs)("div", {
                        children: ["Rank ", o]
                    }), (0,
                    s.jsx)("div", {
                        style: {
                            fontSize: 14,
                            fontWeight: 500
                        },
                        children: l.name
                    }), "free" !== c && (null == p ? void 0 : null === (t = p.player) || void 0 === t ? void 0 : t.username) && (0,
                    s.jsxs)("div", {
                        style: {
                            fontSize: 12,
                            fontWeight: 300
                        },
                        children: ["Owner: ", null === (i = p.player) || void 0 === i ? void 0 : i.username]
                    }), (0,
                    s.jsx)("div", {
                        style: {
                            height: 8
                        }
                    }), (0,
                    s.jsxs)("div", {
                        style: {
                            fontSize: 12,
                            fontWeight: 300
                        },
                        children: ["Farm Charm Points: ", (0,
                        E.uf)((null === (n = l.discoverability) || void 0 === n ? void 0 : n.totalPoints) || 0)]
                    }), (null == p ? void 0 : p.soilCount) ? (0,
                    s.jsxs)("div", {
                        style: {
                            fontSize: 12,
                            fontWeight: 300
                        },
                        children: ["Soils: ", p.soilCount]
                    }) : (0,
                    s.jsx)(s.Fragment, {}), (null == p ? void 0 : p.treeCount) ? (0,
                    s.jsxs)("div", {
                        style: {
                            fontSize: 12,
                            fontWeight: 300
                        },
                        children: ["Trees: ", p.treeCount]
                    }) : (0,
                    s.jsx)(s.Fragment, {}), (null == p ? void 0 : null === (a = p.entities) || void 0 === a ? void 0 : a.length) ? (0,
                    s.jsxs)("div", {
                        style: {
                            fontSize: 12,
                            fontWeight: 300
                        },
                        children: ["Industries: ", p.entities.map(e=>e.id.replace("ent_", "")).join(", ")]
                    }) : (0,
                    s.jsx)(s.Fragment, {})]
                }), (0,
                s.jsx)("div", {
                    style: {
                        flexGrow: 1
                    }
                }), (0,
                s.jsx)("button", {
                    className: u()(t_().goButton),
                    onClick: ()=>{
                        R.ZP.emitEventNow(R.fb.ROOM_WARP, {
                            mapId: l.id
                        }),
                        d((0,
                        eM.e4)())
                    }
                    ,
                    children: "Go"
                })]
            }) : (0,
            s.jsx)("div", {})
        }
        ;
        let InfiniportalDiscoverableList_InfiniportalDiscoverableList = ()=>{
            var e, t;
            let i = function() {
                let e = r.useCallback(()=>(0,
                b.HX)("top-nft-farms", async()=>await eP.getTopNFTFarms()), []);
                return FarmsRequest_useRequest(e)
            }()
              , n = function() {
                let e = r.useCallback(()=>(0,
                b.HX)("top-free-farms", async()=>await eP.getTopFreeFarms()), []);
                return FarmsRequest_useRequest(e)
            }()
              , [a,l] = (0,
            r.useState)("nft");
            if ("fetching" === i || "fetching" === n)
                return (0,
                s.jsx)(Loading_Loading, {});
            let getButtonStyle = e=>({
                fontSize: 12,
                background: a === e ? "#e8e4ff" : "#622aff",
                color: a === e ? "#622aff" : "#e8e4ff"
            });
            return (0,
            s.jsxs)("div", {
                style: {
                    height: "calc(100% - 1px)"
                },
                className: u()(j().scrollArea),
                children: [(0,
                s.jsxs)("div", {
                    style: {
                        marginLeft: 20
                    },
                    children: [(0,
                    s.jsx)("button", {
                        style: getButtonStyle("nft"),
                        onClick: ()=>l("nft"),
                        children: "NFT Farms"
                    }), (0,
                    s.jsx)("button", {
                        style: getButtonStyle("free"),
                        onClick: ()=>l("free"),
                        children: "Speck Farms"
                    })]
                }), "nft" === a && (0,
                s.jsx)("div", {
                    style: {
                        marginTop: 16,
                        marginLeft: 16,
                        marginRight: 16
                    },
                    children: null == i ? void 0 : null === (e = i.data) || void 0 === e ? void 0 : e.map((e,t)=>{
                        if (e && e.id)
                            return (0,
                            s.jsx)("div", {
                                children: (0,
                                s.jsx)(Infiniportal_FarmTile, {
                                    farm: e,
                                    rank: t + 1
                                })
                            }, e.id)
                    }
                    )
                }), "free" === a && (0,
                s.jsx)("div", {
                    style: {
                        marginTop: 16,
                        marginLeft: 16,
                        marginRight: 16
                    },
                    children: null == n ? void 0 : null === (t = n.data) || void 0 === t ? void 0 : t.map((e,t)=>{
                        if (e && e.id)
                            return (0,
                            s.jsx)("div", {
                                children: (0,
                                s.jsx)(Infiniportal_FarmTile, {
                                    kind: "free",
                                    farm: e,
                                    rank: t + 1
                                })
                            }, e.id)
                    }
                    )
                })]
            })
        }
          , Infiniportal_Tabs = e=>{
            let {tabs: t, currentTab: i, onSetTab: n} = e;
            return (0,
            s.jsx)("div", {
                className: t_().tabsContainer,
                children: (0,
                s.jsx)("div", {
                    className: t_().tabButtonsContainer,
                    children: t.map(e=>{
                        let {id: t, caption: a} = e
                          , l = t === i;
                        return (0,
                        s.jsx)("button", {
                            type: "button",
                            className: u()(t_().tabButton, {
                                [t_().active]: l
                            }),
                            disabled: l,
                            onClick: ()=>n(t),
                            children: a
                        }, t)
                    }
                    )
                })
            })
        }
          , ActiveMapsDialog = ()=>{
            let e = (0,
            m.T)()
              , {t} = (0,
            x.$)("ui")
              , closeDialog = ()=>{
                e((0,
                eM.e4)())
            }
            ;
            return (0,
            s.jsxs)("div", {
                className: j().modalBackdrop,
                children: [(0,
                s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                    onKeyDown: e=>{
                        e.stopPropagation(),
                        "Escape" === e.key && closeDialog()
                    }
                }), (0,
                s.jsx)("div", {
                    className: u()(j().uikit, j().pixelbox, j().navy, j().center, t_().container),
                    children: (0,
                    s.jsxs)("div", {
                        className: j().inner,
                        children: [(0,
                        s.jsx)("h1", {
                            children: t("infiniportal.activemaps", "Most Active")
                        }), (0,
                        s.jsx)("button", {
                            className: j().closeBtn,
                            type: "button",
                            onClick: e=>{
                                e.preventDefault(),
                                closeDialog()
                            }
                            ,
                            children: "\xa0"
                        }), (0,
                        s.jsx)("div", {
                            className: u()(j().scrollArea, j().fillflex),
                            children: (0,
                            s.jsx)(InfiniportalActive_InfiniportalActive, {})
                        })]
                    })
                })]
            })
        }
          , TopDiscoverableFarms = ()=>{
            let e = (0,
            m.T)()
              , {t} = (0,
            x.$)("ui")
              , closeDialog = ()=>{
                e((0,
                eM.e4)())
            }
            ;
            return (0,
            s.jsxs)("div", {
                className: j().modalBackdrop,
                children: [(0,
                s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                    onKeyDown: e=>{
                        e.stopPropagation(),
                        "Escape" === e.key && closeDialog()
                    }
                }), (0,
                s.jsx)("div", {
                    className: u()(j().uikit, j().pixelbox, j().navy, j().center, t_().container),
                    children: (0,
                    s.jsxs)("div", {
                        className: j().inner,
                        children: [(0,
                        s.jsx)("h1", {
                            children: t("infiniportal.topFarms", "Top Farms")
                        }), (0,
                        s.jsx)("h6", {
                            style: {
                                marginLeft: 24,
                                marginRight: 24,
                                marginTop: 12,
                                marginBottom: 8
                            },
                            children: t("infiniportal.howToGetIntoTopFarms", "Want to be a top farm? Purchase Farm Charm Crystals from Hazel and use them on you or your friend's farms!")
                        }), (0,
                        s.jsx)("p", {
                            style: {
                                fontSize: 10,
                                marginLeft: 24,
                                marginRight: 24,
                                marginBottom: 12
                            },
                            children: t("infiniportal.topFarmsUpdatedInterval", "Farm Charms can take up to 10min to start working!")
                        }), (0,
                        s.jsx)("button", {
                            className: j().closeBtn,
                            type: "button",
                            onClick: e=>{
                                e.preventDefault(),
                                closeDialog()
                            }
                            ,
                            children: "\xa0"
                        }), (0,
                        s.jsx)("div", {
                            className: u()(j().scrollArea, j().fillflex),
                            children: (0,
                            s.jsx)(InfiniportalDiscoverableList_InfiniportalDiscoverableList, {})
                        })]
                    })
                })]
            })
        }
          , FeaturedMapTile = e=>{
            let {f: t} = e
              , {t: i} = (0,
            x.$)("ui")
              , n = (0,
            m.T)();
            return (0,
            s.jsxs)("div", {
                className: t_().featuredMapsWrapper,
                children: [(0,
                s.jsx)("img", {
                    style: {
                        height: 88
                    },
                    src: t.thumbnail
                }), (0,
                s.jsxs)("div", {
                    children: [(0,
                    s.jsx)("div", {
                        className: t_().featuredName,
                        children: t.name
                    }), (0,
                    s.jsx)("div", {
                        style: {
                            height: 8
                        }
                    }), t.description && (0,
                    s.jsx)("div", {
                        className: t_().featuredDescription,
                        children: t.description
                    })]
                }), (0,
                s.jsx)("div", {
                    style: {
                        flexGrow: 1
                    }
                }), (0,
                s.jsx)("button", {
                    className: u()(t_().goButton),
                    style: {
                        marginTop: 8
                    },
                    onClick: ()=>{
                        R.ZP.emitEventNow(R.fb.ROOM_WARP, {
                            mapId: t.id
                        }),
                        n((0,
                        eM.e4)())
                    }
                    ,
                    children: i(["go", "Go"])
                })]
            }, t.id)
        }
        ;
        var Infiniportal_FeaturedMaps = ()=>{
            let[e,t] = (0,
            r.useState)([])
              , [i,n] = (0,
            r.useState)(!0)
              , a = (0,
            m.T)()
              , {t: l} = (0,
            x.$)("ui")
              , closeDialog = ()=>{
                a((0,
                eM.e4)())
            }
            ;
            return (0,
            r.useEffect)(()=>{
                U.Z.fetchFeaturedMaps().then(e=>{
                    t(e.maps),
                    n(!1)
                }
                ).catch(e=>{
                    console.log(e)
                }
                )
            }
            , []),
            (0,
            s.jsxs)("div", {
                className: j().modalBackdrop,
                children: [(0,
                s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                    onKeyDown: e=>{
                        e.stopPropagation(),
                        "Escape" === e.key && closeDialog()
                    }
                }), (0,
                s.jsx)("div", {
                    className: u()(j().uikit, j().pixelbox, j().navy, j().center, t_().container),
                    children: (0,
                    s.jsxs)("div", {
                        className: j().inner,
                        children: [(0,
                        s.jsx)("button", {
                            className: j().closeBtn,
                            type: "button",
                            onClick: ()=>{
                                closeDialog()
                            }
                            ,
                            children: "\xa0"
                        }), i ? (0,
                        s.jsx)(Loading_Loading, {}) : (0,
                        s.jsxs)("div", {
                            className: u()(j().scrollArea),
                            style: {
                                height: "100%",
                                overflowY: "auto"
                            },
                            children: [(0,
                            s.jsx)("div", {
                                style: {
                                    height: 16
                                }
                            }), (0,
                            s.jsxs)("h1", {
                                children: [" ", l(["featured_maps.title", "Featured Maps"])]
                            }), (0,
                            s.jsx)("p", {
                                className: t_().featuredSubtitle,
                                children: l(["featured_maps.description", "Take a look at our current featured maps and warp to any of them as you please!"])
                            }), (0,
                            s.jsx)("div", {
                                style: {
                                    height: 20
                                }
                            }), null == e ? void 0 : e.map(e=>{
                                if (e && e.id)
                                    return (0,
                                    s.jsx)(FeaturedMapTile, {
                                        f: e
                                    }, e.id)
                            }
                            )]
                        })]
                    })
                })]
            })
        }
        ;
        let PortalConfig = ()=>{
            let e = (0,
            m.T)()
              , t = (0,
            ei.GU)()
              , i = t.maxMaps || 5e3
              , n = (0,
            m.C)(eM.j2)
              , a = n.tenant
              , {t: l} = (0,
            x.$)(["ui"])
              , [o,c] = (0,
            r.useState)(Math.floor(Math.random() * i))
              , d = r.useRef(null)
              , p = !!(n.isVisible && n.mid_portal);
            (0,
            r.useMemo)(()=>{
                c(Math.floor(Math.random() * i))
            }
            , [n.mid_portal]),
            (0,
            r.useEffect)(()=>{
                if (p) {
                    var e, t;
                    null === (e = d.current) || void 0 === e || e.select(),
                    null === (t = d.current) || void 0 === t || t.focus()
                }
            }
            , [p]);
            let cancelHandler = t=>{
                null == t || t.preventDefault(),
                e((0,
                eM.e4)())
            }
              , v = O.l.getInstance().getEntityByUniqueId(n.mid_portal)
              , submitChange = t=>{
                null == t || t.preventDefault(),
                o >= 1 && o <= i && v && (R.ZP.emitEventNow(ek.m.clickEntity, {
                    mid: n.mid_portal,
                    impact: "setup",
                    entity: v.entity,
                    inputs: [o]
                }),
                e((0,
                eM.e4)()))
            }
              , eatKey = e=>{
                e.stopPropagation(),
                "Enter" === e.key ? submitChange() : "Escape" === e.key && cancelHandler()
            }
              , h = "infiniportal" === n.mode
              , g = h ? l("portalconfig.infinititle", "Infiniportal") : l("portalconfig.title", "Magic Portal")
              , _ = h ? l("go", "Warp Now") : l("save", "Save");
            return p && "featuredmaps" === n.mode ? (0,
            s.jsx)(Infiniportal_FeaturedMaps, {}) : p && "discoverablefarms" === n.mode ? (0,
            s.jsx)(TopDiscoverableFarms, {}) : p && "activemaps" === n.mode ? (0,
            s.jsx)(ActiveMapsDialog, {}) : p && h && "pixels" === a ? null : (0,
            s.jsx)(s.Fragment, {
                children: p && (0,
                s.jsx)("div", {
                    className: j().modalBackdrop,
                    children: (0,
                    s.jsxs)("div", {
                        style: {
                            maxWidth: 500
                        },
                        className: u()([j().uikit, j().frame, j().purple, j().center]),
                        children: [(0,
                        s.jsx)("h1", {
                            children: g
                        }), (0,
                        s.jsxs)("div", {
                            style: {
                                position: "relative",
                                boxSizing: "border-box",
                                padding: 20
                            },
                            className: "is-rounded",
                            onKeyDown: eatKey,
                            children: [(0,
                            s.jsx)("p", {
                                children: "pixels" === a ? l("portalConfig", "Enter Farm # this portal should take you to.") : l("portalConfigTenant", "Enter Destination # this portal should take you to.")
                            }), (0,
                            s.jsx)("br", {}), (0,
                            s.jsx)("div", {
                                style: {
                                    textAlign: "center"
                                },
                                children: (0,
                                s.jsx)("input", {
                                    tabIndex: 1,
                                    type: "number",
                                    min: 1,
                                    max: i,
                                    maxLength: 4,
                                    style: {
                                        textAlign: "center"
                                    },
                                    value: o,
                                    ref: d,
                                    onKeyDown: eatKey,
                                    onChange: e=>{
                                        let t = parseInt(e.target.value);
                                        for (t < 0 && (t *= -1); t > i; )
                                            t = Math.floor(t / 10);
                                        c(t),
                                        e.stopPropagation(),
                                        e.preventDefault()
                                    }
                                })
                            })]
                        }), (0,
                        s.jsx)("br", {}), (0,
                        s.jsx)("br", {}), (0,
                        s.jsxs)("div", {
                            style: {
                                textAlign: "right"
                            },
                            children: [(0,
                            s.jsx)("button", {
                                type: "button",
                                className: j().pushbutton,
                                onClick: submitChange,
                                children: _
                            }), (0,
                            s.jsx)("button", {
                                type: "button",
                                className: j().pushbutton,
                                onClick: cancelHandler,
                                children: l("cancel", "Cancel")
                            })]
                        })]
                    })
                })
            })
        }
        ;
        var tf = i(10448)
          , ty = i.n(tf)
          , tj = i(71156)
          , tb = i(19689)
          , tk = i.n(tb);
        let ItemImage = e=>{
            var t, i;
            let {size: n, url: a} = e;
            return (0,
            s.jsx)("img", {
                crossOrigin: "anonymous",
                style: {
                    width: null !== (t = null == n ? void 0 : n.width) && void 0 !== t ? t : "auto",
                    height: null !== (i = null == n ? void 0 : n.height) && void 0 !== i ? i : "auto",
                    overflow: "hidden",
                    objectFit: "cover"
                },
                src: a
            })
        }
          , MarketplaceItemListings = e=>{
            var t, i, n, a;
            let {item: l, onClose: o} = e
              , {t: c} = (0,
            x.$)(["ui", "game"])
              , [d,v] = r.useState({
                listings: [],
                ownerUsernames: {}
            })
              , [h,g] = r.useState(!1)
              , _ = (0,
            m.C)(tj.yW)
              , f = (0,
            m.C)(p.lA)
              , [y,k] = r.useState(()=>C.Z.getDefaultCurrency())
              , N = r.useMemo(()=>Object.values(C.Z.getGameCurrencies() || {}).filter(e=>["cur_berry", "cur_coins"].includes(e.id)), []);
            r.useEffect(()=>{
                var e;
                if ("pending" === _)
                    return;
                g(!0);
                let t = !0;
                return U.Z.fetchMarketplaceListingsForItem(l.id, null == f ? void 0 : null === (e = f.core) || void 0 === e ? void 0 : e.mid).then(e=>t && v(e), e=>t && console.error(e)).finally(()=>t && g(!1)),
                ()=>{
                    t = !1
                }
            }
            , [_, l]);
            let w = r.useMemo(()=>d.listings.filter(e=>e.currency === y && e.quantity > e.purchasedQuantity).sort((e,t)=>e.price - t.price).map(e=>({
                ...e,
                ownerUsername: d.ownerUsernames[e.ownerId]
            })), [d, y])
              , S = r.useMemo(()=>{
                let e = {};
                return d.listings.forEach(t=>{
                    var i;
                    e[t.currency] = (null !== (i = e[t.currency]) && void 0 !== i ? i : 0) + 1
                }
                , {}),
                e
            }
            , [d])
              , [I,T] = r.useMemo(()=>{
                var e;
                let t = C.Z.getGameItem(l.id)
                  , i = (0,
                b.J2)(t, !0);
                return [(null == t ? void 0 : t.id) ? c((0,
                b.sA)(t.id), {
                    ns: "game"
                }) : c("itemLocked.name", {
                    ns: "game",
                    defaultValue: "Locked"
                }), null !== (e = null == i ? void 0 : i.image) && void 0 !== e ? e : (0,
                E.Uk)("/assets/ui/store_item_lock.png")]
            }
            , [l, c])
              , [P,M] = (0,
            r.useState)("");
            r.useEffect(()=>{
                var e;
                null === (e = B.Z.preloadOneBlob(T)) || void 0 === e || e.then(e=>{
                    M(null != e ? e : "")
                }
                ).catch(e=>{
                    console.log("".concat(e, ": failed to load marketplace image"), T)
                }
                )
            }
            , [T]);
            let[D,L] = r.useState();
            r.useEffect(()=>L(void 0), [y]);
            let[A,F] = r.useState(0)
              , [R,V] = r.useState(0);
            r.useEffect(()=>{
                if (!D || "botbuy" === D)
                    return;
                let e = d.listings.find(e=>e._id === D);
                F(e ? e.quantity - e.purchasedQuantity : 0)
            }
            , [D, d]);
            let q = null == N ? void 0 : N.find(e=>e.id === y)
              , W = (null !== (n = null === (t = w[0]) || void 0 === t ? void 0 : t.price) && void 0 !== n ? n : 0) * 1.1
              , Z = Math.max(3, Math.floor((null !== (a = null === (i = w[0]) || void 0 === i ? void 0 : i.price) && void 0 !== a ? a : 0) * 1.2));
            return (0,
            s.jsx)("div", {
                className: j().modalBackdrop,
                children: (0,
                s.jsxs)("div", {
                    className: u()(j().uikit, j().frame, j().purpleinset, j().center, tk().container),
                    children: [(0,
                    s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                        depth: 1,
                        onKeyDown: e=>{
                            "Escape" === e.key && o()
                        }
                    }), (0,
                    s.jsx)("button", {
                        className: j().closeBtn,
                        type: "button",
                        onClick: o
                    }), (0,
                    s.jsxs)("div", {
                        className: tk().content,
                        children: [(0,
                        s.jsx)("h1", {
                            children: c("marketplace.buy.title", {
                                ns: "ui",
                                defaultValue: "Buy Items"
                            })
                        }), (0,
                        s.jsx)(ItemTooltip, {
                            item: l,
                            showDetails: !0,
                            placement: "top",
                            children: (0,
                            s.jsxs)("div", {
                                className: tk().item,
                                children: [P && (0,
                                s.jsxs)("div", {
                                    className: tk().imageTierContainer,
                                    children: [(0,
                                    s.jsx)(ItemImage, {
                                        url: P,
                                        size: {
                                            width: 96,
                                            height: 96
                                        }
                                    }), !!l.tier && (0,
                                    s.jsx)("div", {
                                        className: tk().itemTier,
                                        children: (0,
                                        b.Qb)(l.tier)
                                    })]
                                }), (0,
                                s.jsx)("span", {
                                    children: I
                                })]
                            })
                        }), (0,
                        s.jsx)("div", {
                            className: u()(tk().props),
                            children: (0,
                            s.jsxs)("div", {
                                className: tk().prop,
                                children: [(0,
                                s.jsx)("span", {
                                    children: c("marketplace.add.currency", {
                                        ns: "ui",
                                        defaultValue: "Currency"
                                    })
                                }), (0,
                                s.jsx)("div", {
                                    className: tk().currencies,
                                    children: null == N ? void 0 : N.map(e=>(0,
                                    s.jsxs)("button", {
                                        className: u()(tk().currencyButton, {
                                            [tk().active]: e.id === y
                                        }),
                                        disabled: e.id === y,
                                        onClick: ()=>{
                                            k(e.id)
                                        }
                                        ,
                                        children: [(0,
                                        s.jsx)("img", {
                                            src: e.sprite.image
                                        }), e.id !== y && S[e.id] && (0,
                                        s.jsx)("div", {
                                            className: tk().currencyBadge,
                                            children: S[e.id]
                                        })]
                                    }, e.id))
                                })]
                            })
                        }), (0,
                        s.jsxs)("div", {
                            className: u()(tk().listings, j().scrollArea),
                            children: ["botbuy" === D ? (0,
                            s.jsxs)("div", {
                                className: u()(tk().listing, tk().current),
                                children: [(0,
                                s.jsxs)("div", {
                                    className: tk().amount,
                                    children: [(0,
                                    s.jsx)("span", {
                                        children: c("marketplace.itemListings.maxamount", {
                                            ns: "ui",
                                            defaultValue: "Maximum Amount"
                                        })
                                    }), (0,
                                    s.jsx)("input", {
                                        value: A,
                                        className: tk().buyQuantity,
                                        onChange: e=>{
                                            let t = Math.floor(Number(e.target.value))
                                              , i = Math.min(Math.max(t, 0), 99);
                                            F(i)
                                        }
                                        ,
                                        type: "number"
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: tk().amount,
                                    children: [(0,
                                    s.jsx)("span", {
                                        children: c("marketplace.itemListings.price", {
                                            ns: "ui",
                                            defaultValue: "Maximum Price"
                                        })
                                    }), (0,
                                    s.jsx)("input", {
                                        value: R,
                                        className: tk().botPrice,
                                        onChange: e=>{
                                            let t = Math.floor(Number(e.target.value))
                                              , i = Math.min(Math.max(t, 3), Z);
                                            V(i)
                                        }
                                        ,
                                        max: Z,
                                        type: "number"
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: tk().buttons,
                                    children: [(0,
                                    s.jsx)("button", {
                                        disabled: h || !!_ || !A,
                                        className: u()(j().pushbutton, tk().buyListing),
                                        onClick: e=>{
                                            e.preventDefault(),
                                            sendMarketplaceEvent({
                                                subcommand: "findandpurchase",
                                                itemId: l.id,
                                                quantity: A,
                                                price: R,
                                                currency: (null == q ? void 0 : q.id) || "cur_coins"
                                            })
                                        }
                                        ,
                                        children: c("marketplace.itemListings.yes", {
                                            ns: "ui",
                                            defaultValue: "Buy {{quantity}} for {{price}}",
                                            quantity: A,
                                            price: (0,
                                            E.xG)(R * A, q)
                                        })
                                    }), (0,
                                    s.jsx)("button", {
                                        className: u()(j().pushbutton, tk().buyListing),
                                        onClick: e=>{
                                            e.preventDefault(),
                                            L(void 0)
                                        }
                                        ,
                                        children: c("marketplace.itemListings.no", {
                                            ns: "ui",
                                            defaultValue: "Cancel"
                                        })
                                    })]
                                })]
                            }) : (0,
                            s.jsx)("div", {
                                className: tk().listing,
                                children: (0,
                                s.jsx)("button", {
                                    className: u()(j().pushbutton, tk().buyListing),
                                    onClick: e=>{
                                        e.preventDefault(),
                                        L("botbuy"),
                                        F(10),
                                        V(Z)
                                    }
                                    ,
                                    children: c("marketplace.itemListings.botbuy", {
                                        ns: "ui",
                                        defaultValue: "Automatic Buy"
                                    })
                                })
                            }), w.map(e=>{
                                if (D === e._id) {
                                    let t = e.price * A;
                                    return (0,
                                    s.jsxs)("div", {
                                        className: u()(tk().listing, tk().current),
                                        children: [(0,
                                        s.jsxs)("div", {
                                            className: tk().amount,
                                            children: [(0,
                                            s.jsx)("span", {
                                                children: c("marketplace.itemListings.adjust", {
                                                    ns: "ui",
                                                    defaultValue: "Enter Amount"
                                                })
                                            }), (0,
                                            s.jsx)("input", {
                                                value: A,
                                                className: tk().buyQuantity,
                                                onChange: t=>{
                                                    let i = e.quantity - e.purchasedQuantity
                                                      , n = Math.floor(Number(t.target.value))
                                                      , a = Math.min(Math.max(n, 0), i);
                                                    F(a)
                                                }
                                                ,
                                                type: "number"
                                            })]
                                        }), (0,
                                        s.jsxs)("div", {
                                            className: tk().buttons,
                                            children: [(0,
                                            s.jsx)("button", {
                                                disabled: h || !!_ || !A,
                                                className: u()(j().pushbutton, tk().buyListing),
                                                onClick: t=>{
                                                    t.preventDefault(),
                                                    sendMarketplaceEvent({
                                                        subcommand: "purchase",
                                                        listingId: e._id,
                                                        quantity: A
                                                    })
                                                }
                                                ,
                                                children: c("marketplace.itemListings.yes", {
                                                    ns: "ui",
                                                    defaultValue: "Buy {{quantity}} for {{price}}",
                                                    quantity: A,
                                                    price: (0,
                                                    E.xG)(t, q)
                                                })
                                            }), (0,
                                            s.jsx)("button", {
                                                className: u()(j().pushbutton, tk().buyListing),
                                                onClick: e=>{
                                                    e.preventDefault(),
                                                    L(void 0)
                                                }
                                                ,
                                                children: c("marketplace.itemListings.no", {
                                                    ns: "ui",
                                                    defaultValue: "Cancel"
                                                })
                                            })]
                                        })]
                                    }, "".concat(e._id))
                                }
                                {
                                    let t = e.price
                                      , i = e.quantity - e.purchasedQuantity
                                      , n = d.ownerUsernames[e.ownerId] || e.ownerId
                                      , a = e.ownerId === O.l.getInstance().currentPlayer.core.mid;
                                    return (0,
                                    s.jsx)("div", {
                                        className: tk().listing,
                                        children: (0,
                                        s.jsx)("button", {
                                            disabled: h || !!_ || a || e.price > W,
                                            className: u()(j().pushbutton, tk().buyListing),
                                            onClick: t=>{
                                                t.preventDefault(),
                                                L(e._id)
                                            }
                                            ,
                                            children: c("marketplace.itemListings.buy", {
                                                ns: "ui",
                                                defaultValue: "{{quantity}} Listed @ {{price}}",
                                                quantity: (0,
                                                E.uf)(i, 0),
                                                price: (0,
                                                E.xG)(t, q),
                                                username: n
                                            })
                                        })
                                    }, "".concat(e._id))
                                }
                            }
                            ), h && (0,
                            s.jsx)(Loading_Loading, {})]
                        })]
                    })]
                })
            })
        }
          , tN = "--all"
          , tC = "--uncategorized";
        function sendMarketplaceEvent(e) {
            R.ZP.emitEventNow(R.fb.MARKETPLACE_SEND, e)
        }
        let PurchaseSuccessful = e=>{
            var t;
            let {itemId: i, currency: n, price: a, quantity: l} = e
              , {t: o} = (0,
            x.$)(["ui", "game"])
              , c = (0,
            m.T)()
              , [d,p,v] = r.useMemo(()=>{
                let e = C.Z.getGameItem(i);
                return [(null == e ? void 0 : e.id) ? o((0,
                b.sA)(e.id), {
                    ns: "game"
                }) : o("itemLocked.name", {
                    ns: "game",
                    defaultValue: "Locked"
                }), (null == e ? void 0 : e.image) ? (0,
                E.b7)(null == e ? void 0 : e.image) : (0,
                E.Uk)("/assets/ui/store_item_lock.png"), null == e ? void 0 : e.tier]
            }
            , [i, o]);
            return (0,
            s.jsx)("div", {
                className: j().modalBackdrop,
                children: (0,
                s.jsx)("div", {
                    className: u()(j().uikit, j().frame, j().purpleinset, j().center, ty().buyContainer),
                    children: (0,
                    s.jsxs)("div", {
                        style: {
                            height: "calc(100% - 50px)"
                        },
                        children: [(0,
                        s.jsx)("h1", {
                            children: o("marketplace.buy.success.title", {
                                ns: "ui",
                                defaultValue: "Purchased"
                            })
                        }), (0,
                        s.jsxs)("div", {
                            className: ty().buyContent,
                            children: [(0,
                            s.jsxs)("div", {
                                className: ty().item,
                                children: [(0,
                                s.jsxs)("div", {
                                    className: ty().imageTierContainer,
                                    children: [!!v && (0,
                                    s.jsx)("div", {
                                        className: ty().itemTier,
                                        children: (0,
                                        b.Qb)(v)
                                    }), (0,
                                    s.jsx)("img", {
                                        crossOrigin: "anonymous",
                                        src: p
                                    })]
                                }), (0,
                                s.jsx)("span", {
                                    children: d
                                })]
                            }), (0,
                            s.jsxs)("div", {
                                className: u()(ty().props),
                                children: [(0,
                                s.jsxs)("div", {
                                    className: ty().prop,
                                    children: [(0,
                                    s.jsxs)("span", {
                                        children: [o("marketplace.buy.price", {
                                            ns: "ui",
                                            defaultValue: "Total in"
                                        }), " ", (0,
                                        s.jsx)("img", {
                                            className: j()["coin-icon"],
                                            src: null === (t = C.Z.getGameCurrency(n)) || void 0 === t ? void 0 : t.sprite.image
                                        }), " "]
                                    }), (0,
                                    s.jsx)("span", {
                                        children: a
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: ty().prop,
                                    children: [(0,
                                    s.jsx)("span", {
                                        children: o("marketplace.buy.quantity", {
                                            ns: "ui",
                                            defaultValue: "Quantity"
                                        })
                                    }), (0,
                                    s.jsx)("span", {
                                        children: l
                                    })]
                                })]
                            }), (0,
                            s.jsx)("div", {
                                className: ty().buttons,
                                children: (0,
                                s.jsx)("button", {
                                    className: u()(j().uikit, j().pushbutton, ty().button),
                                    onClick: e=>{
                                        e.preventDefault(),
                                        c((0,
                                        tj.Uj)())
                                    }
                                    ,
                                    children: o("marketplace.buy.success.close", {
                                        ns: "ui",
                                        defaultValue: "Close"
                                    })
                                })
                            })]
                        })]
                    })
                })
            })
        }
          , MarketplaceContainer = e=>{
            let {initialCategory: t} = e
              , i = (0,
            m.T)()
              , {t: n} = (0,
            x.$)(["ui", "game"])
              , a = (0,
            m.C)(tj.yW)
              , l = C.Z.getGameItems()
              , o = r.useMemo(()=>{
                let e = Object.values(l || {})
                  , t = e.reduce((e,t)=>{
                    let i = t.categories.length ? [tN, ...t.categories] : [tN, tC];
                    return i.forEach(i=>{
                        let n = e.get(i);
                        n ? n.push(t) : e.set(i, [t])
                    }
                    ),
                    e
                }
                , new Map);
                return t
            }
            , [l])
              , c = r.useMemo(()=>Array.from(o.keys()).sort(), [o])
              , [d,p] = r.useState(t && c.includes(t) ? t : (()=>c[0]) || void 0)
              , [v,h] = r.useState()
              , [g,_] = r.useState(!1)
              , [f,y] = r.useState();
            r.useEffect(()=>{
                let e = !0;
                return _(!0),
                U.Z.fetchMarketplaceListingCounts().then(t=>e && y(t.counts), t=>e && console.error(t)).finally(()=>e && _(!1)),
                ()=>{
                    e = !1
                }
            }
            , []);
            let[k,N] = r.useState("")
              , w = r.useMemo(()=>{
                var e;
                if (!d)
                    return [];
                let t = null !== (e = o.get(d)) && void 0 !== e ? e : [];
                if (!f)
                    return [];
                let i = k.toLocaleLowerCase();
                return t.filter(e=>{
                    if (!f[e.id])
                        return !1;
                    let t = n((0,
                    b.sA)(e.id), {
                        ns: "game"
                    });
                    return !!t && t.toLocaleLowerCase().includes(i)
                }
                )
            }
            , [o, d, f, k, n])
              , viewListings = e=>t=>{
                t.preventDefault(),
                h(e)
            }
            ;
            return (0,
            s.jsxs)("div", {
                className: j().modalBackdrop,
                children: [(0,
                s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                    onKeyDown: e=>{
                        "Escape" === e.key && i((0,
                        tj.eo)())
                    }
                }), (0,
                s.jsxs)("div", {
                    className: u()(j().uikit, j().frame, j().purpleinset, j().center, ty().container),
                    children: [(0,
                    s.jsxs)("div", {
                        style: {
                            height: "calc(100% - 50px)"
                        },
                        children: [(0,
                        s.jsx)("h1", {
                            children: n("marketplace.title", {
                                ns: "ui",
                                defaultValue: "Marketplace"
                            })
                        }), (0,
                        s.jsx)("button", {
                            className: j().closeBtn,
                            type: "button",
                            onClick: e=>{
                                e.preventDefault(),
                                i((0,
                                tj.eo)())
                            }
                            ,
                            children: "\xa0"
                        }), (0,
                        s.jsxs)("div", {
                            className: ty().content,
                            children: [(0,
                            s.jsx)("div", {
                                className: u()(ty().categories, j().scrollArea),
                                children: c.map(e=>{
                                    var t;
                                    return (0,
                                    s.jsx)("button", {
                                        type: "button",
                                        className: u()(j().pushbutton, ty().category, {
                                            [ty().active]: e === d
                                        }),
                                        disabled: e === d,
                                        onClick: ()=>p(e),
                                        children: n("marketplace.category.".concat(e), {
                                            ns: "ui",
                                            defaultValue: e === tN ? "All items" : e === tC ? "Other" : (null === (t = e.at(0)) || void 0 === t ? void 0 : t.toLocaleUpperCase()) + e.substring(1)
                                        })
                                    }, e)
                                }
                                )
                            }), (0,
                            s.jsxs)("div", {
                                className: ty().right,
                                children: [(0,
                                s.jsx)("input", {
                                    type: "text",
                                    className: ty().filter,
                                    placeholder: n("marketplace.filter", "Search"),
                                    value: k,
                                    onChange: e=>N(e.target.value)
                                }), (0,
                                s.jsx)("div", {
                                    className: u()(ty().items, j().scrollArea),
                                    children: w.map(e=>{
                                        if (!e.id || !e.image)
                                            return null;
                                        let t = n((0,
                                        b.sA)(e.id), {
                                            ns: "game"
                                        });
                                        if (t)
                                            return (0,
                                            s.jsxs)("div", {
                                                className: ty().item,
                                                children: [!!e.tier && (0,
                                                s.jsx)("div", {
                                                    className: ty().itemTier,
                                                    children: (0,
                                                    b.Qb)(e.tier)
                                                }), (0,
                                                s.jsx)("img", {
                                                    crossOrigin: "anonymous",
                                                    src: (0,
                                                    E.b7)(e.image),
                                                    className: ty().itemImage
                                                }), (0,
                                                s.jsx)("div", {
                                                    className: ty().itemName,
                                                    children: t
                                                }), (0,
                                                s.jsx)("button", {
                                                    className: u()(j().pushbutton, ty().viewListings),
                                                    onClick: viewListings(e),
                                                    children: n("marketplace.viewListings", {
                                                        ns: "ui",
                                                        defaultValue: "View Listings"
                                                    })
                                                })]
                                            }, "".concat(e.id))
                                    }
                                    )
                                }), g && (0,
                                s.jsx)(Loading_Loading, {})]
                            })]
                        })]
                    }), v && (0,
                    s.jsx)(MarketplaceItemListings, {
                        item: v,
                        onClose: ()=>h(void 0)
                    }), a && "pending" !== a && (0,
                    s.jsx)(PurchaseSuccessful, {
                        ...a
                    })]
                })]
            })
        }
          , Marketplace = ()=>{
            let e = (0,
            m.C)(tj.ww)
              , t = (0,
            m.C)(tj.SY);
            return e ? (0,
            s.jsx)(MarketplaceContainer, {
                initialCategory: t
            }) : null
        }
        ;
        var tw = i(1056)
          , tS = i.n(tw)
          , tI = i(49225)
          , tT = i.n(tI);
        let MarketplaceCannotList = e=>{
            let {onClose: t} = e
              , {t: i} = (0,
            x.$)(["ui", "game"])
              , n = (0,
            m.C)(p.ge)
              , cancel = e=>{
                e.preventDefault(),
                t("cancel")
            }
            ;
            return (0,
            s.jsxs)("div", {
                className: j().modalBackdrop,
                children: [(0,
                s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                    depth: 1,
                    onKeyDown: e=>{
                        "Escape" === e.key && t("cancel")
                    }
                }), (0,
                s.jsx)("div", {
                    className: u()(j().uikit, j().frame, j().purpleinset, j().center, tT().container),
                    children: (0,
                    s.jsx)("div", {
                        style: {
                            height: "calc(100% - 50px)"
                        },
                        children: (0,
                        s.jsxs)("div", {
                            className: tT().content,
                            children: [(0,
                            s.jsx)("h1", {
                                children: i("marketplace.cannotlist", {
                                    ns: "ui",
                                    defaultValue: "You cannot list items on marketplace"
                                })
                            }), (0,
                            s.jsx)("h3", {
                                children: i("ui.reputationneeded", {
                                    ns: "ui",
                                    defaultValue: "Keep playing. Your reputation score increases the more you play"
                                })
                            }), (0,
                            s.jsx)("h3", {
                                hidden: n,
                                children: i("ui.getvip", {
                                    ns: "ui",
                                    defaultValue: "You can boost your reputation with VIP!"
                                })
                            }), (0,
                            s.jsxs)("div", {
                                style: {
                                    textAlign: "center",
                                    marginTop: 100
                                },
                                children: [(0,
                                s.jsx)("button", {
                                    hidden: n,
                                    className: u()(j().uikit, j().pushbutton, tT().button),
                                    onClick: cancel,
                                    children: i("button.getvip", {
                                        ns: "ui",
                                        defaultValue: "Get VIP"
                                    })
                                }), (0,
                                s.jsx)("button", {
                                    className: u()(j().uikit, j().pushbutton, tT().button),
                                    onClick: cancel,
                                    children: i("marketplace.add.cancel", {
                                        ns: "ui",
                                        defaultValue: "Cancel"
                                    })
                                })]
                            })]
                        })
                    })
                })]
            })
        }
          , MarketplaceAddListing = e=>{
            let {item: t, onClose: i} = e
              , {t: n} = (0,
            x.$)(["ui", "game"])
              , a = (0,
            m.C)(p.lA)
              , l = (0,
            m.C)(p.xK)
              , o = r.useMemo(()=>{
                if (!(null == l ? void 0 : l.slots))
                    return 0;
                let e = l.slots;
                return Object.values(e).filter(e=>e.item === t).reduce((e,t)=>e + t.quantity, 0)
            }
            , [t, l])
              , [c,d] = r.useState(()=>Math.min(1, o))
              , [v,h] = r.useState(C.Z.getDefaultCurrency())
              , [g,_] = r.useState(0)
              , [f,y] = r.useState("")
              , [k,N] = r.useState(!1)
              , [w,S] = r.useState()
              , I = C.Z.getGameCurrency(v)
              , [T,P,M] = r.useMemo(()=>{
                let e = C.Z.getGameItem(t);
                return [(null == e ? void 0 : e.id) ? n((0,
                b.sA)(e.id), {
                    ns: "game"
                }) : n("itemLocked.name", {
                    ns: "game",
                    defaultValue: "Locked"
                }), (null == e ? void 0 : e.image) ? (0,
                E.b7)(null == e ? void 0 : e.image) : (0,
                E.Uk)("/game/ui/store_item_lock.png"), null == e ? void 0 : e.tier]
            }
            , [t, n]);
            r.useEffect(()=>{
                var e;
                let i = !0;
                return S(void 0),
                U.Z.fetchMarketplaceListingsForItem(t, null == a ? void 0 : null === (e = a.core) || void 0 === e ? void 0 : e.mid).then(e=>{
                    if (i) {
                        var t, n, a;
                        let i = {
                            listings: null !== (a = null === (t = e.listings) || void 0 === t ? void 0 : t.length) && void 0 !== a ? a : 0,
                            floor: Number.MAX_SAFE_INTEGER,
                            max: 0
                        };
                        null === (n = e.listings) || void 0 === n || n.forEach(e=>{
                            e.currency === v && (e.price < i.floor && (i.floor = e.price),
                            e.price > i.max && (i.max = e.price))
                        }
                        ),
                        S(i)
                    }
                }
                ).catch(console.error),
                ()=>{
                    i = !1
                }
            }
            , [t, v]);
            let updatePriceValue = e=>{
                let t = Number(e)
                  , i = e.indexOf(".")
                  , n = -1 === i ? 0 : e.length - i - 1
                  , a = isFinite(e) && t > 0 && t < Number.MAX_SAFE_INTEGER && (0 === n || n <= (0,
                E.Sj)(I));
                y(e),
                N(a),
                _((0,
                E.aR)(t, I))
            }
            ;
            return r.useMemo(()=>{
                updatePriceValue(f)
            }
            , [v]),
            (0,
            s.jsxs)("div", {
                className: j().modalBackdrop,
                children: [(0,
                s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                    depth: 1,
                    onKeyDown: e=>{
                        "Escape" === e.key && i("cancel")
                    }
                }), (0,
                s.jsxs)("div", {
                    className: u()(j().uikit, j().frame, j().purpleinset, j().center, tT().container),
                    children: [(0,
                    s.jsx)("button", {
                        className: j().closeBtn,
                        type: "button",
                        onClick: e=>{
                            e.preventDefault(),
                            i("cancel")
                        }
                        ,
                        children: "\xa0"
                    }), (0,
                    s.jsxs)("div", {
                        style: {
                            height: "calc(100% - 50px)"
                        },
                        children: [(0,
                        s.jsx)("h1", {
                            children: n("marketplace.add.title", {
                                ns: "ui",
                                defaultValue: "Add Listing"
                            })
                        }), (0,
                        s.jsxs)("div", {
                            className: tT().content,
                            children: [(0,
                            s.jsxs)("div", {
                                className: tT().item,
                                children: [(0,
                                s.jsxs)("div", {
                                    className: tT().image,
                                    children: [!!M && (0,
                                    s.jsx)("div", {
                                        className: tT().tier,
                                        children: (0,
                                        b.Qb)(M)
                                    }), (0,
                                    s.jsx)("img", {
                                        crossOrigin: "anonymous",
                                        src: P
                                    })]
                                }), (0,
                                s.jsx)("span", {
                                    children: T
                                })]
                            }), (0,
                            s.jsxs)("div", {
                                className: u()(tT().props),
                                children: [(0,
                                s.jsxs)("div", {
                                    className: tT().prop,
                                    children: [(0,
                                    s.jsx)("span", {
                                        children: n("marketplace.add.currency", {
                                            ns: "ui",
                                            defaultValue: "Currency"
                                        })
                                    }), (0,
                                    s.jsx)("div", {
                                        children: Object.entries(C.Z.getGameCurrencies() || {}).filter(e=>{
                                            let[t] = e;
                                            return "cur_coins" === t || "cur_berry" === t
                                        }
                                        ).map(e=>{
                                            let[t,i] = e;
                                            return (0,
                                            s.jsx)("button", {
                                                className: u()(tT().currencyButton, {
                                                    [tT().active]: t === v
                                                }),
                                                disabled: t === v,
                                                onClick: ()=>{
                                                    h(t)
                                                }
                                                ,
                                                children: (0,
                                                s.jsx)("img", {
                                                    src: i.sprite.image
                                                })
                                            }, t)
                                        }
                                        )
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: tT().listinginfo,
                                    children: [(0,
                                    s.jsx)("span", {
                                        children: n("marketplace.add.floorprice", {
                                            ns: "ui",
                                            defaultValue: "Floor Price"
                                        })
                                    }), (0,
                                    s.jsx)("span", {
                                        className: tT().number,
                                        children: (null == w ? void 0 : w.listings) ? (0,
                                        E.aR)(w.floor, I) : "?"
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: tT().prop,
                                    children: [(0,
                                    s.jsx)("span", {
                                        children: n("marketplace.add.price", {
                                            ns: "ui",
                                            defaultValue: "Price per item"
                                        })
                                    }), (0,
                                    s.jsx)("input", {
                                        value: f,
                                        onChange: e=>{
                                            e.preventDefault();
                                            let t = e.target.value;
                                            updatePriceValue(t)
                                        }
                                        ,
                                        type: "number",
                                        autoFocus: !0
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: tT().prop,
                                    children: [(0,
                                    s.jsxs)("span", {
                                        children: [n("marketplace.add.quantity", "Quantity"), " (", (0,
                                        s.jsx)("a", {
                                            className: u()("clickable", tT().hotlink),
                                            onClick: e=>{
                                                e.preventDefault(),
                                                d(o)
                                            }
                                            ,
                                            children: n("marketplace.add.max", {
                                                ns: "ui",
                                                defaultValue: "max: ".concat(o),
                                                maxQuantity: (0,
                                                E.uf)(o)
                                            })
                                        }), ")"]
                                    }), (0,
                                    s.jsx)("input", {
                                        value: c,
                                        onChange: e=>{
                                            e.preventDefault(),
                                            d(Math.floor(Math.max(0, Math.min(Number(e.target.value), o))))
                                        }
                                        ,
                                        type: "number"
                                    })]
                                })]
                            }), (0,
                            s.jsx)("div", {
                                className: tT().buttons,
                                children: (0,
                                s.jsx)("button", {
                                    className: u()(j().uikit, j().pushbutton, j().green, tT().button),
                                    onClick: e=>{
                                        sendMarketplaceEvent({
                                            subcommand: "create",
                                            itemId: t,
                                            quantity: c,
                                            price: g,
                                            currency: v
                                        }),
                                        e.preventDefault(),
                                        i("create")
                                    }
                                    ,
                                    disabled: !k || c <= 0,
                                    children: n("marketplace.add.create", {
                                        ns: "ui",
                                        defaultValue: "Create"
                                    })
                                })
                            })]
                        })]
                    })]
                })]
            })
        }
          , MintItemDetails = e=>{
            var t, i, n;
            let {item: a, template: l, onClose: o, fetchItems: c} = e
              , [d,m] = (0,
            r.useState)(null !== (i = l.minCount) && void 0 !== i ? i : 1)
              , {t: p} = (0,
            x.$)(["ui", "game"])
              , v = C.Z.getGameCurrency(l.mintCurrency)
              , h = d * l.mintCostPerUnit
              , [g,_] = r.useMemo(()=>{
                var e;
                let t = C.Z.getGameItem(a.id)
                  , i = (0,
                b.J2)(t, !0);
                return [(null == t ? void 0 : t.id) ? p((0,
                b.sA)(t.id), {
                    ns: "game"
                }) : p("itemLocked.name", {
                    ns: "game",
                    defaultValue: "Locked"
                }), null !== (e = null == i ? void 0 : i.image) && void 0 !== e ? e : (0,
                E.Uk)("/assets/ui/store_item_lock.png"), i.width, i.height, i.scale]
            }
            , [a, p])
              , [f,y] = (0,
            r.useState)("");
            return r.useEffect(()=>{
                var e;
                null === (e = B.Z.preloadOneBlob(_)) || void 0 === e || e.then(e=>{
                    y(null != e ? e : "")
                }
                ).catch(e=>{
                    console.log("".concat(e, ": failed to load minting image"), _)
                }
                )
            }
            , [_]),
            (0,
            s.jsx)("div", {
                style: {
                    zIndex: 99999
                },
                children: (0,
                s.jsxs)("div", {
                    className: j().modalBackdrop,
                    children: [(0,
                    s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                        depth: 1,
                        onKeyDown: e=>{
                            "Escape" === e.key && o()
                        }
                    }), (0,
                    s.jsxs)("div", {
                        className: u()(j().uikit, j().frame, j().purpleinset, j().center, tk().container),
                        children: [(0,
                        s.jsx)("button", {
                            className: j().closeBtn,
                            type: "button",
                            onClick: o
                        }), (0,
                        s.jsxs)("div", {
                            className: tk().content,
                            children: [(0,
                            s.jsx)("h1", {
                                children: p("mint.buy.title", {
                                    ns: "ui",
                                    defaultValue: "Mint Item"
                                })
                            }), (0,
                            s.jsxs)("div", {
                                className: tk().item,
                                children: [f && (0,
                                s.jsx)(ItemImage, {
                                    url: f,
                                    size: {
                                        width: 96,
                                        height: 96
                                    }
                                }), (0,
                                s.jsx)("span", {
                                    children: g
                                })]
                            }), (0,
                            s.jsx)("div", {
                                className: u()(tk().props),
                                children: (0,
                                s.jsxs)("div", {
                                    className: tk().prop,
                                    children: [(0,
                                    s.jsx)("div", {
                                        style: {
                                            fontFamily: "Arial",
                                            fontWeight: 600
                                        },
                                        children: " Cost per Item"
                                    }), (0,
                                    s.jsx)("div", {
                                        className: tk().itemName,
                                        style: {
                                            fontWeight: 400
                                        },
                                        children: (0,
                                        s.jsx)(S.Z, {
                                            title: l.mintCostPerUnit + " " + p((0,
                                            b.sA)("currency.".concat(l.mintCurrency)), {
                                                ns: "game"
                                            }),
                                            children: (0,
                                            s.jsx)(commons_CoinBalance, {
                                                currency: v,
                                                balance: l.mintCostPerUnit
                                            })
                                        })
                                    })]
                                })
                            }), (0,
                            s.jsx)("div", {
                                className: u()(tk().listings, j().scrollArea),
                                children: (0,
                                s.jsxs)("div", {
                                    className: u()(tk().listing, tk().current),
                                    children: [(0,
                                    s.jsx)("div", {
                                        className: tk().prop,
                                        children: (0,
                                        s.jsxs)("div", {
                                            style: {
                                                fontFamily: "Arial",
                                                fontSize: 12
                                            },
                                            children: [a.ugc.mintCount || 0, "/", l.maxCount || "∞", " Minted"]
                                        })
                                    }), l.minCount && (0,
                                    s.jsx)("div", {
                                        className: tk().prop,
                                        children: (0,
                                        s.jsxs)("div", {
                                            style: {
                                                fontFamily: "Arial",
                                                fontSize: 12
                                            },
                                            children: [" ", "Mint at least ", l.minCount, " items at a time"]
                                        })
                                    }), (0,
                                    s.jsx)("span", {
                                        children: p("marketplace.itemListings.confirmmint", {
                                            ns: "ui",
                                            defaultValue: "Confirm Mint"
                                        })
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: tk().amount,
                                        children: [(0,
                                        s.jsx)("span", {
                                            children: p("marketplace.itemListings.adjustmint", {
                                                ns: "ui",
                                                defaultValue: "Quantity"
                                            })
                                        }), (0,
                                        s.jsx)("input", {
                                            value: d,
                                            className: tk().buyQuantity,
                                            onChange: e=>{
                                                let t = l.maxCount || 9999999999
                                                  , i = Math.floor(Number(e.target.value))
                                                  , n = Math.min(Math.max(i, 0), t);
                                                m(n)
                                            }
                                            ,
                                            type: "number"
                                        })]
                                    }), (0,
                                    s.jsx)("div", {
                                        className: tk().buttons,
                                        children: (0,
                                        s.jsxs)("button", {
                                            disabled: !d || !!l.minCount && d < l.minCount || !!l.maxCount && d + (null !== (n = null === (t = a.ugc) || void 0 === t ? void 0 : t.mintCount) && void 0 !== n ? n : 0) > l.maxCount,
                                            className: u()(j().pushbutton, tk().buyListing),
                                            onClick: e=>{
                                                var t;
                                                t = {
                                                    quantity: d,
                                                    itemId: a.id
                                                },
                                                R.ZP.emitEventNow(R.Yi.MINT_UGC, t),
                                                setTimeout(()=>c(), 2500),
                                                e.preventDefault()
                                            }
                                            ,
                                            children: [p("mint.action.yes", {
                                                ns: "ui",
                                                defaultValue: "Mint ".concat(d, " for"),
                                                quantity: d,
                                                price: h
                                            }), (0,
                                            s.jsx)("br", {}), (0,
                                            s.jsx)("img", {
                                                style: {
                                                    height: 18,
                                                    marginRight: 8
                                                },
                                                src: null == v ? void 0 : v.sprite.image
                                            }), (0,
                                            E.xG)(h)]
                                        })
                                    })]
                                })
                            })]
                        })]
                    })]
                })
            })
        }
        ;
        var tP = new class {
            async fetchPlayerUGC() {
                try {
                    return await this.api.fetchPlayerUGC()
                } catch (e) {
                    return console.log(e),
                    {
                        items: [],
                        templates: []
                    }
                }
            }
            constructor(e) {
                this.api = e
            }
        }
        (U.Z)
          , Mint_Item_Container = ()=>{
            var e, t;
            let[i,n] = (0,
            r.useState)(!0)
              , [a,l] = (0,
            r.useState)([])
              , [o,c] = (0,
            r.useState)([])
              , d = (0,
            r.useMemo)(()=>(0,
            b.xn)(o, "_id"), [o])
              , [m,p] = (0,
            r.useState)(null)
              , v = (null == m ? void 0 : null === (t = m.ugc) || void 0 === t ? void 0 : null === (e = t.template) || void 0 === e ? void 0 : e.toString()) ? d.get(m.ugc.template.toString()) : null
              , {t: h} = (0,
            x.$)(["ui", "game"])
              , fetchItems = async()=>{
                n(!0),
                tP.fetchPlayerUGC().then(e=>{
                    l(e.items),
                    c(e.templates)
                }
                ).finally(()=>{
                    n(!1)
                }
                )
            }
            ;
            return (0,
            r.useEffect)(()=>{
                fetchItems()
            }
            , []),
            (0,
            s.jsxs)("div", {
                children: [(0,
                s.jsx)("p", {
                    style: {
                        margin: 24,
                        fontSize: 11
                    },
                    children: "Want to mint your own decorations into the Pixels Universe?"
                }), (0,
                s.jsx)("div", {
                    style: {
                        display: "grid",
                        placeItems: "center",
                        marginBottom: 16
                    },
                    children: (0,
                    s.jsx)("button", {
                        className: j().pushbutton,
                        onClick: ()=>window.location.href = "https://dashboard.pixels.xyz/create",
                        children: "Submit A Custom Decoration"
                    })
                }), (0,
                s.jsxs)("div", {
                    className: u()(tS().listings, j().scrollArea),
                    children: [m && (0,
                    s.jsx)(MintItemDetails, {
                        item: m,
                        template: v,
                        onClose: ()=>p(null),
                        fetchItems: fetchItems
                    }), i ? (0,
                    s.jsx)(Loading_Loading, {}) : (0,
                    s.jsx)("div", {
                        style: {
                            height: "calc(100vh - 450px)"
                        },
                        children: a.map(e=>{
                            let t = d.get(e.ugc.template);
                            if (!t)
                                return;
                            let i = C.Z.getGameCurrency(t.mintCurrency);
                            return (0,
                            s.jsxs)("div", {
                                className: tS().listing,
                                children: [(0,
                                s.jsx)("img", {
                                    crossOrigin: "anonymous",
                                    src: (0,
                                    E.b7)(e.image),
                                    className: tS().itemImage,
                                    style: {
                                        marginRight: 12
                                    }
                                }), (0,
                                s.jsx)("div", {
                                    className: tS().listingName,
                                    children: h((0,
                                    b.sA)(e.id), {
                                        ns: "game"
                                    })
                                }), (0,
                                s.jsx)("div", {
                                    className: tS().listingName,
                                    style: {
                                        fontWeight: 400
                                    },
                                    children: (0,
                                    s.jsx)(S.Z, {
                                        title: (0,
                                        E.xG)(t.mintCostPerUnit, i) + " " + h((0,
                                        b.sA)("currency.".concat(t.mintCurrency)), {
                                            ns: "game"
                                        }),
                                        children: (0,
                                        s.jsxs)("div", {
                                            children: [(0,
                                            s.jsx)("img", {
                                                className: tS().itemImage,
                                                src: null == i ? void 0 : i.sprite.image
                                            }), (0,
                                            E.xG)(t.mintCostPerUnit, i)]
                                        })
                                    })
                                }), (0,
                                s.jsxs)("div", {
                                    className: tS().listingName,
                                    style: {
                                        fontWeight: 400
                                    },
                                    children: [(0,
                                    E.xG)(e.ugc.mintCount || 0, i), t.maxCount ? (0,
                                    E.uf)(t.maxCount) : "∞", " Minted"]
                                }), (0,
                                s.jsx)("button", {
                                    className: u()(j().pushbutton, tS().viewListings),
                                    onClick: ()=>{
                                        p(e)
                                    }
                                    ,
                                    children: h("mint", "Mint")
                                })]
                            }, e.id)
                        }
                        )
                    })]
                })]
            })
        }
        ;
        let CurrentListingsTab = ()=>{
            let {t: e} = (0,
            x.$)(["ui", "game"])
              , [t,i] = r.useState([])
              , [n,a] = r.useState(!1)
              , [l,o] = r.useState(0);
            r.useEffect(()=>{
                a(!0);
                let e = !0;
                return U.Z.fetchMarketplaceListingsForPlayer(O.l.getInstance().currentPlayer.core.mid).then(t=>e && i(t.listings.map(e=>{
                    var t, i;
                    return {
                        id: e._id,
                        item: e.itemId,
                        price: e.price,
                        currency: e.currency,
                        fee: e.price * e.quantity * (null !== (t = e.fee) && void 0 !== t ? t : 0) - (null !== (i = e.feeCollected) && void 0 !== i ? i : 0),
                        quantity: e.quantity - e.purchasedQuantity,
                        claim: e.purchasedQuantity - e.claimedQuantity,
                        createdAt: e.createdAt
                    }
                }
                ).sort((e,t)=>t.claim - e.claim || t.createdAt - e.createdAt)), t=>e && console.error(t)).finally(()=>e && a(!1)),
                ()=>{
                    e = !1
                }
            }
            , [l]);
            let[c] = (0,
            _.KO)(e9.wm);
            r.useEffect(()=>{
                (null == c ? void 0 : c.source) === "error" && o(Date.now())
            }
            , [c]);
            let d = r.useCallback(e=>{
                let n = t.find(t=>t.id === e);
                n && (sendMarketplaceEvent({
                    subcommand: "claim",
                    listingId: e
                }),
                n.claim && n.quantity ? n.claim && i(t.map(e=>e === n ? {
                    ...e,
                    claim: 0
                } : e)) : i(t.filter(e=>e !== n)))
            }
            , [t]);
            return (0,
            s.jsxs)("div", {
                className: u()(tS().listings, j().scrollArea),
                children: [(0,
                s.jsxs)("div", {
                    className: u()(tS().listing, tS().header),
                    children: [(0,
                    s.jsx)("div", {
                        className: tS().listingName,
                        children: e("marketplace.listings.header.name", {
                            ns: "ui",
                            defaultValue: "Item"
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: tS().listingQuantity,
                        children: e("marketplace.listings.header.quantity", {
                            ns: "ui",
                            defaultValue: "Quantity"
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: tS().listingPrice,
                        children: e("marketplace.listings.header.price", {
                            ns: "ui",
                            defaultValue: "Price"
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: tS().listingFee,
                        children: e("marketplace.listings.header.fee", {
                            ns: "ui",
                            defaultValue: "Est. Fee"
                        })
                    }), (0,
                    s.jsx)("div", {
                        style: {
                            width: 100
                        }
                    })]
                }), t.map(t=>{
                    let i = C.Z.getGameItem(t.item)
                      , a = (null == i ? void 0 : i.id) ? e((0,
                    b.sA)(i.id), {
                        ns: "game"
                    }) : e("itemLocked.name", {
                        ns: "game",
                        defaultValue: "Locked"
                    })
                      , l = (null == i ? void 0 : i.image) ? (0,
                    E.b7)(null == i ? void 0 : i.image) : (0,
                    E.Uk)("/game/ui/store_item_lock.png")
                      , r = C.Z.getGameCurrency(t.currency)
                      , o = (0,
                    E.xG)((0,
                    E.KG)(Math.max(0, t.fee), r), r)
                      , c = null == i ? void 0 : i.tier;
                    return (0,
                    s.jsxs)("div", {
                        className: tS().listing,
                        children: [(0,
                        s.jsxs)("div", {
                            className: tS().listingName,
                            children: [!!c && (0,
                            s.jsx)("div", {
                                className: tS().listingTier,
                                children: (0,
                                b.Qb)(c)
                            }), (0,
                            s.jsx)("img", {
                                crossOrigin: "anonymous",
                                src: l
                            }), (0,
                            s.jsx)("span", {
                                children: a
                            })]
                        }), (0,
                        s.jsx)("div", {
                            className: tS().listingQuantity,
                            children: t.claim || t.quantity
                        }), (0,
                        s.jsxs)("div", {
                            className: tS().listingPrice,
                            children: [(0,
                            s.jsx)("img", {
                                className: j()["coin-icon"],
                                src: null == r ? void 0 : r.sprite.image
                            }), (0,
                            s.jsx)("span", {
                                children: (0,
                                E.xG)(t.price, r)
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            className: tS().listingFee,
                            title: e("marketplace.listing.fee", {
                                ns: "ui",
                                defaultValue: "Fee may vary due to rounding based on how many are sold in each transaction"
                            }),
                            children: [(0,
                            s.jsx)("img", {
                                className: j()["coin-icon"],
                                src: null == r ? void 0 : r.sprite.image
                            }), o]
                        }), (0,
                        s.jsx)("button", {
                            className: u()(j().pushbutton, tS().remove),
                            disabled: !i || n,
                            onClick: ()=>d(t.id),
                            children: t.claim ? e("marketplace.listings.claim", {
                                ns: "ui",
                                defaultValue: "Claim"
                            }) : e("marketplace.listings.remove", {
                                ns: "ui",
                                defaultValue: "Remove"
                            })
                        })]
                    }, t.id)
                }
                ), n && (0,
                s.jsx)(Loading_Loading, {})]
            })
        }
          , ItemsTab = e=>{
            let {onItemCreated: t} = e
              , {t: i} = (0,
            x.$)(["ui", "game"])
              , n = (0,
            m.C)(p.lA)
              , a = O.l.getInstance()
              , l = n && n.core.trustScore > a.marketPlaceSellLimit
              , o = r.useMemo(()=>{
                let e = null == n ? void 0 : n.full.inventory.slots;
                if (!e)
                    return [];
                let t = Object.values(e).reduce((e,t)=>{
                    var i;
                    let n = (null === (i = e.get(t.item)) || void 0 === i ? void 0 : i.quantity) || 0;
                    return e.set(t.item, {
                        quantity: n + t.quantity
                    }),
                    e
                }
                , new Map);
                return Array.from(t.entries()).map(e=>{
                    let[t,i] = e
                      , n = C.Z.getGameItem(t);
                    return {
                        id: t,
                        item: n,
                        ...i
                    }
                }
                ).filter(e=>{
                    var t, i, n;
                    return (null === (t = e.item) || void 0 === t ? void 0 : t.image) && !(null === (n = e.item) || void 0 === n ? void 0 : null === (i = n.trade) || void 0 === i ? void 0 : i.disableTrading)
                }
                )
            }
            , [n])
              , [c,d] = r.useState(void 0);
            return (0,
            s.jsxs)("div", {
                className: u()(tS().listings, j().scrollArea),
                children: [(0,
                s.jsxs)("div", {
                    className: u()(tS().listing, tS().header),
                    children: [(0,
                    s.jsx)("div", {
                        className: u()(tS().listingName, tS().itemName),
                        children: i("marketplace.listings.header.name", {
                            ns: "ui",
                            defaultValue: "Item"
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: tS().listingQuantity,
                        children: i("marketplace.listings.header.quantity", {
                            ns: "ui",
                            defaultValue: "Quantity"
                        })
                    }), (0,
                    s.jsx)("div", {
                        style: {
                            width: 100
                        }
                    })]
                }), o.map(e=>{
                    let {id: t, quantity: n, item: a} = e
                      , l = i((0,
                    b.sA)(t), {
                        ns: "game"
                    })
                      , r = (0,
                    E.b7)(null == a ? void 0 : a.image)
                      , o = null == a ? void 0 : a.tier;
                    return (0,
                    s.jsxs)("div", {
                        className: tS().listing,
                        children: [(0,
                        s.jsxs)("div", {
                            className: u()(tS().listingName, tS().itemName),
                            children: [!!o && (0,
                            s.jsx)("div", {
                                className: tS().listingTier,
                                children: (0,
                                b.Qb)(o)
                            }), (0,
                            s.jsx)("img", {
                                crossOrigin: "anonymous",
                                src: r
                            }), (0,
                            s.jsx)("span", {
                                children: l
                            })]
                        }), (0,
                        s.jsx)("div", {
                            className: tS().listingQuantity,
                            children: n
                        }), (0,
                        s.jsx)("button", {
                            className: u()(j().pushbutton, tS().remove),
                            disabled: !a,
                            onClick: ()=>d(t),
                            children: i("marketplace.listings.add", {
                                ns: "ui",
                                defaultValue: "Add"
                            })
                        })]
                    }, t)
                }
                ), c && l && (0,
                s.jsx)(MarketplaceAddListing, {
                    item: c,
                    onClose: e=>{
                        d(void 0),
                        "create" === e && t()
                    }
                }), c && !l && (0,
                s.jsx)(MarketplaceCannotList, {
                    onClose: ()=>{
                        d(void 0)
                    }
                })]
            })
        }
          , ListingsContainer = ()=>{
            let e = (0,
            m.T)()
              , {t} = (0,
            x.$)(["ui", "game"])
              , i = r.useMemo(()=>[{
                id: "current",
                caption: t("marketplace.listings.tab.current", "Current")
            }, {
                id: "create",
                caption: t("marketplace.listings.tab.create", "Create")
            }, {
                id: "ugc",
                caption: t("marketplace.listings.tab.mintUgc", "Custom Decorations")
            }], [t])
              , [n,a] = r.useState("current");
            return (0,
            s.jsxs)("div", {
                className: j().modalBackdrop,
                children: [(0,
                s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                    onKeyDown: t=>{
                        "Escape" === t.key && e((0,
                        tj.eo)())
                    }
                }), (0,
                s.jsx)("div", {
                    className: u()(j().uikit, j().frame, j().purpleinset, j().center, tS().container),
                    children: (0,
                    s.jsxs)("div", {
                        style: {
                            height: "calc(100% - 50px)"
                        },
                        children: [(0,
                        s.jsx)("h1", {
                            children: t("marketplace.listings.title", {
                                ns: "ui",
                                defaultValue: "Marketplace Listings"
                            })
                        }), (0,
                        s.jsx)("button", {
                            className: j().closeBtn,
                            type: "button",
                            onClick: t=>{
                                t.preventDefault(),
                                e((0,
                                tj.eo)())
                            }
                            ,
                            children: "\xa0"
                        }), (0,
                        s.jsx)(Infiniportal_Tabs, {
                            tabs: i,
                            currentTab: n,
                            onSetTab: a
                        }), (0,
                        s.jsxs)("div", {
                            className: tS().content,
                            children: ["current" === n && (0,
                            s.jsx)(CurrentListingsTab, {}), "create" === n && (0,
                            s.jsx)(ItemsTab, {
                                onItemCreated: ()=>{
                                    setTimeout(()=>{
                                        a("current")
                                    }
                                    , 500)
                                }
                            }), "ugc" === n && (0,
                            s.jsx)(Mint_Item_Container, {})]
                        })]
                    })
                })]
            })
        }
          , MarketplaceListings = ()=>{
            let e = (0,
            m.C)(tj.oG);
            return e ? (0,
            s.jsx)(ListingsContainer, {}) : null
        }
          , UsernameDialog = ()=>{
            var e, t, i;
            let n = (0,
            m.C)(tu.ZP)
              , a = (0,
            m.C)(tu.Ec)
              , [l,o] = (0,
            r.useState)(null)
              , [c,d] = (0,
            r.useState)(a)
              , {t: v} = (0,
            x.$)(["ui"])
              , h = (0,
            m.T)()
              , g = (0,
            m.C)(p.QV)
              , _ = (0,
            m.C)(p.lA)
              , f = null == _ ? void 0 : _.full.coinInventory
              , y = null === (e = C.Z.getStoreData()) || void 0 === e ? void 0 : e.str_plot
              , b = null == y ? void 0 : y.items.find(e=>"itm_usernameChange" === e.item)
              , k = (null == f ? void 0 : null === (t = f.find(e=>e.currencyId === (null == b ? void 0 : b.currency))) || void 0 === t ? void 0 : t.balance) || 0
              , N = null !== (i = null == b ? void 0 : b.buyPrice) && void 0 !== i ? i : 0
              , w = N > 0
              , S = !w || k >= N
              , I = b ? C.Z.getGameCurrency(b.currency) : void 0
              , T = "username" === g;
            if ((0,
            r.useEffect)(()=>{
                a && d(a)
            }
            , [T, a]),
            (0,
            r.useEffect)(()=>{
                n && o(v(n))
            }
            , [n, v]),
            !T)
                return (0,
                s.jsx)(s.Fragment, {});
            let validateUsername = e=>{
                let t = e.target.value;
                return (t = t.trim()) ? t.length >= 20 ? o(v("onboarding.charlimit", "Max {MAX} chars").replace("{MAX}", "20")) : (0,
                E.zB)(t) ? o(v("onboarding.dirtywords", "No Profanity, Please")) : o("") : o(v("onboarding.required")),
                d(t)
            }
              , close = ()=>{
                h((0,
                Y.Mr)())
            }
            ;
            return (0,
            s.jsxs)("div", {
                className: j().modalBackdrop,
                children: [(0,
                s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                    onKeyDown: e=>{
                        e.stopPropagation(),
                        "Escape" === e.key && close()
                    }
                }), (0,
                s.jsx)("div", {
                    className: u()(j().uikit, j().pixelbox, j().navy, j().center, j().profilewindow),
                    children: (0,
                    s.jsxs)("div", {
                        className: j().inner,
                        children: [(0,
                        s.jsx)("h1", {
                            children: v("onboarding.entername", "Enter Your Name")
                        }), (0,
                        s.jsx)("button", {
                            className: j().closeBtn,
                            type: "button",
                            onClick: close,
                            children: "\xa0"
                        }), (0,
                        s.jsxs)("div", {
                            className: u()(j().fillflex, j().scrollArea),
                            children: [(0,
                            s.jsx)("br", {}), w ? (0,
                            s.jsxs)("div", {
                                style: {
                                    lineHeight: "2.5em",
                                    textAlign: "center"
                                },
                                children: [v("username.feemessage", "Pixels Court charges a fee to change username:"), (0,
                                s.jsx)(commons_CoinBalance, {
                                    currency: I,
                                    balance: N,
                                    styles: {
                                        display: "inline-block"
                                    }
                                }), (0,
                                s.jsx)("br", {}), (0,
                                s.jsx)("br", {})]
                            }) : "", (0,
                            s.jsxs)("div", {
                                style: {
                                    marginBottom: "0.6rem",
                                    textAlign: "center"
                                },
                                children: [v("onboarding.enterusername", "Enter Username"), ":", (0,
                                s.jsx)("input", {
                                    name: "username",
                                    autoComplete: "off",
                                    placeholder: v("onboarding.entername", "Enter Your Name"),
                                    style: {
                                        backgroundColor: "#f2f2f0",
                                        zIndex: 5e4
                                    },
                                    className: "pixelFont",
                                    type: "text",
                                    maxLength: 20,
                                    disabled: !S,
                                    defaultValue: c,
                                    onChange: e=>validateUsername(e)
                                }), (0,
                                s.jsx)("br", {}), l && (0,
                                s.jsx)("div", {
                                    className: j().errorMessage,
                                    children: l
                                })]
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            className: j().flexsingleline,
                            children: [(0,
                            s.jsxs)("button", {
                                onClick: e=>{
                                    (e.preventDefault(),
                                    c) ? !(0,
                                    E.zB)(c) && R.ZP.sendEventDelayed(R.Yi.NFT_SELECTED, {
                                        username: c
                                    }) : o(v("onboarding.required"))
                                }
                                ,
                                disabled: !S,
                                type: "button",
                                className: u()(j().pushbutton, j().yellow),
                                style: {
                                    minHeight: 48,
                                    padding: 15
                                },
                                children: [v("onboarding.update", "Update"), " ", w && (0,
                                s.jsx)(commons_CoinBalance, {
                                    currency: I,
                                    balance: N,
                                    styles: {
                                        display: "inline-block"
                                    }
                                })]
                            }), (0,
                            s.jsx)("div", {
                                className: j().fillflex,
                                children: (0,
                                s.jsx)(PlayerBackButton, {})
                            })]
                        })]
                    })
                })]
            })
        }
        ;
        var tM = i(6)
          , tD = i.n(tM);
        let ModalGate = e=>{
            let {onEscape: t, modal: i, children: n} = e;
            return i ? (0,
            s.jsxs)("div", {
                className: j().modalBackdrop,
                children: [(0,
                s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                    onKeyDown: e=>{
                        e.stopPropagation(),
                        "Escape" === e.key && t()
                    }
                }), n]
            }) : (0,
            s.jsx)(s.Fragment, {
                children: n
            })
        }
          , ImagePopup = ()=>{
            var e, t, i, n;
            let a = (0,
            m.T)()
              , l = (0,
            m.C)(eM.OH)
              , o = !!(l.isVisible && l.url)
              , c = (0,
            m.C)(p.lA)
              , [d,v] = (0,
            r.useState)(!1)
              , [h,g] = (0,
            r.useState)({
                x: 0,
                y: 0
            })
              , [x,_] = (0,
            r.useState)({
                w: 0,
                h: 0,
                scale: 1
            })
              , f = (0,
            m.C)(eM.rg)
              , [y,b] = (0,
            r.useState)(null != f ? f : {
                width: 800,
                height: 600
            })
              , k = (0,
            r.useRef)(null)
              , closeWindow = ()=>{
                a((0,
                eM.wR)())
            }
              , N = l.url;
            if (null == N ? void 0 : N.includes("%eth%")) {
                let e = null == c ? void 0 : null === (i = c.full.cryptoWallets.find(e=>"eth" === e.type)) || void 0 === i ? void 0 : i.address;
                N = N.replace("%eth%", null != e ? e : "")
            }
            (null == N ? void 0 : N.includes("%username%")) && (N = N.replace("%username%", encodeURIComponent(null !== (n = null == c ? void 0 : c.core.username) && void 0 !== n ? n : "")));
            let toggleZoom = e=>{
                if (!d) {
                    let t = e.currentTarget
                      , i = t.getBoundingClientRect()
                      , n = i.width
                      , a = i.height;
                    _({
                        w: n,
                        h: a,
                        scale: 3
                    });
                    let l = n / 2
                      , s = a / 2
                      , r = e.clientX - i.left - l
                      , o = e.clientY - i.top - s;
                    r > 0 && (l - r) * 3 < l && (r = l - l / 3),
                    o > 0 && (s - o) * 3 < s && (o = s - s / 3),
                    r < 0 && (l + r) * 3 < l && (r = l / 3 - l),
                    o < 0 && (s + o) * 3 < s && (o = s / 3 - s),
                    g({
                        x: r,
                        y: o
                    })
                }
                v(!d)
            }
            ;
            function popupHandler(e) {
                var t;
                "string" == typeof (null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.url) && R.ZP.emitEventNow(R.fb.LINK_OPEN, {
                    link: e.data.url
                })
            }
            return (0,
            r.useEffect)(()=>{
                if (o && l.isIframe)
                    return window.addEventListener("message", popupHandler, !1),
                    ()=>{
                        window.removeEventListener("message", popupHandler)
                    }
            }
            , [o, l.isIframe]),
            (0,
            r.useEffect)(()=>{
                var e, t;
                let i = 0
                  , n = k.current
                  , a = null !== (e = null == f ? void 0 : f.width) && void 0 !== e ? e : 800
                  , l = null !== (t = null == f ? void 0 : f.height) && void 0 !== t ? t : 600;
                if (l > 800 && (l *= .8),
                a > 1e3 && (a *= .8),
                !n) {
                    (a != y.width || l != y.height) && b({
                        width: a,
                        height: l
                    });
                    return
                }
                if (0 === n.naturalWidth) {
                    n.onload = ()=>{
                        b({
                            width: a,
                            height: l
                        })
                    }
                    ;
                    return
                }
                let s = Math.min(a / n.naturalWidth, l / n.naturalHeight);
                if (a = n.naturalWidth * s,
                l = n.naturalHeight * s,
                (a != y.width || l != y.height) && b({
                    width: a,
                    height: l
                }),
                d) {
                    let e = !1
                      , t = 0
                      , a = 0
                      , l = h.x
                      , s = h.y
                      , down = n=>{
                        let l = Date.now();
                        l - i < 400 ? (e = !1,
                        v(!1)) : d && (e = !0,
                        t = n.clientX,
                        a = n.clientY,
                        n.target.setPointerCapture(n.pointerId)),
                        i = l,
                        n.stopPropagation()
                    }
                      , up = t=>{
                        d && e && (move(t),
                        e = !1),
                        t.target.hasPointerCapture(t.pointerId) && t.target.releasePointerCapture(t.pointerId)
                    }
                      , move = i=>{
                        if (d && e) {
                            let e = i.clientX - t
                              , n = i.clientY - a;
                            t = i.clientX,
                            a = i.clientY;
                            let r = l - e / x.scale
                              , o = s - n / x.scale
                              , c = x.w / 2
                              , d = x.h / 2
                              , u = x.scale;
                            r > 0 && (c - r) * u < c && (r = c - c / u),
                            o > 0 && (d - o) * u < d && (o = d - d / u),
                            r < 0 && (c + r) * u < c && (r = c / u - c),
                            o < 0 && (d + o) * u < d && (o = d / u - d),
                            l = r,
                            s = o,
                            g({
                                x: r,
                                y: o
                            })
                        }
                    }
                    ;
                    return n.addEventListener("pointermove", move),
                    n.addEventListener("pointerdown", down),
                    n.addEventListener("pointerup", up),
                    ()=>{
                        n.removeEventListener("pointermove", move),
                        n.removeEventListener("pointerdown", down),
                        n.removeEventListener("pointerup", up)
                    }
                }
                {
                    let down = e=>{
                        let t = e.timeStamp;
                        t - i < 400 && toggleZoom(e),
                        i = t,
                        e.stopPropagation()
                    }
                    ;
                    return n.addEventListener("pointerdown", down),
                    ()=>{
                        n.removeEventListener("pointerdown", down)
                    }
                }
            }
            , [d, o, null == f ? void 0 : f.width, null == f ? void 0 : f.height, null === (e = k.current) || void 0 === e ? void 0 : e.naturalWidth, null === (t = k.current) || void 0 === t ? void 0 : t.naturalHeight]),
            (0,
            s.jsx)(s.Fragment, {
                children: o && (0,
                s.jsx)(ModalGate, {
                    modal: !l.modeless,
                    onEscape: closeWindow,
                    children: (0,
                    s.jsxs)("div", {
                        style: l.modeless ? {} : {
                            width: y.width,
                            height: y.height
                        },
                        className: u()(j().uikit, j().frame, j().noborder, {
                            [tD().modalframe]: !l.modeless,
                            [tD().vertical]: l.vertical,
                            [j().center]: !l.modeless,
                            [j().topcenter]: l.modeless,
                            [tD().modelessframe]: l.modeless
                        }),
                        children: [!l.modeless && (0,
                        s.jsx)("button", {
                            type: "button",
                            className: u()(j().closeBtn),
                            style: {
                                zIndex: 10
                            },
                            onClick: e=>{
                                e.preventDefault(),
                                closeWindow()
                            }
                        }), l.isIframe ? (0,
                        s.jsx)("iframe", {
                            src: (0,
                            E.Fp)((0,
                            E.b7)(N, !1)),
                            className: tD().innerframe,
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                            allowFullScreen: !!l.modeless,
                            sandbox: "allow-scripts allow-forms allow-same-origin"
                        }) : d ? (0,
                        s.jsx)("img", {
                            draggable: !1,
                            ref: k,
                            src: (0,
                            E.b7)(N),
                            className: tD().zoomimage,
                            style: {
                                transform: "scale(".concat(x.scale, ") translate3d(").concat(-1 * h.x, "px, ").concat(-1 * h.y, "px, 0)")
                            }
                        }) : (0,
                        s.jsx)("img", {
                            draggable: !1,
                            ref: k,
                            src: (0,
                            E.b7)(N),
                            className: tD().modalimage
                        })]
                    })
                })
            })
        }
        ;
        var tE = i(39099)
          , tL = i(16281)
          , tB = i.n(tL);
        let Slider = e=>{
            let {value: t, onChange: i} = e;
            return (0,
            s.jsx)("div", {
                className: tB().slider,
                children: (0,
                s.jsx)("input", {
                    type: "range",
                    min: 0,
                    max: 100,
                    value: Math.min(100, Math.floor(100 * t)),
                    onChange: e=>i(Number(e.target.value) / 100)
                })
            })
        }
          , SoundControl = e=>{
            let {soundControlKey: t} = e
              , {t: i} = (0,
            x.$)("ui")
              , {volume: n} = (0,
            m.C)(p.Kx)[t];
            return (0,
            s.jsxs)("div", {
                className: tB().setting,
                children: [(0,
                s.jsx)("div", {
                    className: tB().name,
                    children: i("settings.volume.".concat(t), (0,
                    b.je)(t))
                }), (0,
                s.jsx)(Slider, {
                    value: n,
                    onChange: e=>(0,
                    R.D9)({
                        soundControlKey: t,
                        volume: e
                    })
                })]
            })
        }
          , EnhancedControl = ()=>{
            let {t: e} = (0,
            x.$)("ui")
              , {enabled: t} = (0,
            m.C)(p.pR);
            return (0,
            s.jsxs)("div", {
                className: tB().setting,
                children: [(0,
                s.jsx)("div", {
                    className: tB().name,
                    children: e("settings.sectionName.enhanced", "Enhanced (App will reload)")
                }), (0,
                s.jsx)("span", {
                    style: {
                        marginTop: -8
                    },
                    children: (0,
                    s.jsx)(tE.Z, {
                        checked: t,
                        onChange: ()=>(0,
                        R.d6)({
                            enabled: !t
                        }),
                        inputProps: {
                            "aria-label": "controlled"
                        },
                        className: j().colorGreen
                    })
                })]
            })
        }
          , JoystickControl = ()=>{
            let {t: e} = (0,
            x.$)("ui")
              , {enabled: t} = (0,
            m.C)(p.b_);
            return O.l.getInstance().hasJoystick() ? (0,
            s.jsxs)("div", {
                className: tB().setting,
                children: [(0,
                s.jsx)("div", {
                    className: tB().name,
                    children: e("settings.sectionName.joystick", "Joystick")
                }), (0,
                s.jsx)("span", {
                    style: {
                        marginTop: -8
                    },
                    children: (0,
                    s.jsx)(tE.Z, {
                        checked: t,
                        onChange: ()=>(0,
                        R.lY)({
                            enabled: !t
                        }),
                        inputProps: {
                            "aria-label": "controlled"
                        },
                        className: j().colorGreen
                    })
                })]
            }) : null
        }
          , MuteToggle = ()=>{
            let {t: e} = (0,
            x.$)("ui")
              , t = (0,
            m.C)(p.Kx).global
              , i = !1 !== t.mute;
            return (0,
            s.jsxs)("div", {
                className: tB().setting,
                children: [(0,
                s.jsx)("div", {
                    className: tB().name,
                    children: e("settings.mute", "Sound")
                }), (0,
                s.jsx)("span", {
                    style: {
                        marginTop: -8
                    },
                    children: (0,
                    s.jsx)(tE.Z, {
                        checked: !i,
                        onChange: ()=>(0,
                        R.D9)({
                            soundControlKey: "global",
                            mute: !i
                        }),
                        inputProps: {
                            "aria-label": "controlled"
                        },
                        className: j().colorGreen
                    })
                })]
            })
        }
          , MusicToggle = ()=>{
            let {t: e} = (0,
            x.$)("ui")
              , t = (0,
            m.C)(p.Kx).music
              , i = !1 !== t.mute;
            return (0,
            s.jsxs)("div", {
                className: tB().setting,
                children: [(0,
                s.jsx)("div", {
                    className: tB().name,
                    children: e("settings.music", "Music")
                }), (0,
                s.jsx)("span", {
                    style: {
                        marginTop: -8
                    },
                    children: (0,
                    s.jsx)(tE.Z, {
                        checked: !i,
                        onChange: ()=>(0,
                        R.D9)({
                            soundControlKey: "music",
                            mute: !i
                        }),
                        inputProps: {
                            "aria-label": "controlled"
                        },
                        className: j().colorGreen
                    })
                })]
            })
        }
          , SettingsWindow = ()=>{
            let {t: e} = (0,
            x.$)("ui")
              , t = (0,
            m.T)()
              , close = ()=>t((0,
            Y.E3)());
            return (0,
            s.jsxs)("div", {
                className: tB().container,
                children: [(0,
                s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                    onKeyDown: e=>"Escape" === e.key && close()
                }), (0,
                s.jsxs)("div", {
                    className: u()(j().uikit, j().frame, j().orangeinset, tB().box),
                    children: [(0,
                    s.jsx)("div", {
                        className: tB().title,
                        children: e("settings.title", "Settings")
                    }), (0,
                    s.jsx)("button", {
                        type: "button",
                        className: j().closeBtn,
                        onClick: close
                    }), (0,
                    s.jsx)("div", {
                        className: tB().section,
                        children: e("settings.sectionName.sound", "Audio")
                    }), (0,
                    s.jsx)(SoundControl, {
                        soundControlKey: "global"
                    }), (0,
                    s.jsx)(MuteToggle, {}), (0,
                    s.jsx)(MusicToggle, {}), (0,
                    s.jsx)("div", {
                        className: tB().section,
                        children: e("settings.sectionName.graphics", "Graphics")
                    }), (0,
                    s.jsx)(EnhancedControl, {}), (0,
                    s.jsx)(JoystickControl, {})]
                })]
            })
        }
        ;
        var tA = i(19116)
          , tF = i.n(tA);
        let TermsOfServiceDialog = ()=>{
            let {t: e} = (0,
            x.$)("ui")
              , [t,i] = (0,
            r.useState)(!1);
            return (0,
            s.jsxs)("div", {
                className: j().modalBackdrop,
                children: [(0,
                s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {}), (0,
                s.jsxs)("div", {
                    className: u()(j().uikit, j().frame, j().purpleinset, j().center, tF().container),
                    children: [(0,
                    s.jsx)("h1", {
                        children: e("termsOfService.title", "Terms of Service")
                    }), (0,
                    s.jsx)("iframe", {
                        src: "https://www.pixels.xyz/rules-guidelines-text",
                        className: u()(tF().content, j().scrollArea),
                        sandbox: "allow-scripts allow-forms"
                    }), (0,
                    s.jsxs)("div", {
                        className: tF().buttons,
                        children: [(0,
                        s.jsxs)("label", {
                            className: "clickable",
                            style: {
                                paddingTop: 6
                            },
                            children: [(0,
                            s.jsx)("input", {
                                style: {
                                    width: 20,
                                    height: 20
                                },
                                type: "checkbox",
                                checked: t,
                                onChange: e=>i(e.target.checked)
                            }), "\xa0", e("termsOfService.checkbox.accept", "I understand and agree to the Terms of Service.")]
                        }), (0,
                        s.jsx)("button", {
                            className: j().pushbutton,
                            type: "button",
                            disabled: !t,
                            onClick: ()=>R.ZP.emitEventNow(R.fb.SET_TOS_ACCEPTED, {}),
                            children: e("termsOfService.button.accept", "Accept")
                        })]
                    })]
                })]
            })
        }
          , TermsOfService = ()=>{
            var e;
            let t = (0,
            m.C)(p.lA);
            return !t || t.core.isGuest ? null : (null !== (e = t.full.tosVersion) && void 0 !== e ? e : 0) >= F.sV ? null : (0,
            s.jsx)(TermsOfServiceDialog, {})
        }
        ;
        var tR = i(40436)
          , tO = i.n(tR);
        let tV = !1
          , SelectedDOMItem = ()=>{
            var e, t;
            let i = (0,
            r.useRef)(null)
              , n = (0,
            r.useRef)(null)
              , a = (0,
            m.C)(tm.B6)
              , l = (0,
            m.C)(tm.xM)
              , o = (0,
            ea.Zm)()
              , c = -1 !== l.slot
              , d = a && !!((null === (e = a.onUse) || void 0 === e ? void 0 : e.placeObject) || (null === (t = a.onUse) || void 0 === t ? void 0 : t.placeEntity));
            r.useEffect(()=>{
                let updateMousePosition = e=>{
                    n.current && (n.current.style.transform = "translate3d(".concat(e.clientX + 20, "px,").concat(e.clientY - 20, "px,0)")),
                    i.current && c && (i.current.style.opacity = tV || !d ? "100%" : "0%")
                }
                ;
                return i.current && (i.current.style.transform = "scale3d(".concat(o, ", ").concat(o, ", 1)")),
                window.addEventListener("mousemove", updateMousePosition),
                ()=>{
                    window.removeEventListener("mousemove", updateMousePosition)
                }
            }
            , [o, d, c]);
            let u = (null == a ? void 0 : a.image) && (B.Z.preloadedBlob(a.image) || (0,
            E.b7)(a.image));
            return (0,
            s.jsx)("div", {
                ref: n,
                className: "selecteditem",
                children: c && (0,
                s.jsxs)("div", {
                    ref: i,
                    style: {
                        transformOrigin: "left bottom",
                        transform: "scale3d(".concat(o, ", ").concat(o, ", 1)"),
                        visibility: "visible"
                    },
                    children: [(0,
                    s.jsx)("img", {
                        style: {
                            position: "relative",
                            objectFit: "contain",
                            imageRendering: "pixelated",
                            opacity: 1,
                            width: 32,
                            height: 32
                        },
                        crossOrigin: "anonymous",
                        src: u || (0,
                        E.Uk)("/assets/ui/store_item_lock.png")
                    }), (0,
                    s.jsx)("div", {
                        className: tO().quantity,
                        children: (null == l ? void 0 : l.quantity) > 1 ? "x".concat(l.quantity) : ""
                    })]
                })
            })
        }
        ;
        var tq = i(95767)
          , tW = i(48239)
          , tZ = i.n(tW)
          , Mailbox_MailboxItems = ()=>{
            let e = (0,
            m.C)(tq.AK)
              , {t} = (0,
            x.$)(["game"]);
            return (0,
            s.jsx)("div", {
                className: j().scrollArea,
                children: e.mail.map(e=>{
                    var i;
                    let n;
                    let a = e.itemId ? C.Z.getGameItem(e.itemId) : void 0
                      , l = e.currencyId ? C.Z.getGameCurrency(e.currencyId) : void 0;
                    "coins" === e.kind ? n = "currency.".concat(e.currencyId) : "item" === e.kind && (n = e.itemId);
                    let r = n && t((0,
                    b.sA)(n), {
                        ns: "game"
                    });
                    return (0,
                    s.jsxs)("div", {
                        className: tZ().mailboxItemWrapper,
                        children: [(0,
                        s.jsxs)("div", {
                            className: tZ().title,
                            children: [" ", e.title]
                        }), (0,
                        s.jsx)("div", {
                            className: tZ().description,
                            children: e.descriptionTemplate ? t(e.descriptionTemplate.id, {
                                defaultValue: e.description,
                                ...e.descriptionTemplate.args
                            }) : e.description
                        }), (0,
                        s.jsx)("div", {
                            className: tZ().rewardText,
                            children: "coins" === e.kind ? (0,
                            s.jsxs)(s.Fragment, {
                                children: [(0,
                                s.jsxs)("span", {
                                    style: {
                                        marginRight: 8
                                    },
                                    children: [" ", (0,
                                    E.xG)(e.amount, l)]
                                }), r, (0,
                                s.jsx)("img", {
                                    src: null == l ? void 0 : null === (i = l.sprite) || void 0 === i ? void 0 : i.image,
                                    style: {
                                        marginLeft: 8,
                                        width: 24
                                    }
                                })]
                            }) : "item" === e.kind ? (0,
                            s.jsxs)(s.Fragment, {
                                children: [(0,
                                s.jsxs)("span", {
                                    style: {
                                        marginRight: 8
                                    },
                                    children: [" ", e.amount]
                                }), r, (0,
                                s.jsx)("img", {
                                    src: null == a ? void 0 : a.image,
                                    style: {
                                        marginLeft: 8,
                                        width: 24
                                    }
                                })]
                            }) : (0,
                            s.jsx)("div", {})
                        }), ["coins", "item"].includes(e.kind) && (0,
                        s.jsx)("button", {
                            type: "button",
                            className: tZ().collectAllButton,
                            onClick: ()=>{
                                R.ZP.emitEventNow(R.Yi.COLLECT_MAIL_ITEM, {
                                    mailId: e._id,
                                    similar: !0
                                })
                            }
                            ,
                            children: t("collect-similar-mail", {
                                defaultValue: "Collect All {{name}}",
                                name: r
                            })
                        }), (0,
                        s.jsx)("button", {
                            type: "button",
                            className: tZ().collectButton,
                            onClick: ()=>{
                                R.ZP.emitEventNow(R.Yi.COLLECT_MAIL_ITEM, {
                                    mailId: e._id
                                })
                            }
                            ,
                            children: "message" === e.kind ? t("mark-as-read", "Mark As Read") : t("collect-mail", "Collect Mail")
                        })]
                    }, e._id)
                }
                )
            })
        }
          , Mailbox_MailBox = ()=>{
            var e;
            let t = (0,
            m.C)(tq.AK)
              , i = (0,
            m.T)()
              , {t: n} = (0,
            x.$)("ui")
              , close = ()=>{
                i((0,
                tq.I_)())
            }
            ;
            return (0,
            r.useEffect)(()=>{
                t.isVisible && R.ZP.emitEventNow(R.Yi.FETCH_MAIL)
            }
            , [t.isVisible]),
            t.isVisible ? (0,
            s.jsxs)("div", {
                className: j().modalBackdrop,
                children: [(0,
                s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                    onKeyDown: e=>{
                        "Escape" === e.key && close()
                    }
                }), (0,
                s.jsx)("div", {
                    className: u()(j().uikit, j().pixelbox, j().navy, j().center, tZ().container),
                    children: (0,
                    s.jsxs)("div", {
                        className: j().inner,
                        children: [(0,
                        s.jsx)("h1", {
                            children: n("mailbox.title", "Mailbox")
                        }), t.isLoading && (0,
                        s.jsx)(q.s5, {}), t.isLoading || (null === (e = t.mail) || void 0 === e ? void 0 : e.length) ? (0,
                        s.jsx)(Mailbox_MailboxItems, {}) : (0,
                        s.jsx)("h2", {
                            className: j().center,
                            children: n("mailbox.nomail", "You have no mail at this time.")
                        }), (0,
                        s.jsx)("button", {
                            className: j().closeBtn,
                            type: "button",
                            onClick: close,
                            children: "\xa0"
                        })]
                    })
                })]
            }) : (0,
            s.jsx)(s.Fragment, {})
        }
          , tU = i(95883);
        let tG = ["preload", "fading", "intro", "walkon", "applause", "scaledown", "trait1", "trait2", "trait3"]
          , tH = {
            preload: 0,
            fading: 2e3,
            intro: 8e3,
            walkon: 2e3,
            applause: 2e3,
            scaledown: 2e3,
            trait1: 1e3
        }
          , Traits = e=>{
            var t, i, n, a, l, r, o;
            let {pet: c, className: d} = e;
            return (0,
            s.jsx)("div", {
                className: d,
                children: (0,
                s.jsx)("table", {
                    children: (0,
                    s.jsxs)("tbody", {
                        children: [(0,
                        s.jsxs)("tr", {
                            children: [(0,
                            s.jsx)("td", {
                                children: "Strength"
                            }), (0,
                            s.jsxs)("td", {
                                children: [(0,
                                E.uf)(null !== (a = null === (t = c.traits) || void 0 === t ? void 0 : t.Strength) && void 0 !== a ? a : 0), " / 100"]
                            })]
                        }), (0,
                        s.jsxs)("tr", {
                            children: [(0,
                            s.jsx)("td", {
                                children: "Speed"
                            }), (0,
                            s.jsxs)("td", {
                                children: [(0,
                                E.uf)(null !== (l = null === (i = c.traits) || void 0 === i ? void 0 : i.Speed) && void 0 !== l ? l : 0), " / 100"]
                            })]
                        }), (0,
                        s.jsxs)("tr", {
                            children: [(0,
                            s.jsx)("td", {
                                children: "Luck"
                            }), (0,
                            s.jsxs)("td", {
                                children: [(0,
                                E.uf)(null !== (r = null === (n = c.traits) || void 0 === n ? void 0 : n.Luck) && void 0 !== r ? r : 0), " / 100"]
                            })]
                        }), (0,
                        s.jsxs)("tr", {
                            children: [(0,
                            s.jsx)("td", {
                                children: "Birthday"
                            }), (0,
                            s.jsx)("td", {
                                children: new Date(null !== (o = c.birthday) && void 0 !== o ? o : 0).toLocaleDateString()
                            })]
                        })]
                    })
                })
            })
        }
          , PetReveal = e=>{
            let {petId: t} = e
              , i = (0,
            m.T)()
              , {t: n} = (0,
            x.$)(["ui", "game"])
              , [a,l] = (0,
            r.useState)(null)
              , [o,c] = (0,
            r.useState)("preload")
              , d = tG.indexOf(o)
              , nextStage = ()=>{
                console.log("moving to stage ".concat(d + 1));
                let e = tG[d + 1];
                c(e)
            }
            ;
            (0,
            r.useEffect)(()=>{
                l(null),
                Promise.all([J.default.loadAudio("snd_petreveal"), J.default.loadAudio("snd_petreveal2"), J.default.loadAudio("snd_petrevealloop")]).then(()=>{
                    console.log("setting stage to fading"),
                    c("fading")
                }
                ).catch(console.log)
            }
            , [t]),
            (0,
            r.useEffect)(()=>{
                let e = tH[o];
                if ("applause" === o && (J.default.playAudio("snd_petreveal2"),
                J.default.fadeInAudio("snd_petrevealloop")),
                "fading" === o)
                    setTimeout(()=>{
                        J.default.playAudio("snd_petreveal"),
                        ey.Z.fetchPet(t).then(e=>{
                            (null == e ? void 0 : e.avatar) ? (l(e),
                            nextStage()) : c("cancel")
                        }
                        ).catch(e=>{
                            console.log("error getting pet", e),
                            c("cancel")
                        }
                        )
                    }
                    , e);
                else if (e > 0) {
                    let t = setTimeout(()=>{
                        nextStage()
                    }
                    , e);
                    return ()=>{
                        clearTimeout(t)
                    }
                }
            }
            , [o]);
            let handleClose = ()=>{
                J.default.stopAudio("snd_petrevealloop"),
                i((0,
                Y.zR)({}))
            }
              , handleSelect = ()=>{
                if (a && t) {
                    let e = {
                        tokenId: a.tokenId,
                        avatarId: a.avatar.id
                    };
                    R.ZP.sendEventDelayed(R.Yi.PET_SELECTED, e)
                }
                handleClose()
            }
              , p = 39 * Math.floor(.66 * Math.min(.8 * window.innerHeight, window.innerWidth) / 39);
            return (0,
            s.jsxs)("div", {
                draggable: !1,
                tabIndex: 0,
                className: u()(eb().petreveal),
                children: [(0,
                s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                    onKeyDown: e=>{
                        "Escape" === e.key && d >= tG.indexOf("trait1") && handleClose(),
                        e.stopPropagation(),
                        e.preventDefault()
                    }
                }), (0,
                s.jsx)("div", {
                    className: u()(eb().petbackground, {
                        [eb().intro]: d >= tG.indexOf("intro")
                    }),
                    children: (0,
                    s.jsx)("div", {
                        className: u()(eb().insetbackground, {
                            [eb().preload]: !a
                        }),
                        style: {
                            backgroundImage: a ? (0,
                            tU.p)(a) : ""
                        },
                        children: a && (0,
                        s.jsxs)(s.Fragment, {
                            children: [(0,
                            s.jsx)(X.z, {
                                className: u()(eb().petpicshadow, {
                                    [eb().walkon]: d >= tG.indexOf("walkon")
                                }),
                                symbol: a.avatar.id,
                                selectedTraits: a.avatar.pieces,
                                height: p,
                                anim: d > tG.indexOf("applause") ? "sit" : "walk"
                            }), (0,
                            s.jsx)(X.z, {
                                className: u()(eb().petpic, {
                                    [eb().walkon]: d >= tG.indexOf("walkon")
                                }),
                                symbol: a.avatar.id,
                                selectedTraits: a.avatar.pieces,
                                height: p,
                                anim: d > tG.indexOf("applause") ? "sit" : "walk"
                            })]
                        })
                    })
                }), a && d >= tG.indexOf("trait1") && (0,
                s.jsxs)("div", {
                    className: eb().petnamecontainer,
                    children: [(0,
                    s.jsx)("div", {
                        className: eb().petnameoutline,
                        children: a.avatar.name
                    }), (0,
                    s.jsx)("div", {
                        className: eb().petname,
                        children: a.avatar.name
                    })]
                }), d >= tG.indexOf("trait2") && (0,
                s.jsxs)(s.Fragment, {
                    children: [(0,
                    s.jsx)("button", {
                        className: eb().closeBtn,
                        type: "button",
                        onClick: handleClose
                    }), (0,
                    s.jsx)("button", {
                        onClick: e=>{
                            e.preventDefault(),
                            e.stopPropagation(),
                            handleSelect()
                        }
                        ,
                        type: "button",
                        className: u()(eb().selectPet),
                        children: n("button.selectpet", "Select Pet")
                    })]
                })]
            })
        }
          , Bar = e=>{
            let {value: t, maxValue: i, image: n, className: a} = e
              , l = Math.min(100, Math.floor(t / i * 100));
            return (0,
            s.jsx)("div", {
                className: a,
                children: (0,
                s.jsx)("img", {
                    src: n,
                    style: {
                        transform: "translate(".concat((l - 100) / 2, "%) scale(").concat(l, "%, 100%)")
                    }
                })
            })
        }
          , PetView = e=>{
            var t, i, n, a, l, o, c, d, m, p, v, h, g, _, f, y;
            let {pet: k, active: N} = e
              , {t: C} = (0,
            x.$)(["ui", "game"])
              , [w,S] = (0,
            r.useState)(null !== (i = null == k ? void 0 : null === (t = k.avatar) || void 0 === t ? void 0 : t.name) && void 0 !== i ? i : "")
              , [I,T] = (0,
            r.useState)(!1)
              , [P,M] = (0,
            r.useState)("")
              , D = (0,
            ea.Zm)()
              , saveName = ()=>{
                if (N && I) {
                    var e;
                    if (0 === w.trim().length) {
                        M("Pet must have a name");
                        return
                    }
                    if ((0,
                    E.zB)(w)) {
                        M("Pets only like nice names");
                        return
                    }
                    w.trim() !== (null == k ? void 0 : null === (e = k.avatar) || void 0 === e ? void 0 : e.name) && R.ZP.sendEventDelayed(R.Yi.PET_RENAME, {
                        name: w
                    }),
                    T(!1)
                }
            }
            ;
            return k ? "capsule" !== k.stage ? (0,
            s.jsxs)("div", {
                className: u()(eb().petview, j().scrollArea),
                children: [(0,
                s.jsxs)("div", {
                    className: eb().pettoprow,
                    children: [(0,
                    s.jsx)("div", {
                        className: eb().petname,
                        children: P ? (0,
                        s.jsx)("div", {
                            className: eb().error,
                            onClick: ()=>M(""),
                            children: P
                        }) : I ? (0,
                        s.jsxs)(s.Fragment, {
                            children: [(0,
                            s.jsx)("span", {
                                className: "clickable",
                                onClick: saveName,
                                children: "\uD83D\uDCBE"
                            }), (0,
                            s.jsx)("input", {
                                value: w,
                                maxLength: 15,
                                onChange: e=>S(e.target.value),
                                onKeyDown: e=>{
                                    if ("Escape" === e.key) {
                                        var t, i;
                                        S(null !== (i = null == k ? void 0 : null === (t = k.avatar) || void 0 === t ? void 0 : t.name) && void 0 !== i ? i : ""),
                                        T(!1)
                                    } else
                                        "Enter" === e.key && saveName();
                                    e.stopPropagation()
                                }
                                ,
                                autoFocus: !0,
                                autoCorrect: "off",
                                autoComplete: "off"
                            })]
                        }) : (0,
                        s.jsxs)(s.Fragment, {
                            children: [!1, w]
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: eb().petbackground,
                        style: {
                            backgroundImage: (0,
                            tU.p)(k)
                        },
                        children: (0,
                        s.jsx)(X.z, {
                            className: eb().petpic,
                            symbol: k.avatar.id,
                            selectedTraits: k.avatar.pieces,
                            height: 106
                        })
                    }), (0,
                    s.jsxs)("div", {
                        className: eb().happiness,
                        children: [(0,
                        s.jsxs)("div", {
                            className: eb().happinesslabel,
                            children: [C("pet.happiness", "Happiness"), " ", (0,
                            E.uf)(k.happiness), "%"]
                        }), (0,
                        s.jsx)(Bar, {
                            value: k.happiness,
                            maxValue: 100,
                            image: (0,
                            E.Uk)("/game/ui/hud/hud_bar_energyfull.png"),
                            className: eb().happinessbar
                        }), (0,
                        s.jsxs)("div", {
                            className: eb().petstreaks,
                            children: [(0,
                            s.jsx)("div", {
                                children: C("pet.streaks.food", {
                                    defaultValue: "Fed last {{count}} days",
                                    count: null !== (g = null === (a = k.streaks) || void 0 === a ? void 0 : null === (n = a.food) || void 0 === n ? void 0 : n.current) && void 0 !== g ? g : 0
                                })
                            }), (0,
                            s.jsx)("div", {
                                children: C("pet.streaks.longest", {
                                    defaultValue: "Longest streak {{count}} days",
                                    count: null !== (_ = null === (o = k.streaks) || void 0 === o ? void 0 : null === (l = o.food) || void 0 === l ? void 0 : l.longest) && void 0 !== _ ? _ : 0
                                })
                            }), (0,
                            s.jsx)("div", {
                                children: C("pet.streaks.water", {
                                    defaultValue: "Watered last {{count}} days",
                                    count: null !== (f = null === (d = k.streaks) || void 0 === d ? void 0 : null === (c = d.water) || void 0 === c ? void 0 : c.current) && void 0 !== f ? f : 0
                                })
                            }), (0,
                            s.jsx)("div", {
                                children: C("pet.streaks.longest", {
                                    defaultValue: "Longest streak {{count}} days",
                                    count: null !== (y = null === (p = k.streaks) || void 0 === p ? void 0 : null === (m = p.water) || void 0 === m ? void 0 : m.longest) && void 0 !== y ? y : 0
                                })
                            })]
                        })]
                    })]
                }), (0,
                s.jsx)("div", {
                    title: (0,
                    tU.N)(null === (v = k.scriptInstance) || void 0 === v ? void 0 : v.trackers),
                    className: eb().petstatus,
                    children: (0,
                    b.Kt)(k.scriptInstance)
                }), N && (0,
                s.jsxs)(s.Fragment, {
                    children: [k.happiness < 50 && (0,
                    s.jsx)("div", {
                        className: eb().inventorystatus,
                        children: C("pet.inventorylocked", "Pet must be happier to access inventory.")
                    }), (0,
                    s.jsx)("div", {
                        className: eb().inventory,
                        style: {
                            width: "".concat(100 / D, "%"),
                            position: "relative",
                            minHeight: 40 * Math.ceil((null === (h = k.inventory) || void 0 === h ? void 0 : h.size) / 6) * D,
                            transformOrigin: "center top 0",
                            transform: "scale3d(".concat(D, ", ").concat(D, ", 1)")
                        },
                        children: (0,
                        s.jsx)(InventorySlots, {
                            mid: k.mid,
                            inventory: k.inventory,
                            maxSlots: 0,
                            disabled: k.happiness < 50
                        })
                    })]
                }), (0,
                s.jsx)(Traits, {
                    pet: k,
                    className: eb().traits
                })]
            }) : (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)("img", {
                    className: eb().petpic,
                    src: "".concat(eN.LB, "/v1/pets/image/").concat(k.avatar.id, "/").concat(k.tokenId),
                    height: 128
                }), (0,
                s.jsx)("div", {
                    className: eb().petname,
                    children: k.avatar.name
                })]
            }) : (0,
            s.jsx)(s.Fragment, {
                children: C("pet.notfound", "Pet Not Found")
            })
        }
          , PetContainer = e=>{
            let {petId: t} = e
              , i = (0,
            m.T)()
              , {t: n} = (0,
            x.$)(["ui", "game"])
              , [a,l] = (0,
            r.useState)()
              , [o,c] = (0,
            r.useState)(!0)
              , d = (0,
            m.C)(tm.xM);
            (0,
            r.useEffect)(()=>{
                let e = O.l.getInstance()
                  , i = e.currentPlayer;
                if (c(!0),
                l(null),
                t)
                    setTimeout(()=>{
                        ey.Z.fetchPet(t).then(e=>{
                            (null == e ? void 0 : e.avatar) && l(e),
                            c(!1)
                        }
                        ).catch(e=>{
                            console.log("error getting pet", e),
                            c(!1)
                        }
                        )
                    }
                    , 100);
                else {
                    var n;
                    (null == i ? void 0 : null === (n = i.full) || void 0 === n ? void 0 : n.pet) && l(i.full.pet),
                    c(!1)
                }
            }
            , [t]);
            let selectPet = ()=>{
                if (a && t) {
                    let e = {
                        tokenId: a.tokenId,
                        avatarId: a.avatar.id
                    };
                    R.ZP.sendEventDelayed(R.Yi.PET_SELECTED, e)
                }
                i((0,
                Y.zR)({}))
            }
              , restPet = ()=>{
                a && !t && R.ZP.sendEventDelayed(R.Yi.PET_SELECTED, {}),
                i((0,
                tm.aq)()),
                i((0,
                Y.zR)({}))
            }
            ;
            return (0,
            s.jsxs)("div", {
                draggable: !1,
                tabIndex: 0,
                className: u()(eb().petdetails, j().uikit, D().inventoryContainer, D().petstorage),
                children: [(0,
                s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                    onKeyDown: e=>{
                        "Escape" === e.key && -1 === d.slot && i((0,
                        Y.zR)({})),
                        e.stopPropagation(),
                        e.preventDefault()
                    }
                }), o ? (0,
                s.jsx)(Loading_Loading, {}) : (0,
                s.jsx)(PetView, {
                    pet: null != a ? a : null,
                    active: !t
                }), (0,
                s.jsx)("button", {
                    type: "button",
                    className: j().closeBtn,
                    onClick: ()=>i((0,
                    Y.zR)({})),
                    children: (0,
                    s.jsx)("img", {
                        src: ""
                    })
                }), (0,
                s.jsx)("div", {
                    className: u()(eb().buttonbar, j().uikit),
                    children: t ? (0,
                    s.jsx)("button", {
                        onClick: e=>{
                            e.preventDefault(),
                            selectPet()
                        }
                        ,
                        type: "button",
                        className: u()(j().pushbutton, j().yellow),
                        children: n("button.selectpet", "Select Pet")
                    }) : (0,
                    s.jsx)("button", {
                        onClick: e=>{
                            e.preventDefault(),
                            restPet()
                        }
                        ,
                        type: "button",
                        className: u()(j().pushbutton, j().yellow),
                        children: n("button.restpet", "Rest Pet")
                    })
                })]
            })
        }
          , PetDetails = ()=>{
            let e = (0,
            m.C)(p._i);
            return e.isVisible && !e.firstReveal ? (0,
            s.jsx)(PetContainer, {
                petId: e.mid
            }) : e.isVisible && e.firstReveal && e.mid ? (0,
            s.jsx)(PetReveal, {
                petId: e.mid
            }) : null
        }
          , EntityConfig = ()=>{
            var e, t, i, n;
            let a = (0,
            m.T)()
              , l = (0,
            m.C)(eM.JR)
              , {t: o} = (0,
            x.$)(["ui"])
              , c = r.useRef(null)
              , d = !!(l.isVisible && l.mid_portal);
            (0,
            r.useEffect)(()=>{
                if (d) {
                    var e, t;
                    null === (e = c.current) || void 0 === e || e.select(),
                    null === (t = c.current) || void 0 === t || t.focus()
                }
            }
            , [d]);
            let cancelHandler = e=>{
                null == e || e.preventDefault(),
                a((0,
                eM.aP)())
            }
              , p = l.mid_portal && O.l.getInstance().getEntityByUniqueId(l.mid_portal)
              , v = null !== (i = null === (e = l.config) || void 0 === e ? void 0 : e[1]) && void 0 !== i ? i : "setup"
              , submitChange = e=>{
                var t;
                null == e || e.preventDefault();
                let i = null === (t = c.current) || void 0 === t ? void 0 : t.value;
                p && (R.ZP.emitEventNow(ek.m.clickEntity, {
                    mid: l.mid_portal,
                    impact: v,
                    entity: p.entity,
                    inputs: [null != i ? i : ""]
                }),
                a((0,
                eM.aP)()))
            }
              , eatKey = e=>{
                e.stopPropagation(),
                "Enter" === e.key ? submitChange() : "Escape" === e.key && cancelHandler()
            }
              , h = o("save", "Save")
              , g = o("cancel", "Cancel")
              , _ = !0
              , f = null === (t = l.config) || void 0 === t ? void 0 : t[0];
            return "yesno" === f && (h = o("yes", "Yes"),
            g = o("no", "No"),
            _ = !1),
            (0,
            s.jsx)(s.Fragment, {
                children: d && (0,
                s.jsx)("div", {
                    className: j().modalBackdrop,
                    children: (0,
                    s.jsxs)("div", {
                        style: {
                            maxWidth: 500
                        },
                        className: u()([j().uikit, j().frame, j().purple, j().center]),
                        children: [(0,
                        s.jsxs)("div", {
                            style: {
                                position: "relative",
                                boxSizing: "border-box",
                                padding: 20
                            },
                            className: "is-rounded",
                            onKeyDown: eatKey,
                            children: [(0,
                            s.jsx)("p", {
                                children: o(null !== (n = l.prompt) && void 0 !== n ? n : "")
                            }), (0,
                            s.jsx)("br", {}), _ && (0,
                            s.jsx)("div", {
                                style: {
                                    textAlign: "center"
                                },
                                children: (0,
                                s.jsx)("input", {
                                    tabIndex: 1,
                                    type: "text",
                                    maxLength: 128,
                                    style: {
                                        textAlign: "left",
                                        width: "80%"
                                    },
                                    ref: c,
                                    onKeyDown: eatKey
                                })
                            })]
                        }), (0,
                        s.jsx)("br", {}), (0,
                        s.jsx)("br", {}), (0,
                        s.jsxs)("div", {
                            style: {
                                textAlign: "right"
                            },
                            children: [(0,
                            s.jsx)("button", {
                                type: "button",
                                className: u()(j().pushbutton, j().yellow),
                                onClick: submitChange,
                                children: h
                            }), (0,
                            s.jsx)("button", {
                                type: "button",
                                className: u()(j().pushbutton, j().yellow),
                                onClick: cancelHandler,
                                children: g
                            })]
                        })]
                    })
                })
            })
        }
        ;
        var tz = i(68787)
          , tQ = i.n(tz);
        let PlayerInfoDialog = ()=>{
            var e, t, i, n;
            let {t: a} = (0,
            x.$)(["ui", "game"])
              , l = (0,
            m.T)()
              , r = (0,
            m.C)(p.QV)
              , o = (0,
            ei.GU)()
              , c = (0,
            m.C)(p.lA)
              , d = null == c ? void 0 : c.full.coinInventory;
            if ("playerinfo" !== r)
                return (0,
                s.jsx)(s.Fragment, {});
            let close = ()=>{
                l((0,
                Y.Mr)())
            }
              , v = O.l.getInstance().currentPlayer
              , h = null == v ? void 0 : null === (e = v.core.memberships) || void 0 === e ? void 0 : e.get("vip")
              , g = null == v ? void 0 : null === (t = v.core.memberships) || void 0 === t ? void 0 : t.get("nftLand-" + o.name)
              , _ = null == v ? void 0 : null === (i = v.core.memberships) || void 0 === i ? void 0 : i.get("Twitter")
              , f = null == v ? void 0 : null === (n = v.core.memberships) || void 0 === n ? void 0 : n.get("Discord");
            return (0,
            s.jsxs)("div", {
                className: j().modalBackdrop,
                children: [(0,
                s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                    onKeyDown: e=>{
                        e.stopPropagation(),
                        "Escape" === e.key && close()
                    }
                }), (0,
                s.jsx)("div", {
                    className: u()(j().uikit, j().pixelbox, j().navy, j().center, j().profilewindow),
                    children: (0,
                    s.jsxs)("div", {
                        className: j().inner,
                        children: [(0,
                        s.jsx)("h1", {
                            children: a("onboarding.playerinfo", "Player Statistics")
                        }), (0,
                        s.jsx)("button", {
                            className: j().closeBtn,
                            type: "button",
                            onClick: close,
                            children: "\xa0"
                        }), (0,
                        s.jsx)("div", {
                            className: u()(j().fillflex, j().scrollArea),
                            children: (0,
                            s.jsxs)("div", {
                                className: tQ().playerinfo,
                                children: [(0,
                                s.jsxs)("div", {
                                    className: tQ().username,
                                    children: [(0,
                                    s.jsx)("span", {
                                        className: tQ().label,
                                        children: a("label.username", "Username")
                                    }), (0,
                                    s.jsx)("span", {
                                        className: tQ().value,
                                        children: null == c ? void 0 : c.core.username
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: tQ().created,
                                    children: [(0,
                                    s.jsx)("span", {
                                        className: tQ().label,
                                        children: a("label.createdat", "Started")
                                    }), (0,
                                    s.jsx)("span", {
                                        className: tQ().value,
                                        children: (null == c ? void 0 : c.full.createdAt) && new Date(c.full.createdAt).toLocaleDateString()
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: tQ().memberships,
                                    children: [(0,
                                    s.jsx)("span", {
                                        children: a("label.memberships", "Memberships")
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: tQ().vipSub,
                                        children: [(0,
                                        s.jsx)("span", {
                                            className: tQ().label,
                                            children: a("label.vip", "VIP")
                                        }), (0,
                                        s.jsxs)("span", {
                                            className: tQ().value,
                                            children: [h ? a("ui.expires", "Expires") : a("ui.no", "No"), " ", h && h.expiration && new Date(h.expiration).toLocaleDateString(), " "]
                                        })]
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: tQ().sub,
                                        children: [(0,
                                        s.jsx)("span", {
                                            className: tQ().label,
                                            children: a("label.landowner", "Land Owner")
                                        }), (0,
                                        s.jsx)("span", {
                                            className: tQ().value,
                                            children: g ? a("ui.yes", "Yes") : a("ui.no", "No")
                                        })]
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: tQ().sub,
                                        children: [(0,
                                        s.jsx)("span", {
                                            className: tQ().label,
                                            children: a("label.twitter_connect", "Twitter")
                                        }), (0,
                                        s.jsx)("span", {
                                            className: tQ().value,
                                            children: _ ? a("ui.connected", "Connected") : a("ui.not_connected", "Not Connected")
                                        })]
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: tQ().sub,
                                        children: [(0,
                                        s.jsx)("span", {
                                            className: tQ().label,
                                            children: a("label.discord_connect", "Discord")
                                        }), (0,
                                        s.jsx)("span", {
                                            className: tQ().value,
                                            children: f ? a("ui.connected", "Connected") : a("ui.not_connected", "Not Connected")
                                        })]
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: tQ().balances,
                                    children: [(0,
                                    s.jsx)("span", {
                                        children: a("label.balances", "Balances")
                                    }), null == d ? void 0 : d.map(e=>({
                                        balance: e.balance,
                                        currency: C.Z.getGameCurrency(e.currencyId)
                                    })).filter(e=>e.currency && e.balance > 0).map(e=>(0,
                                    s.jsxs)("div", {
                                        className: tQ().balanceentry,
                                        children: [(0,
                                        s.jsx)("span", {
                                            className: tQ().label,
                                            children: a("currency.".concat(e.currency.name), {
                                                ns: "game"
                                            })
                                        }), (0,
                                        s.jsx)(commons_CoinBalance, {
                                            styles: {
                                                display: "inline-block"
                                            },
                                            currency: e.currency,
                                            balance: e.balance
                                        })]
                                    }, e.currency.id))]
                                })]
                            })
                        }), (0,
                        s.jsxs)("div", {
                            className: j().flexsingleline,
                            children: [(0,
                            s.jsx)("div", {
                                style: {
                                    width: 240,
                                    height: 48
                                },
                                children: "\xa0"
                            }), (0,
                            s.jsx)(PlayerBackButton, {})]
                        })]
                    })
                })]
            })
        }
          , Tabs_Tabs = e=>{
            let {tabs: t, selectedTabId: i, onSelectedTabChanged: n} = e
              , a = r.useMemo(()=>t.find(e=>e.id === i), [t, i]);
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)("div", {
                    className: u()(j().tabs, "pixelFont"),
                    style: {
                        marginBottom: 0
                    },
                    children: (0,
                    s.jsx)("ul", {
                        children: t.map(e=>(0,
                        s.jsx)("li", {
                            className: u()({
                                [j().activetab]: e.id === i
                            }),
                            children: (0,
                            s.jsx)("button", {
                                type: "button",
                                onClick: t=>{
                                    t.preventDefault(),
                                    n(e.id)
                                }
                                ,
                                children: (0,
                                s.jsx)("span", {
                                    style: {
                                        fontSize: 10
                                    },
                                    children: e.name
                                })
                            })
                        }, e.id))
                    })
                }), (0,
                s.jsx)("div", {
                    className: j().fillflex,
                    style: {
                        marginTop: 0
                    },
                    children: null == a ? void 0 : a.component
                })]
            })
        }
        ;
        var tK = i(25852)
          , t$ = i.n(tK)
          , tY = i(6310);
        let TraitPickerV1 = e=>{
            var t;
            let i, {avatar: n, onChange: a, attribute: l} = e, o = C.Z.getGameAvatar(n.id), c = r.useMemo(()=>(0,
            tY.QK)({
                avatarId: n.id,
                attribute: l
            }), [l]), d = l;
            if (l.includes(".")) {
                let[e,t] = l.split(".");
                i = t,
                d = e
            }
            let m = null !== (t = n.pieces[d]) && void 0 !== t ? t : {
                type: d
            }
              , transformTraitData = e=>i ? {
                ...m,
                [i]: e[i]
            } : e;
            return (0,
            s.jsx)("div", {
                className: u()(t$().scrollSelector, j().uikit, j().frame, j().purpleinset),
                children: (0,
                s.jsx)("div", {
                    className: t$().choiceBox,
                    children: o && c.map((e,t)=>{
                        var i, l, r, c;
                        let p = transformTraitData(e)
                          , v = Object.keys(m).every(e=>m[e] === p[e]);
                        return (0,
                        s.jsx)("div", {
                            onClick: ()=>a({
                                id: n.id,
                                pieces: {
                                    ...n.pieces,
                                    [p.type]: p
                                }
                            }),
                            className: u()(t$().pieceChoice, {
                                [t$().choiceActive]: v
                            }),
                            children: (0,
                            s.jsx)(X.z, {
                                selectedTraits: {
                                    ...n.pieces,
                                    [d]: p
                                },
                                symbol: n.id,
                                height: Math.ceil(80 / ((null === (l = o.sprite) || void 0 === l ? void 0 : null === (i = l.size) || void 0 === i ? void 0 : i.width) || 32)) * ((null === (c = o.sprite) || void 0 === c ? void 0 : null === (r = c.size) || void 0 === r ? void 0 : r.height) || 32)
                            })
                        }, e.id + t)
                    }
                    )
                })
            })
        }
          , TraitPickerV2 = e=>{
            let {avatar: t, onChange: i, attribute: n} = e
              , a = (0,
            m.C)(p.Sx)
              , l = C.Z.getGameAvatar(t.id)
              , o = r.useMemo(()=>(0,
            tY.F_)({
                avatarId: t.id,
                attribute: n
            }, a), [t.id, n, a])
              , c = r.useMemo(()=>(0,
            tY.HQ)({
                avatarId: t.id,
                attribute: n
            }), [t.id, n])
              , d = r.useMemo(()=>{
                var e, i;
                let n = {
                    ...t.pieces
                };
                return null == c || null === (e = c.requires) || void 0 === e || e.forEach(e=>{
                    if (n[e])
                        return;
                    let i = (0,
                    tY.F_)({
                        avatarId: t.id,
                        attribute: e
                    }, a).at(0);
                    i && (n[e] = {
                        [e]: i.value
                    })
                }
                ),
                null == c || null === (i = c.replaces) || void 0 === i || i.forEach(e=>delete n[e]),
                n
            }
            , [t, c, a]);
            return (0,
            s.jsx)("div", {
                className: u()(t$().scrollSelector, j().uikit, j().frame, j().purpleinset),
                children: (0,
                s.jsx)("div", {
                    className: t$().choiceBox,
                    children: l && o.map(e=>{
                        var a, r, o, m, p;
                        let {value: v} = e
                          , h = (null === (a = d[n]) || void 0 === a ? void 0 : a[n]) === v;
                        return (0,
                        s.jsx)("div", {
                            onClick: ()=>{
                                if (h) {
                                    if (!(null == c ? void 0 : c.irremovable)) {
                                        let e = {
                                            ...d
                                        };
                                        delete e[n],
                                        i({
                                            id: t.id,
                                            pieces: e
                                        })
                                    }
                                } else
                                    i({
                                        id: t.id,
                                        pieces: {
                                            ...d,
                                            [n]: {
                                                [n]: v
                                            }
                                        }
                                    })
                            }
                            ,
                            className: u()(t$().pieceChoice, {
                                [t$().choiceActive]: h
                            }),
                            children: (0,
                            s.jsx)(X.z, {
                                selectedTraits: {
                                    ...d,
                                    [n]: {
                                        [n]: v
                                    }
                                },
                                symbol: t.id,
                                height: Math.ceil(80 / ((null === (o = l.sprite) || void 0 === o ? void 0 : null === (r = o.size) || void 0 === r ? void 0 : r.width) || 32)) * ((null === (p = l.sprite) || void 0 === p ? void 0 : null === (m = p.size) || void 0 === m ? void 0 : m.height) || 32)
                            })
                        }, v)
                    }
                    )
                })
            })
        }
          , TraitPicker = e=>e.avatar.id === F.ft ? (0,
        s.jsx)(TraitPickerV1, {
            ...e
        }) : (0,
        s.jsx)(TraitPickerV2, {
            ...e
        })
          , CharacterBuilder = e=>{
            let {avatar: t, onChange: i} = e
              , {t: n} = (0,
            x.$)(["ui"])
              , a = (0,
            m.C)(p.Sx)
              , l = r.useMemo(()=>(0,
            tY.HZ)(t.id).filter(e=>(0,
            tY.c7)({
                avatarId: t.id,
                attribute: e
            }, a).length), [t.id, a])
              , [o,c] = r.useState("");
            return r.useEffect(()=>{
                var e;
                c(null !== (e = l[0]) && void 0 !== e ? e : "")
            }
            , [l]),
            (0,
            s.jsx)("div", {
                className: t$().builderContainer,
                children: (0,
                s.jsx)(Tabs_Tabs, {
                    tabs: l.map(e=>({
                        id: e,
                        name: n(e, (0,
                        b.je)(e)),
                        component: (0,
                        s.jsx)(TraitPicker, {
                            avatar: t,
                            onChange: i,
                            attribute: e
                        })
                    })),
                    selectedTabId: o,
                    onSelectedTabChanged: c
                })
            })
        }
          , Crop = e=>{
            let {rectScale: t=1, rect: i, children: n} = e;
            return i ? (0,
            s.jsx)("div", {
                style: {
                    overflow: "hidden",
                    width: i.width ? i.width * t : void 0,
                    height: i.height ? i.height * t : void 0
                },
                children: (0,
                s.jsx)("div", {
                    style: {
                        position: "relative",
                        left: i.left ? -i.left * t : void 0,
                        top: i.top ? -i.top * t : void 0
                    },
                    children: n
                })
            }) : n
        }
          , CharacterBuilder_v2 = e=>{
            var t, i, n, a, l, o, c;
            let {avatar: d, setAvatar: v} = e
              , h = (0,
            m.C)(p.Sx)
              , g = r.useMemo(()=>(0,
            tY.HZ)(d.id).map(e=>({
                attribute: e,
                cosmetics: (0,
                tY.c7)({
                    avatarId: d.id,
                    attribute: e
                }, h)
            })).filter(e=>e.cosmetics.length), [d.id, h])
              , [x,_] = r.useState(0)
              , {attribute: f, cosmetics: y} = g[x]
              , b = r.useMemo(()=>(0,
            tY.HQ)({
                avatarId: d.id,
                attribute: f
            }), [d.id, f])
              , k = r.useMemo(()=>{
                var e, t;
                let i = {
                    ...d.pieces
                };
                return null == b || null === (e = b.requires) || void 0 === e || e.forEach(e=>{
                    if (i[e])
                        return;
                    let t = (0,
                    tY.F_)({
                        avatarId: d.id,
                        attribute: e
                    }, h).at(0);
                    t && (i[e] = {
                        [e]: t.value
                    })
                }
                ),
                null == b || null === (t = b.replaces) || void 0 === t || t.forEach(e=>delete i[e]),
                i
            }
            , [d, h, b])
              , N = C.Z.getGameAvatar(d.id)
              , w = (null == N ? void 0 : null === (i = N.sprite) || void 0 === i ? void 0 : null === (t = i.size) || void 0 === t ? void 0 : t.width) || 32
              , S = (null == N ? void 0 : null === (a = N.sprite) || void 0 === a ? void 0 : null === (n = a.size) || void 0 === n ? void 0 : n.height) || 32
              , I = Math.ceil(80 / w)
              , T = null !== (c = null == b ? void 0 : null === (l = b.visibleArea) || void 0 === l ? void 0 : l.width) && void 0 !== c ? c : w
              , P = Math.ceil(80 / T);
            return (0,
            s.jsxs)("div", {
                className: u()(j().fillflex, t$().v2),
                children: [(0,
                s.jsx)("div", {
                    className: t$().preview,
                    style: {
                        minWidth: I * w,
                        minHeight: I * S
                    },
                    children: (0,
                    s.jsx)(X.z, {
                        selectedTraits: d.pieces,
                        symbol: d.id,
                        height: I * S
                    }, "".concat(f, "-").concat(null === (o = k[f]) || void 0 === o ? void 0 : o[f]))
                }), (0,
                s.jsxs)("div", {
                    className: u()(j().fillflex, t$().selection),
                    children: [(0,
                    s.jsx)("div", {
                        className: u()(j().scrollArea, t$().tabs),
                        children: g.map((e,t)=>(0,
                        s.jsx)("button", {
                            className: u()({
                                [t$().selected]: f === e.attribute
                            }),
                            onClick: ()=>_(t),
                            children: (0,
                            s.jsx)("img", {
                                src: (0,
                                E.Uk)("/assets/ui/avatar/".concat(e.attribute.toUpperCase(), ".png"))
                            })
                        }, e.attribute))
                    }), (0,
                    s.jsx)("div", {
                        className: u()(j().fillflex, j().scrollArea, j().uikit, j().frame, j().purpleinset, t$().pieces),
                        children: null == y ? void 0 : y.map(e=>{
                            var t;
                            let {value: i} = e
                              , n = (null === (t = k[f]) || void 0 === t ? void 0 : t[f]) === i
                              , a = !["body", "mouth", "nose"].includes(f);
                            return (0,
                            s.jsx)("div", {
                                className: u()("clickable", t$().pieceChoice, {
                                    [t$().choiceActive]: n
                                }),
                                style: {
                                    minHeight: T * P
                                },
                                onClick: ()=>{
                                    if (n) {
                                        if (!(null == b ? void 0 : b.irremovable)) {
                                            let e = {
                                                ...k
                                            };
                                            delete e[f],
                                            v({
                                                id: d.id,
                                                pieces: e
                                            })
                                        }
                                    } else
                                        v({
                                            id: d.id,
                                            pieces: {
                                                ...k,
                                                [f]: {
                                                    [f]: i
                                                }
                                            }
                                        })
                                }
                                ,
                                children: (0,
                                s.jsx)(Crop, {
                                    rect: null == b ? void 0 : b.visibleArea,
                                    rectScale: P,
                                    children: (0,
                                    s.jsx)(X.z, {
                                        selectedTraits: {
                                            body: a ? {
                                                body: "white"
                                            } : k.body,
                                            [f]: {
                                                [f]: i
                                            }
                                        },
                                        dimBase: a,
                                        symbol: d.id,
                                        height: S * P,
                                        anim: "none"
                                    })
                                })
                            }, i)
                        }
                        )
                    })]
                })]
            })
        }
          , PlayerAvatar = ()=>{
            let {t: e} = (0,
            x.$)(["ui"])
              , t = (0,
            m.C)(p.SP)
              , i = (0,
            m.C)(p.Sx)
              , n = (0,
            m.C)(tu.cu)
              , [a,l] = (0,
            r.useState)(()=>(null == n ? void 0 : n.id) === F.UM ? n : (0,
            tY.Tm)(F.UM, i))
              , [o] = (0,
            r.useState)(()=>a.id);
            r.useEffect(()=>{
                a.id !== o && l((0,
                tY.Tm)(o, i))
            }
            , [a.id, o, i]);
            let c = (0,
            m.T)()
              , d = (0,
            m.C)(p.QV);
            if ("avatar" !== d || !t)
                return (0,
                s.jsx)(s.Fragment, {});
            let close = ()=>{
                c((0,
                Y.Mr)())
            }
            ;
            return (0,
            s.jsxs)("div", {
                className: j().modalBackdrop,
                children: [(0,
                s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                    onKeyDown: e=>{
                        e.stopPropagation(),
                        "Escape" === e.key && close()
                    }
                }), (0,
                s.jsx)("div", {
                    className: u()(j().uikit, j().pixelbox, j().navy, j().center, j().profilewindow),
                    children: (0,
                    s.jsxs)("div", {
                        className: j().inner,
                        children: [(0,
                        s.jsx)("h1", {
                            children: e("onboarding.createlook")
                        }), (0,
                        s.jsx)("button", {
                            className: j().closeBtn,
                            type: "button",
                            onClick: close,
                            children: "\xa0"
                        }), (0,
                        s.jsx)("div", {
                            className: u()(j().fillflex),
                            children: o === F.ft ? (0,
                            s.jsx)(CharacterBuilder, {
                                avatar: a,
                                onChange: l
                            }) : (0,
                            s.jsx)(CharacterBuilder_v2, {
                                avatar: a,
                                setAvatar: l
                            })
                        }), (0,
                        s.jsxs)("div", {
                            className: u()(tQ().buttonbar),
                            children: [(0,
                            s.jsx)("button", {
                                onClick: e=>{
                                    e.preventDefault(),
                                    R.ZP.sendEventDelayed(R.Yi.NFT_SELECTED, {
                                        playerAvatar: a
                                    })
                                }
                                ,
                                type: "button",
                                className: u()(j().pushbutton, j().yellow),
                                style: {
                                    minHeight: 48,
                                    padding: 15
                                },
                                children: e("onboarding.selectavatar", "Select Avatar")
                            }), (0,
                            s.jsx)("div", {
                                className: tQ().fillflex,
                                children: (0,
                                s.jsx)(PlayerBackButton, {})
                            })]
                        })]
                    })
                })]
            })
        }
          , ConfirmDialog = ()=>{
            var e, t, i;
            let n = (0,
            m.T)()
              , a = (0,
            m.C)(eM.Ep)
              , {t: l} = (0,
            x.$)(["ui"])
              , o = r.useRef(null)
              , c = a.isVisible;
            (0,
            r.useEffect)(()=>{
                if (c) {
                    var e, t;
                    null === (e = o.current) || void 0 === e || e.select(),
                    null === (t = o.current) || void 0 === t || t.focus()
                }
            }
            , [c]);
            let cancelHandler = e=>{
                var t;
                null == e || e.preventDefault(),
                null === (t = a.callback) || void 0 === t || t.call(a, null),
                n((0,
                eM.ex)())
            }
              , submitChange = ()=>{
                var e, t, i;
                if (a.controls) {
                    let i = null === (e = o.current) || void 0 === e ? void 0 : e.value;
                    null === (t = a.callback) || void 0 === t || t.call(a, i)
                } else
                    null === (i = a.callback) || void 0 === i || i.call(a, a.yesno ? "yes" : "ok");
                n((0,
                eM.ex)())
            }
              , eatKey = e=>{
                "Escape" === e.key && (e.stopPropagation(),
                cancelHandler())
            }
              , d = a.yesno ? l("yes", "Yes") : l("submit", "Submit")
              , p = a.yesno ? l("no", "No") : l("cancel", "Cancel")
              , v = a.cancel || a.yesno;
            return (0,
            s.jsx)(s.Fragment, {
                children: c && (0,
                s.jsxs)("div", {
                    className: j().modalBackdrop,
                    children: [(0,
                    s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                        onKeyDown: eatKey
                    }), (0,
                    s.jsxs)("div", {
                        style: {
                            maxWidth: 500
                        },
                        className: u()([j().uikit, j().frame, j().purple, j().center, j().popup]),
                        children: [(0,
                        s.jsxs)("div", {
                            style: {
                                position: "relative",
                                boxSizing: "border-box",
                                padding: 20
                            },
                            className: "is-rounded",
                            onKeyDown: eatKey,
                            children: [(0,
                            s.jsx)("p", {
                                children: l(null !== (e = a.prompt) && void 0 !== e ? e : "")
                            }), (0,
                            s.jsx)("br", {}), a.controls && (0,
                            s.jsx)("div", {
                                style: {
                                    textAlign: "center"
                                },
                                children: (0,
                                s.jsx)("input", {
                                    tabIndex: 1,
                                    type: null !== (t = a.controls.type) && void 0 !== t ? t : "text",
                                    maxLength: null !== (i = a.controls.length) && void 0 !== i ? i : 128,
                                    style: {
                                        textAlign: "left",
                                        width: "80%"
                                    },
                                    ref: o,
                                    onKeyDown: eatKey
                                })
                            })]
                        }), (0,
                        s.jsx)("br", {}), (0,
                        s.jsx)("br", {}), (0,
                        s.jsxs)("div", {
                            style: {
                                textAlign: "right"
                            },
                            children: [(0,
                            s.jsx)("button", {
                                type: "button",
                                className: u()(j().pushbutton, j().standard),
                                onClick: e=>{
                                    e.preventDefault(),
                                    submitChange()
                                }
                                ,
                                children: d
                            }), v && (0,
                            s.jsx)("button", {
                                type: "button",
                                className: u()(j().pushbutton, j().standard),
                                onClick: cancelHandler,
                                children: p
                            })]
                        })]
                    })]
                })
            })
        }
          , tX = {
            shareRent: "shareRentTwo",
            shareRentTwo: "shareRentThree",
            shareRentThree: "shareRentFour",
            shareRentFour: "shareRentFive",
            shareRentFive: "shareRentSix",
            shareInterior: "shareInteriorM",
            shareInteriorM: "shareInteriorL"
        }
          , tJ = ["shareRentSix", "shareInteriorL"]
          , FarmUpgrade = ()=>{
            let e = (0,
            m.C)(p.h2)
              , t = (0,
            m.C)(p.Wj)
              , i = (0,
            m.T)()
              , {t: n} = (0,
            x.$)(["ui", "game"])
              , a = tX[t]
              , l = "itm_".concat(a)
              , o = (0,
            m.C)(p.lA)
              , c = r.useMemo(()=>{
                var e;
                let t = null === (e = C.Z.getStoreData()) || void 0 === e ? void 0 : e.str_plot;
                return null == t ? void 0 : t.items.find(e=>e.item === l)
            }
            , [l])
              , d = r.useMemo(()=>{
                let e = C.Z.getGameItem(l);
                return e
            }
            , [l])
              , v = tJ.includes(t || "")
              , h = function(e, t) {
                var i;
                if (!t || !e)
                    return !1;
                let n = null == e ? void 0 : e.full.coinInventory
                  , a = (null == n ? void 0 : null === (i = n.find(e=>e.currencyId === t.currency)) || void 0 === i ? void 0 : i.balance) || 0;
                return a >= ((null == t ? void 0 : t.buyPrice) || 0)
            }(o, c)
              , {meetsLevelRequired: g, requirementReason: _} = function(e, t) {
                var i;
                if (!t || !e)
                    return {
                        meetsLevelRequired: !1,
                        requirementReason: "something-went-wrong"
                    };
                let n = !0
                  , a = "player-does-not-meet-item-requirements";
                if (null === (i = t.requirements) || void 0 === i ? void 0 : i.types) {
                    for (let i of t.requirements.types)
                        if ("levels" === i && t.requirements.levels)
                            for (let i of t.requirements.levels) {
                                let t = e.full.levels
                                  , l = t[i.levelType];
                                l && l.level >= i.level || (n = !1,
                                a = "level-".concat(i.level, "-").concat(i.levelType, "-required"))
                            }
                }
                return {
                    meetsLevelRequired: n,
                    requirementReason: a
                }
            }(o, d)
              , f = C.Z.getGameCurrency((null == c ? void 0 : c.currency) || "cur_pixel");
            if (!e || !t)
                return null;
            let handleClose = ()=>{
                i({
                    type: "game/deactivateFarmUpgradePanel"
                }),
                i({
                    type: "game/PRESENT_FARM_DETAILS"
                })
            }
            ;
            return (0,
            s.jsx)(s.Fragment, {
                children: e && (0,
                s.jsxs)("div", {
                    className: u()([eU().FarmDetailsPanel, j().uikit, j().frame, j().orangeinset]),
                    children: [(0,
                    s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                        onKeyDown: e=>{
                            e.stopPropagation(),
                            "Escape" === e.key && handleClose()
                        }
                    }), (0,
                    s.jsx)("button", {
                        type: "button",
                        className: u()(j().closeBtn),
                        onClick: handleClose
                    }), (0,
                    s.jsx)("h2", {
                        children: n("upgrademodaltitle.".concat(t), {
                            ns: "ui",
                            defaultValue: "MAP UPGRADE"
                        })
                    }), v ? (0,
                    s.jsx)("h2", {
                        children: (0,
                        s.jsx)(L.Z, {
                            text: n("plot.nomoreupgradesbody.".concat(t), {
                                ns: "ui",
                                defaultValue: "No more upgrades available"
                            })
                        })
                    }) : (0,
                    s.jsx)("h2", {
                        children: (0,
                        s.jsx)(L.Z, {
                            text: n("upgrademodalbody.".concat(t), {
                                ns: "ui",
                                defaultValue: "Are you sure you want to upgrade?"
                            })
                        })
                    }), (0,
                    s.jsxs)("div", {
                        className: eU().FarmDetailsPanelContent,
                        children: [!v && (0,
                        s.jsx)("div", {
                            className: eU().optionPrice,
                            style: {
                                margin: "1em"
                            },
                            children: (0,
                            s.jsx)(commons_CoinBalance, {
                                currency: f,
                                balance: (null == c ? void 0 : c.buyPrice) || 0
                            })
                        }), v && (0,
                        s.jsx)("p", {
                            className: j().errorMessage,
                            children: n("plot.nomoreupgrades.".concat(t), {
                                ns: "ui",
                                defaultValue: "No more upgrades available"
                            })
                        }), !h && !v && (0,
                        s.jsx)("p", {
                            className: j().errorMessage,
                            children: n("plot.insufficientfunds", {
                                ns: "ui",
                                defaultValue: "Insufficient funds"
                            })
                        }), h && !v && !g && (0,
                        s.jsx)("p", {
                            className: j().errorMessage,
                            children: _
                        }), (0,
                        s.jsx)("div", {
                            className: eU().FarmDetailsActions,
                            children: (0,
                            s.jsxs)("button", {
                                type: "button",
                                className: u()([j().uikit, j().button]),
                                onClick: ()=>{
                                    R.ZP.emitEventNow(R.qM.UPGRADE_FARM, {
                                        mapType: "player"
                                    }),
                                    i((0,
                                    Y.XK)({
                                        newTemplate: a
                                    })),
                                    i({
                                        type: "game/deactivateFarmUpgradePanel"
                                    })
                                }
                                ,
                                disabled: !h || !g || v || !(null == c ? void 0 : c.buyPrice),
                                children: [n("button.upgrade", "Upgrade"), " ", (0,
                                s.jsx)(commons_CoinBalance, {
                                    currency: f,
                                    balance: (null == c ? void 0 : c.buyPrice) || 0
                                })]
                            })
                        })]
                    })]
                })
            })
        }
        ;
        var t0 = i(51794)
          , t1 = i.n(t0)
          , Help_HelpDlg = ()=>{
            let e = (0,
            m.C)(p.QV)
              , t = (0,
            m.T)()
              , {t: i} = (0,
            x.$)("ui")
              , close = ()=>{
                t((0,
                Y.Mr)())
            }
            ;
            return "help" !== e ? (0,
            s.jsx)(s.Fragment, {}) : (0,
            s.jsxs)("div", {
                className: j().modalBackdrop,
                children: [(0,
                s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                    onKeyDown: e=>{
                        "Escape" === e.key && close()
                    }
                }), (0,
                s.jsx)("div", {
                    className: u()(j().uikit, j().pixelbox, j().navy, j().center, t1().container),
                    children: (0,
                    s.jsxs)("div", {
                        className: j().inner,
                        children: [(0,
                        s.jsx)("h1", {
                            children: i("help.title", "Help and Support")
                        }), (0,
                        s.jsx)("button", {
                            className: j().closeBtn,
                            type: "button",
                            onClick: close,
                            children: "\xa0"
                        }), (0,
                        s.jsx)("div", {
                            className: j().scrollArea,
                            children: (0,
                            s.jsxs)("div", {
                                className: t1().flow,
                                children: [(0,
                                s.jsxs)("div", {
                                    className: t1().section,
                                    children: [(0,
                                    s.jsx)("h3", {
                                        children: "Movement"
                                    }), (0,
                                    s.jsxs)("ul", {
                                        children: [(0,
                                        s.jsx)("li", {
                                            children: "Press and hold mouse button or touch screen in the direction you want to move"
                                        }), (0,
                                        s.jsx)("li", {
                                            children: "Or, Use Arrow Keys to move"
                                        }), (0,
                                        s.jsx)("li", {
                                            children: "Or, Use A,S,W,D keys to move"
                                        })]
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: t1().section,
                                    children: [(0,
                                    s.jsx)("h3", {
                                        children: "Quests"
                                    }), (0,
                                    s.jsxs)("ul", {
                                        children: [(0,
                                        s.jsx)("li", {
                                            children: "Active Quests can be seen by clicking or tapping on the Pinned Note in the upper right corner"
                                        }), (0,
                                        s.jsx)("li", {
                                            children: "Quests help you learn how to play"
                                        }), (0,
                                        s.jsx)("li", {
                                            children: "Some quests provide you with rewards, such as Coins or special items"
                                        })]
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: t1().section,
                                    children: [(0,
                                    s.jsx)("h3", {
                                        children: "Keyboard Shortcuts"
                                    }), (0,
                                    s.jsxs)("ul", {
                                        children: [(0,
                                        s.jsx)("li", {
                                            children: "B - Expand Inventory (Backpack)"
                                        }), (0,
                                        s.jsx)("li", {
                                            children: "C - Open Chat"
                                        }), (0,
                                        s.jsx)("li", {
                                            children: "TAB/SHIFT+TAB - Change Inventory Row"
                                        }), (0,
                                        s.jsx)("li", {
                                            children: "1,2,3,4,5,6 - Select Inventory Item from Current Row"
                                        })]
                                    })]
                                })]
                            })
                        }), (0,
                        s.jsxs)("div", {
                            className: t1().flowlinks,
                            children: [(0,
                            s.jsx)("a", {
                                className: u()(t1().supportLink, j().hotlink),
                                onClick: ()=>R.ZP.emitEventNow(R.fb.LINK_OPEN, {
                                    link: "https://help.pixels.xyz/"
                                }),
                                children: i("help.supportlink", "Additional Support")
                            }), (0,
                            s.jsx)("a", {
                                className: u()(t1().supportLink, j().hotlink),
                                href: "https://discord.gg/pixels",
                                target: "_blank",
                                children: "Discord"
                            }), (0,
                            s.jsx)("a", {
                                className: u()(t1().supportLink, j().hotlink),
                                href: "https://twitter.com/pixels_online",
                                target: "_blank",
                                children: "Twitter"
                            })]
                        })]
                    })
                })]
            })
        }
          , t2 = i(13063)
          , t3 = i(64939);
        let EnergyBar = e=>{
            let {energy: t} = e
              , {t: i} = (0,
            x.$)("ui")
              , n = (0,
            E.uf)(t, 2)
              , a = 100 * t / t3.jK;
            return (0,
            s.jsx)(A, {
                title: (0,
                s.jsxs)("span", {
                    className: "pixelFont",
                    children: [i("label.energy", "Energy"), ": ", n, " / ", t3.jK]
                }),
                placement: "top",
                children: (0,
                s.jsxs)("div", {
                    className: tO().energy,
                    children: [(0,
                    s.jsxs)("div", {
                        className: u()(j().balanceDisplay, tO().emptybar),
                        children: [(0,
                        s.jsx)("img", {
                            className: j()["coin-icon"],
                            src: (0,
                            E.Uk)("/game/ui/hud/hud_icon_energy.png"),
                            style: {
                                height: 12,
                                marginRight: 2,
                                marginBottom: 0
                            }
                        }), (0,
                        s.jsx)("span", {
                            style: {
                                fontSize: calcFontSize(n, 10, 8)
                            },
                            className: u()(j().coinBalance, tO().energytext),
                            children: n
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: u()(j().balanceDisplay, tO().filledbar),
                        style: {
                            width: "".concat(a, "%")
                        },
                        children: [(0,
                        s.jsx)("img", {
                            className: j()["coin-icon"],
                            src: (0,
                            E.Uk)("/game/ui/hud/hud_icon_energy.png"),
                            style: {
                                height: 12,
                                marginRight: 2,
                                marginBottom: 0
                            }
                        }), (0,
                        s.jsx)("span", {
                            style: {
                                fontSize: calcFontSize(n, 10, 8)
                            },
                            className: u()(j().coinBalance, tO().energytext),
                            children: n
                        })]
                    })]
                })
            })
        }
          , HudTopLeft = ()=>{
            var e, t, i, n, a, l, o, c;
            let d;
            let {t: v} = (0,
            x.$)("ui")
              , h = (0,
            m.C)(p.lA)
              , g = (0,
            m.C)(p.$v)
              , _ = (0,
            m.C)(eM._u)
              , f = (0,
            m.C)(eM.gs)
              , y = (0,
            m.T)()
              , j = (0,
            ei.GU)()
              , b = C.Z.getDefaultCurrency()
              , k = null === (e = C.Z.getGameCurrencies()) || void 0 === e ? void 0 : e[b]
              , N = (null === (i = h.full.coinInventory) || void 0 === i ? void 0 : null === (t = i.find(e=>e.currencyId === b)) || void 0 === t ? void 0 : t.balance) || 0
              , w = (null === (a = h.full.coinInventory) || void 0 === a ? void 0 : null === (n = a.find(e=>"cur_pixel" === e.currencyId)) || void 0 === n ? void 0 : n.balance) || 0
              , S = !(null == j ? void 0 : j.tutorialQuest) || "tutorial" !== g && "player" !== g || (null === (o = null == h ? void 0 : h.full.quests) || void 0 === o ? void 0 : null === (l = o[j.tutorialQuest]) || void 0 === l ? void 0 : l.isComplete)
              , I = (0,
            r.useMemo)(()=>[{
                id: "hud.buttons.land",
                className: u()(tO().bolm, tO().outside),
                title: v("hud.buttons.land", "Land and Bookmarks"),
                disabled: !S,
                onClick: ()=>{
                    y((0,
                    eC.Vu)())
                }
                ,
                image: (0,
                E.Uk)("/game/ui/hud/hud_icon_land.png")
            }, {
                id: "hud.buttons.skills",
                className: u()(tO().landmarks, tO().outside),
                title: v("hud.buttons.skills", "Skills"),
                onClick: ()=>{
                    y((0,
                    Y.po)())
                }
                ,
                image: (0,
                E.Uk)("/game/ui/hud/hud_temp_icon_skills.png")
            }, {
                id: "hud.buttons.players",
                title: v("hud.buttons.players", "Player"),
                className: u()(tO().social, tO().outside),
                onClick: ()=>y((0,
                Y.$J)({
                    dialog: "playerprofilecontextmenu"
                })),
                image: (0,
                E.Uk)("/game/ui/hud/hud_icon_social.png")
            }, {
                id: "hud.buttons.pets",
                title: v("hud.buttons.pets", "Pets"),
                className: u()(tO().pets, tO().outside),
                image: (0,
                E.Uk)("/game/ui/hud/PetButton.png"),
                disabled: !1,
                onClick: ()=>{
                    y((0,
                    Y.lW)({
                        mode: "hatched"
                    }))
                }
            }, {
                id: "hud.buttons.map",
                title: v("hud.buttons.map", "Map View"),
                className: u()(tO().map, tO().outside),
                onClick: ()=>R.ZP.emitEventNow("TOGGLE_MINIMAP"),
                image: (0,
                E.Uk)("/game/ui/hud/hud_temp_icon_map.png")
            }], [y, S])
              , T = null !== (c = h.full.energy.level) && void 0 !== c ? c : 0
              , P = I.map((e,t)=>{
                let i = Math.PI / (2 * I.length) * (t + .5)
                  , n = 106 * Math.sin(i) - 14
                  , a = 106 * Math.cos(i) - 14;
                return e.id === _ && (d = {
                    x: a,
                    y: n
                }),
                (0,
                s.jsx)("button", {
                    type: "button",
                    style: {
                        left: a,
                        top: n,
                        width: 28,
                        height: 28
                    },
                    disabled: e.disabled,
                    className: e.className,
                    onClick: ()=>{
                        y((0,
                        eM.je)(e.id)),
                        e.onClick()
                    }
                    ,
                    children: (0,
                    s.jsx)(A, {
                        title: e.title,
                        children: (0,
                        s.jsx)("img", {
                            src: e.image
                        })
                    })
                }, e.image)
            }
            );
            if (f)
                return;
            let M = C.Z.getGameCurrency("cur_pixel");
            return (0,
            s.jsxs)("div", {
                className: u()(tO().top, tO().left),
                children: [(0,
                s.jsxs)("div", {
                    className: u()(tO().topLeftBackground),
                    style: {
                        backgroundImage: "url('".concat((0,
                        E.Uk)("/game/ui/hud/purple/hud_corner_left.png"), "')")
                    },
                    children: [(0,
                    s.jsx)("div", {
                        className: u()(tO().berry, "clickable"),
                        onClick: e=>{
                            e.preventDefault(),
                            e.stopPropagation(),
                            "cur_coins" === b && R.ZP.sendEventDelayed(R.fb.PRESENT_UI, {
                                ui: "str_bank"
                            })
                        }
                        ,
                        children: k && (0,
                        s.jsx)(commons_CoinBalance, {
                            currency: k,
                            balance: N,
                            styles: {},
                            iconStyles: {
                                height: 12,
                                marginRight: 2,
                                marginBottom: 0
                            },
                            fontSize: 10,
                            adjustForWidth: 6,
                            text: 0 === N && (null == k ? void 0 : k.id) === "cur_coins" ? v("hud.getcoins", "Get Coins") : void 0
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: tO().pixelcoin,
                        children: (0,
                        s.jsx)(commons_CoinBalance, {
                            currency: M,
                            balance: w,
                            styles: {},
                            iconStyles: {
                                height: 12,
                                marginRight: 2,
                                marginBottom: 0
                            },
                            fontSize: 10,
                            adjustForWidth: 5
                        })
                    }), (0,
                    s.jsx)(EnergyBar, {
                        energy: T
                    }), P]
                }), d && (0,
                s.jsx)("div", {
                    className: tO().arrowLeft,
                    style: {
                        left: d.x,
                        top: d.y
                    }
                })]
            })
        }
          , HudTopRight = ()=>{
            var e, t, i;
            let n;
            let a = (0,
            m.T)()
              , {t: l} = (0,
            x.$)("ui")
              , o = (0,
            m.C)(p.lA)
              , c = (0,
            ei.GU)()
              , d = (0,
            m.C)(eM._u)
              , v = (0,
            m.C)(eM.gs)
              , h = (0,
            m.C)(tq.Yy)
              , g = h > 9 ? "".concat(9, "+") : h
              , _ = (0,
            r.useMemo)(()=>[{
                id: "hud.buttons.dashboard",
                title: l("hud.buttons.dashboard", "Dashboard"),
                className: u()(tO().dashboard, tO().outside),
                onClick: ()=>{
                    R.ZP.emitEventNow(R.fb.LINK_OPEN, {
                        link: "/dashboard",
                        msgKey: ["link.dashboard", "Open Pixels Dashboard?"]
                    })
                }
                ,
                image: (0,
                E.Uk)("/game/ui/hud/DashButton.png")
            }, {
                id: "hud.buttons.settings",
                title: l("hud.buttons.settings", "Settings"),
                className: u()(tO().achievements, tO().outside),
                onClick: ()=>a((0,
                Y.r$)()),
                image: (0,
                E.Uk)("/game/ui/hud/SettingsButton.png")
            }, {
                id: "hud.buttons.mail",
                title: l("hud.buttons.mail", "Mail"),
                className: u()(tO().mailbox, tO().outside),
                onClick: ()=>{
                    a((0,
                    tq.e4)())
                }
                ,
                image: (0,
                E.Uk)("/game/ui/hud/hud_mail_button.png"),
                badgeCount: g,
                badgePlus: h > 9,
                disabled: !1
            }, {
                id: "hud.buttons.questionmark",
                title: l("hud.buttons.questionmark", "Support"),
                className: u()(tO().skills, tO().outside),
                onClick: ()=>{
                    a((0,
                    Y.$J)({
                        dialog: "help"
                    }))
                }
                ,
                image: (0,
                E.Uk)("/game/ui/hud/hud_temp_icon_questionmark.png")
            }, {
                id: "hud.buttons.logout",
                title: l("hud.buttons.logout", "Log Out"),
                className: u()(tO().settings, tO().outside),
                onClick: ()=>{
                    a((0,
                    eM.VG)({
                        prompt: "hud.logout.confirmation",
                        yesno: !0,
                        callback: e=>{
                            "yes" === e && a((0,
                            Y.ni)())
                        }
                    }))
                }
                ,
                image: (0,
                E.Uk)("/game/ui/hud/hud_temp_icon_logout.png")
            }], [a, g, h > 9]);
            if (v)
                return;
            let f = C.Z.getGameQuests()
              , y = null === (e = Object.values(null !== (t = null == o ? void 0 : o.full.quests) && void 0 !== t ? t : {})) || void 0 === e ? void 0 : e.reduce((e,t)=>{
                if (!t)
                    return e;
                if (t && !t.isComplete) {
                    let i = null == f ? void 0 : f[t.questId];
                    if (i && "hidden" !== i.kind && (!i.tenants || 0 === i.tenants.length || i.tenants.includes(c.name)))
                        return e + 1
                }
                return e
            }
            , 0)
              , j = _.map((e,t)=>{
                let i = Math.PI / (2 * _.length) * (t + .5)
                  , l = 106 * Math.sin(i) - 14
                  , r = 106 * Math.cos(i) - 14;
                return e.id === d && (n = {
                    x: r,
                    y: l
                }),
                (0,
                s.jsxs)("button", {
                    type: "button",
                    style: {
                        right: r,
                        top: l,
                        width: 28,
                        height: 28
                    },
                    disabled: e.disabled,
                    className: e.className,
                    onClick: ()=>{
                        a((0,
                        eM.je)(e.id)),
                        e.onClick()
                    }
                    ,
                    children: [e.badgeCount ? (0,
                    s.jsx)("span", {
                        className: u()(tO().mailBadge, {
                            [tO().mailBadgePlus]: e.badgePlus
                        }),
                        children: e.badgeCount
                    }) : null, (0,
                    s.jsx)(A, {
                        title: e.title,
                        children: (0,
                        s.jsx)("img", {
                            src: e.image
                        })
                    })]
                }, e.image)
            }
            );
            "hud.buttons.quests" === d && (n = {
                x: 8,
                y: 20
            });
            let b = null !== (i = (0,
            ei.GU)().uiprefix) && void 0 !== i ? i : "";
            return (0,
            s.jsxs)("div", {
                className: u()(tO().top, tO().right),
                children: [(0,
                s.jsxs)("div", {
                    className: tO().topRightBackground,
                    style: {
                        backgroundImage: "url('".concat((0,
                        E.Uk)("/game/ui/hud/purple/hud_corner_right.png"), "')")
                    },
                    children: [(0,
                    s.jsxs)("button", {
                        type: "button",
                        className: u()(tO().quests),
                        onClick: ()=>{
                            a((0,
                            eM.je)("hud.buttons.quests")),
                            a((0,
                            Y.eW)())
                        }
                        ,
                        children: [(0,
                        s.jsx)(A, {
                            title: l("hud.buttons.quests", "Quests"),
                            children: (0,
                            s.jsx)("img", {
                                src: (0,
                                E.Uk)("/game/ui/hud/".concat(b, "hud_corner_right_note.png"))
                            })
                        }), (0,
                        s.jsx)("div", {
                            className: tO().questcount,
                            children: y
                        })]
                    }), j]
                }), n && (0,
                s.jsx)("div", {
                    className: tO().arrowRight,
                    style: {
                        right: n.x,
                        top: n.y
                    }
                })]
            })
        }
        ;
        var t5 = i(82485);
        let EquipmentItem = e=>{
            let {image: t, tier: i, quantity: n, selected: a} = e;
            return (0,
            s.jsxs)(s.Fragment, {
                children: [!a && !!i && (0,
                s.jsx)("div", {
                    className: tO().tier,
                    children: (0,
                    b.Qb)(i)
                }), (0,
                s.jsx)("div", {
                    className: "clickable",
                    style: {
                        height: 32,
                        width: 32
                    },
                    children: (0,
                    s.jsx)("img", {
                        className: tO().itemImage,
                        src: (0,
                        E.b7)(t),
                        crossOrigin: "anonymous"
                    })
                }), (0,
                s.jsx)("div", {
                    className: tO().quantity,
                    children: n > 1 ? "x".concat(n) : ""
                })]
            })
        }
        ;
        function getSlotItem(e, t) {
            if (!t || 0 === t.length)
                return;
            let i = t.find(t=>t.slot === e);
            if (i)
                return {
                    item: C.Z.getGameItem(i.item),
                    quantity: i.quantity
                }
        }
        let EquipmentSlot = e=>{
            let {slot: t, isSelected: i, showDetails: n, attention: a, item: l, locked: r, quantity: o, onClick: c} = e
              , d = l && B.Z.preloadedBlob((0,
            E.b7)(l.image))
              , m = (0,
            s.jsxs)("div", {
                className: u()(tO().item, {
                    [tO().selected]: i
                }),
                onClick: c,
                onContextMenu: c,
                children: [(0,
                s.jsx)("div", {
                    className: tO().shortcut,
                    children: t + 1
                }), a && (0,
                s.jsx)("div", {
                    className: tO().attention
                }), d && (0,
                s.jsx)(EquipmentItem, {
                    selected: i,
                    image: d,
                    tier: null == l ? void 0 : l.tier,
                    quantity: o || 0
                }), r && (0,
                s.jsx)(EquipmentItem, {
                    selected: i,
                    image: (0,
                    E.Uk)("/game/ui/store_item_lock.png"),
                    tier: void 0,
                    quantity: o || 0
                })]
            });
            return l || r ? (0,
            s.jsx)(ItemTooltip, {
                item: l,
                showDetails: !!n,
                placement: "top",
                children: m
            }) : m
        }
        ;
        function HudBottom_deselectEquipment(e) {
            e((0,
            tm.aq)())
        }
        let HudBottom = ()=>{
            var e, t, i;
            let n = (0,
            m.C)(p.lA)
              , {t: a} = (0,
            x.$)("ui")
              , l = (0,
            m.C)(tm.xM)
              , o = (0,
            m.C)(eM.gs)
              , c = (0,
            m.C)(p.x6)
              , d = (0,
            m.C)(z.Vb)
              , v = !!useTrade()
              , h = (0,
            m.C)(tj.ww)
              , g = (0,
            m.C)(z.pT)
              , _ = (0,
            m.C)(z.sW)
              , {chatEnabled: f, newMessage: y} = (0,
            m.C)(ec.tz)
              , j = (0,
            m.C)(tm.pc)
              , b = (0,
            m.C)(eM.Fd)
              , k = (0,
            m.C)(p.Kx)
              , N = (0,
            m.C)(tm.NS)
              , w = N.isOpen
              , S = (0,
            r.useRef)(null)
              , [I,T] = (0,
            r.useState)(0)
              , [P,M] = r.useState(!1)
              , D = Object.values(null !== (i = null == n ? void 0 : null === (e = n.full.inventory) || void 0 === e ? void 0 : e.slots) && void 0 !== i ? i : {})
              , L = null === (t = O.l.getInstance().selfPlayer) || void 0 === t ? void 0 : t.inventory
              , F = JSON.parse(JSON.stringify(null != L ? L : {}))
              , V = (null == F ? void 0 : F.size) || 18
              , q = Math.floor(V / 6)
              , W = Math.floor(V / 6) - 1
              , Z = 40 * W
              , U = r.useMemo(()=>[...Array(V)].map((e,t)=>(t + 1).toString()), [V])
              , G = r.useMemo(()=>{
                if (0 === I)
                    return 0;
                let e = 40 * I;
                return e
            }
            , [I]);
            r.useEffect(()=>{
                0 !== I && T(0)
            }
            , [I]);
            let H = (0,
            m.T)()
              , mapEditor = ()=>{
                R.ZP.emitEventNow(R.qM.RELEASE_FROM_CURSOR, g),
                g ? R.rV.editor.off.emit() : R.rV.editor.on.emit(),
                R.ZP.emitEventNow("TOGGLE_EDITOR", g)
            }
              , Q = r.useMemo(()=>{
                var e;
                if (-1 === l.slot || l.storage)
                    return;
                let t = null === (e = getSlotItem(l.slot, D)) || void 0 === e ? void 0 : e.item;
                return (0,
                t5.PZ)(t, d)
            }
            , [l.slot, d])
              , K = r.useMemo(()=>{
                if (l.attention) {
                    let e = D.some(e=>e.item === l.attention)
                      , t = e && D.some(e=>e.item === l.attention && e.slot >= 6 * j && e.slot < 6 * j + 6);
                    return e && !t
                }
                return !1
            }
            , [l.attention, D]);
            r.useEffect(()=>{
                let e = D.map(e=>{
                    let t = C.Z.getGameItem(e.item);
                    if ((null == t ? void 0 : t.image) && !B.Z.preloadedBlob(t.image))
                        return B.Z.preloadOneBlob(t.image)
                }
                ).filter(e=>e);
                e.length > 0 && Promise.all(e).then(()=>{
                    M(!P)
                }
                )
            }
            );
            let nextActiveRow = ()=>{
                T(e=>e ? 0 : 1),
                H((0,
                tm.hO)((j + 1) % q))
            }
              , previousActiveRow = ()=>{
                T(e=>e ? 0 : -1),
                H((0,
                tm.hO)((j - 1 + q) % q))
            }
              , toggleExpanded = ()=>{
                R.rV.playSound.emit("snd_ui_inventoryopen"),
                H((0,
                eM.jz)(void 0))
            }
            ;
            if (r.useEffect(()=>{
                if (!c || g || h) {
                    let handleKeydown = e=>{
                        var t, i, n;
                        let a = null === (t = e.key) || void 0 === t ? void 0 : t.toLowerCase()
                          , s = e.getModifierState("Shift")
                          , r = e.getModifierState("Alt")
                          , o = e.getModifierState("Meta")
                          , c = e.getModifierState("Control");
                        if ("tab" === a) {
                            s ? previousActiveRow() : nextActiveRow(),
                            e.preventDefault();
                            return
                        }
                        if (h)
                            return;
                        if (v || w) {
                            if ("escape" === a && -1 !== l.slot) {
                                HudBottom_deselectEquipment(H);
                                return
                            }
                        } else {
                            if ("e" === a && (r || o)) {
                                _ && mapEditor(),
                                e.preventDefault();
                                return
                            }
                            if ("z" !== a || c) {
                                if ("h" === a && c) {
                                    R.ZP.emitEventNow(R.qM.HIDE_OTHERS),
                                    e.preventDefault();
                                    return
                                }
                            } else {
                                R.ZP.emitEventNow("TOGGLE_MINIMAP");
                                return
                            }
                            if (g)
                                return;
                            if (!r && !c && !o) {
                                if ("b" === a) {
                                    e.preventDefault(),
                                    toggleExpanded();
                                    return
                                }
                                if ("c" === a && (e.preventDefault(),
                                H((0,
                                ec.w2)())),
                                "escape" === a && -1 !== l.slot) {
                                    HudBottom_deselectEquipment(H);
                                    return
                                }
                            }
                            if ("m" === a && (c || o)) {
                                (0,
                                R.D9)({
                                    soundControlKey: "music",
                                    mute: !k.music.mute
                                });
                                return
                            }
                        }
                        let d = U.indexOf(a);
                        if (-1 === d)
                            return;
                        e.stopPropagation();
                        let u = d + 6 * j
                          , m = getSlotItem(u, D);
                        HudBottom_deselectEquipment((n = {
                            slot: u,
                            isSelected: l.slot === u && !l.storage,
                            item: null == m ? void 0 : m.item,
                            quantity: null !== (i = null == m ? void 0 : m.quantity) && void 0 !== i ? i : 0,
                            dispatch: H
                        }).dispatch),
                        n.quantity && !n.isSelected && n.dispatch((0,
                        tm.$Z)({
                            selectedEquipment: n.slot,
                            item: n.item,
                            quantity: n.quantity
                        }))
                    }
                    ;
                    return document.body.addEventListener("keydown", handleKeydown),
                    ()=>{
                        document.body.removeEventListener("keydown", handleKeydown)
                    }
                }
            }
            ),
            n.core.isGuest || o)
                return null;
            let $ = b ? 0 : Z;
            return (0,
            s.jsx)(s.Fragment, {
                children: (0,
                s.jsxs)("div", {
                    draggable: !1,
                    className: u()(tO().bottom),
                    style: {
                        height: 53 + Z
                    },
                    children: [f && (0,
                    s.jsxs)("button", {
                        type: "button",
                        className: tO().leftButton,
                        onClick: ()=>H((0,
                        ec.w2)()),
                        disabled: !f,
                        children: [(0,
                        s.jsx)(A, {
                            title: (0,
                            s.jsx)("span", {
                                className: "pixelFont",
                                children: a("chattip", "Chat (c)")
                            }),
                            placement: "top",
                            children: (0,
                            s.jsx)("img", {
                                src: (0,
                                E.Uk)("/game/ui/hud/chat.png")
                            })
                        }), y && (0,
                        s.jsx)("span", {
                            className: tO().chatIndicator
                        })]
                    }), (0,
                    s.jsxs)("button", {
                        type: "button",
                        className: tO().rightButton,
                        onClick: nextActiveRow,
                        children: [K && (0,
                        s.jsx)("div", {
                            className: tO().attention
                        }), (0,
                        s.jsx)(A, {
                            title: (0,
                            s.jsx)("span", {
                                className: "pixelFont",
                                children: a("hud.tips.left", "Next row (tab)")
                            }),
                            placement: "top",
                            children: (0,
                            s.jsx)("img", {
                                src: (0,
                                E.Uk)("/game/ui/hud/cycle.png")
                            })
                        })]
                    }), Q && (0,
                    s.jsx)("div", {
                        className: u()(tO().itemMessageContainer, {
                            [tO().expanded]: b
                        }),
                        style: {
                            transform: "translate3d(0, ".concat($, "px, 0)")
                        },
                        children: (0,
                        s.jsx)("div", {
                            className: tO().itemMessage,
                            children: Q
                        })
                    }), (0,
                    s.jsxs)("div", {
                        className: u()(tO().slidingGroup, {
                            [tO().expanded]: b
                        }),
                        style: {
                            transform: "translate3d(0, ".concat($, "px, 0)")
                        },
                        children: [(0,
                        s.jsx)("button", {
                            type: "button",
                            className: tO().topButton,
                            onClick: toggleExpanded,
                            children: (0,
                            s.jsx)(A, {
                                title: (0,
                                s.jsx)("span", {
                                    className: "pixelFont",
                                    children: a("backpacktip", "Backpack (b)")
                                }),
                                placement: "top",
                                children: (0,
                                s.jsx)("img", {})
                            })
                        }), (0,
                        s.jsx)("div", {
                            className: tO().itemClip,
                            children: (0,
                            s.jsx)("div", {
                                className: tO().itemList,
                                ref: S,
                                style: {
                                    transform: "translate3d(0, ".concat(G, "px, 0)"),
                                    transition: 0 !== G ? "none" : "transform 0.1s linear"
                                },
                                children: U.map((e,t)=>{
                                    let i = (6 * j + t) % V
                                      , n = getSlotItem(i, D);
                                    return (0,
                                    s.jsx)(EquipmentSlot, {
                                        slot: i,
                                        attention: !!((null == n ? void 0 : n.item) && l.attention === n.item.id),
                                        isSelected: i === l.slot && !l.storage,
                                        locked: !!n && !n.item,
                                        item: null == n ? void 0 : n.item,
                                        showDetails: b,
                                        quantity: null == n ? void 0 : n.quantity,
                                        onClick: e=>{
                                            e.preventDefault(),
                                            e.stopPropagation(),
                                            function(e) {
                                                var t, i;
                                                let n = e.item
                                                  , a = e.selected && e.slot === e.selected.slot && !e.selected.storage
                                                  , l = null === (t = e.selected) || void 0 === t ? void 0 : t.storage
                                                  , s = 2 === e.button || e.shift
                                                  , r = e.slot;
                                                if (a) {
                                                    HudBottom_deselectEquipment(e.dispatch);
                                                    return
                                                }
                                                if (-1 !== e.selected.slot) {
                                                    if (s) {
                                                        let t = Math.floor(e.selected.quantity / 2);
                                                        t > 0 && e.dispatch((0,
                                                        tm.oi)({
                                                            targetIndex: r,
                                                            sourceIndex: e.selected.slot,
                                                            sourceContainer: l,
                                                            splitQuantity: t
                                                        }));
                                                        return
                                                    }
                                                    HudBottom_deselectEquipment(e.dispatch),
                                                    e.dispatch((0,
                                                    tm.oi)({
                                                        targetIndex: r,
                                                        sourceIndex: e.selected.slot,
                                                        sourceContainer: l
                                                    })),
                                                    r = e.selected.slot
                                                } else if (e.quantity && e.storageMid) {
                                                    if (s) {
                                                        e.dispatch((0,
                                                        tm.oi)({
                                                            targetIndex: -1,
                                                            targetContainer: e.storageMid,
                                                            sourceIndex: r
                                                        }));
                                                        return
                                                    }
                                                    e.dispatch((0,
                                                    eM.jz)(!1))
                                                }
                                                e.quantity && e.dispatch((0,
                                                tm.$Z)({
                                                    selectedEquipment: r,
                                                    item: n,
                                                    mid: l,
                                                    quantity: null !== (i = e.quantity) && void 0 !== i ? i : 1
                                                }))
                                            }({
                                                slot: i,
                                                selected: l,
                                                item: null == n ? void 0 : n.item,
                                                quantity: null == n ? void 0 : n.quantity,
                                                storageMid: w && N.mid || void 0,
                                                shift: e.shiftKey,
                                                alt: e.altKey,
                                                ctrl: e.ctrlKey,
                                                meta: e.metaKey,
                                                button: e.button,
                                                dispatch: H
                                            })
                                        }
                                    }, i)
                                }
                                )
                            })
                        }), (0,
                        s.jsx)("div", {
                            className: tO().itemsTop
                        }), (0,
                        s.jsx)("div", {
                            className: tO().itemsRest,
                            style: {
                                height: Z
                            }
                        })]
                    })]
                })
            })
        }
          , PlayerProfileContextMenu = ()=>{
            let {t: e} = (0,
            x.$)(["ui"])
              , t = (0,
            m.T)()
              , i = (0,
            m.C)(p.QV);
            if ("playerprofilecontextmenu" !== i)
                return (0,
                s.jsx)(s.Fragment, {});
            let close = ()=>{
                t((0,
                Y.Mr)())
            }
            ;
            return (0,
            s.jsxs)("div", {
                className: j().modalBackdrop,
                children: [(0,
                s.jsx)(DisablePlayerMovement_DisablePlayerMovement, {
                    onKeyDown: e=>{
                        e.stopPropagation(),
                        "Escape" === e.key && close()
                    }
                }), (0,
                s.jsxs)("div", {
                    className: u()(j().uikit, j().pixelbox, j().navy, j().center, j().profilewindow, tQ().contextmenu),
                    children: [(0,
                    s.jsx)("h1", {
                        children: e("ui.playerprofile.contextmenu", "Player Options")
                    }), (0,
                    s.jsx)("button", {
                        className: j().closeBtn,
                        type: "button",
                        onClick: close,
                        children: "\xa0"
                    }), (0,
                    s.jsx)("div", {
                        className: tQ().playerButtonsContainer,
                        children: (0,
                        s.jsx)(PlayerButtons, {})
                    })]
                })]
            })
        }
          , t4 = c()(()=>i.e(121).then(i.bind(i, 59121)).then(e=>e.Editor), {
            loadableGenerated: {
                webpack: ()=>[59121]
            }
        })
          , UiContainer = ()=>{
            let e = (0,
            m.C)(p.oJ)
              , t = (0,
            m.C)(p.O$)
              , i = (0,
            m.C)(p.TR)
              , n = (0,
            m.C)(p.NY)
              , a = (0,
            m.C)(p.iN)
              , l = (0,
            m.C)(p.GO)
              , o = (0,
            m.C)(p.K7)
              , c = (0,
            m.C)(p.Qk)
              , d = (0,
            m.C)(p.RG)
              , g = (0,
            m.C)(p.lA);
            !function(e) {
                let[,t] = (0,
                _.KO)(f.v);
                r.useEffect(()=>{
                    t("clear")
                }
                , [e])
            }(d || "");
            let x = (0,
            m.C)(v.D2)
              , supressMouse = e=>{
                e.stopPropagation()
            }
              , y = (0,
            m.C)(h.XU);
            return (0,
            s.jsxs)("div", {
                className: u()(tg().uiContainer, "pixelfont"),
                onMouseDown: supressMouse,
                onMouseUp: supressMouse,
                onTouchStart: supressMouse,
                onTouchEnd: supressMouse,
                onMouseEnter: ()=>{
                    tV = !0
                }
                ,
                onMouseLeave: ()=>{
                    tV = !1
                }
                ,
                children: [l || o ? "" : (0,
                s.jsxs)(s.Fragment, {
                    children: [x.isOpen && (0,
                    s.jsx)(GameStore, {}), (0,
                    s.jsx)(PlayersOnline, {
                        open: t.isVisible
                    }), (0,
                    s.jsx)(ChatWindow, {}), (0,
                    s.jsxs)(ScaledUI, {
                        children: [(0,
                        s.jsx)(HudTopLeft, {}), (0,
                        s.jsx)(HudTopRight, {}), (0,
                        s.jsx)(InventoryWindow, {}), (0,
                        s.jsx)(TradeWindow, {}), (0,
                        s.jsx)(HudBottom, {}), (0,
                        s.jsx)(Questlog, {}), (0,
                        s.jsx)(GameDialog, {
                            open: e
                        })]
                    }), (0,
                    s.jsx)(ImagePopup, {}), (0,
                    s.jsx)(PlayerInfoWindow, {
                        open: i.isVisible,
                        mid: i.mid,
                        username: i.username
                    }), (0,
                    s.jsx)(ReportWindow, {}), n && (0,
                    s.jsx)(SettingsWindow, {}), (0,
                    s.jsx)(SkillsPanel, {}), (0,
                    s.jsx)(PetDetails, {}), (0,
                    s.jsx)(FarmDetails, {}), (0,
                    s.jsx)(FarmUpgrade, {}), y && (0,
                    s.jsx)(CraftingContainer, {}), (0,
                    s.jsx)(PortalConfig, {}), (0,
                    s.jsx)(EntityConfig, {}), (0,
                    s.jsx)(ConfirmDialog, {}), (0,
                    s.jsx)(Mailbox_MailBox, {}), (0,
                    s.jsx)(Marketplace, {}), (0,
                    s.jsx)(MarketplaceListings, {}), (null == g ? void 0 : g.full.godmode) && (0,
                    s.jsx)(r.Suspense, {
                        fallback: "Loading Editor",
                        children: (0,
                        s.jsx)(t4, {
                            horizontal: !1
                        })
                    }), c && (0,
                    s.jsx)(SidePanel, {}), (0,
                    s.jsx)(UsernameDialog, {}), (0,
                    s.jsx)(PlayerInfoDialog, {}), (0,
                    s.jsx)(Help_HelpDlg, {}), (0,
                    s.jsx)(TermsOfService, {}), (0,
                    s.jsx)(t2.Z, {}), (0,
                    s.jsx)(PlayerProfileContextMenu, {})]
                }), (0,
                s.jsx)(UiContainer_NFTComponents, {}), (0,
                s.jsx)(PlayerAvatar, {}), (0,
                s.jsx)(CriticalMessage, {}), (0,
                s.jsx)(URLDisclaimer, {
                    open: !!a.URL && a.isActive,
                    link: a.URL || "",
                    msgKey: a.msgKey || ""
                }), (0,
                s.jsx)(Notifications, {}), (0,
                s.jsx)(SelectedDOMItem, {})]
            })
        }
    },
    30766: function(e) {
        e.exports = {
            chatwindow: "ChatWindow_chatwindow__iDeJq",
            people: "ChatWindow_people__L7Qoq",
            chatInput: "ChatWindow_chatInput__7X2Yi",
            sendButton: "ChatWindow_sendButton__BvPZ0",
            chats: "ChatWindow_chats__ydk5n",
            chatmessage: "ChatWindow_chatmessage__8k5Pg",
            messageHeader: "ChatWindow_messageHeader__LIkiN",
            username: "ChatWindow_username__Htk0E",
            timestamp: "ChatWindow_timestamp__xWEYO",
            message: "ChatWindow_message__TpEIz",
            whisper: "ChatWindow_whisper__mNqx4",
            isSystem: "ChatWindow_isSystem__Sc7B0",
            isSelf: "ChatWindow_isSelf__Jo06u"
        }
    },
    8703: function(e) {
        e.exports = {
            craftHeader: "Crafting_craftHeader__t2kJI",
            subheader: "Crafting_subheader__ueCDG",
            yetanotherdiv: "Crafting_yetanotherdiv__okLWt",
            craftingPageTitle: "Crafting_craftingPageTitle__jdRgM",
            craftingPageTier: "Crafting_craftingPageTier__okQzE",
            craftPages: "Crafting_craftPages__fo3Ez",
            leftPage: "Crafting_leftPage__S3WpY",
            inner: "Crafting_inner__v80ZP",
            rightPage: "Crafting_rightPage__63TP1",
            recipeSection: "Crafting_recipeSection__2_HQt",
            subsection: "Crafting_subsection__86mXJ",
            anotherpointlessdiv: "Crafting_anotherpointlessdiv__vi1Cb",
            recipelist: "Crafting_recipelist__Ls7m5",
            tierHeader: "Crafting_tierHeader__jKRVz",
            tierSection: "Crafting_tierSection__RThnx",
            craftingSectionHighlight: "Crafting_craftingSectionHighlight__G7ImP",
            craftingSection: "Crafting_craftingSection__QPjg4",
            craftingFontText: "Crafting_craftingFontText__EeNSQ",
            craftingInput: "Crafting_craftingInput__0tHnb",
            craftingFontSubtitle: "Crafting_craftingFontSubtitle__RPZ5i",
            craftingFontPoints: "Crafting_craftingFontPoints__Lfxp6",
            craftingFontQuantities: "Crafting_craftingFontQuantities__FDoj9",
            craftingRecipeItem: "Crafting_craftingRecipeItem__vnhBH",
            craftingButton: "Crafting_craftingButton__Qd6Ke",
            craftingCloseButton: "Crafting_craftingCloseButton__ZbHQF",
            craftingColumn: "Crafting_craftingColumn__v6ueF",
            PageDetails: "Crafting_PageDetails__tYqnD",
            detailsTitle: "Crafting_detailsTitle__bGjKU",
            tier: "Crafting_tier__V9sl1",
            benefitDescription: "Crafting_benefitDescription__L5ju3",
            tierToggle: "Crafting_tierToggle__llOAI",
            tierExpanded: "Crafting_tierExpanded__xQ8d2"
        }
    },
    3206: function(e) {
        e.exports = {
            FarmDetailsPanel: "FarmDetails_FarmDetailsPanel__E_VVC",
            farmNo: "FarmDetails_farmNo__avJwu",
            FarmDetailsPanelContent: "FarmDetails_FarmDetailsPanelContent__nxkYe",
            DetailsText: "FarmDetails_DetailsText__IEpKu",
            FarmDetailsActions: "FarmDetails_FarmDetailsActions__5CsOp",
            fullbutton: "FarmDetails_fullbutton__h7pkT",
            itemlist: "FarmDetails_itemlist__J0Day",
            playeritems: "FarmDetails_playeritems__KA7b0",
            playername: "FarmDetails_playername__ab3fp",
            playeritem: "FarmDetails_playeritem__Zw8nH",
            itemqty: "FarmDetails_itemqty__VSmya"
        }
    },
    67355: function(e) {
        e.exports = {
            farmSettingsPanel: "FarmSettings_farmSettingsPanel__E5_aB",
            farmSettingsPanelContent: "FarmSettings_farmSettingsPanelContent__S_6Fd",
            farmSettingsFieldTitle: "FarmSettings_farmSettingsFieldTitle__omNgL",
            guildRow: "FarmSettings_guildRow__S4deM",
            guildHandle: "FarmSettings_guildHandle__tgsnV",
            farmSettingsFieldDescription: "FarmSettings_farmSettingsFieldDescription__57UAc",
            farmSettingsInput: "FarmSettings_farmSettingsInput__2H0j4",
            farmSettingsEndedRow: "FarmSettings_farmSettingsEndedRow__Cd2YT",
            farmSettingsSpacedRow: "FarmSettings_farmSettingsSpacedRow__O4j61",
            farmSettingsTextButton: "FarmSettings_farmSettingsTextButton__uywII"
        }
    },
    57497: function(e) {
        e.exports = {
            "modal-box-container": "Store_modal-box-container__S2ExC",
            "modal-box-content": "Store_modal-box-content__qxHw9",
            buyTitle: "Store_buyTitle__MAQAe",
            contentDivider: "Store_contentDivider__wYet2",
            "coin-inventory-row": "Store_coin-inventory-row__rS4hV",
            currency: "Store_currency__ZMcj1",
            "coin-icon": "Store_coin-icon__pjJJq",
            tabBuySell: "Store_tabBuySell__TPRX5",
            active: "Store_active__gVQBv",
            sellButton: "Store_sellButton__F9vtc",
            buyButton: "Store_buyButton__59uQZ",
            "store-tabs-wrapper": "Store_store-tabs-wrapper__OfH4C",
            storeDialog: "Store_storeDialog__K3NJB",
            box: "Store_box__j6_U4",
            "store-item-container": "Store_store-item-container__yxJbY",
            "store-item-locked": "Store_store-item-locked__qlRKt",
            "lock-icon": "Store_lock-icon__mdumW",
            "card-footer": "Store_card-footer___FrG4",
            "item-quantity": "Store_item-quantity__cFhDE",
            "card-content-wrapper": "Store_card-content-wrapper__HQ06A",
            selected: "Store_selected__fgreQ",
            "store-locked": "Store_store-locked__qqkX5",
            "order-class-vip": "Store_order-class-vip__x6lUX",
            "order-class-landowner": "Store_order-class-landowner__pkYKB",
            "card-content": "Store_card-content__WhHqh",
            "card-title": "Store_card-title__InPpB",
            "card-img-wrapper": "Store_card-img-wrapper__hyk51",
            "card-tier": "Store_card-tier__KvnJ1",
            "card-img": "Store_card-img__Gyq_s",
            "item-price": "Store_item-price__aqw_Q",
            order: "Store_order__c9d4B",
            "card-header": "Store_card-header__FTHH8",
            "btn-max": "Store_btn-max__Vxg7c",
            "store-item-modal": "Store_store-item-modal__XDCfh",
            "store-dialog-content": "Store_store-dialog-content__LXk0y",
            "close-btn-wrapper": "Store_close-btn-wrapper__KjC_X",
            "store-item-modal-container": "Store_store-item-modal-container__mS8tW",
            "item-content": "Store_item-content__PFP6G",
            "item-img-wrapper": "Store_item-img-wrapper__ag58m",
            "item-tier": "Store_item-tier__Qfnpa",
            "item-img": "Store_item-img__kI_bE",
            "item-title": "Store_item-title__QnLB4",
            "item-metadata": "Store_item-metadata__m7XA6",
            "item-description": "Store_item-description__a_ErT",
            "item-utility": "Store_item-utility__xh0Tb",
            "item-discoverability": "Store_item-discoverability__4eQEn",
            "buy-section": "Store_buy-section__tPzEo",
            "buy-quantity": "Store_buy-quantity__G_oJh",
            quantityTitle: "Store_quantityTitle__zsJvP",
            "quanity-val": "Store_quanity-val__Ccv5i",
            "quantity-input": "Store_quantity-input__dNych",
            "btn-up": "Store_btn-up__cCAY0",
            "btn-down": "Store_btn-down__jvGAX",
            "arrow-up": "Store_arrow-up__rds5n",
            "arrow-down": "Store_arrow-down__Q7BH6",
            "buy-btn": "Store_buy-btn__gLsMk",
            "not-enough-coins": "Store_not-enough-coins__kGIXv",
            "store-tab": "Store_store-tab__jrf0Y",
            filter: "Store_filter__qtqd7",
            "sell-content-wrapper": "Store_sell-content-wrapper__MsAMm",
            "items-header": "Store_items-header__Kbpei",
            "items-content": "Store_items-content__FtMRE",
            "items-footer": "Store_items-footer__y5aPk",
            "no-items-info": "Store_no-items-info__w7h8p",
            "category-list-wrapper": "Store_category-list-wrapper__Kjb3_",
            "category-list": "Store_category-list__H7VBV",
            "category-name-wrapper": "Store_category-name-wrapper__FsVxq",
            "category-name": "Store_category-name__GooTT",
            "is-primary": "Store_is-primary__Z_04G",
            "is-dark": "Store_is-dark__Sm4FD",
            "category-content-wrapper": "Store_category-content-wrapper___AIFk",
            "category-content": "Store_category-content__WupRo",
            storeHeader: "Store_storeHeader__egPB5",
            "store-title": "Store_store-title__sJ_pw",
            "store-description": "Store_store-description__uKLZP",
            "exit-btn": "Store_exit-btn__ok6sJ",
            "store-sell-dialog-content": "Store_store-sell-dialog-content__7M91p",
            "item-subtitle": "Store_item-subtitle__6jSul",
            "sell-section": "Store_sell-section__gCrot",
            "sell-quantity": "Store_sell-quantity__rQW5g",
            "sell-btn": "Store_sell-btn__FZOyn",
            "no-sell-price": "Store_no-sell-price__SV5GA"
        }
    },
    51794: function(e) {
        e.exports = {
            container: "HelpDlg_container__f7vXp",
            flow: "HelpDlg_flow__fwCyg",
            section: "HelpDlg_section__nMPSV",
            flowlinks: "HelpDlg_flowlinks__piBWk"
        }
    },
    6: function(e) {
        e.exports = {
            modalframe: "ImagePopup_modalframe__0oxfp",
            modelessframe: "ImagePopup_modelessframe__iS20_",
            innerframe: "ImagePopup_innerframe__vjB4V",
            modalimage: "ImagePopup_modalimage__PZP7E",
            zoomimage: "ImagePopup_zoomimage__ow1Rj"
        }
    },
    98597: function(e) {
        e.exports = {
            container: "Infiniportal_container__pGroD",
            farmsList: "Infiniportal_farmsList__q1kDa",
            tabContent: "Infiniportal_tabContent__kDwtF",
            active: "Infiniportal_active__u3QWd",
            farmsListContainer: "Infiniportal_farmsListContainer__1a8Zu",
            farm: "Infiniportal_farm__jHyB0",
            manualInputContainer: "Infiniportal_manualInputContainer__sC8_t",
            joinButton: "Infiniportal_joinButton__8tR52",
            goButton: "Infiniportal_goButton__SA09N",
            featuredMapsWrapper: "Infiniportal_featuredMapsWrapper__gUfCT",
            featuredName: "Infiniportal_featuredName__QzziC",
            featuredDescription: "Infiniportal_featuredDescription__b9jIh",
            featuredSubtitle: "Infiniportal_featuredSubtitle__HjZBn",
            tabsContainer: "Infiniportal_tabsContainer__9D6ke",
            tabButtonsContainer: "Infiniportal_tabButtonsContainer__0_hT_",
            tabButton: "Infiniportal_tabButton__ngwmO"
        }
    },
    63491: function(e) {
        e.exports = {
            inventoryContainer: "InventoryWindow_inventoryContainer__kDLsJ",
            inventoryHeader: "InventoryWindow_inventoryHeader__ILZMh",
            backpack: "InventoryWindow_backpack__o9lPi",
            inventoryContent: "InventoryWindow_inventoryContent__Sl2au",
            closeBtn: "InventoryWindow_closeBtn__ioczI",
            tempStorage: "InventoryWindow_tempStorage__XEdnC",
            inventoryItemBackground: "InventoryWindow_inventoryItemBackground__gVH_0",
            empty: "InventoryWindow_empty__9DBQT",
            prev: "InventoryWindow_prev__zmxcA",
            next: "InventoryWindow_next__e3Fnc",
            storage: "InventoryWindow_storage__v2sZq",
            mapstorage: "InventoryWindow_mapstorage__pxISk",
            petstorage: "InventoryWindow_petstorage__hvLTT",
            disabled: "InventoryWindow_disabled___wmBw",
            trade: "InventoryWindow_trade__LPFO9",
            otherPlayerWrapper: "InventoryWindow_otherPlayerWrapper___UWv4",
            receiveCoins: "InventoryWindow_receiveCoins__hstP_",
            tradevalue: "InventoryWindow_tradevalue__08Ccj",
            selfPlayerWrapper: "InventoryWindow_selfPlayerWrapper__d1dYI",
            inventorySlotWrapper: "InventoryWindow_inventorySlotWrapper__gqhxP",
            character: "InventoryWindow_character__m3gHP",
            username: "InventoryWindow_username__jfMo1",
            tradeCoins: "InventoryWindow_tradeCoins__GW9iC",
            tradeSlotWrapper: "InventoryWindow_tradeSlotWrapper__eByzV",
            coinQuantity: "InventoryWindow_coinQuantity__5_jqX",
            tradeQuantity: "InventoryWindow_tradeQuantity__eK6Ic",
            tradeArrowLeft: "InventoryWindow_tradeArrowLeft__Vitmm",
            tradeArrowRight: "InventoryWindow_tradeArrowRight__5Y10E",
            agreeToTradeSlot: "InventoryWindow_agreeToTradeSlot__oGv2d",
            tradeButtons: "InventoryWindow_tradeButtons__Nf8Dd",
            confirmationBoxContainer: "InventoryWindow_confirmationBoxContainer__wGCdp",
            confirmationBox: "InventoryWindow_confirmationBox__WyNhm",
            confirmationBoxButtons: "InventoryWindow_confirmationBoxButtons__B1ts5",
            inventoryEmptyMsg: "InventoryWindow_inventoryEmptyMsg__P2Nlp",
            page: "InventoryWindow_page__e62w5",
            current: "InventoryWindow_current__HVao6",
            inventoryBox: "InventoryWindow_inventoryBox__in74A",
            unusableSlot: "InventoryWindow_unusableSlot__CNvyW",
            inventoryIdx: "InventoryWindow_inventoryIdx__Q4h_r",
            inventoryItem: "InventoryWindow_inventoryItem__z7YhV",
            activeRow: "InventoryWindow_activeRow__mloTV",
            itemQuantity: "InventoryWindow_itemQuantity__SNjQU",
            itemImage: "InventoryWindow_itemImage__0KLPV",
            itemTier: "InventoryWindow_itemTier__Adyf8",
            selected: "InventoryWindow_selected__FU0V1"
        }
    },
    51653: function(e) {
        e.exports = {
            container: "LandAndTravel_container__WCM6U",
            header: "LandAndTravel_header__irEHu",
            title: "LandAndTravel_title__6WrMk",
            buttonClose: "LandAndTravel_buttonClose__ccrJI",
            customHeader: "LandAndTravel_customHeader__goUPo",
            buttonCancelOption: "LandAndTravel_buttonCancelOption__brQ9g",
            tabs: "LandAndTravel_tabs__L8FHU",
            tab: "LandAndTravel_tab__LD39V",
            content: "LandAndTravel_content__b_dal",
            options: "LandAndTravel_options__CqxIb",
            option: "LandAndTravel_option__P_QSA",
            optionTitle: "LandAndTravel_optionTitle__hL8_4",
            optionPrice: "LandAndTravel_optionPrice__lSnW_",
            optionButtons: "LandAndTravel_optionButtons__5tDIJ",
            numberInput: "LandAndTravel_numberInput__Re9sf",
            mapsSquare: "LandAndTravel_mapsSquare__vG99V",
            stretchOption: "LandAndTravel_stretchOption___KhRt",
            subtitle: "LandAndTravel_subtitle__Uy4zk",
            description: "LandAndTravel_description__5uLmH",
            mapSquare: "LandAndTravel_mapSquare__LuVEh",
            removeBookmarkButton: "LandAndTravel_removeBookmarkButton__0dmfx",
            buttonTeleport: "LandAndTravel_buttonTeleport__Z6fS4",
            myLandRefresh: "LandAndTravel_myLandRefresh__99_ld"
        }
    },
    48239: function(e) {
        e.exports = {
            container: "MailBox_container__W9hXq",
            collectButton: "MailBox_collectButton__g6ERX",
            collectAllButton: "MailBox_collectAllButton__yi4P_",
            mailboxItemWrapper: "MailBox_mailboxItemWrapper__tcY_A",
            title: "MailBox_title__dGyJY",
            description: "MailBox_description__EpTNw",
            rewardText: "MailBox_rewardText__cl2gz"
        }
    },
    10448: function(e) {
        e.exports = {
            container: "Marketplace_container__nQQtb",
            content: "Marketplace_content__MWwNh",
            categories: "Marketplace_categories__c9VZC",
            category: "Marketplace_category__qStmo",
            right: "Marketplace_right__s_US4",
            filter: "Marketplace_filter__3ynr2",
            items: "Marketplace_items__Jw4De",
            item: "Marketplace_item__l__LM",
            itemTier: "Marketplace_itemTier__d_y0l",
            itemImage: "Marketplace_itemImage__n_Wal",
            itemName: "Marketplace_itemName__Recoz",
            viewListings: "Marketplace_viewListings__q_KfD",
            active: "Marketplace_active__KxmXe",
            buyContainer: "Marketplace_buyContainer__ruc_l",
            buyContent: "Marketplace_buyContent__rshYX",
            imageTierContainer: "Marketplace_imageTierContainer__9JiTw",
            props: "Marketplace_props__ZJx5j",
            prop: "Marketplace_prop__fTsfy",
            buttons: "Marketplace_buttons__Imxzy",
            button: "Marketplace_button__x_SGP",
            listings: "Marketplace_listings___IWt_",
            listing: "Marketplace_listing__zE8Bz",
            listingName: "Marketplace_listingName__4LEld",
            listingQuantity: "Marketplace_listingQuantity__S4ZQ6",
            listingPrice: "Marketplace_listingPrice__WQHOB",
            header: "Marketplace_header__OiH_T",
            remove: "Marketplace_remove__vDlE2",
            add: "Marketplace_add__G9bQG"
        }
    },
    49225: function(e) {
        e.exports = {
            container: "MarketplaceAddListing_container__54A37",
            hotlink: "MarketplaceAddListing_hotlink__Cp9YM",
            content: "MarketplaceAddListing_content__8o7Gx",
            item: "MarketplaceAddListing_item__U9_y3",
            image: "MarketplaceAddListing_image__OTPU8",
            tier: "MarketplaceAddListing_tier__jsdii",
            props: "MarketplaceAddListing_props__HTyzi",
            prop: "MarketplaceAddListing_prop__Aqxnc",
            listinginfo: "MarketplaceAddListing_listinginfo__PjDEl",
            currencyButton: "MarketplaceAddListing_currencyButton__yNbKa",
            buttons: "MarketplaceAddListing_buttons__wSc7Q",
            button: "MarketplaceAddListing_button__Mzvuz",
            active: "MarketplaceAddListing_active___afe8",
            listings: "MarketplaceAddListing_listings__RCDh9",
            listing: "MarketplaceAddListing_listing__M8hPl",
            listingName: "MarketplaceAddListing_listingName__SA7lX",
            listingQuantity: "MarketplaceAddListing_listingQuantity__yhL8t",
            listingPrice: "MarketplaceAddListing_listingPrice__afLvG",
            header: "MarketplaceAddListing_header__Q8oBD",
            remove: "MarketplaceAddListing_remove__0nkiZ",
            add: "MarketplaceAddListing_add__hyrWW"
        }
    },
    19689: function(e) {
        e.exports = {
            container: "MarketplaceItemListings_container__Ta40D",
            content: "MarketplaceItemListings_content__eeHjR",
            item: "MarketplaceItemListings_item__b7bZm",
            imageTierContainer: "MarketplaceItemListings_imageTierContainer__QbrET",
            itemTier: "MarketplaceItemListings_itemTier__Dl3eE",
            listings: "MarketplaceItemListings_listings__UGfIe",
            listing: "MarketplaceItemListings_listing__TyllF",
            buyListing: "MarketplaceItemListings_buyListing__jYwuF",
            active: "MarketplaceItemListings_active__4tFvM",
            current: "MarketplaceItemListings_current__NPRAo",
            amount: "MarketplaceItemListings_amount__IyJRp",
            buttons: "MarketplaceItemListings_buttons__LNftA",
            currencyButton: "MarketplaceItemListings_currencyButton__4Ec06",
            currencyBadge: "MarketplaceItemListings_currencyBadge__XsEz9",
            props: "MarketplaceItemListings_props__LIPKc",
            prop: "MarketplaceItemListings_prop__MnrKV"
        }
    },
    1056: function(e) {
        e.exports = {
            container: "MarketplaceListings_container__FnIzt",
            content: "MarketplaceListings_content__5AGlQ",
            listings: "MarketplaceListings_listings__ptYG9",
            listing: "MarketplaceListings_listing__WlDih",
            listingName: "MarketplaceListings_listingName__raM01",
            listingTier: "MarketplaceListings_listingTier__naUpY",
            itemName: "MarketplaceListings_itemName__cogpO",
            listingQuantity: "MarketplaceListings_listingQuantity__Me78U",
            listingPrice: "MarketplaceListings_listingPrice__FZ_hk",
            listingFee: "MarketplaceListings_listingFee__52FcV",
            header: "MarketplaceListings_header__bOU92",
            remove: "MarketplaceListings_remove__S19ox",
            active: "MarketplaceListings_active__VbhDY"
        }
    },
    17830: function(e) {
        e.exports = {
            "hover-cover": "NFTCard_hover-cover__mIyEq"
        }
    },
    69377: function(e) {
        e.exports = {
            dialog5: "GameDialog_dialog5__ZBFqO",
            content: "GameDialog_content__dE2Xj",
            messageBox: "GameDialog_messageBox___s2tN",
            message: "GameDialog_message__4kY4E",
            blowhard: "GameDialog_blowhard__b0jEk",
            avatar: "GameDialog_avatar__bPdln",
            avatarname: "GameDialog_avatarname__elhuJ",
            buttons: "GameDialog_buttons__AIhXL",
            back: "GameDialog_back__K4Jl4",
            skip: "GameDialog_skip__Y5RGE",
            showVerticalBackground: "GameDialog_showVerticalBackground__HmFLs"
        }
    },
    41745: function(e) {
        e.exports = {
            root: "Notifications_root__T0f32",
            background: "Notifications_background__SB4tT",
            "notification-animation-incoming": "Notifications_notification-animation-incoming__OLu1g",
            backgroundOutgoing: "Notifications_backgroundOutgoing__wJ47I",
            "notification-animation-outgoing": "Notifications_notification-animation-outgoing__9Ms7u",
            iconBackground: "Notifications_iconBackground__qJPdH",
            textContainer: "Notifications_textContainer__7WhG8",
            text: "Notifications_text__ak1FH",
            duplicatesContainer: "Notifications_duplicatesContainer__Pu5t_"
        }
    },
    48623: function(e) {
        e.exports = {
            overlayWindow: "overlay_overlayWindow__c8gaU",
            closeButton: "overlay_closeButton__D9f0h",
            scrollArea: "overlay_scrollArea__99yjI",
            username: "overlay_username__q_OHa"
        }
    },
    69997: function(e) {
        e.exports = {
            loading: "pets_loading__JSqCK",
            pet: "pets_pet__5TvtI",
            box: "pets_box__3GQyu",
            disabled: "pets_disabled__2FUPi",
            space: "pets_space__tCp5D",
            character: "pets_character___OFmt",
            land: "pets_land__BTcJW",
            water: "pets_water__eADiW",
            hatching: "pets_hatching__hDBLE",
            petpic: "pets_petpic__OA9Wk",
            walkoff: "pets_walkoff__EZv4H",
            logo: "pets_logo__u3dzX",
            stats: "pets_stats__v8lsv",
            stat: "pets_stat__BseFR",
            name: "pets_name__35nne",
            longname: "pets_longname__MP6o2",
            transitioning: "pets_transitioning__Bwln8",
            back: "pets_back__bLOBn",
            petwrap: "pets_petwrap__oXczE",
            cardsAndButton: "pets_cardsAndButton__A00vu",
            petlist: "pets_petlist__HPj2b",
            petposition: "pets_petposition__pqEe2",
            buttons: "pets_buttons__VvZmN",
            arrow: "pets_arrow__cF_zE",
            petbutton: "pets_petbutton__N8PzX",
            petdetails: "pets_petdetails__mQrWx",
            petview: "pets_petview__d7HBM",
            pettoprow: "pets_pettoprow__ib_Th",
            petbackground: "pets_petbackground__HCT__",
            petname: "pets_petname__Yfhbo",
            error: "pets_error__RKXXC",
            happiness: "pets_happiness__1HLjv",
            happinesslabel: "pets_happinesslabel__cEoLB",
            happinessbar: "pets_happinessbar__DO_CW",
            petstreaks: "pets_petstreaks__IUpYd",
            petstatus: "pets_petstatus__MRexU",
            inventorystatus: "pets_inventorystatus__ChKw8",
            inventory: "pets_inventory__SMWWE",
            buttonbar: "pets_buttonbar__JS7_N",
            traits: "pets_traits__p705v",
            petreveal: "pets_petreveal__WcmG_",
            fadeon: "pets_fadeon__T6F78",
            closeBtn: "pets_closeBtn__r3u3y",
            fadeono: "pets_fadeono__Xih2e",
            selectPet: "pets_selectPet__zMW0_",
            borderbackground: "pets_borderbackground__HWsnH",
            goldborder: "pets_goldborder__sgKVv",
            insetbackground: "pets_insetbackground___lZcc",
            preload: "pets_preload__x0K0W",
            petpicshadow: "pets_petpicshadow__yYMaA",
            walkon: "pets_walkon__swbio",
            petnamecontainer: "pets_petnamecontainer__cze78",
            zoomin: "pets_zoomin__qgA_I",
            petnameoutline: "pets_petnameoutline__FEl_l",
            goldbg: "pets_goldbg__IiFQe",
            dissolve: "pets_dissolve__XijYb",
            pixel: "pets_pixel__sc8BO",
            fade: "pets_fade__J_Co_"
        }
    },
    68787: function(e) {
        e.exports = {
            buttonbar: "profile_buttonbar__inyAQ",
            fillflex: "profile_fillflex___uSBQ",
            username: "profile_username__LRdwg",
            playerinfo: "profile_playerinfo__7vLtp",
            label: "profile_label__JtBD0",
            value: "profile_value__xnr2v",
            created: "profile_created__gvpSo",
            memberships: "profile_memberships__N840w",
            vipSub: "profile_vipSub__tbWRt",
            sub: "profile_sub__eM058",
            balances: "profile_balances__RbYmn",
            balanceentry: "profile_balanceentry__rzCl3",
            contextmenu: "profile_contextmenu__PtyDG",
            playerButtonsContainer: "profile_playerButtonsContainer__LNEnp"
        }
    },
    39621: function(e) {
        e.exports = {
            playersWindow: "Profile_playersWindow__oaElk",
            blurbg: "Profile_blurbg__VAn2q",
            closeButton: "Profile_closeButton__1n0Um",
            playericon: "Profile_playericon__3UX1y",
            nftimage: "Profile_nftimage__NE6Of",
            username: "Profile_username__3xvNe",
            tabs: "Profile_tabs__3ohNA",
            active: "Profile_active__ISoO3",
            tabarea: "Profile_tabarea__mvGbb",
            visible: "Profile_visible__EQAMc",
            seamframe: "Profile_seamframe__T3oZA",
            aboutframe: "Profile_aboutframe__sNHLv",
            skillsframe: "Profile_skillsframe__uNBs1",
            playerbuttons: "Profile_playerbuttons__pLbjB",
            vipindicator: "Profile_vipindicator___c8vd"
        }
    },
    82339: function(e) {
        e.exports = {
            window: "ReportWindow_window__OzzGM",
            input: "ReportWindow_input__SVdWK",
            buttonbar: "ReportWindow_buttonbar__2ZZ5I",
            send: "ReportWindow_send__UUttD",
            cancel: "ReportWindow_cancel__V3KqP",
            other: "ReportWindow_other__wAovr"
        }
    },
    16281: function(e) {
        e.exports = {
            container: "SettingsWindow_container__n49mI",
            box: "SettingsWindow_box__j8FBV",
            title: "SettingsWindow_title__IL8i1",
            setting: "SettingsWindow_setting__Rqjlp",
            name: "SettingsWindow_name__iA7xz",
            slider: "SettingsWindow_slider__sNczl"
        }
    },
    69520: function(e) {
        e.exports = {
            skillPopup: "Skills_skillPopup__WiCoX",
            skillContainer: "Skills_skillContainer__b6QuI",
            skillsPanel: "Skills_skillsPanel__mVV0r",
            skillSlot: "Skills_skillSlot__A6YVV",
            skillContent: "Skills_skillContent__Pin9G",
            skillBar: "Skills_skillBar__q6qA_",
            skillData: "Skills_skillData__TchNN",
            skillBaseBar: "Skills_skillBaseBar__g5Zqb",
            skillFilledBar: "Skills_skillFilledBar__Ry4WY",
            skillPoints: "Skills_skillPoints__xvU6j",
            numerator: "Skills_numerator__Srgda",
            denominator: "Skills_denominator__JSVAT",
            skillDivider: "Skills_skillDivider__0whMd"
        }
    },
    19116: function(e) {
        e.exports = {
            container: "TermsOfService_container__4O13w",
            content: "TermsOfService_content__77npS",
            buttons: "TermsOfService_buttons__Qyuvz"
        }
    },
    40436: function(e) {
        e.exports = {
            container: "Hud_container__0PwNm",
            top: "Hud_top__nZRRz",
            outside: "Hud_outside__zzIGQ",
            left: "Hud_left__mQoqW",
            topLeftBackground: "Hud_topLeftBackground__OhgQS",
            berry: "Hud_berry__6A2FS",
            pixelcoin: "Hud_pixelcoin__EUbKE",
            energy: "Hud_energy__67nU9",
            emptybar: "Hud_emptybar__O_4oe",
            filledbar: "Hud_filledbar__lT290",
            energytext: "Hud_energytext__3PQZQ",
            profile: "Hud_profile__gxMep",
            craftingDoneBadge: "Hud_craftingDoneBadge__F2_QV",
            right: "Hud_right__QJpt5",
            topRightBackground: "Hud_topRightBackground__z4cEZ",
            arrowLeft: "Hud_arrowLeft__cXlHj",
            arrowRight: "Hud_arrowRight__WSmTI",
            leftarrow: "Hud_leftarrow__dD5Wk",
            rightarrow: "Hud_rightarrow__bqtFY",
            quests: "Hud_quests__DaLW3",
            questcount: "Hud_questcount__MoHmh",
            mailbox: "Hud_mailbox__qj4Ou",
            mailBadge: "Hud_mailBadge__lK4OW",
            mailBadgePlus: "Hud_mailBadgePlus__HuwGe",
            bottom: "Hud_bottom__P9XWZ",
            itemMessageContainer: "Hud_itemMessageContainer__PHpRT",
            itemMessage: "Hud_itemMessage__L0LUm",
            itemImage: "Hud_itemImage__TNSfp",
            slidingGroup: "Hud_slidingGroup__ZaO10",
            leftButton: "Hud_leftButton__1fv1P",
            rightButton: "Hud_rightButton__4AX4I",
            chat: "Hud_chat__Cf_Ip",
            chatIndicator: "Hud_chatIndicator__2p2qc",
            attention: "Hud_attention__7KtP3",
            highlightItem: "Hud_highlightItem__tg_x_",
            topButton: "Hud_topButton__4Z5lK",
            expanded: "Hud_expanded__QJoAM",
            itemsTop: "Hud_itemsTop__cYzyR",
            itemsRest: "Hud_itemsRest___9h8b",
            itemClip: "Hud_itemClip__Ph5Xx",
            itemList: "Hud_itemList__PCP7A",
            item: "Hud_item__YGtIC",
            selected: "Hud_selected__k_eUw",
            tier: "Hud_tier__dxNOH",
            shortcut: "Hud_shortcut__UvE3h",
            quantity: "Hud_quantity__V_YWQ"
        }
    },
    51912: function(e) {
        e.exports = {
            uiContainer: "UIContainer_uiContainer__k_NnG",
            roundButton: "UIContainer_roundButton__1k5Q6",
            roomInfo: "UIContainer_roomInfo__RWXgy",
            infoButton: "UIContainer_infoButton__BXlXa",
            logoutButton: "UIContainer_logoutButton__Re_4x",
            homeButton: "UIContainer_homeButton__2zamy",
            changeNftButton: "UIContainer_changeNftButton__Vo54N"
        }
    },
    12362: function(e) {
        e.exports = {
            itemTooltip: "ItemStyles_itemTooltip__BFgNu",
            tooltipTitle: "ItemStyles_tooltipTitle____kIs",
            ttDescription: "ItemStyles_ttDescription__U1TxW",
            ttUtility: "ItemStyles_ttUtility__R8Z3_"
        }
    }
}]);
