import classNames from "classnames";
import { observer } from "mobx-react";
import PropTypes from "prop-types";
import React from "react";
import { withTranslation } from "react-i18next";
import { withTheme } from "styled-components";
import Icon, { StyledIcon } from "../../../Icon.jsx";
import Styles from "./help-panel.scss";
import Spacing from "../../../../Styled/Spacing";
import Text from "../../../../Styled/Text";
import Box from "../../../../Styled/Box";
import HelpPanelItem from "./HelpPanelItem";
import { RawButton } from "../../../../Styled/Button.jsx";

@observer
class HelpPanel extends React.Component {
  static displayName = "HelpPanel";

  static propTypes = {
    terria: PropTypes.object.isRequired,
    viewState: PropTypes.object.isRequired,
    theme: PropTypes.object,
    t: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    // const { t } = this.props;
    const isVisible =
      this.props.viewState.showHelpMenu &&
      this.props.viewState.topElement === "HelpPanel";
    const isExpanded = this.props.viewState.helpPanelExpanded;
    const className = classNames(
      {
        [Styles.helpPanel]: true,
        [Styles.isVisible]: isVisible && !isExpanded,
        [Styles.isHidden]: !isVisible,
        [Styles.helpPanelShifted]: isVisible && isExpanded
      },
      this.props.viewState.topElement === "HelpPanel" ? "top-element" : ""
    );
    return (
      <div
        className={className}
        onClick={() => this.props.viewState.setTopElement("HelpPanel")}
      >
        <div
          css={`
            button {
              padding: 15px;
              position: absolute;
              right: 0;
              z-index: 110;
            }
          `}
        >
          <RawButton onClick={() => this.props.viewState.hideHelpPanel()}>
            <StyledIcon
              styledWidth={"16px"}
              fillColor={this.props.theme.textDark}
              opacity={"0.5"}
              glyph={Icon.GLYPHS.closeLight}
            />
          </RawButton>
        </div>
        <Box
          centered
          paddedHorizontally={5}
          paddedVertically={17}
          displayInlineBlock
          css={`
            direction: ltr;
            min-width: 295px;
            padding-bottom: 0px;
          `}
        >
          <Text extraBold heading textDark>
            We&apos;re here to help
          </Text>
          <Spacing bottom={4} />
          <Text medium textDark>
            Find useful tips on how to use the Digital Twin either by checking
            the video guides below or by contacting the team at{" "}
            <span className={Styles.link}>info@terria.io</span>.
          </Text>
          <Spacing bottom={5} />
          <Box centered>
            <button
              className={Styles.tourBtn}
              title={"Take the tour"}
              onClick={() => this.props.viewState.setTourIndex(0)}
            >
              {" "}
              <Icon glyph={Icon.GLYPHS.tour} /> {"Take the tour"}{" "}
            </button>
          </Box>
        </Box>
        <Spacing bottom={10} />
        <Box centered displayInlineBlock>
          <Box displayInlineBlock>
            <HelpPanelItem
              terria={this.props.terria}
              viewState={this.props.viewState}
              iconElement={Icon.GLYPHS.start}
              title={"Getting started with the Digital Twin"}
              itemString={"getstarted"}
              description={[
                "If you’re new to the NSW Spatial Digital Twin, this video provides a short explanation of how to use some of the basic functions, so you can feel like a pro in no time!",
                "We cover:",
                <span key={2}>
                  • Signing in to the{" "}
                  <a href="https://portal.spatial.nsw.gov.au/portal/apps/sites/#/home">
                    NSW Spatial Collaboration Portal
                  </a>
                </span>,
                "• Finding a location",
                "• Exploring public data in the catalogue and adding it to the Digital Twin",
                "• Workbench controls",
                "• Removing data"
              ]}
              videoLink={"https://www.youtube.com/embed/lQE5E1O7VTs"}
              background={
                "https://img.youtube.com/vi/lQE5E1O7VTs/maxresdefault.jpg"
              }
            />
            <HelpPanelItem
              terria={this.props.terria}
              viewState={this.props.viewState}
              iconElement={Icon.GLYPHS.cube}
              title={"Navigating 3D data"}
              // ! If removing this item, update GyroscopeGuidance to point to a new panel !
              // until we plug-and-play HelpPanel content, this failsafe-comment will have to do.
              itemString={"navigation"}
              description={[
                "One of the key features of the NSW Spatial Digital Twin is the ability to add and view 3D data, including 3D imagery, or photo reality mesh. This is an interactive way to explore high resolution, 3D aerial imagery of some areas of NSW.",
                "In this video, we’ll show you how to add 3D data to the Digital Twin, and then use the navigation controls to view it in 3D."
              ]}
              videoLink={"https://www.youtube.com/embed/elmKyBFecjk"}
              background={
                "https://img.youtube.com/vi/elmKyBFecjk/maxresdefault.jpg"
              }
            />
            <HelpPanelItem
              terria={this.props.terria}
              viewState={this.props.viewState}
              iconElement={Icon.GLYPHS.splitterOff}
              title={"Compare changes across a location"}
              itemString={"splitscreen"}
              description={[
                "Using the NSW Spatial Digital Twin, you can also compare a dataset at different points in time. This can help you to easily visualise and analyse the difference between an a place at two different points in time.",
                "In this video, we’ll show you how to use the ‘Compare’ functionality to view changes across a dataset, using our split screen functionality. We use the visual example of satellite imagery around Penrith before and during the NSW 2019 bushfires, showing the smoke haze."
              ]}
              videoLink={"https://www.youtube.com/embed/khoRe7X5AWA"}
              background={
                "https://img.youtube.com/vi/khoRe7X5AWA/maxresdefault.jpg"
              }
            />
            <HelpPanelItem
              terria={this.props.terria}
              viewState={this.props.viewState}
              iconElement={Icon.GLYPHS.datePicker}
              title={"Interacting with time-series data"}
              itemString={"timeseries"}
              description={[
                "Another key feature of the NSW Spatial Digital Twin is the ability to explore the fourth dimension of a dataset, time. For datasets that have a 4D attribute available, you can use the Digital Twin to navigate backwards and forwards in time and see how the data and landscape changes.",
                "In this video, we’ll show you how to use the 4D time-series controls using the Digital Twin."
              ]}
              videoLink={"https://www.youtube.com/embed/Co5Fy1uhkb8"}
              background={
                "https://img.youtube.com/vi/Co5Fy1uhkb8/maxresdefault.jpg"
              }
            />
            <HelpPanelItem
              terria={this.props.terria}
              viewState={this.props.viewState}
              iconElement={Icon.GLYPHS.layers}
              title={"Swiping away underground datasets"}
              itemString={"underground"}
              description={[
                "The NSW Spatial Digital Twin will allow you to ‘swipe away’ the terrain to view underground assets, such as water mains or sewer pipes’, in relation to the landscape around it.",
                "In this video, we’ll show you how to use the split screen feature and map settings to see below ground, in relation to the environment around it."
              ]}
              videoLink={"https://www.youtube.com/embed/YK_cKZL6kWI"}
              background={
                "https://img.youtube.com/vi/YK_cKZL6kWI/maxresdefault.jpg"
              }
            />
          </Box>
        </Box>
      </div>
    );
  }
}

export default withTranslation()(withTheme(HelpPanel));
