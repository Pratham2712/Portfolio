import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { photoAnim } from '../Animation';

const Svg = () => {
	return (
		<Hide>
			<StyledSvg
				variants={photoAnim}
				initial="hidden"
				animate="show"
				width="611"
				height="730"
				viewBox="0 0 1111 530"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="code thinking 1" clip-path="url(#clip0)">
					<path
						id="Vector"
						d="M243.857 295.675C243.867 294.048 243.576 292.436 243.002 290.94C242.428 289.445 241.583 288.097 240.52 286.981C239.457 285.865 238.199 285.005 236.825 284.455C235.45 283.905 233.989 283.676 232.531 283.784C231.074 283.891 229.652 284.332 228.354 285.078C227.056 285.825 225.911 286.862 224.989 288.123C224.067 289.385 223.389 290.845 222.996 292.412C222.604 293.979 222.506 295.619 222.708 297.23L192.179 341.756C190.876 344.658 190.371 347.923 190.727 351.143C191.083 354.363 192.284 357.394 194.179 359.858L196.574 362.969L207.562 360.521L220.016 348.283L218.551 334.413L233.935 307.49L233.915 307.47C236.607 307.279 239.134 305.954 240.981 303.763C242.828 301.572 243.856 298.68 243.857 295.675Z"
						fill="#FFB9B9"
					/>
					<path
						id="Vector_2"
						d="M32.7377 513.356L27.7542 492.743L96.7713 461.528L104.126 491.95L32.7377 513.356Z"
						fill="#FFB8B8"
					/>
					<path
						id="foot"
						d="M16.0676 523.993L0 457.528L0.754818 457.302C6.91524 455.455 13.4821 456.409 19.0111 459.954C24.54 463.499 28.5782 469.345 30.2374 476.205L30.2378 476.207L40.0512 516.802L16.0676 523.993Z"
						fill="#2F2E41"
					/>
					<path
						id="Vector_3"
						d="M127.806 510.062L112.305 497.508L148.41 424.942L171.288 443.471L127.806 510.062Z"
						fill="#FFB8B8"
					/>
					<path
						id="Vector_4"
						d="M120.832 530L70.8488 489.517L71.3085 488.812C75.0609 483.066 80.7091 479.215 87.0107 478.107C93.3124 476.998 99.7513 478.723 104.911 482.901L104.913 482.902L135.441 507.628L120.832 530Z"
						fill="#2F2E41"
					/>
					<path
						id="Vector_5"
						d="M259.574 408.658L220.566 366.454C217.161 362.771 212.677 360.581 207.939 360.286C203.2 359.991 198.524 361.612 194.773 364.85L121.12 455.979L127.713 467.401L198.039 414.369L245.655 483.718L291.074 458.426L259.574 408.658Z"
						fill="#2F2E41"
					/>
					<path
						id="Vector_6"
						d="M242.725 417.633L214.155 415.185L193.465 409.599C192.296 407.568 190.599 405.983 188.599 405.057C186.599 404.131 184.393 403.907 182.276 404.415C180.16 404.924 178.233 406.141 176.754 407.903C175.275 409.664 174.314 411.887 174.001 414.274C173.688 416.661 174.037 419.097 175.001 421.256C175.965 423.416 177.499 425.196 179.396 426.358C181.294 427.52 183.465 428.009 185.619 427.759C187.773 427.509 189.807 426.532 191.449 424.959L191.446 424.975L203.9 430.686L257.376 451.083L263.97 445.372L242.725 417.633Z"
						fill="#FFB9B9"
					/>
					<path
						id="Vector_7"
						d="M311.586 505.748L295.47 517.17H276.423L187.783 480.455L58.1194 506.563L54.4567 475.559L173.132 417.633L277.156 455.979L311.586 505.748Z"
						fill="#2F2E41"
					/>
					<g id="head">
						<path
							id="Vector_8"
							d="M277.156 307.49C292.935 307.49 305.726 293.244 305.726 275.671C305.726 258.097 292.935 243.852 277.156 243.852C261.377 243.852 248.586 258.097 248.586 275.671C248.586 293.244 261.377 307.49 277.156 307.49Z"
							fill="#FFB9B9"
						/>
						<path
							id="Vector_9"
							d="M254.934 252.012L251.839 253.338C251.369 252.984 250.966 252.53 250.654 252.002C250.341 251.475 250.125 250.884 250.018 250.263C249.911 249.642 249.914 249.004 250.028 248.385C250.143 247.766 250.365 247.178 250.683 246.655C250.7 246.627 250.717 246.6 250.734 246.573L245.014 246.275C248.686 240.828 253.354 236.312 258.711 233.025C264.068 229.738 269.99 227.755 276.086 227.208C282.182 226.661 288.313 227.561 294.073 229.85C299.833 232.139 305.091 235.765 309.499 240.486C309.759 239.487 312.598 241.431 313.757 243.402C314.147 241.776 316.809 249.634 317.75 255.189C318.186 253.339 319.862 256.325 318.394 259.19C319.324 259.039 319.745 261.69 319.024 263.167C320.042 262.634 319.871 265.798 318.767 267.913C320.219 267.77 318.643 301.085 296.848 298.658C295.33 290.893 295.758 291.376 293.971 281.391C293.14 280.408 292.229 279.513 291.32 278.619L286.402 273.784C280.684 268.163 275.482 261.224 267.864 259.123C262.629 257.679 259.319 257.353 262.172 250.783C259.594 251.981 257.187 253.763 254.586 254.876C254.621 253.958 254.985 252.93 254.934 252.012Z"
							fill="#2F2E41"
						/>
						<path
							id="Vector_10"
							d="M291.441 285.053C294.273 285.053 296.569 282.496 296.569 279.342C296.569 276.188 294.273 273.631 291.441 273.631C288.609 273.631 286.313 276.188 286.313 279.342C286.313 282.496 288.609 285.053 291.441 285.053Z"
							fill="#FFB9B9"
						/>
					</g>
					<path
						id="Vector_11"
						d="M351.079 402.71C351.078 421.913 348.361 440.997 343.028 459.258L340.889 466.585L330.633 518.801L319.644 522.064L311.586 510.642L295.47 497.588L283.749 476.376L273.698 457.725L270.563 451.899L259.574 390.709L217.818 364.601L203.9 362.153L206.83 353.179L219.283 334.414L231.737 332.782L235.4 329.518L238.33 331.15L254.483 338.08L306.854 313.437L314.516 314.833L340.889 339.309C347.631 359.604 351.081 381.071 351.079 402.71Z"
						fill="#CCCCCC"
					/>
					<path
						id="Vector_12"
						opacity="0.1"
						d="M343.086 395.604L315.249 416.001L273.698 457.724L270.563 451.899L261.772 402.947H263.97L286.68 356.443L343.086 395.604Z"
						fill="black"
					/>
					<path
						id="Vector_13"
						d="M286.68 351.547L263.97 398.051L250.784 414.369L239.063 417.633L270.563 455.979L315.249 411.106L343.086 390.708L286.68 351.547Z"
						fill="#CCCCCC"
					/>
					<path
						id="Vector_14"
						d="M52.3062 144.458L50.7413 170.628L74.2392 172.371L75.8041 146.2L52.3062 144.458Z"
						fill="#E6E6E6"
					/>
					<path
						id="Vector_15"
						d="M37.1454 158.354L65.6786 160.47L63.7784 192.248L35.2452 190.132L37.1454 158.354ZM64.3554 161.76L38.3034 159.827L36.5684 188.842L62.6204 190.774L64.3554 161.76Z"
						fill="#CCCCCC"
					/>
					<path
						id="Vector_16"
						d="M185.097 66.8551L162.072 72.365L167.02 98.0079L190.044 92.498L185.097 66.8551Z"
						fill="#E6E6E6"
					/>
					<path
						id="Vector_17"
						d="M168.936 54.4347L174.944 85.5724L146.985 92.263L140.978 61.1253L168.936 54.4347ZM173.467 84.5095L167.982 56.0794L142.455 62.1882L147.94 90.6183L173.467 84.5095Z"
						fill="#CCCCCC"
					/>
					<path
						id="Vector_18"
						d="M160.904 190.001L143.716 207.931L159.815 227.074L177.003 209.144L160.904 190.001Z"
						fill="#E6E6E6"
					/>
					<path
						id="Vector_19"
						d="M178.239 187.319L157.368 209.091L137.819 185.847L158.69 164.075L178.239 187.319ZM157.425 207.134L176.481 187.255L158.632 166.032L139.576 185.911L157.425 207.134Z"
						fill="#CCCCCC"
					/>
					<path
						id="Vector_20"
						d="M1049.75 0H352.969C350.451 -3.1877e-06 347.957 0.552469 345.63 1.62587C343.303 2.69927 341.189 4.27258 339.408 6.25597C337.627 8.23937 336.215 10.594 335.251 13.1854C334.287 15.7769 333.791 18.5543 333.791 21.3593V453.742C333.791 456.547 334.287 459.325 335.251 461.916C336.215 464.508 337.627 466.862 339.408 468.846C341.189 470.829 343.303 472.403 345.63 473.476C347.957 474.549 350.451 475.102 352.969 475.102H1049.75C1054.83 475.102 1059.71 472.851 1063.31 468.846C1066.91 464.84 1068.93 459.407 1068.93 453.742V21.3593C1068.93 15.6944 1066.91 10.2616 1063.31 6.25599C1059.71 2.25035 1054.83 3.21893e-06 1049.75 0Z"
						fill="#3F3D56"
					/>
					<path id="Vector_21" d="M1043.21 37.7478H359.503V467.292H1043.21V37.7478Z" fill="white" />
					<path
						id="Vector_22"
						d="M700.774 26.033C704.647 26.033 707.786 22.5364 707.786 18.2231C707.786 13.9098 704.647 10.4132 700.774 10.4132C696.901 10.4132 693.761 13.9098 693.761 18.2231C693.761 22.5364 696.901 26.033 700.774 26.033Z"
						fill="white"
					/>
					<path id="Vector_23" d="M847.684 467.293H359.503V37.7485L847.684 467.293Z" fill="#F2F2F2" />
					<path
						id="circle"
						d="M480.72 399.389C517.017 399.389 546.441 366.619 546.441 326.194C546.441 285.77 517.017 253 480.72 253C444.424 253 415 285.77 415 326.194C415 366.619 444.424 399.389 480.72 399.389Z"
						fill="#00B0FF"
					/>
					<path
						id="Vector_24"
						d="M481.113 416.967C464.945 416.967 449.139 411.628 435.696 401.623C422.252 391.619 411.774 377.399 405.587 360.763C399.399 344.126 397.78 325.82 400.935 308.158C404.089 290.497 411.875 274.274 423.308 261.541C434.741 248.808 449.307 240.137 465.165 236.624C481.023 233.11 497.46 234.913 512.398 241.805C527.336 248.696 540.103 260.365 549.086 275.338C558.069 290.31 562.863 307.913 562.863 325.921C562.863 337.877 560.749 349.717 556.64 360.763C552.532 371.809 546.51 381.846 538.919 390.3C531.328 398.755 522.316 405.461 512.398 410.037C502.479 414.612 491.849 416.967 481.113 416.967ZM481.113 236.064C465.156 236.064 449.557 241.334 436.289 251.208C423.021 261.081 412.68 275.115 406.574 291.534C400.467 307.953 398.869 326.02 401.983 343.451C405.096 360.881 412.78 376.892 424.063 389.459C435.347 402.025 449.723 410.583 465.373 414.051C481.024 417.518 497.246 415.738 511.989 408.937C526.731 402.136 539.332 390.619 548.197 375.842C557.063 361.066 561.795 343.693 561.795 325.921C561.795 314.121 559.708 302.436 555.653 291.534C551.598 280.632 545.656 270.727 538.164 262.383C530.672 254.039 521.777 247.42 511.989 242.904C502.2 238.388 491.709 236.064 481.113 236.064L481.113 236.064Z"
						fill="#3F3D56"
					/>
					<path id="Vector_25" d="M884.937 260.909H821.071V275.771H884.937V260.909Z" fill="#3F3D56" />
					<path id="Vector_26" d="M945.36 180.388H760.647V186.758H945.36V180.388Z" fill="#3F3D56" />
					<path id="Vector_27" d="M945.36 205.414H760.647V211.784H945.36V205.414Z" fill="#3F3D56" />
					<path id="Vector_28" d="M945.36 230.44H760.647V236.81H945.36V230.44Z" fill="#3F3D56" />
					<path id="box" d="M994.841 63.4542H968.151V93.1798H994.841V63.4542Z" fill="#FF29F6" />
					<path
						id="Vector_29"
						d="M1007.23 106.981H974.823V70.8856H1007.23V106.981ZM976.232 105.412H1005.82V72.455H976.232L976.232 105.412Z"
						fill="#CCCCCC"
					/>
					<path
						id="Vector_30"
						d="M1088.12 459.482H1021.4V454.128C1021.4 453.988 1021.37 453.85 1021.32 453.722C1021.28 453.593 1021.21 453.476 1021.12 453.377C1021.03 453.279 1020.92 453.2 1020.81 453.147C1020.69 453.094 1020.57 453.066 1020.44 453.066H997.566C997.441 453.066 997.317 453.094 997.201 453.147C997.086 453.2 996.981 453.279 996.892 453.377C996.804 453.476 996.733 453.593 996.685 453.722C996.638 453.85 996.613 453.988 996.613 454.128V459.482H982.315V454.128C982.315 453.988 982.29 453.85 982.242 453.722C982.194 453.593 982.124 453.476 982.036 453.377C981.947 453.279 981.842 453.2 981.726 453.147C981.611 453.094 981.487 453.066 981.361 453.066H958.484C958.359 453.066 958.235 453.094 958.119 453.147C958.004 453.2 957.899 453.279 957.81 453.377C957.722 453.476 957.651 453.593 957.603 453.722C957.556 453.85 957.531 453.988 957.531 454.128V459.482H943.233V454.128C943.233 453.988 943.208 453.85 943.16 453.722C943.112 453.593 943.042 453.476 942.953 453.377C942.865 453.279 942.76 453.2 942.644 453.147C942.529 453.094 942.405 453.066 942.279 453.066H919.402C919.277 453.066 919.153 453.094 919.037 453.147C918.921 453.2 918.816 453.279 918.728 453.377C918.639 453.476 918.569 453.593 918.521 453.722C918.473 453.85 918.449 453.988 918.449 454.128V459.482H904.15V454.128C904.15 453.988 904.126 453.85 904.078 453.722C904.03 453.593 903.96 453.476 903.871 453.377C903.783 453.279 903.678 453.2 903.562 453.147C903.446 453.094 903.322 453.066 903.197 453.066H880.32C880.195 453.066 880.071 453.094 879.955 453.147C879.839 453.2 879.734 453.279 879.646 453.377C879.557 453.476 879.487 453.593 879.439 453.722C879.391 453.85 879.367 453.988 879.367 454.128V459.482H865.068V454.128C865.068 453.988 865.044 453.85 864.996 453.722C864.948 453.593 864.878 453.476 864.789 453.377C864.701 453.279 864.595 453.2 864.48 453.147C864.364 453.094 864.24 453.066 864.115 453.066H841.238C841.112 453.066 840.988 453.094 840.873 453.147C840.757 453.2 840.652 453.279 840.564 453.377C840.475 453.476 840.405 453.593 840.357 453.722C840.309 453.85 840.284 453.988 840.284 454.128V459.482H825.986V454.128C825.986 453.988 825.961 453.85 825.914 453.722C825.866 453.593 825.795 453.476 825.707 453.377C825.618 453.279 825.513 453.2 825.398 453.147C825.282 453.094 825.158 453.066 825.033 453.066H802.155C802.03 453.066 801.906 453.094 801.791 453.147C801.675 453.2 801.57 453.279 801.481 453.377C801.393 453.476 801.323 453.593 801.275 453.722C801.227 453.85 801.202 453.988 801.202 454.128V459.482H786.904V454.128C786.904 453.988 786.879 453.85 786.831 453.722C786.783 453.593 786.713 453.476 786.625 453.377C786.536 453.279 786.431 453.2 786.315 453.147C786.2 453.094 786.076 453.066 785.951 453.066H606.745C606.619 453.066 606.495 453.094 606.38 453.147C606.264 453.2 606.159 453.279 606.071 453.377C605.982 453.476 605.912 453.593 605.864 453.722C605.816 453.85 605.791 453.988 605.791 454.128V459.482H591.493V454.128C591.493 453.988 591.468 453.85 591.42 453.722C591.373 453.593 591.302 453.476 591.214 453.377C591.125 453.279 591.02 453.2 590.905 453.147C590.789 453.094 590.665 453.066 590.54 453.066H567.662C567.537 453.066 567.413 453.094 567.298 453.147C567.182 453.2 567.077 453.279 566.988 453.377C566.9 453.476 566.83 453.593 566.782 453.722C566.734 453.85 566.709 453.988 566.709 454.128V459.482H552.411V454.128C552.411 453.988 552.386 453.85 552.338 453.722C552.29 453.593 552.22 453.476 552.132 453.377C552.043 453.279 551.938 453.2 551.822 453.147C551.707 453.094 551.583 453.066 551.458 453.066H528.58C528.455 453.066 528.331 453.094 528.215 453.147C528.1 453.2 527.995 453.279 527.906 453.377C527.818 453.476 527.747 453.593 527.7 453.722C527.652 453.85 527.627 453.988 527.627 454.128V459.482H513.329V454.128C513.329 453.988 513.304 453.85 513.256 453.722C513.208 453.593 513.138 453.476 513.049 453.377C512.961 453.279 512.856 453.2 512.74 453.147C512.625 453.094 512.501 453.066 512.375 453.066H489.498C489.373 453.066 489.249 453.094 489.133 453.147C489.018 453.2 488.913 453.279 488.824 453.377C488.735 453.476 488.665 453.593 488.617 453.722C488.569 453.85 488.545 453.988 488.545 454.128V459.482H474.247V454.128C474.247 453.988 474.222 453.85 474.174 453.722C474.126 453.593 474.056 453.476 473.967 453.377C473.879 453.279 473.774 453.2 473.658 453.147C473.542 453.094 473.418 453.066 473.293 453.066H450.416C450.291 453.066 450.167 453.094 450.051 453.147C449.935 453.2 449.83 453.279 449.742 453.377C449.653 453.476 449.583 453.593 449.535 453.722C449.487 453.85 449.463 453.988 449.463 454.128V459.482H435.164V454.128C435.164 453.988 435.14 453.85 435.092 453.722C435.044 453.593 434.974 453.476 434.885 453.377C434.797 453.279 434.692 453.2 434.576 453.147C434.46 453.094 434.336 453.066 434.211 453.066H411.334C411.081 453.066 410.838 453.178 410.66 453.377C410.481 453.576 410.38 453.846 410.38 454.128V459.482H396.082V454.128C396.082 453.988 396.057 453.85 396.01 453.722C395.962 453.593 395.891 453.476 395.803 453.377C395.714 453.279 395.609 453.2 395.494 453.147C395.378 453.094 395.254 453.066 395.129 453.066H372.252C371.999 453.066 371.756 453.178 371.578 453.377C371.399 453.576 371.298 453.846 371.298 454.128V459.482H327.45C321.382 459.482 315.564 462.167 311.273 466.945C306.983 471.723 304.573 478.204 304.573 484.961V496.482C304.573 503.24 306.983 509.72 311.273 514.499C315.564 519.277 321.383 521.961 327.45 521.961H1088.12C1094.19 521.961 1100.01 519.277 1104.3 514.499C1108.59 509.72 1111 503.24 1111 496.482V484.961C1111 481.615 1110.41 478.302 1109.26 475.211C1108.11 472.12 1106.42 469.311 1104.3 466.945C1102.17 464.579 1099.65 462.702 1096.88 461.422C1094.1 460.141 1091.13 459.482 1088.12 459.482Z"
						fill="#3F3D56"
					/>
				</g>
				<defs>
					<clipPath id="clip0">
						<rect width="1111" height="530" fill="white" />
					</clipPath>
				</defs>
			</StyledSvg>
		</Hide>
	);
};

