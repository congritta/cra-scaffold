import React, {useState} from "react";
import Checkbox from "../../components/Checkbox/Checkbox";
import Radiobox from "../../components/Radiobox/Radiobox";
import Range from "../../components/Range/Range";
import Switch from "../../components/Switch/Switch";
import MenuFrom from "../../components/MenuFrom/MenuFrom";
import Icon from "../../components/Icon/Icon";
import Select from "../../components/Select/Select";
import Popup from "../../components/Popup/Popup";
import TextareaAutosize from "react-textarea-autosize";
import Loader from "../../components/Loader/Loader";

export default function IndexPage() {

  const [options, setOptions] = useState<[boolean, boolean]>([false, false]);
  const [radioBox, setRadioBox] = useState<0 | 1>(0);
  const [singleRange, setSingleRange] = useState(30);
  const [doubleRange, setDoubleRange] = useState<[number, number]>([30, 70]);
  const [aSwitch, setASwitch] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("january");
  const [isPopupShown, setIsPopupShown] = useState(false);

  // Render
  return (
    <div className="IndexPage">

      {/* Typography */}

      <h1>Heading 01</h1>
      <h2>Heading 02</h2>
      <h3>Heading 03</h3>
      <h4>Heading 04</h4>
      <h5>Heading 05</h5>
      <h6>Heading 06</h6>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem dolor esse explicabo fugiat, ipsam magni, maiores non nulla, obcaecati omnis quos repellat tempora! Cum dolorem necessitatibus non optio quas!
      </p>

      <ul>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
      </ul>

      <ol>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
      </ol>

      <div>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Link</a>
      </div>

      <hr />

      {/* Forms */}

      <h2>Form inputs</h2>
      <h3>Simple text inputs</h3>
      <form
        onSubmit={(e) => e.preventDefault()} style={{
          marginTop: 10
        }}
      >
        <div className="field-wrapper">
          <input type="text" placeholder="Some text here..." />
          <TextareaAutosize placeholder="Multiline text input..." />
        </div>
      </form>

      <h3>Text inputs with labels</h3>
      <form
        onSubmit={(e) => e.preventDefault()} style={{
          marginTop: 10
        }}
      >
        <div className="field-wrapper">
          <div className="field-wrapper">
            <div className="label">Input label 1</div>
            <input type="text" placeholder="Some text here..." />
          </div>
          <div className="field-wrapper">
            <div className="label">Input label 2</div>
            <input type="text" />
          </div>
        </div>
      </form>

      <h3>Checkboxes and radioboxes</h3>
      <form
        onSubmit={(e) => e.preventDefault()} style={{
          marginTop: 10
        }}
      >
        <div className="field-wrapper">

          <Checkbox
            isActive={options[0]}
            contents="Option 1"
            onTriggered={() => setOptions([!options[0], options[1]])}
          />
          <Checkbox
            isActive={options[1]}
            contents="Option 2"
            onTriggered={() => setOptions([options[0], !options[1]])}
          />
          <Radiobox isActive={radioBox === 0} contents="Radiobox 1" onTriggered={() => setRadioBox(0)} />
          <Radiobox isActive={radioBox === 1} contents="Radiobox 2" onTriggered={() => setRadioBox(1)} />
        </div>
      </form>

      <h3>Ranges</h3>
      <form
        onSubmit={(e) => e.preventDefault()} style={{
          marginTop: 10
        }}
      >
        <div className="field-wrapper">

          <div className="field-wrapper" style={{minWidth: 200}}>
            <div className="label">Single range ({singleRange.toFixed(2)})</div>

            <div className="field-wrapper">
              <Range
                min={0}
                max={100}
                step={0.01}
                onChange={([value]) => setSingleRange(value)}
                values={[singleRange]}
              />
            </div>
          </div>

          <div className="field-wrapper">
            <div className="label">Double range ({doubleRange[0].toFixed(2)}-{doubleRange[1].toFixed(2)})</div>

            <div className="field-wrapper">
              <Range
                min={0}
                max={100}
                step={0.01}
                onChange={([value1, value2]) => setDoubleRange([value1, value2])}
                values={doubleRange}
              />
            </div>
          </div>
        </div>
      </form>

      <h3>Switch</h3>
      <form
        onSubmit={(e) => e.preventDefault()} style={{
          marginTop: 10
        }}
      >
        <div className="field-wrapper">

          <Switch isActive={aSwitch} onTriggered={() => setASwitch(!aSwitch)} />
        </div>
      </form>

      <h3>Buttons</h3>
      <form
        onSubmit={(e) => e.preventDefault()} style={{
          marginTop: 10
        }}
      >
        <div className="field-wrapper">

          <button className="_auto-width">Regular button</button>
          <button className="_auto-width">
            <Icon icon="heart-filled" />
            <span>Iconed button</span>
          </button>
          <button className="_auto-width">
            <Icon icon="heart-filled" />
          </button>
          <button className="_auto-width" disabled={true}>Disabled button</button>
          <button className="_zeroed">Zeroed button</button>
        </div>
      </form>

      <hr />

      <h3>Menus</h3>
      <p>It`s possible to trigger menu from any element</p>

      <div
        className="flex _wrap" style={{
          marginTop: 10
        }}
      >
        <MenuFrom
          child={<div>Menu from div</div>} options={["Apples", "Pears", "Oranges"].map((option) => ({
            value: option.toLowerCase(),
            element: option
          }))}
        />
        <MenuFrom
          child={<button className="_auto-width">Menu from button</button>}
          options={[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "September",
            "October",
            "November",
            "December"
          ].map((option) => ({
            value: option.toLowerCase(),
            element: option
          }))}
        />
        <MenuFrom
          child={<button className="_auto-width">Custom options</button>} options={[
            {value: "a", element: <button className="_zeroed">Simple button</button>},
            {
              value: "b",
              element: <button className="_zeroed"><Icon icon="heart-filled" /><span>Iconed button</span></button>
            },
            {value: "c", element: <button className="_zeroed">Simple button</button>},
          ]}
        />
        <Select
          options={[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "September",
            "October",
            "November",
            "December"
          ].map((option) => ({
            value: option.toLowerCase(),
            element: option
          }))} value={selectedMonth} onTriggered={setSelectedMonth}
        />
      </div>

      {/* Popups */}
      <hr />
      <h3>Popups</h3>
      <button className="_auto-width" onClick={() => setIsPopupShown(true)}>Open popup</button>
      <Popup title="Sample title" isShown={isPopupShown} onClose={() => setIsPopupShown(false)}>
        <div className="rows __data-rows">
          <div className="row">
            <div>Property</div>
            <MenuFrom child={<div>Value</div>} options={[
              {value: "a", element: "a"},
              {value: "b", element: "b"},
              {value: "c", element: "c"},
              {value: "d", element: "d"},
            ]} />
          </div>
          <div className="row">
            <div>Property</div>
            <div>Value</div>
          </div>
        </div>

        <div className="rows">
          <div className="row">
            <div>Setting 1</div>
            <div><Switch isActive={options[0]} onTriggered={() => setOptions([!options[0], options[1]])} /></div>
          </div>
          <div className="row">
            <div>Setting 2</div>
            <div><Switch isActive={options[1]} onTriggered={() => setOptions([options[0], !options[1]])} /></div>
          </div>
          <div className="row">
            <div>Setting 3</div>
            <div><Switch isActive={!!radioBox} onTriggered={() => setRadioBox(radioBox ? 0 : 1)} /></div>
          </div>
        </div>
      </Popup>

      {/* Loaders */}
      <hr />
      <h3>Loaders</h3>

      <div
        className="flex _wrap" style={{
          marginTop: 10
        }}
      >
        <Loader color="#000" size={50} width={3} spinsPerSecond={3} />
        <Loader color="blue" size={100} width={10} spinsPerSecond={1 / 3} />
        <Loader color="green" size={70} width={5} spinsPerSecond={1} />
        <Loader color="red" size={30} width={5} spinsPerSecond={3} />
      </div>
    </div>
  );
}
