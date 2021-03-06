/*
 * Copyright 2020 LABOR.digital
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Last modified: 2020.04.24 at 16:45
 */

import {withKnobs} from "@storybook/addon-knobs";
import Home from "../src/App/Home";

// Global configuration of your component
export default {
	title: "Home",
	component: Home,
	decorators: [withKnobs]
};

// Create the stories
export const Default = () => {
	return ({
		components: {Home},
		template: "<home></home>",
		props: {}
	});
};