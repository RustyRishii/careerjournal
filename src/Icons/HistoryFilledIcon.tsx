import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function HistoryFilledIcon(props: React.JSX.IntrinsicAttributes & React.JSX.IntrinsicClassAttributes<Svg> & Pick<Readonly<SvgProps>, "filter" | "fill" | "pointerEvents" | "hitSlop" | "children" | "id" | "needsOffscreenAlphaCompositing" | "onLayout" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | "collapsable" | "collapsableChildren" | "onBlur" | "onFocus" | "renderToHardwareTextureAndroid" | "focusable" | "tabIndex" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-modal" | "role" | "accessibilityLabelledBy" | "aria-labelledby" | "accessibilityLiveRegion" | "aria-live" | "screenReaderFocusable" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "accessibilityShowsLargeContentViewer" | "accessibilityLargeContentTitle" | "accessibilityRespondsToUserInteraction" | "width" | "height" | "viewBox" | "color" | "title" | "opacity" | "fillOpacity" | "fillRule" | "stroke" | "strokeWidth" | "strokeOpacity" | "strokeDasharray" | "strokeDashoffset" | "strokeLinecap" | "strokeLinejoin" | "strokeMiterlimit" | "vectorEffect" | "clipRule" | "clipPath" | "translate" | "translateX" | "translateY" | "origin" | "originX" | "originY" | "scale" | "scaleX" | "scaleY" | "skew" | "skewX" | "skewY" | "rotation" | "x" | "y" | "transform" | "disabled" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "delayPressIn" | "delayPressOut" | "delayLongPress" | "marker" | "markerStart" | "markerMid" | "markerEnd" | "mask" | "font" | "fontStyle" | "fontVariant" | "fontWeight" | "fontStretch" | "fontSize" | "fontFamily" | "textAnchor" | "textDecoration" | "letterSpacing" | "wordSpacing" | "kerning" | "fontFeatureSettings" | "fontVariantLigatures" | "fontVariationSettings"> & { readonly preserveAspectRatio?: string | undefined } & {}) {
    return (
        <Svg
            // xmlns="http://www.w3.org/2000/svg"
            width={200}
            height={200}
            viewBox="0 0 24 24"
            {...props}
        >
            <Path
                fill="currentColor"
                d="M8 20q-.825 0-1.413-.588T6 18v-2q0-.425.288-.713T7 15h2v-2.25q-.875-.05-1.663-.388T5.9 11.35v-1.1H4.75l-2.4-2.4q-.425-.425-.425-.875t.425-.8q.725-.625 1.787-.95T6.4 4.9q.675 0 1.312.1T9 5.375V5q0-.425.288-.712T10 4h10q.425 0 .713.288T21 5v12q0 1.25-.875 2.125T18 20H8zm3-5h5q.425 0 .713.288T17 16v1q0 .425.288.713T18 18q.425 0 .713-.288T19 17V6h-8v.6l5.7 5.7q.175.175.238.325T17 13q0 .425-.288.713T16 14q-.225 0-.375-.063T15.3 13.7l-2.55-2.55-.2.2q-.35.35-.738.625T11 12.4V15zM5.6 8.25h2.3v2.15q.3.2.625.275t.675.075q.575 0 1.038-.175t.912-.625l.2-.2-1.4-1.4q-.725-.725-1.625-1.088T6.4 6.9q-.5 0-.95.075t-.9.225L5.6 8.25z"
            />
        </Svg>
    )
}

export default HistoryFilledIcon
