export const adminDashboard = {
  jumbotron: {
    topText: "Todo: Charts with performance review and feedback data",
    bottom: {
      show: true,
      text: "Todo: Assigned feedback that hasn't been completed within 30 days"
    }
  },
  table: {
    show: false,
    header: "Needs Attention",
    type: "review"
  },
  handleClick: () => {}
}

export const employeeDashboard = {
  jumbotron: {
    topText: "Todo: Charts with performance review and feedback data",
    bottom: {
      show: false,
      text: "No feedback currently assigned"
    }
  },
  table: {
    show: true,
    header: "Feedback Listing",
    type: "employee"
  }
}