const StyledSvg = styled(motion.svg)`
     flex: 1;
	 

	@media (max-width: 1000px) {
		
		/* position: absolute;
        top: -79px;
		z-index: -1;
		max-width: 100%;
		opacity: 0.3;
		padding: 2rem 4rem; */
		/* width: 100%;
		height: 50vh; */
		
	width: 575px;
    height: 298px;
	
	}

	@media (max-width: 600px){
       width: 480px;
    height: 442px;
	width: 324px;
    height: 191px;
	}

    #head {
	transform-origin: center;
	transform-box: fill-box;
	animation: head-anim 2s infinite alternate;
}
#foot {
	transform-origin: center;
	transform-box: fill-box;
	animation: foot-anim 2s infinite alternate;
}
#circle {
	transform-origin: center;
	transform-box: fill-box;
	animation: circle-anim 4s infinite linear;
}

@keyframes head-anim {
	from {
		transform: rotateZ(0deg);
	}
	to {
		transform: rotateZ(23deg);
	}
}
@keyframes foot-anim {
	from {
		transform: rotateZ(0deg);
	}
	to {
		transform: rotateZ(23deg);
	}
}
@keyframes circle-anim {
	from {
		transform: rotateZ(0deg);
	}
	to {
		transform: rotateZ(360deg);
	}
}
`;

const Hide = styled.div`overflow: hidden;`;

export default Svg;