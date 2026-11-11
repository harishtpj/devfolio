use leptos::{html, prelude::*};
use wasm_bindgen::{JsCast, JsValue, closure::Closure};
use web_sys::{IntersectionObserver, IntersectionObserverEntry, IntersectionObserverInit};

#[component]
pub fn ScrollAnimate(
    children: Children,
    #[prop(default = 0)] delay: u32,
    #[prop(default = "up")] direction: &'static str,
) -> impl IntoView {
    let node = NodeRef::<html::Div>::new();
    let (visible, set_visible) = signal(false);

    Effect::new(move |_| {
        let Some(element) = node.get() else {
            return;
        };

        let callback = Closure::wrap(Box::new(
            move |entries: js_sys::Array, _observer: IntersectionObserver| {
                if entries
                    .iter()
                    .next()
                    .and_then(|entry| entry.dyn_into::<IntersectionObserverEntry>().ok())
                    .is_some_and(|entry| entry.is_intersecting())
                {
                    set_visible.set(true);
                }
            },
        )
            as Box<dyn FnMut(js_sys::Array, IntersectionObserver)>);

        let options = IntersectionObserverInit::new();
        options.set_threshold(&JsValue::from_f64(0.1));
        let Ok(observer) =
            IntersectionObserver::new_with_options(callback.as_ref().unchecked_ref(), &options)
        else {
            return;
        };

        observer.observe(&element);
        let _ = StoredValue::new_local((observer, callback));
    });

    let hidden_position = match direction {
        "down" => "-translate-y-8",
        "left" => "translate-x-8",
        "right" => "-translate-x-8",
        "none" => "",
        _ => "translate-y-8",
    };

    view! {
        <div
            node_ref=node
            class=move || {
                if visible.get() {
                    "transition-all duration-700 ease-out opacity-100 translate-x-0 translate-y-0"
                        .to_string()
                } else {
                    format!("transition-all duration-700 ease-out opacity-0 {hidden_position}")
                }
            }
            style=format!("transition-delay: {delay}ms")
        >
            {children()}
        </div>
    }
}
